'use client'

import { ChangeEvent, DragEvent, useRef, useState } from 'react'

type Dimensions = { width: number; height: number }

const RESOLUTIONS = [
  { label: '4K', value: '4k', credits: 1 },
  { label: '8K', value: '8k', credits: 2 },
] as const

type Resolution = (typeof RESOLUTIONS)[number]['value']

function formatBytes(bytes: number) {
  if (!bytes) return '0 KB'
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function getImageDimensions(url: string): Promise<Dimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject
    img.src = url
  })
}

async function compressFile(input: File): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(input)
    img.onload = () => {
      const maxSize = 1600
      let { naturalWidth: width, naturalHeight: height } = img
      if (width > maxSize || height > maxSize) {
        const ratio = Math.min(maxSize / width, maxSize / height)
        width = Math.round(width * ratio)
        height = Math.round(height * ratio)
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d')?.drawImage(img, 0, 0, width, height)
      URL.revokeObjectURL(url)
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(input); return }
          resolve(new File([blob], input.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' }))
        },
        'image/jpeg',
        0.85,
      )
    }
    img.onerror = () => { URL.revokeObjectURL(url); resolve(input) }
    img.src = url
  })
}

export default function StudioTool() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [file, setFile] = useState<File | null>(null)
  const [originalUrl, setOriginalUrl] = useState('')
  const [originalDims, setOriginalDims] = useState<Dimensions | null>(null)
  const [resultUrl, setResultUrl] = useState('')
  const [resultDims, setResultDims] = useState<Dimensions | null>(null)
  const [resolution, setResolution] = useState<Resolution>('4k')
  const [email, setEmail] = useState('')
  const [credits, setCredits] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState('')
  const [progressValue, setProgressValue] = useState(0)
  const [pipeline, setPipeline] = useState('')
  const [error, setError] = useState('')

  const creditCost = RESOLUTIONS.find((item) => item.value === resolution)?.credits ?? 1

  async function loadCredits(userEmail: string) {
    if (!userEmail) return
    const res = await fetch(`/api/studio/credits?email=${encodeURIComponent(userEmail)}`)
    const data = await res.json()
    setCredits(data.credits ?? 0)
  }

  function handleEmailBlur() {
    if (email) loadCredits(email)
  }

  async function selectFile(selected: File | null) {
    setError('')
    setResultUrl('')
    setResultDims(null)
    if (originalUrl) URL.revokeObjectURL(originalUrl)
    setOriginalDims(null)

    if (!selected) {
      setFile(null)
      setOriginalUrl('')
      return
    }

    if (!selected.type.startsWith('image/')) {
      setError('Please upload an image file.')
      return
    }

    const url = URL.createObjectURL(selected)
    setFile(selected)
    setOriginalUrl(url)
    try { setOriginalDims(await getImageDimensions(url)) } catch { /* preview dimensions are optional */ }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    selectFile(event.target.files?.[0] ?? null)
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
    selectFile(event.dataTransfer.files?.[0] ?? null)
  }

  async function enhance() {
    if (!file) { setError('Upload an image first.'); return }
    if (!email) { setError('Enter your email to continue.'); return }
    if (credits === null) await loadCredits(email)

    if ((credits ?? 0) < creditCost) {
      setError(`Not enough credits. This enhancement costs ${creditCost} credit${creditCost > 1 ? 's' : ''}.`)
      return
    }

    setIsProcessing(true)
    setError('')
    setPipeline('')
    setProgress('Optimising image for upload...')
    setProgressValue(8)

    try {
      const uploadFile = await compressFile(file)
      const form = new FormData()
      form.append('file', uploadFile)
      form.append('resolution', resolution)
      form.append('email', email)

      setProgress('Sending to SUPIR engine...')
      setProgressValue(20)

      const res = await fetch('/api/studio/enhance', {
        method: 'POST',
        body: form,
      })

      setProgressValue(60)

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || ''
        const data = contentType.includes('application/json')
          ? await res.json()
          : { error: await res.text() }
        const message = data.error || 'Enhancement failed.'
        throw new Error(message.length > 240 ? `${message.slice(0, 240)}...` : message)
      }

      setProgress('Downloading enhanced image...')
      setProgressValue(90)

      const blob = await res.blob()
      const outUrl = URL.createObjectURL(blob)
      setResultUrl(outUrl)

      const facesHeader = res.headers.get('X-Faces-Detected') ?? ''
      setPipeline(facesHeader === 'true' ? 'Faces detected - CodeFormer + SUPIR applied' : 'SUPIR applied')

      try { setResultDims(await getImageDimensions(outUrl)) } catch { /* output dimensions are optional */ }

      setProgressValue(100)
      await loadCredits(email)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Enhancement failed.')
    } finally {
      setIsProcessing(false)
      setTimeout(() => { setProgress(''); setProgressValue(0) }, 450)
    }
  }

  return (
    <section className="studio-shell">
      <div className="studio-layout">
        <div className="studio-controls">
          <div className="studio-email">
            <label htmlFor="studio-email">Your Email</label>
            <input
              id="studio-email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={handleEmailBlur}
            />
            {credits !== null && (
              <span className="credit-balance">{credits} credit{credits !== 1 ? 's' : ''} available</span>
            )}
          </div>

          <label
            className={`studio-upload ${isDragging ? 'is-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span>{file ? file.name : 'Upload Portrait'}</span>
            <small>JPG, PNG, WebP - faces, portraits, people</small>
            <input ref={inputRef} accept="image/*" type="file" onChange={handleFileChange} />
          </label>

          <div className="studio-resolution">
            {RESOLUTIONS.map((item) => (
              <button
                key={item.value}
                className={resolution === item.value ? 'active' : ''}
                onClick={() => setResolution(item.value)}
                type="button"
              >
                {item.label} <small>({item.credits} credit{item.credits > 1 ? 's' : ''})</small>
              </button>
            ))}
          </div>

          <button className="studio-primary" type="button" onClick={enhance} disabled={!file || isProcessing || !email}>
            {isProcessing ? progress || 'Enhancing...' : `Enhance - ${creditCost} Credit${creditCost > 1 ? 's' : ''}`}
          </button>

          {isProcessing && (
            <div className="studio-progress">
              <div>
                <span>{progress}</span>
                <strong>{progressValue}%</strong>
              </div>
              <b><i style={{ width: `${progressValue}%` }} /></b>
            </div>
          )}

          {pipeline && <p className="studio-pipeline">{pipeline}</p>}
          {error && <p className="tool-error">{error}</p>}

          <div className="studio-buy-more">
            <p>Need more credits?</p>
            <a href="#studio-pricing">Buy Credits</a>
          </div>
        </div>

        <div className="studio-results">
          <div className="studio-preview-grid">
            <figure>
              {originalUrl
                ? <img src={originalUrl} alt="Original" />
                : <div className="preview-placeholder">Original preview</div>
              }
              <figcaption>
                Original {file ? formatBytes(file.size) : ''}
                {originalDims ? ` - ${originalDims.width}x${originalDims.height}` : ''}
              </figcaption>
            </figure>
            <figure>
              {resultUrl
                ? <img src={resultUrl} alt="Enhanced" />
                : <div className="preview-placeholder">Enhanced preview</div>
              }
              <figcaption>
                Enhanced {resultDims ? `${resultDims.width}x${resultDims.height}` : ''}
              </figcaption>
            </figure>
          </div>

          {resultUrl && (
            <div className="download-actions">
              <a className="download-btn" href={resultUrl} download="khagatara-studio-enhanced.png">
                Download Enhanced Image
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
