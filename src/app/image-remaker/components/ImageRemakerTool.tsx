'use client'

import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from 'react'

type RemakerDimensions = { width: number; height: number }

// UI mode → API mode key
const MODES = [
  { label: 'Auto',               apiMode: 'auto',        description: 'Smart — detects faces and picks best AI' },
  { label: 'Increase KB',        apiMode: 'increase_kb',  description: 'Real-ESRGAN 2x — enlarge & enhance' },
  { label: 'AI-style Upscale',   apiMode: 'ai_upscale',   description: 'Real-ESRGAN 4x — full AI upscale' },
  { label: 'Screenshot Enhancer',apiMode: 'screenshot',   description: 'SwinIR — sharpens text & UI screenshots' },
] as const

type ImageRemakerToolProps = {
  initialTargetKb?: number
  initialMode?: string
  initialResolution?: string
}

const TARGETS = [100, 200, 500, 1024, 2048]
const RESOLUTIONS = [
  { label: 'HD', value: 'hd' },
  { label: '2K', value: '2k' },
  { label: '4K', value: '4k' },
  { label: '8K', value: '8k' },
] as const

type TargetResolution = (typeof RESOLUTIONS)[number]['value']

function getInitialModeIndex(initialMode?: string) {
  const modeIndex = MODES.findIndex((mode) => mode.apiMode === initialMode)
  return modeIndex >= 0 ? modeIndex : 0
}

function getInitialResolution(initialResolution?: string): TargetResolution {
  return RESOLUTIONS.some((resolution) => resolution.value === initialResolution)
    ? initialResolution as TargetResolution
    : 'hd'
}

function formatBytes(bytes: number) {
  if (!bytes) return '0 KB'
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function formatDimensions(d: RemakerDimensions | null) {
  return d ? `${d.width} × ${d.height}` : '-'
}

function getImageDimensions(url: string): Promise<RemakerDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject
    img.src = url
  })
}

