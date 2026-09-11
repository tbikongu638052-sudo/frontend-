import React from 'react';

export const Section13Declaration = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="declarationConfirmed"
            name="declarationConfirmed"
            required
            checked={formData.declarationConfirmed || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-[#1b365d] focus:ring-[#1b365d] cursor-pointer"
          />
          <label htmlFor="declarationConfirmed" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
            <strong>Truthfulness & Compliance Declaration:</strong> I / We hereby declare that all particulars, answers, and documents furnished in this application for the <strong>PITCH 2KONNECT — KonguTBI × KVB CSR Grant</strong> are true, correct, and complete to the best of my/our knowledge. I/We understand that any false statement or misrepresentation will result in immediate disqualification and grant recovery.
          </label>
        </div>

        <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
          <input
            type="checkbox"
            id="incubationTermsConfirmed"
            name="incubationTermsConfirmed"
            required
            checked={formData.incubationTermsConfirmed || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-[#1b365d] focus:ring-[#1b365d] cursor-pointer"
          />
          <label htmlFor="incubationTermsConfirmed" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
            <strong>Incubation & Disbursement Terms Agreement:</strong> I/We accept that the grant will be disbursed in milestone-based tranches subject to evaluation by the TBI@KEC Project Monitoring Committee, and we agree to execute the formal grant agreement and incubation covenants upon selection.
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Authorised Signatory Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="signatoryName"
            required
            value={formData.signatoryName || ''}
            onChange={handleChange}
            placeholder="Full Legal Name"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Place <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="signatoryPlace"
            required
            value={formData.signatoryPlace || ''}
            onChange={handleChange}
            placeholder="e.g. Erode / Coimbatore / Chennai"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>
    </div>
  );
};
