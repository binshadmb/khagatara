import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// MIME types for static assets
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.md':   'text/plain',
}

const FALCON_ROOT = path.join(process.cwd(), 'src', 'app', 'falcon')

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path: segments } = await params

  // Default to index.html when no path
  const filePath = segments && segments.length > 0
    ? path.join(FALCON_ROOT, ...segments)
    : path.join(FALCON_ROOT, 'index.html')

  // Resolve the real path and ensure it stays inside FALCON_ROOT
  let resolvedPath: string
  try {
    resolvedPath = fs.realpathSync(filePath)
  } catch {
    // File not found — try appending index.html for directory URLs
    const indexPath = path.join(filePath, 'index.html')
    if (fs.existsSync(indexPath)) {
      resolvedPath = indexPath
    } else {
      return new NextResponse('Not found', { status: 404 })
    }
  }

  // Security: block path traversal
  if (!resolvedPath.startsWith(fs.realpathSync(FALCON_ROOT))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  const ext = path.extname(resolvedPath).toLowerCase()
  const contentType = MIME[ext] ?? 'application/octet-stream'

  try {
    const content = fs.readFileSync(resolvedPath)
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': ext === '.html'
          ? 'no-cache'
          : 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new NextResponse('Not found', { status: 404 })
  }
}
