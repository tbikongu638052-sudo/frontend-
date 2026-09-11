import React from 'react';

export const DescriptionSection = () => {
  return (
    <section className="mt-4">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Description</h2>
      </div>
      
      <div className="space-y-4 text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed">
        {/* Primary Opportunity Pitch */}
        <p className="text-slate-800 text-sm sm:text-base leading-relaxed text-justify">
          <strong className="font-bold text-slate-900">Do you have a ground-breaking prototype or product?</strong> Here is your opportunity to take it further. KonguTBI, in partnership with KVB, invites early-stage startups to apply for seed grant support, structured mentorship, and full access to a world-class incubation ecosystem — to evolve your innovation into a market-ready enterprise.
        </p>

        {/* Key Metric 4-Box Stat Grid (Navy Blue & Gold Theme) */}
        <div className="my-4 rounded-xl overflow-hidden bg-[#0c2340] border border-[#d4af37]/50 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/30 text-center">
            
            {/* Metric 1 */}
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center">
              <div className="text-xl sm:text-2xl font-bold text-[#fbbf24] tracking-tight">
                ₹20 Lakhs
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
                Max Grant Per Startup
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center">
              <div className="text-xl sm:text-2xl font-bold text-[#fbbf24] tracking-tight">
                12 Months
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
                Incubation Period
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center">
              <div className="text-xl sm:text-2xl font-bold text-[#fbbf24] tracking-tight">
                5–6
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
                Startups Selected
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center">
              <div className="text-xl sm:text-2xl font-bold text-[#fbbf24] tracking-tight">
                TRL 5+
              </div>
              <div className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
                Readiness Threshold
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
