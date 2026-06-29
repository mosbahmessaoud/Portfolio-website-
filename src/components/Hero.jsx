import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi'

import { personalInfo } from '../translations.js'
import { useState } from 'react'

export default function Hero({ lang, t }) {
  const isRtl = lang === 'ar'
  const [imgError, setImgError] = useState(false)

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── Image side ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
            <div className="fade-up d0 relative">
              {/* ✅ PERF: Static glow — no blur animation */}
              <div
                className="absolute inset-0 rounded-[2rem] opacity-35 scale-90"
                style={{
                  background: 'linear-gradient(135deg, #4F8EF7, #9B6EF3, #4ade80)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
              {/* ✅ CLS FIX: hero-img-wrapper has explicit width/height in CSS */}
              <div
                className="relative hero-img-wrapper rounded-[2rem] p-[3px]"
                style={{ background: 'linear-gradient(135deg, #4F8EF7, #9B6EF3, #4ade80)', zIndex: 1 }}
              >
                {/* <div
                  className="w-full h-full rounded-[1.9rem] overflow-hidden flex items-center justify-center"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  {!imgError ? (
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/photopr.webp 1x, /photopr@2x.webp 2x"
                      />
                      <img
                        src="/photopr-opt.jpg"
                        alt={personalInfo.name}
                        fetchpriority="high"
                        decoding="sync"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-contain"
                      />
                    </picture>
                  ) : (
                    <span className="text-6xl font-extrabold gradient-text font-mono-tag">MM</span>
                  )}
                </div> */}
                <div
                  className="w-full h-full rounded-[1.9rem] overflow-hidden flex items-center justify-center"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  {!imgError ? (
                    <img
                      src="/photopr-opt.jpg"
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl font-extrabold gradient-text font-mono-tag">MM</span>
                  )}
                </div>
              </div>

              {/* Live status badge */}
              <div className="absolute -bottom-4 inset-x-0 flex justify-center" style={{ zIndex: 2 }}>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl liquid-card">
                  <span className="relative flex w-2 h-2 shrink-0">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#4ade80] pulse-dot" />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-[#4ade80]" />
                  </span>
                  <span className="text-xs font-bold font-mono-tag whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                    Software · Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start order-2">

            {/* Status pill */}
            <div
              className="fade-up d0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide w-fit mb-6 font-mono-tag"
              style={{ border: '1px solid rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.08)', color: '#4ade80' }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#4ade80] pulse-dot" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#4ade80]" />
              </span>
              {t.hero.tag}
            </div>

            {/* Title */}
            <h1
              className="fade-up d1 text-4xl sm:text-5xl md:text-5xl font-extrabold leading-[1.1] tracking-tight max-w-2xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.hero.title1}
              <br />
              <span className="gradient-text">{t.hero.title2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="fade-up d2 text-base sm:text-lg leading-relaxed mt-6 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="fade-up d3 flex flex-col sm:flex-row gap-4 mt-9 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm text-white hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #4F8EF7, #9B6EF3)', boxShadow: '0 8px 24px rgba(79,142,247,0.25)' }}
              >
                {t.hero.btnProjects}
                {isRtl ? <FiArrowLeft size={16} /> : <FiArrowRight size={16} />}
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-sm transition-colors"
                style={{ border: '1px solid var(--border-hover)', color: 'var(--text-primary)', background: 'var(--bg-card)' }}
              >
                {t.hero.btnContact}
              </button>
            </div>

            {/* Stats */}
            <div className="fade-up d4 mt-12 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-md">
              {[
                { value: '5', label: t.hero.statApps },
                { value: '200+', label: t.hero.statUsers },
                { value: '3+', label: t.hero.statYears },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold gradient-text font-mono-tag">{stat.value}</span>
                  <span className="text-xs leading-tight text-center lg:text-start" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Live status terminal strip ── */}
        <div className="fade-up d4 w-full max-w-2xl mx-auto lg:mx-0 mt-16">
          <div
            className="rounded-2xl overflow-hidden font-mono-tag text-xs sm:text-sm"
            style={{ border: '1px solid var(--code-border)', background: 'var(--code-bg)' }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ borderBottom: '1px solid var(--code-border)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ms-2" style={{ color: 'var(--text-muted)' }}>{t.status.label}</span>
            </div>

            {/* Terminal rows */}
            <div className="px-4 py-3 flex flex-col gap-2 text-start">
              {[
                { name: 'asuli@google-play', url: 'https://play.google.com/store/apps/details?id=com.iTriDev.ASULI&pcampaignid=web_share', version: 'v2.1.1' },
                { name: 'abdental@google-play', url: 'https://play.google.com/store/apps/details?id=com.iTriDevel.AB_Dental&pcampaignid=web_share', version: 'v1.0.8' },
                { name: 'abdental@vercel', url: 'https://abdentalsupply.vercel.app/', version: 'v1.0.7' },
                { name: 'BlueCiate@vercel', url: 'https://blueciat.vercel.app/', version: 'v1.0.15' },
                { name: 'traducteur@vercel', url: 'https://traducteur-officiel.vercel.app/', version: 'v1.0.15' },
              ].map(({ name, url, version }) => (
                <div key={name} className="flex items-center justify-between gap-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)' }}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                  <span className="flex items-center gap-1.5 font-bold" style={{ color: '#4ade80' }}>
                    <FiCheckCircle size={13} /> {t.status.live} · {version}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
