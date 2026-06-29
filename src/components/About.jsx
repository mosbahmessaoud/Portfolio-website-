import { FiCode } from 'react-icons/fi'
import LiquidCard from './LiquidCard.jsx'

export default function About({ t }) {
  return (
    <section id="about" className="section-padding relative cv-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7">
            <span
              className="text-xl font-bold tracking-widest uppercase font-mono-tag"
              style={{ color: '#4F8EF7' }}
            >
              {t.about.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.about.title}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t.about.p1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t.about.p2}
            </p>
          </div>

          <div className="lg:col-span-5">
            <LiquidCard className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(79,142,247,0.12)', border: '1px solid rgba(79,142,247,0.22)' }}
                >
                  <FiCode size={20} color="#4F8EF7" />
                </div>
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {t.about.cardTitle}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {t.about.cardItems.map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 rounded-xl text-sm font-mono-tag"
                    style={{
                      background: 'rgba(79,142,247,0.06)',
                      border: '1px solid rgba(79,142,247,0.14)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item}
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
