import React from 'react';

export const FocusSectorsSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Focus Sectors</h2>
      </div>

      <div className="space-y-2.5">
        <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
          Domains We Invest In
        </h3>
        
        <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
          This programme prioritises innovations with direct impact across the following strategic sectors, aligned to national and global sustainability goals:
        </p>

        {/* Simple Clean Bullet Points */}
        <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed pt-1">
          <li>Climate Innovation</li>
          <li>Biodiversity Preservation</li>
          <li>Energy Efficiency & Clean Energy</li>
          <li>Waste Disposal & Management</li>
          <li>Carbon & Greenhouse Gas Mitigation</li>
          <li>Sustainable Agriculture & Rural Development</li>
        </ul>
      </div>
    </section>
  );
};
