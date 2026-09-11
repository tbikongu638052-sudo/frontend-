import React from 'react';

export const Section10IntellectualProperty = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Intellectual Property (IP) Status <span className="text-rose-500">*</span>
          </label>
          <select
            name="ipStatus"
            required
            value={formData.ipStatus || 'Patent Applied / Pending'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="Patent Granted">Patent Granted</option>
            <option value="Patent Applied / Pending">Patent Applied / Published</option>
            <option value="Design Registration / Trademark">Design Registration / Trademark</option>
            <option value="Trade Secret / Proprietary Know-how">Trade Secret / Proprietary Know-how</option>
            <option value="No IP Filed Yet (Planning under Grant)">No IP Filed Yet (Planning to File)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Patent Application No. / Registration Reference
          </label>
          <input
            type="text"
            name="patentApplicationNumbers"
            value={formData.patentApplicationNumbers || ''}
            onChange={handleChange}
            placeholder="e.g. 202441012345 IN"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Mandatory Regulatory Approvals / Testing Certifications Needed
          </label>
          <textarea
            name="regulatoryApprovalsRequired"
            rows={3}
            value={formData.regulatoryApprovalsRequired || ''}
            onChange={handleChange}
            placeholder="List necessary certifications (e.g. BIS, CE, ISO 13485, CDSCO, ARAI, FSSAI, PESO) and timelines for acquisition..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>
    </div>
  );
};
