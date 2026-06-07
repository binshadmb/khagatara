import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

// Falcon static files live here — next to this route file's parent
const FALCON_ROOT = path.join(process.cwd(), 'src', 'app', 'falcon')

function serveFile(filePath: string): NextResponse {
  const ext = path.extname(filePath).toLowerCase()
  const contentType = MIME[ext] ?? 'application/octet-stream'
  try {
    const content = fs.readFileSync(filePath)
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

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path: segments } = await params

  // /falcon or /falcon/ → index.html
  if (!segments || segments.length === 0) {
    return serveFile(path.join(FALCON_ROOT, 'index.html'))
  }

  const requested = path.join(FALCON_ROOT, ...segments)

  // Security: block path traversal
  const root = fs.realpathSync(FALCON_ROOT)
  let resolved: string
  try {
    resolved = fs.realpathSync(requested)
  } catch {
    // Path doesn't exist — try as directory → index.html
    const idx = path.join(requested, 'index.html')
    if (fs.existsSync(idx)) {
      resolved = fs.realpathSync(idx)
    } else {
      return new NextResponse('Not found', { status: 404 })
    }
  }

  if (!resolved.startsWith(root)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // If it's a directory, serve its index.html
  if (fs.statSync(resolved).isDirectory()) {
    const idx = path.join(resolved, 'index.html')
    if (fs.existsSync(idx)) return serveFile(idx)
    return new NextResponse('Not found', { status: 404 })
  }

  return serveFile(resolved)
}
