'use client'

import imageCompression from 'browser-image-compression'
import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from 'react'

type ImageDimensions = {
  width: number
  height: number
}

type CompressionPreset = {
  label: string
  quality: number
}

type TargetSize = {
  label: string
  kb: number
}

const COMPRESSION_PRESETS: CompressionPreset[] = [
  { label: 'Low Compression (Best Quality)', quality: 90 },
  { label: 'Balanced', quality: 70 },
  { label: 'Smallest File', quality: 40 },
]

const TARGET_SIZES: TargetSize[] = [
  { label: '40 KB', kb: 40 },
  { label: '50 KB', kb: 50 },
  { label: '100 KB', kb: 100 },
  { label: '200 KB', kb: 200 },
  { label: '500 KB', kb: 500 },
]

const MAX_FILE_SIZE_MB = 25
const MIN_TARGET_KB = 20
const MAX_TARGET_KB = 1000
const FREE_COMPRESSION_LIMIT = 2
const FREE_COMPRESSION_COUNT_KEY = 'khagatara:image-compressor:free-count'

function formatBytes(bytes: number) {
  if (!bytes) return '0 KB'
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function formatDimensions(dimensions: ImageDimensions | null) {
  if (!dimensions) return '-'
  return `${dimensions.width} x ${dimensions.height}`
}

function formatType(file: File | null) {
  if (!file) return 'No file detected'
  const fromMime = file.type.split('/')[1]
  const fromName = file.name.split('.').pop()
  return (fromMime || fromName || 'image').replace('jpeg', 'jpg').toUpperCase()
}

function outputName(file: File) {
  const parts = file.name.split('.')
  const ext = parts.length > 1 ? parts.pop() : 'jpg'
  const base = parts.join('.') || 'image'
  return `${base}-compressed.${ext}`
}

function getImageDimensions(url: string) {
  return new Promise<ImageDimensions>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve({ width: image.naturalWidth, height: image.naturalHeight })
    image.onerror = reject
    image.src = url
  })
}

