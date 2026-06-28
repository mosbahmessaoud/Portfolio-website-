import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

import LiquidCard from './LiquidCard.jsx'
import { personalInfo } from '../translations.js'

export default function Contact({ t }) {
  return (
    <section id="contact" className="section-padding relative cv-auto">
      <div className="max-w-4xl mx-auto">
        <LiquidCard className="p-8 sm:p-12 text-center">
          <span className="text-xs font-bold tracking-widest uppercase font-mono-tag" style={{ color: '#4F8EF7' }}>
            {t.contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.contact.title}
          </h2>
          <p className="text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t.contact.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm text-white hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #4F8EF7, #9B6EF3)', boxShadow: '0 8px 24px rgba(79,142,247,0.25)' }}
            >
              <FiMail size={16} />
              {t.contact.btnEmail}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm transition-colors"
              style={{ border: '1px solid var(--border-hover)', color: 'var(--text-primary)', background: 'var(--bg-card)' }}
            >
              <FiPhone size={16} />
              {personalInfo.phone}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={14} /> {t.contact.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #24292e, #0d1117)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
              }}
            >
              <FiGithub size={18} />
              GitHub
              <FiArrowUpRight size={14} className="opacity-0 group-hover:opacity-70 transition-opacity -ms-1" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #0A66C2, #004182)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
                boxShadow: '0 6px 20px rgba(10,102,194,0.30)',
              }}
            >
              <FiLinkedin size={18} />
              LinkedIn
              <FiArrowUpRight size={14} className="opacity-0 group-hover:opacity-70 transition-opacity -ms-1" />
            </a>
          </div>
        </LiquidCard>
      </div>
    </section>
  )
}

export function Footer({ t }) {
  return (
    <footer className="relative z-10 py-8 px-4" style={{ borderTop: '1px solid var(--border-card)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono-tag" style={{ color: 'var(--text-muted)' }}>
          Mosbah Messaoud · {t.footer.tagline} · © 2026
        </p>
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-[#4F8EF7]"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-secondary)' }}
            aria-label="GitHub"
          >
            <FiGithub size={14} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-[#0A66C2]"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', color: 'var(--text-secondary)' }}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
