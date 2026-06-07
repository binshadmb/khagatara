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

const FALCON_ROOT = path.join(process.cwd(), 'src', 'app', 'falcon')
const ROOT_REAL   = fs.realpathSync(FALCON_ROOT)

function serveFile(filePath: string): NextResponse {
  const ext = path.extname(filePath).toLowerCase()
  const contentType = MIME[ext] ?? 'application/octet-stream'

  try {
    let content: Buffer | string = fs.readFileSync(filePath)

    // Inject <base href="/falcon/"> into HTML so relative paths work correctly
    if (ext === '.html') {
      let html = content.toString('utf-8')
      if (!html.includes('<base ')) {
        html = html.replace('<head>', '<head>\n  <base href="/falcon/">')
      }
      content = html
    }

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

  // /falcon (no segments) → index.html
  if (!segments || segments.length === 0) {
    return serveFile(path.join(FALCON_ROOT, 'index.html'))
  }

  const requested = path.join(FALCON_ROOT, ...segments)

  // Security: block path traversal
  let resolved: string
  try {
    resolved = fs.realpathSync(requested)
  } catch {
    // Try as directory → index.html
    const idx = path.join(requested, 'index.html')
    if (fs.existsSync(idx)) {
      resolved = fs.realpathSync(idx)
    } else {
      return new NextResponse('Not found', { status: 404 })
    }
  }

  if (!resolved.startsWith(ROOT_REAL)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Directory → serve its index.html
  if (fs.statSync(resolved).isDirectory()) {
    const idx = path.join(resolved, 'index.html')
    if (fs.existsSync(idx)) return serveFile(idx)
    return new NextResponse('Not found', { status: 404 })
  }

  return serveFile(resolved)
}
