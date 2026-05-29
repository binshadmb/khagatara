'use client'

import imageCompression from 'browser-image-compression'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'

function formatBytes(bytes: number) {
  if (!bytes) return '0 KB'
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function outputName(file: File) {
  const parts = file.name.split('.')
  const ext = parts.length > 1 ? parts.pop() : 'jpg'
  const base = parts.join('.') || 'image'
  return `${base}-compressed.${ext}`
}

export default function ImageCompressorTool() {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState(70)
  const [compressedFile, setCompressedFile] = useState<File | null>(null)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [isCompressing, setIsCompressing] = useState(false)
  const [error, setError] = useState('')

  const reduction = useMemo(() => {
    if (!file || !compressedFile) return 0
    return Math.max(0, Math.round((1 - compressedFile.size / file.size) * 100))
  }, [file, compressedFile])

  useEffect(() => {
    return () => {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    }
  }, [downloadUrl])

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null
    setError('')
    setCompressedFile(null)
    if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    setDownloadUrl('')

    if (!selected) {
      setFile(null)
      return
    }

    if (!selected.type.startsWith('image/')) {
      setFile(null)
      setError('Please upload an image file.')
      return
    }

    setFile(selected)
  }

  async function compressImage() {
    if (!file) {
      setError('Upload an image first.')
      return
    }

    setIsCompressing(true)
    setError('')
    setCompressedFile(null)
    if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    setDownloadUrl('')

    try {
      const compressed = await imageCompression(file, {
        maxSizeMB: Math.max(0.05, file.size / (1024 * 1024) * (quality / 100)),
        maxWidthOrHeight: 2400,
        initialQuality: quality / 100,
        useWebWorker: true,
      })
      const namedFile = new File([compressed], outputName(file), { type: compressed.type || file.type })
      setCompressedFile(namedFile)
      setDownloadUrl(URL.createObjectURL(namedFile))
    } catch {
      setError('Compression failed. Try another image or a lighter setting.')
    } finally {
      setIsCompressing(false)
    }
  }

  return (
    <section className="image-tool-shell">
      <div className="image-tool-card">
        <label className="upload-box">
          <span>Upload Image</span>
          <small>JPG, PNG or WEBP</small>
          <input accept="image/*" type="file" onChange={handleFileChange} />
        </label>

        <div className="compression-row">
          <div>
            <label htmlFor="quality">Compression Quality</label>
            <strong>{quality}%</strong>
          </div>
          <input
            id="quality"
            min="20"
            max="95"
            step="5"
            type="range"
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
          />
        </div>

        <button className="tool-action" type="button" onClick={compressImage} disabled={isCompressing || !file}>
          {isCompressing ? 'Compressing...' : 'Compress Image'}
        </button>

        {error && <p className="tool-error">{error}</p>}

        <div className="file-stats">
          <div>
            <span>Original</span>
            <strong>{file ? formatBytes(file.size) : '-'}</strong>
          </div>
          <div>
            <span>Compressed</span>
            <strong>{compressedFile ? formatBytes(compressedFile.size) : '-'}</strong>
          </div>
          <div>
            <span>Saved</span>
            <strong>{compressedFile ? `${reduction}%` : '-'}</strong>
          </div>
        </div>

        {downloadUrl && compressedFile && (
          <a className="download-btn" href={downloadUrl} download={compressedFile.name}>
            Download Image
          </a>
        )}
      </div>
    </section>
  )
}
