import Image from 'next/image'

export default function ServiceCard({ title, icon, description, imageSrc, eyebrow }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur px-5 py-6 shadow-[0_18px_70px_-32px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-blue/5 via-white to-purple-50" />
      <div className="relative">
        {imageSrc && (
          <div className="relative mb-5 h-44 overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />
            <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              {eyebrow || 'Service'}
            </span>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 min-w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-indigo-500 text-2xl text-white shadow-lg">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-tight text-gray-900">{title}</h3>
            {description && <p className="text-sm leading-relaxed text-gray-600">{description}</p>}
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue">
              Learn more
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