export default function ImageRemakerTool({ initialTargetKb, initialMode, initialResolution }: ImageRemakerToolProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [file,               setFile]               = useState<File | null>(null)
  const [originalUrl,        setOriginalUrl]        = useState('')
  const [originalDimensions, setOriginalDimensions] = useState<RemakerDimensions | null>(null)

  const [remadeFile,       setRemadeFile]       = useState<File | null>(null)
  const [remadeUrl,        setRemadeUrl]        = useState('')
  const [remadeDimensions, setRemadeDimensions] = useState<RemakerDimensions | null>(null)

  const [modeIndex,    setModeIndex]    = useState(() => getInitialModeIndex(initialMode))
  const [targetKb,     setTargetKb]     = useState(initialTargetKb ?? 500)
  const [resolution,   setResolution]   = useState(() => getInitialResolution(initialResolution))
  const [isDragging,   setIsDragging]   = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress,     setProgress]     = useState('')
  const [progressValue, setProgressValue] = useState(0)
  const [error,        setError]        = useState('')
  const [autoDetectedPipeline, setAutoDetectedPipeline] = useState('')

  const selectedMode    = MODES[modeIndex]

  const beforeAfterLabel = useMemo(() => {
    if (!file || !remadeFile) return null
    return `${formatBytes(file.size)} → ${formatBytes(remadeFile.size)}`
  }, [file, remadeFile])

  // Revoke object URLs on unmount
  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl)
      if (remadeUrl)   URL.revokeObjectURL(remadeUrl)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [originalUrl, remadeUrl])

  function startProgressTimer() {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    progressTimerRef.current = setInterval(() => {
      setProgressValue((current) => {
        if (current < 55) return current + 4
        if (current < 82) return current + 2
        if (current < 98) return current + 1
        return current
      })
    }, 650)
  }

  function stopProgressTimer() {
    if (!progressTimerRef.current) return
    clearInterval(progressTimerRef.current)
    progressTimerRef.current = null
  }

  // ── File selection ─────────────────────────────────────────────────────────
  async function selectFile(selected: File | null) {
    setError('')
    setRemadeFile(null)
    setRemadeDimensions(null)
    if (remadeUrl)   { URL.revokeObjectURL(remadeUrl);   setRemadeUrl('') }
    if (originalUrl) { URL.revokeObjectURL(originalUrl); setOriginalUrl('') }
    setOriginalDimensions(null)

    if (!selected) { setFile(null); return }

    if (!selected.type.startsWith('image/')) {
      setFile(null)
      setError('Please upload an image file.')
      return
    }

    const url = URL.createObjectURL(selected)
    setFile(selected)
    setOriginalUrl(url)

    try {
      setOriginalDimensions(await getImageDimensions(url))
    } catch { /* non-fatal */ }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    selectFile(e.target.files?.[0] ?? null)
  }

  function handleDragOver(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault(); setIsDragging(true)
  }
  function handleDragLeave() { setIsDragging(false) }
  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault(); setIsDragging(false)
    selectFile(e.dataTransfer.files?.[0] ?? null)
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
          0.82,
        )
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        resolve(input)
      }

      img.src = url
    })
  }

  // ── Main upscale call ──────────────────────────────────────────────────────
  async function remakeImage() {
    if (!file) { setError('Upload an image first.'); return }

    if (file.size > 120 * 1024 * 1024) {
      setError('Images up to 120 MB are supported.')
      return
    }

    setIsProcessing(true)
    setError('')
    setProgress('Sending to AI engine...')
    setProgressValue(8)
    startProgressTimer()
    if (remadeUrl) { URL.revokeObjectURL(remadeUrl); setRemadeUrl('') }
    setAutoDetectedPipeline('')
    setRemadeFile(null)
    setRemadeDimensions(null)

    try {
      setProgress('Optimising image for upload...')
      const uploadFile = await compressFile(file)

      const form = new FormData()
      form.append('file', uploadFile)
      form.append('mode', selectedMode.apiMode)
      form.append('target_resolution', resolution)
      form.append('paid', '1')

      setProgress('Processing your image...')
      setProgressValue((current) => Math.max(current, 35))

      const res = await fetch('https://khagatara-api.onrender.com/upscale-proxy/upscale', {
        method: 'POST',
        body: form,
      })

      const pipeline = res.headers.get('X-Pipeline-Used') ?? ''
      const facesFound = res.headers.get('X-Faces-Detected') === 'true'
      if (selectedMode.apiMode === 'auto' && pipeline) {
        setAutoDetectedPipeline(facesFound ? 'Faces detected → CodeFormer applied' : 'No faces → RealESRGAN only')
      } else {
        setAutoDetectedPipeline('')
      }

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || ''
        const msg = contentType.includes('application/json')
          ? await res.json().then((body) => body.error || body.detail || 'Upscale failed.')
          : await res.text().then((text) => text || 'Upscale failed.')

        throw new Error(msg)
      }

      setProgress('Downloading enhanced image...')
      setProgressValue(92)

      const blob     = await res.blob()
      setProgress('Finalising output...')
      setProgressValue(98)

      const ext      = 'png'
      const baseName = file.name.replace(/\.[^.]+$/, '')
      const outFile  = new File([blob], `${baseName}-upscaled.${ext}`, { type: 'image/png' })
      const outUrl   = URL.createObjectURL(outFile)

      setRemadeFile(outFile)
      setRemadeUrl(outUrl)

      try {
        setRemadeDimensions(await getImageDimensions(outUrl))
      } catch { /* non-fatal */ }

      setProgressValue(100)

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Upscale failed. Try another image.'
      setError(msg)
    } finally {
      stopProgressTimer()
      setIsProcessing(false)
      window.setTimeout(() => {
        setProgress('')
        setProgressValue(0)
      }, 450)
    }
  }

  function reset() {
    if (inputRef.current) inputRef.current.value = ''
    selectFile(null)
  }

  // ── UI ─────────────────────────────────────────────────────────────────────
  return (
    <section className="image-remaker-shell">
      <div className="image-remaker-layout">

        {/* Controls */}
        <div className="image-remaker-controls">

          <label
            className={`image-remaker-upload ${isDragging ? 'is-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span>{file ? file.name : 'Upload Image'}</span>
            <small>Drag & drop or choose — JPG, PNG, WebP up to 120 MB</small>
            <input ref={inputRef} accept="image/*" type="file" onChange={handleFileChange} />
          </label>

          <div className="image-remaker-actions">
            <button type="button" onClick={() => inputRef.current?.click()}>Choose Image</button>
            <button type="button" onClick={reset} disabled={!file}>Reset</button>
          </div>

          {/* Mode selector */}
          <div className="image-remaker-presets">
            {MODES.map((mode, index) => (
              <button
                key={mode.label}
                className={modeIndex === index ? 'active' : ''}
                type="button"
                onClick={() => setModeIndex(index)}
                title={mode.description}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="image-remaker-resolution">
            {RESOLUTIONS.map((item) => (
              <button
                key={item.value}
                className={resolution === item.value ? 'active' : ''}
                type="button"
                onClick={() => setResolution(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Target KB presets */}
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

          {/* Target slider */}
          <div className="image-remaker-slider">
            <div>
              <label htmlFor="image-remaker-target">Target Size</label>
              <strong>{targetKb >= 1024 ? `${targetKb / 1024} MB` : `${targetKb} KB`}</strong>
            </div>
            <input
              id="image-remaker-target"
              min="100" max="2048" step="50"
              type="range"
              value={targetKb}
              onChange={(e) => setTargetKb(Number(e.target.value))}
            />
          </div>

          <button
            className="image-remaker-primary"
            type="button"
            onClick={remakeImage}
            disabled={!file || isProcessing}
          >
            {isProcessing ? progress || 'Processing...' : 'Remake Image'}
          </button>

          {isProcessing && (
            <div
              className={`image-remaker-progress ${progressValue >= 94 ? 'is-waiting' : ''}`}
              aria-label="Image regeneration progress"
            >
              <div>
                <span>{progress || 'Processing...'}</span>
                <strong>{progressValue}%</strong>
              </div>
              <b>
                <i style={{ width: `${progressValue}%` }} />
              </b>
            </div>
          )}

          {error && <p className="tool-error">{error}</p>}
          {autoDetectedPipeline && (
            <p className="tool-note">{autoDetectedPipeline}</p>
          )}
        </div>

        {/* Results */}
        <div className="image-remaker-results">
          <div className="image-remaker-preview-grid">
            <figure>
              {originalUrl
                ? <img src={originalUrl} alt="Original image preview" />
                : <div className="preview-placeholder">Original preview</div>
              }
              <figcaption>Original {file ? formatBytes(file.size) : ''}</figcaption>
            </figure>
            <figure>
              {remadeUrl
                ? <img src={remadeUrl} alt="AI upscaled image preview" />
                : <div className="preview-placeholder">Enhanced preview</div>
              }
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

          {beforeAfterLabel && (
            <p className="image-remaker-note">Before vs After: {beforeAfterLabel}</p>
          )}

          {remadeUrl && remadeFile && (
            <div className="download-actions">
              <a className="download-btn" href={remadeUrl} download={remadeFile.name}>
                Download Enhanced Image
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

