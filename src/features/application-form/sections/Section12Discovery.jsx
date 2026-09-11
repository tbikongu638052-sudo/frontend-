import React from 'react';

export const Section12Discovery = ({ formData, handleChange, setFormData }) => {
  const discoveryChannels = [
    'Emailer',
    'Facebook',
    'Instagram',
    'Twitter / X',
    'LinkedIn',
    'WhatsApp',
    'KonguTBI Website',
    'Referral',
    'Other — specify below'
  ];

  const handleDiscoveryToggle = (channel) => {
    const currentList = Array.isArray(formData.discoverySources) ? formData.discoverySources : [];
    let updatedList;
    if (currentList.includes(channel)) {
      updatedList = currentList.filter((item) => item !== channel);
    } else {
      updatedList = [...currentList, channel];
    }

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        discoverySources: updatedList
      }));
    }
  };

  const isOtherSelected = Array.isArray(formData.discoverySources) && formData.discoverySources.includes('Other — specify below');

  return (
    <div className="space-y-6">
      
      {/* How did you learn about this Grant Programme? Select all that apply */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            How did you learn about this Grant Programme?
          </label>
          <span className="text-[11px] font-normal text-slate-500">Select all that apply</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-4">
          {discoveryChannels.map((channel) => {
            const selected = Array.isArray(formData.discoverySources) && formData.discoverySources.includes(channel);
            return (
              <label
                key={channel}
                onClick={() => handleDiscoveryToggle(channel)}
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
                <span className="text-xs">{channel}</span>
              </label>
            );
          })}
        </div>

        {/* If other, please specify */}
        {isOtherSelected && (
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                If other, please specify
              </label>
            </div>
            <input
              type="text"
              name="heardFromOther"
              value={formData.heardFromOther || ''}
              onChange={handleChange}
              placeholder="Please specify source..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>
        )}
      </div>

      {/* Additional Details */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Additional Details
          </label>
          <span className="text-[11px] font-normal text-slate-500">Any information not captured in the sections above</span>
        </div>
        <textarea
          name="additionalDetails"
          rows={4}
          value={formData.additionalDetails || ''}
          onChange={handleChange}
          placeholder="Enter any additional information, notes, or clarifications here..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
