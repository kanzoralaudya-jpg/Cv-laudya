import { ArrowRight, ChevronRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import { siteContent, Language } from '../data/content';

interface HeroProps {
  currentLang: Language;
  onExploreWork: () => void;
  onOpenEstimator: () => void;
}

export function Hero({ currentLang, onExploreWork, onOpenEstimator }: HeroProps) {
  const content = siteContent[currentLang].hero;

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle kicker text - unboxed, clean typography */}
        <div className="flex items-center gap-2 mb-6 text-xs text-blue-400 font-semibold tracking-wider uppercase">
          <GraduationCap className="w-4 h-4 text-blue-400" />
          <span>{content.badge}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-400 normal-case tracking-normal">
            {currentLang === 'id' ? 'Sistem Informasi & Rekayasa Perangkat Lunak' : 'Information Systems & Software Engineering'}
          </span>
        </div>

        {/* Split grid: Headline & Value Proposition on Left, Visual Carrier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Laudya Salbech Kanzora
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                {currentLang === 'id'
                  ? 'Mahasiswa Program Studi Sistem Informasi'
                  : 'Information Systems Undergraduate'}
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {content.subhead}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-150 shadow-lg shadow-blue-600/20 whitespace-nowrap cursor-pointer"
              >
                <span>{content.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800/90 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{content.secondaryCta}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Micro-assurances / Badges without pills */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">✓</span>
                <span>{currentLang === 'id' ? 'Analisis Sistem & BPMN 2.0' : 'Systems Analysis & BPMN'}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">✓</span>
                <span>{currentLang === 'id' ? 'Web Modern React 19 & TypeScript' : 'React 19 & TypeScript'}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">✓</span>
                <span>{currentLang === 'id' ? 'Basis Data Relasional & Normalisasi 3NF' : 'Relational 3NF Database'}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier: Portrait Frame of Laudya Salbech Kanzora */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src="/src/assets/images/laudya_profile_portrait_1793590870617.jpg"
                  alt="Laudya Salbech Kanzora - Mahasiswa Program Studi Sistem Informasi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-center">
                          <div class="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4">
                            <span class="text-xl font-bold">LSK</span>
                          </div>
                          <p class="text-base font-bold text-white">Laudya Salbech Kanzora</p>
                          <p class="text-xs text-neutral-400 mt-1">Mahasiswa Program Studi Sistem Informasi</p>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Clean unboxed image overlay caption */}
                <div className="absolute bottom-4 left-5 right-5 text-xs text-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Laudya Salbech Kanzora</span>
                    <span className="text-neutral-400 text-[11px]">Mahasiswa Prodi Sistem Informasi</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 bg-neutral-900/80 px-2 py-1 rounded border border-neutral-800">
                    IPK 3.91
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip immediately below hero */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
