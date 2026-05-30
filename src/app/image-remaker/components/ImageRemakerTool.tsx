'use client'

import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from 'react'

type RemakerDimensions = {
  width: number
  height: number
}

const TARGETS = [100, 200, 500, 1024, 2048]
const MODES = [
  { label: 'Increase KB', scale: 1.4, quality: 0.92 },
  { label: 'AI-style Upscale', scale: 2, quality: 0.94 },
  { label: 'Screenshot Enhancer', scale: 1.6, quality: 0.96 },
]

function formatBytes(bytes: number) {
  if (!bytes) return '0 KB'
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function formatDimensions(dimensions: RemakerDimensions | null) {
  if (!dimensions) return '-'
  return `${dimensions.width} x ${dimensions.height}`
}

function outputName(file: File) {
  const base = file.name.replace(/\.[^.]+$/, '') || 'image'
  return `${base}-remade.jpg`
}

function readImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = url
  })
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('Could not create image output.'))
    }, 'image/jpeg', quality)
  })
}

export default function ImageRemakerTool() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [originalUrl, setOriginalUrl] = useState('')
  const [remadeUrl, setRemadeUrl] = useState('')
  const [remadeFile, setRemadeFile] = useState<File | null>(null)
  const [originalDimensions, setOriginalDimensions] = useState<RemakerDimensions | null>(null)
  const [remadeDimensions, setRemadeDimensions] = useState<RemakerDimensions | null>(null)
  const [targetKb, setTargetKb] = useState(500)
  const [modeIndex, setModeIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  const selectedMode = MODES[modeIndex]

  const beforeAfterLabel = useMemo(() => {
    if (!file || !remadeFile) return null
    return `${formatBytes(file.size)} to ${formatBytes(remadeFile.size)}`
  }, [file, remadeFile])

  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl)
      if (remadeUrl) URL.revokeObjectURL(remadeUrl)
    }
  }, [originalUrl, remadeUrl])

  async function setSelectedFile(selected: File | null) {
    setError('')
    setRemadeFile(null)
    setRemadeDimensions(null)
    if (remadeUrl) URL.revokeObjectURL(remadeUrl)
    setRemadeUrl('')
    if (originalUrl) URL.revokeObjectURL(originalUrl)
    setOriginalUrl('')
    setOriginalDimensions(null)

    if (!selected) {
      setFile(null)
      return
    }

    if (!selected.type.startsWith('image/')) {
      setFile(null)
      setError('Please upload an image file.')
      return
    }

    const url = URL.createObjectURL(selected)
    setFile(selected)
    setOriginalUrl(url)

    try {
      const image = await readImage(url)
      setOriginalDimensions({ width: image.naturalWidth, height: image.naturalHeight })
    } catch {
      setError('Could not read this image.')
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFile(event.target.files?.[0] ?? null)
  }

  function handleDragOver(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDragging(true)
  }

  function handleDragLeave() {
    setIsDragging(false)
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDragging(false)
    setSelectedFile(event.dataTransfer.files?.[0] ?? null)
  }

  async function remakeImage() {
    if (!file || !originalUrl) {
      setError('Upload an image first.')
      return
    }

    setIsProcessing(true)
    setError('')
    if (remadeUrl) URL.revokeObjectURL(remadeUrl)
    setRemadeUrl('')
    setRemadeFile(null)
    setRemadeDimensions(null)

    try {
      const image = await readImage(originalUrl)
      const canvas = document.createElement('canvas')
      const scale = selectedMode.scale
      canvas.width = Math.round(image.naturalWidth * scale)
      canvas.height = Math.round(image.naturalHeight * scale)

      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Canvas is not available.')
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

      let quality = selectedMode.quality
      let blob = await canvasToBlob(canvas, quality)
      const targetBytes = targetKb * 1024

      while (blob.size > targetBytes && quality > 0.55) {
        quality -= 0.06
        blob = await canvasToBlob(canvas, quality)
      }

      const nextFile = new File([blob], outputName(file), { type: 'image/jpeg' })
      const nextUrl = URL.createObjectURL(nextFile)
      setRemadeFile(nextFile)
      setRemadeUrl(nextUrl)
      setRemadeDimensions({ width: canvas.width, height: canvas.height })
    } catch (err) {
      console.error('Image remaker failed', err)
      setError('Image remaking failed. Try another image or a smaller target.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section className="image-remaker-shell">
      <div className="image-remaker-layout">
        <div className="image-remaker-controls">
          <label
            className={`image-remaker-upload ${isDragging ? 'is-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span>{file ? file.name : 'Upload Image'}</span>
            <small>Increase KB, upscale, or enhance a screenshot</small>
            <input ref={inputRef} accept="image/*" type="file" onChange={handleFileChange} />
          </label>

          <div className="image-remaker-actions">
            <button type="button" onClick={() => inputRef.current?.click()}>Choose Image</button>
            <button type="button" onClick={() => setSelectedFile(null)} disabled={!file}>Reset</button>
          </div>

          <div className="image-remaker-presets">
            {MODES.map((mode, index) => (
              <button
                key={mode.label}
                className={modeIndex === index ? 'active' : ''}
                type="button"
                onClick={() => setModeIndex(index)}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="image-remaker-targets">
            {TARGETS.map((target) => (
              <button
                key={target}
                className={targetKb === target ? 'active' : ''}
                type="button"
                onClick={() => setTargetKb(target)}
              >
                {target >= 1024 ? `${target / 1024} MB` : `${target} KB`}
              </button>
            ))}
          </div>

          <div className="image-remaker-slider">
            <div>
              <label htmlFor="image-remaker-target">Target Size</label>
              <strong>{targetKb >= 1024 ? `${targetKb / 1024} MB` : `${targetKb} KB`}</strong>
            </div>
            <input
              id="image-remaker-target"
              min="100"
              max="2048"
              step="50"
              type="range"
              value={targetKb}
              onChange={(event) => setTargetKb(Number(event.target.value))}
            />
          </div>

          <button className="image-remaker-primary" type="button" onClick={remakeImage} disabled={!file || isProcessing}>
            {isProcessing ? 'Remaking...' : 'Remake Image'}
          </button>

          {error && <p className="tool-error">{error}</p>}
        </div>

        <div className="image-remaker-results">
          <div className="image-remaker-preview-grid">
            <figure>
              {originalUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={originalUrl} alt="Original image preview" />
                </>
              ) : (
                <div className="preview-placeholder">Original preview</div>
              )}
              <figcaption>Original {file ? formatBytes(file.size) : ''}</figcaption>
            </figure>
            <figure>
              {remadeUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={remadeUrl} alt="Enhanced image preview" />
                </>
              ) : (
                <div className="preview-placeholder">Enhanced preview</div>
              )}
              <figcaption>Enhanced {remadeFile ? formatBytes(remadeFile.size) : ''}</figcaption>
            </figure>
          </div>

          <div className="before-after-strip">
            <div>
              <span>Original</span>
              <strong>{file ? formatBytes(file.size) : '-'}</strong>
              <small>{formatDimensions(originalDimensions)}</small>
            </div>
            <b aria-hidden="true">↓</b>
            <div>
              <span>Enhanced</span>
              <strong>{remadeFile ? formatBytes(remadeFile.size) : `${targetKb} KB target`}</strong>
              <small>{formatDimensions(remadeDimensions)}</small>
            </div>
          </div>

          {beforeAfterLabel && <p className="image-remaker-note">Before vs After: {beforeAfterLabel}</p>}

          {remadeUrl && remadeFile && (
            <a className="download-btn" href={remadeUrl} download={remadeFile.name}>
              Download Enhanced Image
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
