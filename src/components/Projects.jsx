import { FiArrowUpRight, FiCheckCircle, FiUsers } from 'react-icons/fi'

import LiquidCard from './LiquidCard.jsx'
import { personalInfo } from '../translations.js'

/* Google Play glyph — simplified triangular play-store mark */
function PlayStoreIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6 2.2c-.4.3-.6.8-.6 1.4v17c0 .6.2 1.1.6 1.4l9.4-9.9-9.4-9.9z" fill="#00D9FF" />
      <path d="M16.4 9.9 3.6 2.2c.1 0 .2-.1.3-.1.4 0 .7.1 1 .3l11.4 6.5-3.9 1.4-.5.1z" fill="#00F076" />
      <path d="M16.4 14.1 13 12.5l3.4-3.6 3.9 2.2c.7.4 1.1.9 1.1 1.5s-.4 1.1-1.1 1.5l-3.9 2.2-.4-.2z" fill="#FFC400" />
      <path d="M4.9 21.6c-.3.2-.6.3-1 .3-.1 0-.2 0-.3-.1l12.8-7.3-3.4-1.6-9.4 9.9 1.3-1.2z" fill="#FF3D57" />
    </svg>
  )
}

function GooglePlayButton({ href, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      dir="ltr"
      className="inline-flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
      style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f0f1e)', color: '#fff', border: `1px solid ${accent}40` }}
    >
      <PlayStoreIcon size={20} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[9px] uppercase tracking-wide opacity-70 font-mono-tag">Get it on</span>
        <span className="text-sm font-bold -mt-0.5">Google Play</span>
      </span>
    </a>
  )
}

function ProjectCard({ project, accent, t, liveUrl, playUrl }) {
  return (
    <LiquidCard className="p-7 sm:p-8 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full font-mono-tag mb-3"
            style={{ background: `${accent}1A`, color: accent, border: `1px solid ${accent}33` }}
          >
            {project.badge}
          </span>
          <h3 className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            {project.name}
          </h3>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            {project.tagline}
          </p>
        </div>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold text-white font-mono-tag"
          style={{ background: `linear-gradient(135deg, ${accent}, #9B6EF3)` }}
        >
          {project.name.charAt(0)}
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono-tag px-2.5 py-1 rounded-lg"
            style={{ background: 'rgba(79,142,247,0.07)', border: '1px solid rgba(79,142,247,0.16)', color: 'var(--text-secondary)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className="flex items-center justify-between gap-3 pt-5 mb-5"
        style={{ borderTop: '1px solid var(--border-card)' }}
      >
        <span className="flex items-center gap-1.5 text-xs font-bold font-mono-tag" style={{ color: '#4ade80' }}>
          <FiCheckCircle size={13} /> {project.status}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-mono-tag" style={{ color: 'var(--text-muted)' }}>
          <FiUsers size={13} /> {project.users}
        </span>
        <span className="text-xs font-bold font-mono-tag" style={{ color: accent }}>
          {project.version}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {playUrl && (
          <GooglePlayButton href={playUrl} accent={accent} />
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${accent}, #9B6EF3)`, color: '#fff' }}
          >
            {t.projects.viewLive}
            <FiArrowUpRight size={15} />
          </a>
        )}
      </div>
    </LiquidCard>
  )
}

export default function Projects({ t }) {
  return (
    <section id="projects" className="section-padding relative cv-auto" style={{ borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase font-mono-tag" style={{ color: '#4F8EF7' }}>
            {t.projects.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.projects.title}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            project={t.projects.asuli}
            accent="#4F8EF7"
            t={t}
            liveUrl={null}
            playUrl={personalInfo.asuliPlayUrl}
          />
          <ProjectCard
            project={t.projects.abdental}
            accent="#9B6EF3"
            t={t}
            liveUrl={personalInfo.abdentalUrl}
            playUrl={personalInfo.abdentalPlayUrl}
          />
        </div>
      </div>
    </section>
  )
}
