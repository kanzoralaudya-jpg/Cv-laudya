import { useState } from 'react';
import { caseStudiesList, CaseStudy, siteContent, Language } from '../data/content';
import { ArrowUpRight, X, ExternalLink, CheckCircle } from 'lucide-react';

interface PortfolioProps {
  currentLang: Language;
}

export function Portfolio({ currentLang }: PortfolioProps) {
  const content = siteContent[currentLang].work;
  const [activeFilter, setActiveFilter] = useState<'all' | 'saas' | 'ecommerce' | 'fintech'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases =
    activeFilter === 'all'
      ? caseStudiesList
      : caseStudiesList.filter((item) => item.category === activeFilter);

  return (
    <section id="karya" className="py-20 md:py-28 bg-[#090b0e] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
              {content.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Interactive Filter Controls - Functional buttons with active state */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {content.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('saas')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'saas'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              SaaS &amp; Analitik
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'ecommerce'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('fintech')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'fintech'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Fintech
            </button>
          </div>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-200 group"
            >
              <div>
                {/* Media frame with fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-neutral-900 p-6 text-center">
                            <span class="text-xs font-mono text-blue-400">${item.category.toUpperCase()}</span>
                            <span class="text-sm font-bold text-white mt-2">${item.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category kicker on image overlay */}
                  <div className="absolute top-3 left-3 text-xs text-neutral-300 font-medium px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md">
                    {item.categoryLabel[currentLang]}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Unboxed metadata with typographic dot separator */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span>{item.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 line-clamp-2">
                    {item.summary[currentLang]}
                  </p>

                  {/* Adjacent Proof Metrics */}
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 mb-6">
                    <div>
                      <div className="text-base font-extrabold text-blue-400 tabular-nums">
                        {item.metrics[0].value}
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-tight">
                        {item.metrics[0].label[currentLang]}
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-white tabular-nums">
                        {item.metrics[1].value}
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-tight">
                        {item.metrics[1].label[currentLang]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCase(item)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700/80 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{content.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Tutup jendela modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold tracking-wide uppercase mb-2">
                <span>{selectedCase.client}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{selectedCase.year}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{selectedCase.categoryLabel[currentLang]}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedCase.title}
              </h3>
            </div>

            {/* Showcase Image in Modal */}
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-neutral-800 bg-neutral-950">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metrics highlight */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6">
              {selectedCase.metrics.map((metric, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-black text-blue-400 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {metric.label[currentLang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution Breakdown */}
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {currentLang === 'id' ? 'Tantangan Bisnis & Teknis' : 'Problem & Engineering Challenge'}
                </h4>
                <p className="text-neutral-300 leading-relaxed bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/80">
                  {selectedCase.challenge[currentLang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {currentLang === 'id' ? 'Solusi Rekayasa Kinetik' : 'Kinetik Architecture Solution'}
                </h4>
                <p className="text-neutral-300 leading-relaxed bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/80">
                  {selectedCase.solution[currentLang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {currentLang === 'id' ? 'Teknologi yang Diterapkan' : 'Deployed Tech Stack'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                {currentLang === 'id' ? 'Tutup Analisis' : 'Close Breakdown'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
