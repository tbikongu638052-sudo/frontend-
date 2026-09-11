import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Section8IncubationHistory = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      
      {/* 1. Are you currently or have you previously been part of any Incubation / Accelerator programme? * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Are you currently or have you previously been part of any Incubation / Accelerator programme? <span className="text-rose-500 font-bold">*</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {['Yes', 'No'].map((opt) => {
            const selected = formData.isIncubationPart === opt;
            return (
              <label
                key={opt}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="isIncubationPart"
                  value={opt}
                  checked={selected}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{opt}</span>
              </label>
            );
          })}
        </div>

        {/* If Yes: provide details */}
        {formData.isIncubationPart === 'Yes' && (
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-700">If yes, provide details</span>
              <span className="text-[11px] font-normal text-slate-500">
                Name of Centre | Programme Name | Period (From–To) | Current Status
              </span>
            </div>
            <textarea
              name="incubationProgrammeDetails"
              rows={3}
              value={formData.incubationProgrammeDetails || ''}
              onChange={handleChange}
              placeholder="e.g. KonguTBI | NIDHI Accelerator | Jan 2023 - Dec 2023 | Graduated (Add one entry per line)"
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>
        )}
      </div>

      {/* 2. Have you previously received a Grant / CSR Funding through any incubator? * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Have you previously received a Grant / CSR Funding through any incubator? <span className="text-rose-500 font-bold">*</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {['Yes', 'No'].map((opt) => {
            const selected = formData.receivedPriorGrantThroughIncubator === opt;
            return (
              <label
                key={opt}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="receivedPriorGrantThroughIncubator"
                  value={opt}
                  checked={selected}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{opt}</span>
              </label>
            );
          })}
        </div>

        {/* If Yes: provide details */}
        {formData.receivedPriorGrantThroughIncubator === 'Yes' && (
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2 mb-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-700">If yes, provide details</span>
              <span className="text-[11px] font-normal text-slate-500">
                Incubator Name | Grant Name | Amount (₹) | Year | Project Scope
              </span>
            </div>
            <textarea
              name="priorIncubatorGrantDetails"
              rows={3}
              value={formData.priorIncubatorGrantDetails || ''}
              onChange={handleChange}
              placeholder="e.g. KonguTBI | NIDHI-PRAYAS | ₹5,00,000 | 2023 | Prototype Development (Add one entry per line)"
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>
        )}

        {/* Mandatory Disclosure Alert Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs leading-relaxed">
          <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
          <span>
            Applicants who have received prior grants in any forms from KonguTBI totalling more than ₹10 Lakhs for the same project scope are NOT eligible. Disclose all prior grant funding fully and accurately.
          </span>
        </div>
      </div>

      {/* 3. 2-Column Metrics: Total Bootstrapped & Total External Funding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Total Bootstrapped / Own Investment to Date (₹) <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">As on date of application</span>
          </div>
          <input
            type="text"
            name="totalBootstrappedAmount"
            required
            value={formData.totalBootstrappedAmount || ''}
            onChange={handleChange}
            placeholder="e.g. ₹ 5,00,000"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          />
        </div>

        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Total External Funding — Grants &amp; Seed (₹) <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">As on date of application</span>
          </div>
          <input
            type="text"
            name="totalExternalFundingAmount"
            required
            value={formData.totalExternalFundingAmount || ''}
            onChange={handleChange}
            placeholder="e.g. ₹ 10,00,000"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          />
        </div>
      </div>

      {/* 4. Legal / Regulatory Compliance */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Legal / Regulatory Compliance
          </label>
          <span className="text-[11px] font-normal text-slate-500">Regulations governing your startup; highlight regulatory challenges</span>
        </div>
        <textarea
          name="legalRegulatoryCompliance"
          rows={4}
          value={formData.legalRegulatoryCompliance || ''}
          onChange={handleChange}
          placeholder="Describe the regulatory framework applicable to your product / sector and any compliance challenges faced."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
