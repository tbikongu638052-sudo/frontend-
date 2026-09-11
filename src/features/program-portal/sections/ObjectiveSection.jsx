import React from 'react';

export const ObjectiveSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Programme Objective</h2>
      </div>

      <div className="space-y-2.5">
        <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
          What This Grant is Designed to Achieve
        </h3>
        
        <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
          The grant is specifically structured to help early-stage startups achieve the following four critical milestones:
        </p>

        {/* Clean Bullet Points */}
        <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed pt-1">
          <li>Product development and technology validation</li>
          <li>Pilot deployment and market validation</li>
          <li>Certifications and regulatory compliance</li>
          <li>Manufacturing readiness and commercialisation</li>
        </ul>
      </div>
    </section>
  );
};
