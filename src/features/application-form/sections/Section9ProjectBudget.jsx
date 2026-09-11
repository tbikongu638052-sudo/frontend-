import React from 'react';

export const Section9ProjectBudget = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Total Grant Amount Requested <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="grantAmountRequested"
            required
            readOnly
            value="₹20,00,000 (Maximum Approved Grant)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 font-bold text-[#1b365d]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Project Duration <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="projectDurationMonths"
            required
            readOnly
            value="12 Months (Milestone-driven)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 font-bold text-[#1b365d]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Milestone 1 Deliverable (Month 1-4 · 30% Disbursement = ₹6,00,000) <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="milestone1Description"
            rows={2}
            required
            value={formData.milestone1Description || ''}
            onChange={handleChange}
            placeholder="Deliverables: Component procurement, engineering design finalization, bench-level integration..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Milestone 2 Deliverable (Month 5-8 · 40% Disbursement = ₹8,00,000) <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="milestone2Description"
            rows={2}
            required
            value={formData.milestone2Description || ''}
            onChange={handleChange}
            placeholder="Deliverables: Pilot prototype fabrication, functional testing, initial client trial demonstrations..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Milestone 3 Deliverable (Month 9-12 · 30% Disbursement = ₹6,00,000) <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="milestone3Description"
            rows={2}
            required
            value={formData.milestone3Description || ''}
            onChange={handleChange}
            placeholder="Deliverables: Commercial-grade validation (TRL 8), certification completion, first paying customer deployment..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>
    </div>
  );
};
