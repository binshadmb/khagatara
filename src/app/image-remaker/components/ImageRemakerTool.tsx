'use client'

import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from 'react'

type RemakerDimensions = { width: number; height: number }

// UI mode → API mode key
const MODES = [
  { label: 'Increase KB',        apiMode: 'increase_kb',  description: 'Real-ESRGAN 2x — enlarge & enhance' },
  { label: 'AI-style Upscale',   apiMode: 'ai_upscale',   description: 'Real-ESRGAN 4x — full AI upscale' },
  { label: 'Screenshot Enhancer',apiMode: 'screenshot',   description: 'SwinIR — sharpens text & UI screenshots' },
] as const

type ImageRemakerToolProps = {
  initialTargetKb?: number
  initialMode?: string
}

const TARGETS = [100, 200, 500, 1024, 2048]

const FREE_LIMIT = 1
const FREE_KEY   = 'khagatara:image-remaker:free-count'

function getInitialModeIndex(initialMode?: string) {
  const modeIndex = MODES.findIndex((mode) => mode.apiMode === initialMode)
  return modeIndex >= 0 ? modeIndex : 1
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

export default function ImageRemakerTool({ initialTargetKb, initialMode }: ImageRemakerToolProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [file,               setFile]               = useState<File | null>(null)
  const [originalUrl,        setOriginalUrl]        = useState('')
  const [originalDimensions, setOriginalDimensions] = useState<RemakerDimensions | null>(null)

  const [remadeFile,       setRemadeFile]       = useState<File | null>(null)
  const [remadeUrl,        setRemadeUrl]        = useState('')
  const [remadeDimensions, setRemadeDimensions] = useState<RemakerDimensions | null>(null)

  const [modeIndex,    setModeIndex]    = useState(() => getInitialModeIndex(initialMode))
  const [targetKb,     setTargetKb]     = useState(initialTargetKb ?? 500)
  const [isDragging,   setIsDragging]   = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress,     setProgress]     = useState('')
  const [error,        setError]        = useState('')

  const [freeUsed, setFreeUsed] = useState(() => {
    if (typeof window === 'undefined') return 0
    return Math.max(0, Number(localStorage.getItem(FREE_KEY) ?? 0))
  })

  const isPaid          = false   // wire to your auth/subscription check
  const remainingFree   = Math.max(0, FREE_LIMIT - freeUsed)
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
    }
  }, [originalUrl, remadeUrl])

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

  // ── Main upscale call ──────────────────────────────────────────────────────
  async function remakeImage() {
    if (!file) { setError('Upload an image first.'); return }

    // Free tier gate
    if (!isPaid && freeUsed >= FREE_LIMIT) {
      setError(`Free tier allows ${FREE_LIMIT} upscale. Upgrade for unlimited use.`)
      return
    }

    // Free tier file size cap
    if (!isPaid && file.size > 5 * 1024 * 1024) {
      setError('Free tier supports images up to 5 MB. Upgrade for up to 20 MB.')
      return
    }

    setIsProcessing(true)
    setError('')
    setProgress('Sending to AI engine...')
    if (remadeUrl) { URL.revokeObjectURL(remadeUrl); setRemadeUrl('') }
    setRemadeFile(null)
    setRemadeDimensions(null)

    try {
      const form = new FormData()
      form.append('file', file)
      form.append('mode', selectedMode.apiMode)
      form.append('paid', isPaid ? '1' : '0')

      setProgress('Processing with Real-ESRGAN / SwinIR...')

      const res = await fetch('/api/upscale', { method: 'POST', body: form })

      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Upscale failed.' }))
        throw new Error(msg)
      }

      setProgress('Finalising output...')

      const blob     = await res.blob()
      const ext      = 'png'
      const baseName = file.name.replace(/\.[^.]+$/, '')
      const outFile  = new File([blob], `${baseName}-upscaled.${ext}`, { type: 'image/png' })
      const outUrl   = URL.createObjectURL(outFile)

      setRemadeFile(outFile)
      setRemadeUrl(outUrl)

      try {
        setRemadeDimensions(await getImageDimensions(outUrl))
      } catch { /* non-fatal */ }

      // Increment free usage counter
      if (!isPaid) {
        const next = freeUsed + 1
        setFreeUsed(next)
        localStorage.setItem(FREE_KEY, String(next))
      }

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Upscale failed. Try another image.'
      setError(msg)
    } finally {
      setIsProcessing(false)
      setProgress('')
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
            <small>Drag & drop or choose — JPG, PNG, WebP up to {isPaid ? '20 MB' : '5 MB'}</small>
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

          {!isPaid && (
            <p className="conversion-limit">
              {remainingFree} of {FREE_LIMIT} free upscale remaining.
            </p>
          )}

          {error && <p className="tool-error">{error}</p>}
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
