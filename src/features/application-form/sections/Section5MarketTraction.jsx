import React from 'react';

export const Section5MarketTraction = ({ formData, handleChange, setFormData }) => {
  const customerSegmentOptions = [
    'Type 1 — Enthusiast: tried prototype (free / paid)',
    'Type 2 — Early Adopter: used MVP features (free / paid)',
    'Type 3 — Early Majority: purchased complete solution (paid)',
    'No customers yet — pre-traction'
  ];

  const handleSegmentToggle = (option) => {
    const currentList = Array.isArray(formData.currentCustomerSegments)
      ? formData.currentCustomerSegments
      : [];
    
    let updatedList;
    if (currentList.includes(option)) {
      updatedList = currentList.filter((item) => item !== option);
    } else {
      updatedList = [...currentList, option];
    }

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        currentCustomerSegments: updatedList
      }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Subsection: Customer Traction */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Customer Traction
        </h3>

        <div className="space-y-5">
          {/* Traction Achieved to Date * Pilots, LOIs, customers, partnerships, revenues */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Traction Achieved to Date <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Pilots, LOIs, customers, partnerships, revenues</span>
            </div>
            <textarea
              name="tractionAchieved"
              rows={4}
              required
              value={formData.tractionAchieved || ''}
              onChange={handleChange}
              placeholder="Describe validated traction with evidence: pilots completed (paid/unpaid), paying customers, LOIs, revenues, strategic partnerships, awards. (Max 250 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Current Customer Segments Select all that apply */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Current Customer Segments
              </label>
              <span className="text-[11px] font-normal text-slate-500">Select all that apply</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {customerSegmentOptions.map((option) => {
                const selected = Array.isArray(formData.currentCustomerSegments) && formData.currentCustomerSegments.includes(option);
                return (
                  <label
                    key={option}
                    onClick={() => handleSegmentToggle(option)}
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

          {/* 2-column: No. of Paying Customers / Active Users & No. of Pilots Completed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="h-4 flex items-center gap-1.5 mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  No. of Paying Customers / Active Users
                </label>
                <span className="text-[11px] font-normal text-slate-500">Enter 0 if pre-revenue</span>
              </div>
              <input
                type="text"
                name="payingCustomersCount"
                value={formData.payingCustomersCount || ''}
                onChange={handleChange}
                placeholder="e.g. 0 or 15"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
              />
            </div>

            <div>
              <div className="h-4 flex items-center gap-1.5 mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  No. of Pilots Completed
                </label>
                <span className="text-[11px] font-normal text-slate-500">Paid and unpaid combined</span>
              </div>
              <input
                type="text"
                name="pilotsCompletedCount"
                value={formData.pilotsCompletedCount || ''}
                onChange={handleChange}
                placeholder="e.g. 3"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subsection: Market Opportunity */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Market Opportunity
        </h3>

        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Target Customer and Market Opportunity <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Bottom-up calculation preferred</span>
          </div>
          <textarea
            name="targetCustomerMarketOpportunity"
            rows={4}
            required
            value={formData.targetCustomerMarketOpportunity || ''}
            onChange={handleChange}
            placeholder="Who is your target customer (B2B / B2C / B2G)? Describe the addressable market with a bottom-up rationale and sources. (Max 250 words)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>
      </div>

      {/* Subsection: Social and Sustainability Impact */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Social and Sustainability Impact
        </h3>

        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Social Impact Created to Date <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Economic, environmental, and social dimensions</span>
          </div>
          <textarea
            name="socialImpactCreated"
            rows={4}
            required
            value={formData.socialImpactCreated || ''}
            onChange={handleChange}
            placeholder="Describe concrete, measurable impact on the ground to date: jobs created, communities served, emissions reduced, waste diverted, etc. (Max 200 words)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>
      </div>

    </div>
  );
};
