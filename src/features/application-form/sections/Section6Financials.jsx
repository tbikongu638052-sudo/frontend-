import React from 'react';

export const Section6Financials = ({ formData, handleChange }) => {
  const metrics = [
    { key: 'rev', label: 'Revenue (₹ Lakh)' },
    { key: 'pl', label: 'Profit / Loss (₹ Lakh)' },
    { key: 'exp', label: 'Total Expenditure (₹ Lakh)' },
  ];

  const years = [
    { key: '23', label: 'FY 2022–23' },
    { key: '24', label: 'FY 2023–24' },
    { key: '25', label: 'FY 2024–25' },
    { key: '26', label: 'FY 2025–26 (till date)' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Historical Financial Performance * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-2">
          <label className="text-xs font-semibold text-slate-700">
            Historical Financial Performance <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Enter NIL if pre-revenue; complete all available years</span>
        </div>

        {/* Financial Performance Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="px-3.5 py-2.5 min-w-[160px] text-slate-800 border-r border-slate-200">
                    Financial Metric
                  </th>
                  {years.map((year) => (
                    <th key={year.key} className="px-3 py-2.5 text-center min-w-[120px] border-r border-slate-200 last:border-r-0">
                      {year.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {metrics.map((metric) => (
                  <tr key={metric.key} className="divide-x divide-slate-200 hover:bg-slate-50/40 transition-colors">
                    <td className="px-3.5 py-2 font-medium text-slate-700 bg-slate-50/30">
                      {metric.label}
                    </td>
                    {years.map((year) => {
                      const fieldName = `fin_${metric.key}_${year.key}`;
                      return (
                        <td key={year.key} className="p-0">
                          <input
                            type="text"
                            name={fieldName}
                            value={formData[fieldName] || ''}
                            onChange={handleChange}
                            placeholder="e.g. 12.50 or NIL"
                            className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload Note */}
        <div className="mt-2.5 text-[11px] text-slate-600 bg-slate-50/90 p-2.5 rounded-lg border border-slate-200 leading-relaxed">
          Upload audited Financial Statements (P&amp;L, Balance Sheet, Cash Flow) for FY 2021-22 to FY 2025-26. If unavailable for any year, provide written justification on company letterhead.
        </div>
      </div>

      {/* Cumulative Revenue to Date (₹) * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Cumulative Revenue to Date (₹) <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Sum across all years; enter 0 if pre-revenue</span>
        </div>
        <input
          type="text"
          name="cumulativeRevenue"
          required
          value={formData.cumulativeRevenue || ''}
          onChange={handleChange}
          placeholder="e.g. ₹ 25,00,000 (FY 2024-25: ₹ 10,00,000 + FY 2025-26: ₹ 15,00,000)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
        />
      </div>

      {/* Current Financial Needs * */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Current Financial Needs <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Total requirements across equity, debt, and grants with utilisation plan</span>
        </div>
        <textarea
          name="currentFinancialNeeds"
          rows={4}
          required
          value={formData.currentFinancialNeeds || ''}
          onChange={handleChange}
          placeholder="Describe each funding instrument required and the high-level utilisation plan for each. (Max 200 words)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
        />
      </div>

    </div>
  );
};
