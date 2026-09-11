import React from 'react';

export const Section10IntellectualProperty = ({ formData, handleChange, setFormData }) => {
  const ipStatusOptions = [
    'Patent Filed',
    'Patent Published',
    'Patent Granted',
    'Intend to File',
    'Design Registration',
    'Trademark Registered',
    'Not Applicable'
  ];

  const handleIpStatusToggle = (option) => {
    const currentList = Array.isArray(formData.ipStatus) ? formData.ipStatus : [];
    let updatedList;
    if (currentList.includes(option)) {
      updatedList = currentList.filter((item) => item !== option);
    } else {
      updatedList = [...currentList, option];
    }

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        ipStatus: updatedList
      }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 1. IP / Patent Status * Select all that apply */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            IP / Patent Status <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Select all that apply</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {ipStatusOptions.map((option) => {
            const selected = Array.isArray(formData.ipStatus) && formData.ipStatus.includes(option);
            return (
              <label
                key={option}
                onClick={() => handleIpStatusToggle(option)}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#1b365d] border-slate-300 focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Patent / IP Application Number(s) */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Patent / IP Application Number(s)
          </label>
          <span className="text-[11px] font-normal text-slate-500">List all relevant numbers</span>
        </div>
        <input
          type="text"
          name="patentApplicationNumbers"
          value={formData.patentApplicationNumbers || ''}
          onChange={handleChange}
          placeholder="e.g. IN202341012345"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
        />
      </div>

      {/* 3. Core Innovation / Proprietary Technology * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Core Innovation / Proprietary Technology <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">What is novel, inventive, and protectable about your innovation?</span>
        </div>
        <textarea
          name="coreProprietaryInnovation"
          rows={4}
          required
          value={formData.coreProprietaryInnovation || ''}
          onChange={handleChange}
          placeholder="Describe the IP underpinning the product and its defensibility against competition. (Max 200 words)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
