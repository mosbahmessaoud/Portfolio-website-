import Contact, { Footer } from './components/Contact.jsx'
import { useEffect, useState } from 'react'

import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Journey from './components/Journey.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { translationData } from './translations.js'

// ✅ PERF: IntersectionObserver for scroll-triggered reveals
// This replaces CSS-only fade-up on every element, which was causing
// CLS and painting items that were off-screen immediately on load.
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    // Set will-change only when close to viewport
    const willChangeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.willChange = 'opacity, transform'
          } else {
            e.target.style.willChange = 'auto'
          }
        })
      },
      { rootMargin: '200px 0px' }
    )

    // Trigger animation when element enters viewport
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            revealObserver.unobserve(e.target) // only animate once
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => {
      willChangeObserver.observe(el)
      revealObserver.observe(el)
    })

    return () => {
      willChangeObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])
}

function AppInner({ lang, setLang }) {
  useRevealOnScroll()
  const t = translationData[lang]
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ✅ PERF: Single static CSS gradient — no animated divs, zero GPU cost */}
      <div className="fixed-bg" aria-hidden="true" />

      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="relative z-10">
        <Hero lang={lang} t={t} />
        <About t={t} />
        <Projects lang={lang} t={t} />
        <Journey t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('language') || 'en')
  useEffect(() => {
    localStorage.setItem('language', lang)
    const html = document.documentElement
    html.lang = lang
    html.dir = translationData[lang].meta.dir
  }, [lang])

  return (
    <ThemeProvider>
      <AppInner lang={lang} setLang={setLang} />
    </ThemeProvider>
  )
}
