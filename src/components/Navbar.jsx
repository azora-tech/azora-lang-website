import { useState } from 'react'

const sections = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '#examples' },
  { label: 'Targets', href: '#targets' },
  { label: 'Ecosystem', href: '#ecosystem' },
]

const external = [
  { label: 'Playground', href: 'https://code.azoralang.org' },
  { label: 'Book', href: 'https://book.azoralang.org' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-az-90/80 backdrop-blur-md border-b border-az-75 px-4">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-mono font-bold text-xl text-az-primary">Az</span>
          <span className="font-semibold text-az-10">Azora Programming Language</span>
          <span className="text-[10px] text-az-60 ml-1.5 border border-az-65 rounded px-1.5 py-0.5">v0.0.1</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map(s => (
            <a key={s.href} href={s.href} className="text-sm text-az-40 hover:text-az-10 transition-colors">
              {s.label}
            </a>
          ))}
          <span className="w-px h-4 bg-az-65" />
          {external.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-az-40 hover:text-az-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-az-40 hover:text-az-10" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-az-85 border-b border-az-75 px-4 pb-4 pt-2 flex flex-col gap-3">
          {sections.map(s => (
            <a key={s.href} href={s.href} onClick={() => setOpen(false)} className="text-sm text-az-40 hover:text-az-10 transition-colors">
              {s.label}
            </a>
          ))}
          <span className="h-px bg-az-65" />
          {external.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-az-40 hover:text-az-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
