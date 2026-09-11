import React from 'react';

export const ImpactFocusSection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Innovation & Impact Focus</h2>
      </div>

      <div className="space-y-2.5">
        <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
          What Your Innovation Must Deliver
        </h3>
        
        <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify mb-3.5">
          We fund ventures that combine technological novelty with measurable real-world outcomes across four impact dimensions, aligned with UN Sustainable Development Goals (SDGs):
        </p>

        {/* One-by-one curved pill cards */}
        <div className="space-y-2.5 pt-1">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-slate-900 sm:text-[0.92rem]">Core Innovation: </strong>Develop new or significantly improved products, processes, or services with clearly differentiated technology or science.
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-slate-900 sm:text-[0.92rem]">Social Impact: </strong>Empower underprivileged communities, reduce poverty, and improve livelihoods through accessible and affordable solutions.
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-slate-900 sm:text-[0.92rem]">Sustainability: </strong>Address climate change, energy efficiency, and waste management challenges to advance SDG Goals at scale.
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-slate-900 sm:text-[0.92rem]">Economic Growth: </strong>Create scalable, revenue-generating business models that drive employment, wealth creation, and industry transformation.
          </div>
        </div>
      </div>
    </section>
  );
};
