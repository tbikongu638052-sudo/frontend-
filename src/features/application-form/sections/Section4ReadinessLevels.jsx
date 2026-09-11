import React from 'react';

export const Section4ReadinessLevels = ({ formData, handleChange }) => {
  const trlOptions = [
    'TRL 0: Idea — unproven concept; no testing performed',
    'TRL 1: Basic Research — principles observed; no experimental proof of concept available',
    'TRL 2: Technology Formulation — concept and application have been formulated',
    'TRL 3: Applied Research — first laboratory test completed; Proof of Concept (PoC) achieved',
    'TRL 4: Small-Scale Prototype built in a laboratory environment ("ugly prototype")',
    'TRL 5: Large-Scale Prototype / MVP tested in intended environment',
    'TRL 6: Prototype system tested in intended environment close to expected performance',
    'TRL 7: Demonstration system operating at pre-commercial scale',
    'TRL 8: First commercial system; manufacturing issues resolved',
    'TRL 9: Full commercial application — product / technology available to consumers'
  ];

  const mrlOptions = [
    'MRL 1: Basic manufacturing implications identified — concept and technology described',
    'MRL 2: Manufacturing concepts characterised — process is theoretically feasible',
    'MRL 3: Manufacturing proof of concept developed — lab-scale processes demonstrated',
    'MRL 4: Capability to produce technology in laboratory environment established',
    'MRL 5: Capability to produce prototype components in a production-relevant environment',
    'MRL 6: Capability to produce a prototype system in a production-relevant environment',
    'MRL 7: Capability to produce systems, sub-systems, or components in a production-representative environment',
    'MRL 8: Pilot line capability demonstrated; ready to begin low-rate initial production',
    'MRL 9: Low-rate production demonstrated; capability in place to begin full-rate production',
    'MRL 10: Full-rate production demonstrated and lean production practices established'
  ];

  const irlOptions = [
    'IRL 1: Basic investment concept defined — idea exists but no investor interest assessed',
    'IRL 2: Investment opportunity described — potential investor profile identified',
    'IRL 3: Proof of investor interest — informal discussions or initial market sounding completed',
    'IRL 4: Investor validation — at least one credible investor has expressed interest (e.g. via LOI or term sheet discussion)',
    'IRL 5: Investment terms in negotiation — term sheet or indicative offer received',
    'IRL 6: Due diligence initiated — investor conducting formal technical and financial review',
    'IRL 7: Investment commitment received — signed term sheet or conditional sanction in place',
    'IRL 8: Funding agreement executed — investment documents signed and first tranche received',
    'IRL 9: Full investment deployed — all tranches received; investor is an active stakeholder'
  ];

  const startupStageOptions = [
    'Concept / PoC / Prototype — Value Fit',
    'Initial Traction: Pilot / MVP — Product Fit',
    'Pilot: Market, Product & Business Model proven — Market Fit',
    'Early Revenue / Pre-Commercialisation',
    'Growth Stage — Repeatable Expansion',
    'Scale Stage — Rapid Growth'
  ];

  return (
    <div className="space-y-6">
      
      {/* Current Technology Readiness Level (TRL) * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Current Technology Readiness Level (TRL) <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Tick the one row that best describes your current technology maturity</span>
        </div>
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
          <div className="bg-slate-50/80 px-3.5 py-2 border-b border-slate-200 text-xs font-semibold text-slate-700">
            TRL Definition
          </div>
          <div className="divide-y divide-slate-100">
            {trlOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-start gap-3 px-3.5 py-2.5 cursor-pointer text-xs transition-colors select-none ${
                  formData.currentTrl === opt
                    ? 'bg-blue-50/60 font-medium text-[#1b365d]'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="currentTrl"
                  value={opt}
                  checked={formData.currentTrl === opt}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="leading-snug">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Current Manufacturing Readiness Level (MRL) * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Current Manufacturing Readiness Level (MRL) <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Tick the one row that best describes your current manufacturing maturity</span>
        </div>
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
          <div className="bg-slate-50/80 px-3.5 py-2 border-b border-slate-200 text-xs font-semibold text-slate-700">
            MRL Definition
          </div>
          <div className="divide-y divide-slate-100">
            {mrlOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-start gap-3 px-3.5 py-2.5 cursor-pointer text-xs transition-colors select-none ${
                  formData.currentMrl === opt
                    ? 'bg-blue-50/60 font-medium text-[#1b365d]'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="currentMrl"
                  value={opt}
                  checked={formData.currentMrl === opt}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="leading-snug">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Current Investment Readiness Level (IRL) * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Current Investment Readiness Level (IRL) <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Tick the one row that best describes your current investor engagement</span>
        </div>
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
          <div className="bg-slate-50/80 px-3.5 py-2 border-b border-slate-200 text-xs font-semibold text-slate-700">
            IRL Definition
          </div>
          <div className="divide-y divide-slate-100">
            {irlOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-start gap-3 px-3.5 py-2.5 cursor-pointer text-xs transition-colors select-none ${
                  formData.currentIrl === opt
                    ? 'bg-blue-50/60 font-medium text-[#1b365d]'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="currentIrl"
                  value={opt}
                  checked={formData.currentIrl === opt}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="leading-snug">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Overall Readiness Summary */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Overall Readiness Summary
          </label>
          <span className="text-[11px] font-normal text-slate-500">Briefly describe your composite TRL / MRL / IRL position and what advancing each level requires</span>
        </div>
        <textarea
          name="readinessSummary"
          rows={3}
          value={formData.readinessSummary || ''}
          onChange={handleChange}
          placeholder="e.g. TRL 5 / MRL 3 / IRL 4 — prototype validated in lab, early manufacturing process defined, investor discussions initiated. Next steps: field trial (TRL 6), pilot-line setup (MRL 5), term sheet (IRL 5). (Max 150 words)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

      {/* Current Stage of Startup * Select one */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Current Stage of Startup <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Select one</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {startupStageOptions.map((stage) => {
            const selected = formData.startupStage === stage;
            return (
              <label
                key={stage}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="startupStage"
                  value={stage}
                  checked={selected}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{stage}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Technology Blockers and Next Steps * Key blockers and what this grant will enable */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Technology Blockers and Next Steps <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Key blockers and what this grant will enable</span>
        </div>
        <textarea
          name="techBlockersNextSteps"
          rows={4}
          required
          value={formData.techBlockersNextSteps || ''}
          onChange={handleChange}
          placeholder="Describe current technical or commercial blockers and how this grant funding will help overcome them. (Max 200 words)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
