import React from 'react';

export const Section7FundingHistory = ({ formData, handleChange }) => {
  const fundingTypes = [
    { key: 'equity', label: 'Equity / Venture Capital' },
    { key: 'grants', label: 'Grants (Government / CSR)' },
    { key: 'debt', label: 'Debt / Loans' },
    { key: 'bootstrap', label: 'Bootstrapped / Own Funds' },
    { key: 'total', label: 'TOTAL', isTotal: true },
  ];

  const capTableRows = [0, 1, 2, 3];

  return (
    <div className="space-y-6">
      
      {/* 1. Funding Raised to Date * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Funding Raised to Date <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Include all grants, equity, and debt; enter 0 where not applicable</span>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="px-3.5 py-2.5 min-w-[200px] border-r border-slate-200">
                    Funding Type
                  </th>
                  <th className="px-3 py-2.5 min-w-[130px] border-r border-slate-200 text-center">
                    Amount (₹ Cr)
                  </th>
                  <th className="px-3 py-2.5 min-w-[200px] border-r border-slate-200 text-center">
                    Provider / Investor Name
                  </th>
                  <th className="px-3 py-2.5 min-w-[100px] text-center">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {fundingTypes.map((item) => {
                  const isTotal = item.isTotal;
                  return (
                    <tr
                      key={item.key}
                      className={`divide-x divide-slate-200 transition-colors ${
                        isTotal ? 'bg-slate-50/80 font-bold' : 'hover:bg-slate-50/40'
                      }`}
                    >
                      <td className={`px-3.5 py-2 text-slate-800 ${isTotal ? 'font-bold' : 'font-medium'}`}>
                        {item.label}
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`funding_${item.key}_amount`}
                          value={formData[`funding_${item.key}_amount`] || ''}
                          onChange={handleChange}
                          placeholder={isTotal ? 'Auto / Total' : 'e.g. 0.25 or 0'}
                          className={`w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent ${
                            isTotal ? 'font-bold' : ''
                          }`}
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`funding_${item.key}_provider`}
                          value={formData[`funding_${item.key}_provider`] || ''}
                          onChange={handleChange}
                          placeholder={isTotal ? '—' : 'e.g. Angel Investor / BIRAC / Bank'}
                          className="w-full h-full px-3 py-2 text-xs text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`funding_${item.key}_year`}
                          value={formData[`funding_${item.key}_year`] || ''}
                          onChange={handleChange}
                          placeholder={isTotal ? '—' : 'e.g. 2024'}
                          className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Capital Structure / Cap Table * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Capital Structure / Cap Table <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">List all shareholders with current equity holding</span>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="px-3.5 py-2.5 min-w-[220px] border-r border-slate-200">
                    Shareholder / Investor Name
                  </th>
                  <th className="px-3 py-2.5 min-w-[130px] border-r border-slate-200 text-center">
                    % Shareholding
                  </th>
                  <th className="px-3 py-2.5 min-w-[200px] text-center">
                    Equity Instrument Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {capTableRows.map((index) => (
                  <tr key={index} className="divide-x divide-slate-200 hover:bg-slate-50/40 transition-colors">
                    <td className="p-0">
                      <input
                        type="text"
                        name={`captable_name_${index}`}
                        value={formData[`captable_name_${index}`] || ''}
                        onChange={handleChange}
                        placeholder={`Shareholder ${index + 1} Name`}
                        className="w-full h-full px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name={`captable_percent_${index}`}
                        value={formData[`captable_percent_${index}`] || ''}
                        onChange={handleChange}
                        placeholder="e.g. 60%"
                        className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name={`captable_instrument_${index}`}
                        value={formData[`captable_instrument_${index}`] || ''}
                        onChange={handleChange}
                        placeholder="e.g. Equity Shares / CCPS"
                        className="w-full h-full px-3 py-2 text-xs text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. Does any person associated with KonguTBI or KEC hold stock or interest in your startup? * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Does any person associated with KonguTBI or KEC hold stock or interest in your startup? <span className="text-rose-500 font-bold">*</span>
          </label>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {[
            { value: 'Yes', label: 'Yes — provide details below' },
            { value: 'No', label: 'No' },
          ].map((opt) => {
            const selected = formData.tbiKecInterest === opt.value;
            return (
              <label
                key={opt.value}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="tbiKecInterest"
                  value={opt.value}
                  checked={selected}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{opt.label}</span>
              </label>
            );
          })}
        </div>

        {/* If Yes: Provide Details */}
        {formData.tbiKecInterest === 'Yes' && (
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-3">
            <div className="text-xs font-semibold text-slate-700">
              If yes, provide details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Name</label>
                <input
                  type="text"
                  name="tbiKecPersonName"
                  value={formData.tbiKecPersonName || ''}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Role at KEC / TBI</label>
                <input
                  type="text"
                  name="tbiKecPersonRole"
                  value={formData.tbiKecPersonRole || ''}
                  onChange={handleChange}
                  placeholder="e.g. Faculty / Mentor / Staff"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">% Shareholding</label>
                <input
                  type="text"
                  name="tbiKecPersonShare"
                  value={formData.tbiKecPersonShare || ''}
                  onChange={handleChange}
                  placeholder="e.g. 5%"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Instrument Type</label>
                <input
                  type="text"
                  name="tbiKecPersonInstrument"
                  value={formData.tbiKecPersonInstrument || ''}
                  onChange={handleChange}
                  placeholder="e.g. Equity / Advisory Shares"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Does any incubator currently hold equity in your startup? * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Does any incubator currently hold equity in your startup? <span className="text-rose-500 font-bold">*</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ].map((opt) => {
            const selected = formData.incubatorEquityHold === opt.value;
            return (
              <label
                key={opt.value}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                  selected
                    ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="incubatorEquityHold"
                  value={opt.value}
                  checked={selected}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                />
                <span className="text-xs">{opt.label}</span>
              </label>
            );
          })}
        </div>

        {/* If Yes: Name of Incubator & Equity Instrument Details */}
        {formData.incubatorEquityHold === 'Yes' && (
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 flex items-center gap-1.5 mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    If yes — Name of Incubator
                  </label>
                </div>
                <input
                  type="text"
                  name="incubatorNameWithEquity"
                  value={formData.incubatorNameWithEquity || ''}
                  onChange={handleChange}
                  placeholder="e.g. KonguTBI / IITM Incubation Cell"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
                />
              </div>

              <div>
                <div className="h-4 flex items-center gap-1.5 mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Equity Instrument Details
                  </label>
                  <span className="text-[11px] font-normal text-slate-500">% held and type of instrument</span>
                </div>
                <input
                  type="text"
                  name="incubatorEquityInstrumentDetails"
                  value={formData.incubatorEquityInstrumentDetails || ''}
                  onChange={handleChange}
                  placeholder="e.g. 3% Common Equity Shares"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Awards, Recognitions, and Press Coverage */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Awards, Recognitions, and Press Coverage
          </label>
          <span className="text-[11px] font-normal text-slate-500">Include dates and issuing organisations</span>
        </div>
        <textarea
          name="awardsAndRecognitions"
          rows={4}
          value={formData.awardsAndRecognitions || ''}
          onChange={handleChange}
          placeholder="List all awards, recognitions, certifications, and notable media coverage received to date."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
