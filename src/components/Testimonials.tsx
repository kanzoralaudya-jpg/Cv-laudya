import { clientReviews, siteContent, Language } from '../data/content';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLang: Language;
}

export function Testimonials({ currentLang }: TestimonialsProps) {
  const content = siteContent[currentLang].testimonials;

  return (
    <section id="klien" className="py-20 md:py-28 bg-[#0c0e12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
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

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/30 mb-6" />
                <p className="text-sm text-neutral-200 leading-relaxed mb-6 italic">
                  "{review.quote[currentLang]}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-300 shrink-0">
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">
                      {review.author}
                    </div>
                    <div className="text-xs text-neutral-400 truncate">
                      {review.role[currentLang]} · {review.company}
                    </div>
                  </div>
                </div>

                {/* Verified Outcome Stamp */}
                <div className="mt-4 pt-3 border-t border-neutral-800/40 flex items-center justify-between text-[11px] text-blue-400 font-medium">
                  <span>Hasil Terverifikasi:</span>
                  <span className="font-semibold text-white">{review.verifiedOutcome[currentLang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
