import React from 'react'

export default function CountryContent({ children }) {
  return (
    <div className="space-y-4 text-gray-800 leading-relaxed">
      <div className="rounded-3xl bg-white/85 backdrop-blur border border-white/70 shadow-[0_18px_80px_-32px_rgba(15,23,42,0.35)] p-6 md:p-10 space-y-4">
        {children}
        <div className="mt-4 grid gap-4 lg:grid-cols-3 lg:items-center lg:gap-6 border-t border-gray-100 pt-6">
          <div className="col-span-2 text-sm text-gray-700 leading-relaxed">
            Need a bespoke plan? SmartScholar handles shortlisting, documentation, mock visa interviews, and scholarship positioning for this destination.
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-indigo-500 text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
              Talk to an expert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>
            <a href="/services" className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/40 text-brand-blue px-4 py-2.5 text-sm font-semibold hover:bg-brand-blue/5 transition-colors">
              View services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
