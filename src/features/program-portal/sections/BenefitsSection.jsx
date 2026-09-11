import React from 'react';

export const BenefitsSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Programme Benefits</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2.5 mb-4">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            What Selected Startups Receive
          </h3>

          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            Selected startups gain full access to KonguTBI's innovation ecosystem — including structured mentoring, specialised technical infrastructure, corporate networks, investor connections, and strategic market access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          
          {/* Benefit 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">💰</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Financial Grant</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Seed funding for technology-driven startups with strong innovation and commercialisation potential to accelerate product development.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">🎯</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Milestone Advancement</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Structured support to achieve critical milestones across product development, validation, certification, manufacturing, pilot deployment, and market entry.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">🚀</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Growth Catalyst</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Bridge early-stage funding gaps to strengthen customer adoption, revenue growth, and positioning for follow-on investment.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">🏗️</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Ecosystem Leverage</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Full access to KonguTBI's advanced infrastructure, mentor networks, industry connections, and corporate partnerships to accelerate growth.
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">🌍</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Impact Creation</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Build a pipeline of scalable, technology-led ventures capable of driving meaningful economic, environmental, and societal impact.
              </p>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/40 transition-colors shadow-xs">
            <span className="text-2xl shrink-0">📡</span>
            <div>
              <strong className="font-bold text-slate-900 text-sm sm:text-base block mb-1">Investor & Market Access</strong>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Exclusive Demo Days, corporate networking events, and investor pitches to secure commercial scale-up capital and strategic partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
