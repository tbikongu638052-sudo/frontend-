import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Section1StartupIdentity = ({ formData, handleChange, statesOfIndia }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* 1. Legal Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Legal / Registered Name of the Startup</span>
            <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1 truncate">Exact name as per Incorporation</span>
          </label>
          <input
            type="text"
            name="legalName"
            required
            value={formData.legalName}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 2. Brand Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Startup Brand / Trade Name</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1 truncate">If different from legal name</span>
          </label>
          <input
            type="text"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 3. Date of Incorporation */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            Date of Incorporation <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="date"
            name="incorporationDate"
            required
            value={formData.incorporationDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 4. Website URL */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Website URL</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">https://</span>
          </label>
          <input
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 5. Contact / Application Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            Contact / Application Email Address <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="email"
            name="contactEmail"
            required
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 6. Mobile Number with WhatsApp */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Mobile Number (with WhatsApp)</span>
            <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">+91 XXXXX XXXXX</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            required
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 7. Registered State */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            Registered State <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <select
            name="registeredState"
            required
            value={formData.registeredState}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="">Select State</option>
            {statesOfIndia.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* 8. Headquarter City */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Headquarter City</span>
            <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">City, State</span>
          </label>
          <input
            type="text"
            name="hqCity"
            required
            value={formData.hqCity}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 9. PIN Code */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            PIN Code <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="text"
            name="pinCode"
            required
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 10. Registered Office Address */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Registered Office Address</span>
            <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">Street / Building, City, State, PIN</span>
          </label>
          <textarea
            name="registeredAddress"
            rows={2}
            required
            value={formData.registeredAddress}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 11. Type of Legal Entity */}
        <div className="md:col-span-2 pt-2 border-t border-slate-100">
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Type of Legal Entity <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-2">Startups of Tamil Nadu registered as one of the below are eligible</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1.5">
            {[
              'Private Limited Company',
              'Limited Liability Partnership (LLP)',
              'Registered Partnership Firm'
            ].map((entity) => (
              <label
                key={entity}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.entityType === entity
                    ? 'bg-[#e0f2fe] border-[#0284c7] text-[#0369a1] font-bold shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="entityType"
                  value={entity}
                  checked={formData.entityType === entity}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#0284c7] focus:ring-[#0284c7]"
                />
                <span className="text-xs">{entity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 12. CIN / LLPIN / Registration Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            CIN / LLPIN / Registration Number <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="text"
            name="cinNumber"
            required
            value={formData.cinNumber}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 13. PAN Number of Startup */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            PAN Number of Startup <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="text"
            name="panNumber"
            required
            value={formData.panNumber}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] uppercase"
          />
        </div>

        {/* 14. DPIIT / DIPP Recognition Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
            DPIIT / DIPP Recognition Number <span className="text-rose-500 ml-0.5">*</span>
          </label>
          <input
            type="text"
            name="dpiitNumber"
            required
            value={formData.dpiitNumber}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        {/* 15. GST Registration Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>GST Registration Number</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">If applicable</span>
          </label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] uppercase"
          />
        </div>

        {/* 16. Is your Startup DPIIT Recognised? */}
        <div className="md:col-span-2 pt-2 border-t border-slate-100 space-y-2">
          <label className="block text-xs font-semibold text-slate-800 mb-0.5">
            Is your Startup DPIIT Recognised? <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: 'Yes', val: 'Yes' },
              { label: 'No — intend to apply', val: 'No — intend to apply' }
            ].map((opt) => (
              <label
                key={opt.val}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                  formData.isDpiitRecognised === opt.val
                    ? 'bg-[#e0f2fe] border-[#0284c7] text-[#0369a1] font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="isDpiitRecognised"
                  value={opt.val}
                  checked={formData.isDpiitRecognised === opt.val}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#0284c7] focus:ring-[#0284c7]"
                />
                <span className="text-xs">{opt.label}</span>
              </label>
            ))}
          </div>

          {/* Mandatory Alert Box */}
          <div className="mt-2.5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <span>
              DPIIT Recognition Certificate is mandatory at submission. See Documents Checklist — Section 11.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
