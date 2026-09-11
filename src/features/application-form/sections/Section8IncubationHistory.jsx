import React from 'react';

export const Section8IncubationHistory = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Is your startup currently incubated at any Incubator / Accelerator? <span className="text-rose-500">*</span>
          </label>
          <select
            name="currentlyIncubated"
            required
            value={formData.currentlyIncubated || 'No'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="No">No</option>
            <option value="Yes - Physical Incubation">Yes - Physical Incubation</option>
            <option value="Yes - Virtual Incubation">Yes - Virtual Incubation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Host Incubator Name (if incubated)
          </label>
          <input
            type="text"
            name="hostIncubatorName"
            value={formData.hostIncubatorName || ''}
            onChange={handleChange}
            placeholder="e.g. KonguTBI, IITM HTIC, Forge, etc."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 mb-0.5">
            Willingness for KonguTBI (TBI@KEC) Co-Incubation <span className="text-rose-500">*</span>
          </label>
          <select
            name="readyForKonguTbiIncubation"
            required
            value={formData.readyForKonguTbiIncubation || 'Yes, both physical & virtual support'}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
          >
            <option value="Yes, both physical & virtual support">Yes, ready for physical or virtual incubation with KonguTBI</option>
            <option value="Yes, virtual incubation mode">Yes, virtual incubation mode with periodic physical milestone reviews</option>
          </select>
        </div>
      </div>
    </div>
  );
};
