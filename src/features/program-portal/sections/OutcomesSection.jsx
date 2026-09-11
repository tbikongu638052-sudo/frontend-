import React from 'react';

export const OutcomesSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Key Programme Outcomes</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            What Success Looks Like
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            The programme aims to help startups progress from prototype to commercial enterprise, with emphasis on:
          </p>
        </div>

        {/* Clean Bullet Points */}
        <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          <li>
            <strong className="font-semibold text-slate-900">Technology Readiness Level (TRL)</strong> advanced to 8 or 9 — from prototype to commercial-grade product.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Successful product launch</strong> with validated market demand and first commercial customers secured.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Sustainable revenue generation</strong> with a validated, repeatable business model ready to scale.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Investment readiness</strong> for follow-on Angel, Venture Capital, or institutional funding rounds.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Showcased at exclusive KonguTBI Demo Days</strong>, corporate networking events, and investor pitch forums.
          </li>
        </ul>
      </div>
    </section>
  );
};