export default function ImageCompressorTool() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState(70)
  const [targetKb, setTargetKb] = useState<number | null>(null)
  const [originalUrl, setOriginalUrl] = useState('')
  const [compressedFile, setCompressedFile] = useState<File | null>(null)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [originalDimensions, setOriginalDimensions] = useState<ImageDimensions | null>(null)
  const [compressedDimensions, setCompressedDimensions] = useState<ImageDimensions | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isCompressing, setIsCompressing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [freeCompressionsUsed, setFreeCompressionsUsed] = useState(() => {
    if (typeof window === 'undefined') return 0
    const storedCount = Number(window.localStorage.getItem(FREE_COMPRESSION_COUNT_KEY) || '0')
    return Number.isFinite(storedCount) ? Math.max(0, storedCount) : 0
  })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const reduction = useMemo(() => {
    if (!file || !compressedFile) return 0
    return Math.max(0, Math.round((1 - compressedFile.size / file.size) * 100))
  }, [file, compressedFile])

  const savedBytes = useMemo(() => {
    if (!file || !compressedFile) return 0
    return Math.max(0, file.size - compressedFile.size)
  }, [file, compressedFile])

  const estimatedSize = useMemo(() => {
    if (!file) return '-'
    if (targetKb) return `around ${targetKb} KB`
    return formatBytes(Math.max(1024, Math.round(file.size * (quality / 100))))
  }, [file, quality, targetKb])

  const remainingFreeCompressions = Math.max(0, FREE_COMPRESSION_LIMIT - freeCompressionsUsed)

  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl)
      if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    }
  }, [originalUrl, downloadUrl])

  async function setSelectedFile(selected: File | null) {
    setError('')
    setNotice('')
    setCompressedFile(null)
    setCompressedDimensions(null)
    setProgress(0)

    if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    setDownloadUrl('')

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

    if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFile(null)
      setError(`Please upload an image smaller than ${MAX_FILE_SIZE_MB} MB.`)
      return
    }

    const url = URL.createObjectURL(selected)
    setFile(selected)
    setOriginalUrl(url)
    setNotice('Processed locally in your browser. No upload required.')

    try {
      setOriginalDimensions(await getImageDimensions(url))
    } catch (err) {
      console.error('Could not read image dimensions', err)
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

  async function handlePasteFromClipboard() {
    setError('')

    try {
      const clipboardItems = await navigator.clipboard.read()
      for (const item of clipboardItems) {
        const imageType = item.types.find((type) => type.startsWith('image/'))
        if (imageType) {
          const blob = await item.getType(imageType)
          const pastedFile = new File([blob], `pasted-image.${imageType.split('/')[1] || 'png'}`, { type: imageType })
          await setSelectedFile(pastedFile)
          return
        }
      }
      setError('No image found on the clipboard.')
    } catch (err) {
      console.error('Paste image failed', err)
      setError('Clipboard image paste is not available in this browser. Try drag and drop or upload.')
    }
  }

  async function runCompression(source: File, requestedQuality: number, requestedTargetKb: number | null) {
    const targetSizeMb = requestedTargetKb ? requestedTargetKb / 1024 : Math.max(0.05, source.size / (1024 * 1024) * (requestedQuality / 100))
    const commonOptions = {
      maxSizeMB: Math.max(0.03, targetSizeMb),
      maxWidthOrHeight: 2400,
      initialQuality: requestedQuality / 100,
      onProgress: (value: number) => setProgress(Math.min(95, Math.round(value))),
    }

    try {
      return await imageCompression(source, { ...commonOptions, useWebWorker: true })
    } catch (err) {
      console.error('Web Worker compression failed, retrying without worker', err)
      return imageCompression(source, { ...commonOptions, useWebWorker: false })
    }
  }

  async function compressImage() {
    if (!file) {
      setError('Upload, drop, or paste an image first.')
      return
    }

    if (freeCompressionsUsed >= FREE_COMPRESSION_LIMIT) {
      setError('You have used your 2 free compressions in this browser. Please use a premium or account flow to continue.')
      return
    }

    setIsCompressing(true)
    setProgress(1)
    setError('')
    setCompressedFile(null)
    setCompressedDimensions(null)
    if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    setDownloadUrl('')

    try {
      let compressed = await runCompression(file, quality, targetKb)

      if (targetKb && compressed.size > targetKb * 1024) {
        const fallbackQualities = [70, 55, 40, 30, 22]
        for (const nextQuality of fallbackQualities) {
          const attempt = await runCompression(file, nextQuality, targetKb)
          if (attempt.size < compressed.size) compressed = attempt
          if (attempt.size <= targetKb * 1024) break
        }
      }

      const namedFile = new File([compressed], outputName(file), { type: compressed.type || file.type })
      const nextDownloadUrl = URL.createObjectURL(namedFile)

      setCompressedFile(namedFile)
      setDownloadUrl(nextDownloadUrl)
      setProgress(100)
      setFreeCompressionsUsed((current) => {
        const next = Math.min(FREE_COMPRESSION_LIMIT, current + 1)
        window.localStorage.setItem(FREE_COMPRESSION_COUNT_KEY, String(next))
        return next
      })

      try {
        setCompressedDimensions(await getImageDimensions(nextDownloadUrl))
      } catch (err) {
        console.error('Could not read compressed image dimensions', err)
      }
    } catch (err) {
      console.error('Compression failed', err)
      setError('Compression failed. Try another image or a lighter setting.')
      setProgress(0)
    } finally {
      setIsCompressing(false)
    }
  }

  function resetTool() {
    if (inputRef.current) inputRef.current.value = ''
    setSelectedFile(null)
  }

  function compressAnotherImage() {
    if (inputRef.current) inputRef.current.value = ''
    setSelectedFile(null)
  }

  return (
    <section className="image-tool-shell">
      <div className="image-tool-layout">
        <div className="tool-controls">
          <label
            className={`upload-box ${isDragging ? 'is-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span>{file ? file.name : 'Upload Image'}</span>
            <small>Drag & drop, choose from gallery, or paste from clipboard</small>
            <input ref={inputRef} accept="image/*" type="file" onChange={handleFileChange} />
          </label>

          <div className="tool-trust-points" aria-label="Tool privacy and format support">
            <span>Files never leave your device</span>
            <span>No signup</span>
            <span>Free forever</span>
            <span>Unlimited use</span>
            <span>JPG, PNG & WebP supported</span>
            <span>Processed locally in browser</span>
          </div>

          <div className="tool-inline-actions">
            <button type="button" onClick={() => inputRef.current?.click()}>Choose Image</button>
            <button type="button" onClick={handlePasteFromClipboard}>Paste Image</button>
            <button type="button" onClick={resetTool} disabled={!file && !compressedFile}>Reset Tool</button>
          </div>

          {notice && <p className="tool-notice">{notice}</p>}

          <div className="detected-file">
            <span>Detected {formatType(file)}</span>
            <strong>{file ? formatBytes(file.size) : 'Waiting for upload'}</strong>
          </div>

          <div className="compression-row">
            <div>
              <label htmlFor="quality">Compression Quality</label>
              <strong>{targetKb ? `Target ${targetKb} KB` : `${quality}%`}</strong>
            </div>
            <div className="compression-presets" aria-label="Compression presets">
              {COMPRESSION_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  className={!targetKb && quality === preset.quality ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setTargetKb(null)
                    setQuality(preset.quality)
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            <div className="target-size-presets" aria-label="Target file size presets">
              {TARGET_SIZES.map((target) => (
                <button
                  key={target.kb}
                  className={targetKb === target.kb ? 'active' : ''}
                  type="button"
                  onClick={() => setTargetKb(target.kb)}
                >
                  Target {target.label}
                </button>
              ))}
            </div>
            <div className="target-size-control">
              <div>
                <label htmlFor="target-size">Target Size</label>
                <strong>{targetKb ? `${targetKb} KB` : 'Off'}</strong>
              </div>
              <input
                id="target-size"
                min={MIN_TARGET_KB}
                max={MAX_TARGET_KB}
                step="10"
                type="range"
                value={targetKb ?? 100}
                onChange={(event) => setTargetKb(Number(event.target.value))}
              />
              <small>Move the slider to reduce or increase the target file size before compressing.</small>
            </div>
            <input
              id="quality"
              min="20"
              max="95"
              step="5"
              type="range"
              value={quality}
              onChange={(event) => {
                setTargetKb(null)
                setQuality(Number(event.target.value))
              }}
            />
          </div>

          <div className="privacy-badge">
            <strong>Private browser compression</strong>
            <span>No upload required. Works offline after the page loads.</span>
          </div>

          <button className="tool-action" type="button" onClick={compressImage} disabled={isCompressing || !file}>
            {isCompressing ? `Compressing ${progress}%` : 'Compress Image'}
          </button>

          <p className="conversion-limit">
            {remainingFreeCompressions} of {FREE_COMPRESSION_LIMIT} free compressions remaining in this browser.
          </p>

          {isCompressing && (
            <div className="compression-progress" aria-label="Compression progress">
              <span style={{ width: `${progress}%` }} />
            </div>
          )}

          {error && <p className="tool-error">{error}</p>}
        </div>

        <div className="tool-results">
          <div className="preview-grid">
            <figure>
              {originalUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={originalUrl} alt="Original uploaded preview" />
                </>
              ) : (
                <div className="preview-placeholder">Original preview</div>
              )}
              <figcaption>Original</figcaption>
            </figure>
            <figure>
              {downloadUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={downloadUrl} alt="Compressed image preview" />
                </>
              ) : (
                <div className="preview-placeholder">Compressed preview</div>
              )}
              <figcaption>Compressed</figcaption>
            </figure>
          </div>

          <div className="file-stats">
            <div>
              <span>Original</span>
              <strong>{file ? `${formatType(file)} • ${formatBytes(file.size)}` : '-'}</strong>
              <small>{formatDimensions(originalDimensions)}</small>
            </div>
            <div>
              <span>Estimated</span>
              <strong>{estimatedSize}</strong>
              <small>Before compression</small>
            </div>
            <div>
              <span>Compressed</span>
              <strong>{compressedFile ? `${formatType(compressedFile)} • ${formatBytes(compressedFile.size)}` : '-'}</strong>
              <small>{formatDimensions(compressedDimensions)}</small>
            </div>
            <div>
              <span>Saved</span>
              <strong>{compressedFile ? `${reduction}%` : '-'}</strong>
              <small>{compressedFile ? formatBytes(savedBytes) : '-'}</small>
            </div>
          </div>

          {file && compressedFile && (
            <div className="before-after-strip">
              <div>
                <span>Original</span>
                <strong>{formatBytes(file.size)}</strong>
              </div>
              <b aria-hidden="true">↓</b>
              <div>
                <span>Compressed</span>
                <strong>{formatBytes(compressedFile.size)}</strong>
              </div>
            </div>
          )}

          {downloadUrl && compressedFile && (
            <div className="download-actions">
              <a className="download-btn" href={downloadUrl} download={compressedFile.name}>
                Download Image
              </a>
              <button type="button" onClick={compressAnotherImage}>Compress Another Image</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
