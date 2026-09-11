import React from 'react';

export const Section12Discovery = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            How did you discover the PITCH 2KONNECT CSR Grant Programme? <span className="text-rose-500">*</span>
          </label>
          <select
            name="heardFrom"
            required
            value={formData.heardFrom || 'KonguTBI Official Website / Social Media'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="KonguTBI Official Website / Social Media">KonguTBI Official Website / Social Media (LinkedIn/Insta)</option>
            <option value="Karur Vysya Bank (KVB) Branch / Website">Karur Vysya Bank (KVB) Branch / Website</option>
            <option value="Startup India / Startup TN Portal">Startup India / Startup TN Portal</option>
            <option value="Incubation Partner / Academic Institution">Incubation Partner / Academic Institution</option>
            <option value="Fellow Startup Founder / Word of Mouth">Fellow Startup Founder / Word of Mouth</option>
            <option value="News / Media Publication">News / Media Publication</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Referred By (Name of Person / Organisation)
          </label>
          <input
            type="text"
            name="referredBy"
            value={formData.referredBy || ''}
            onChange={handleChange}
            placeholder="e.g. Prof. Ramanathan / EDII Hub Erode"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>
    </div>
  );
};
