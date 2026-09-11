import React from 'react';

export const IncubationTermsSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Incubation Terms</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            Conditions of Participation
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            All selected grantees must be, or become, active resident incubatees of TBI@KEC for the full duration of the grant project.
          </p>
        </div>

        {/* 4 Clean Numbered Conditions */}
        <div className="space-y-3.5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              1. Become a Resident Incubatee
            </h4>
            <p className="text-slate-700 pl-4">
              Selected startups must become resident incubatees of KonguTBI before the first grant instalment is released.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              2. Formal Admission & Legal Agreements
            </h4>
            <p className="text-slate-700 pl-4">
              Formal admission follows KonguTBI's standard criteria. Appropriate legal agreements will be executed between KonguTBI and the grantee before funds are disbursed.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              3. Remain Active Throughout
            </h4>
            <p className="text-slate-700 pl-4">
              The startup must remain an active incubatee throughout the full 12-month project duration and must not withdraw before project completion.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              4. Comply with Programme Protocols
            </h4>
            <p className="text-slate-700 pl-4">
              Selected startups must comply with all incubation terms and conditions, programme protocols, and monitoring requirements of TBI@KEC.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
