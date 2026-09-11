import React from 'react';

export const Section7FundingHistory = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Has your startup received prior Government / Institutional Grants? <span className="text-rose-500">*</span>
          </label>
          <select
            name="receivedPriorGrants"
            required
            value={formData.receivedPriorGrants || 'No'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="No">No, bootstrapped</option>
            <option value="Yes - Under ₹10 Lakhs">Yes - Under ₹10 Lakhs</option>
            <option value="Yes - ₹10 to ₹25 Lakhs">Yes - ₹10 to ₹25 Lakhs</option>
            <option value="Yes - ₹25 to ₹50 Lakhs">Yes - ₹25 to ₹50 Lakhs</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Has your startup raised external Equity / Angel / VC Investment? <span className="text-rose-500">*</span>
          </label>
          <select
            name="raisedExternalEquity"
            required
            value={formData.raisedExternalEquity || 'No'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="No">No external equity raised</option>
            <option value="Yes - Angel / Seed Round">Yes - Angel / Seed Round</option>
            <option value="Yes - Institutional VC">Yes - Institutional VC</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Prior Grant / Funding Programme Details
          </label>
          <textarea
            name="priorGrantDetails"
            rows={3}
            value={formData.priorGrantDetails || ''}
            onChange={handleChange}
            placeholder="Provide agency names (e.g. NIDHI-PRAYAS, BIRAC BIG, EDII-IVP, Startup India Seed Fund), sanction year, and amounts..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>
    </div>
  );
};
