'use client'
import { useEffect, useState } from 'react'

const THEMES = ['dark', 'light', 'midnight'] as const
type Theme = typeof THEMES[number]

const LABELS: Record<Theme, string> = {
  dark: '◑ Dark',
  light: '○ Light',
  midnight: '● Midnight',
}

function isTheme(value: string | null): value is Theme {
  return THEMES.includes(value as Theme)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const value = localStorage.getItem('theme')
    const saved = isTheme(value) ? value : 'dark'
    document.documentElement.setAttribute('data-theme', saved)
    const frame = window.requestAnimationFrame(() => setTheme(saved))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  function cycle() {
    const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <button className="theme-toggle" onClick={cycle} aria-label="Toggle theme">
      {LABELS[theme]}
    </button>
  )
}
