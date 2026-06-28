import { useEffect, useState } from 'react'

import About from './components/About.jsx'
import Contact, { Footer } from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Journey from './components/Journey.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { translationData } from './translations.js'

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('language') || 'ar')

  useEffect(() => {
    localStorage.setItem('language', lang)
    const html = document.documentElement
    html.lang = lang
    html.dir = translationData[lang].meta.dir
  }, [lang])

  const t = translationData[lang]

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">

        {/* Fixed full-viewport background — never moves with scroll */}
        <div className="fixed-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

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
    </ThemeProvider>
  )
}
