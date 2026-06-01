'use client'

import { PointerEvent, useState } from 'react'

type DragState = {
  pointerId: number
  startX: number
  startY: number
  originX: number
  originY: number
}

export default function DraggableStudioHero() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState<DragState | null>(null)

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDrag({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    })
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!drag || drag.pointerId !== event.pointerId) return
    setPosition({
      x: drag.originX + event.clientX - drag.startX,
      y: drag.originY + event.clientY - drag.startY,
    })
  }

  function stopDrag(event: PointerEvent<HTMLElement>) {
    if (drag?.pointerId === event.pointerId) setDrag(null)
  }

  return (
    <section
      className={`hero tool-hero studio-draggable-hero ${drag ? 'is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="hero-eyebrow">Khagatara Studio</div>
      <h1 className="hero-title">Premium Portrait Enhancement</h1>
      <p className="hero-sub site-sub">
        Eyes, hair, skin - fully reconstructed by AI. Near-professional 4K and 8K output.
      </p>
    </section>
  )
}
