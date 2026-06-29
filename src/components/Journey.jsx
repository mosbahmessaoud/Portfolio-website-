import { FiAward, FiBriefcase, FiGlobe } from 'react-icons/fi'

import LiquidCard from './LiquidCard.jsx'

export default function Journey({ t }) {
  return (
    <section id="journey" className="section-padding relative cv-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xl font-bold tracking-widest uppercase font-mono-tag" style={{ color: '#4F8EF7' }}>
            {t.journey.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3" style={{ color: 'var(--text-primary)' }}>
            {t.journey.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Work experience */}
          <LiquidCard className="p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(79,142,247,0.12)', border: '1px solid rgba(79,142,247,0.22)' }}
              >
                <FiBriefcase size={18} color="#4F8EF7" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                {t.journey.workTitle}
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {t.journey.work.map((job, i) => (
                <div
                  key={i}
                  className="relative ps-5"
                  style={{ borderInlineStart: i < t.journey.work.length - 1 ? '1px solid var(--border-card)' : 'none' }}
                >
                  <span
                    className="absolute top-1 start-[-4.5px] w-2.5 h-2.5 rounded-full"
                    style={{ background: i === 0 ? '#4F8EF7' : 'var(--text-muted)' }}
                  />
                  <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{job.role}</p>
                  <p className="text-xs font-mono-tag mt-0.5 mb-2" style={{ color: '#4F8EF7' }}>{job.period}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
                </div>
              ))}
            </div>
          </LiquidCard>

          {/* Education + certs */}
          <div className="flex flex-col gap-8">
            <LiquidCard className="p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(155,110,243,0.12)', border: '1px solid rgba(155,110,243,0.22)' }}
                >
                  <FiAward size={18} color="#9B6EF3" />
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  {t.journey.eduTitle}
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                {t.journey.education.map((edu, i) => (
                  <div key={i} style={{ borderBottom: i < t.journey.education.length - 1 ? '1px solid var(--border-card)' : 'none', paddingBottom: i < t.journey.education.length - 1 ? '1.1rem' : 0 }}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{edu.degree}</p>
                      <span className="text-xs font-mono-tag shrink-0" style={{ color: 'var(--text-muted)' }}>{edu.period}</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{edu.school}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-card)' }}>
                <div className="flex flex-col gap-2.5">
                  {t.journey.certs.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#9B6EF3' }} />
                      <div>
                        <span style={{ color: 'var(--text-secondary)' }}>{cert.name}</span>
                        <span className="font-mono-tag" style={{ color: 'var(--text-muted)' }}> — {cert.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidCard>

            {/* Languages */}
            <LiquidCard className="p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.22)' }}
                >
                  <FiGlobe size={18} color="#4ade80" />
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  {t.languages.title}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {t.languages.items.map((langItem, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span style={{ color: 'var(--text-primary)' }}>{langItem.name}</span>
                    <span
                      className="text-xs font-mono-tag px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(74,222,128,0.08)', color: '#4ade80' }}
                    >
                      {langItem.level}
                    </span>
                  </div>
                ))}
              </div>
            </LiquidCard>
          </div>

        </div>
      </div>
    </section>
  )
}
