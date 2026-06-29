import { HiMenu, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react'

import { FiGlobe } from 'react-icons/fi'
import { personalInfo } from '../translations.js'
import { useTheme } from '../context/ThemeContext.jsx'

const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [navImgError, setNavImgError] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const langRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [langOpen])

  const navLinks = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.journey, id: 'journey' },
    { label: t.nav.contact, id: 'contact' },
  ]

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navStyle = {
    background: scrolled ? 'var(--nav-bg)' : 'var(--nav-bg)',
    opacity: scrolled ? 1 : 0.92,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--nav-border)',
    boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.06)',
    borderRadius: '20px',
    transition: 'opacity 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  }

  return (
    <nav className="fixed top-3 sm:top-4 inset-x-3 sm:inset-x-6 lg:inset-x-10 z-50 max-w-6xl mx-auto" style={navStyle}>
      <div className="px-4 sm:px-6 lg:px-8 h-16 md:h-[4.5rem] flex items-center justify-between">

        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
          {/* <span className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#4F8EF7] to-[#9B6EF3] text-white font-bold text-base font-mono-tag shadow-lg shrink-0">
            {!navImgError ? (
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                onError={() => setNavImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              'MM'
            )}
          </span> */}
          <div className="sm:flex flex-col items-start leading-tight">
            <span className="text-sm font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Mosbah Messaoud
            </span>
            <span className="hidden sm:flex text-[10px] font-mono-tag" style={{ color: 'var(--text-muted)' }}>
              Backend Engineer
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#4F8EF7]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-colors duration-200"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={17} className="text-[#4F8EF7]" /> : <HiMoon size={17} className="text-[#9B6EF3]" />}
          </button>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-colors duration-200"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-secondary)' }}
            >
              <FiGlobe size={16} />
              <span className="text-xs font-bold uppercase font-mono-tag">{lang}</span>
            </button>
            <div
              className="absolute top-full mt-2 end-0 w-36 rounded-2xl shadow-xl z-50 p-1.5"
              style={{
                background: 'var(--nav-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-card)',
                opacity: langOpen ? 1 : 0,
                pointerEvents: langOpen ? 'auto' : 'none',
                transform: langOpen ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.15s ease, transform 0.15s ease',
              }}
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  className="w-full text-start px-3 py-2 text-xs rounded-xl transition-colors hover:text-[#4F8EF7]"
                  style={{
                    color: lang === l.code ? '#4F8EF7' : 'var(--text-secondary)',
                    background: lang === l.code ? 'rgba(79,142,247,0.08)' : 'transparent',
                    fontWeight: lang === l.code ? '700' : '400',
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#4F8EF7] to-[#9B6EF3] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            {t.nav.contact}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={18} className="text-[#4F8EF7]" /> : <HiMoon size={18} className="text-[#9B6EF3]" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      <div
        className="fixed top-[4.75rem] sm:top-[5.25rem] md:top-[6.5rem] inset-x-3 sm:inset-x-6 lg:inset-x-10 max-w-6xl mx-auto z-40 md:hidden"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--nav-border)',
          borderRadius: '20px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="py-3 text-sm font-medium text-start"
              style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-card)' }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {lang === 'ar' ? 'اختر اللغة' : lang === 'fr' ? 'Langue' : 'Language'}
            </span>
            <div className="flex gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMenuOpen(false) }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold font-mono-tag"
                  style={{
                    background: lang === l.code ? 'linear-gradient(135deg,#4F8EF7,#9B6EF3)' : 'var(--bg-card)',
                    color: lang === l.code ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-card)',
                  }}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
