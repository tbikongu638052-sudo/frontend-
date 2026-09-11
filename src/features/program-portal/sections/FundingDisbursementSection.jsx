import React from 'react';

export const FundingDisbursementSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Funding & Disbursement</h2>
      </div>

      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
          Grant Support
        </h3>

        <p className="text-slate-800 text-sm sm:text-base font-normal">
          Up to <span className="text-xl sm:text-2xl font-bold text-[#1b365d] tracking-tight">₹20 Lakhs</span> per selected startup
        </p>

        {/* Clean Bullet Points */}
        <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          <li>
            <strong className="font-semibold text-slate-900">Funding Quantum:</strong> Grant support is subject to the startup's current stage, funding requirements, proposed milestones, and final assessment by the designated Investment Committee.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Disbursement Structure:</strong> The grant is released in milestone-based instalments, contingent on satisfactory progress reviews at each phase.
          </li>
        </ul>
      </div>
    </section>
  );
};
