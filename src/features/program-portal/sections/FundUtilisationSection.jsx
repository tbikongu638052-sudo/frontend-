import React from 'react';

export const FundUtilisationSection = () => {
  const permissibleExpenses = [
    {
      head: 'Outsourcing / Consultancy',
      details: 'Design engineering, testing, specialist consultancy, and expert fees'
    },
    {
      head: 'Development Costs',
      details: 'Raw materials and consumables directly related to product development'
    },
    {
      head: 'Fabrication / Assembly',
      details: 'Assembly, fabrication, or synthesis charges'
    },
    {
      head: 'Manpower',
      details: 'Team salaries — capped at a maximum of 10% of the total approved grant'
    },
    {
      head: 'Intellectual Property',
      details: 'Patent filing and PCT application costs — capped at a maximum of 10% of the total approved grant'
    },
    {
      head: 'Contingency',
      details: 'Unforeseen project costs or price fluctuations — capped at a maximum of 10% of the total approved grant'
    }
  ];

  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Fund Utilisation Guidelines</h2>
      </div>

      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
          How the Grant May Be Used
        </h3>

        {/* Permissible Expenses Table */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2 font-bold text-[#1b365d] text-sm sm:text-base">
            <span className="text-base">☑️</span>
            <span>Permissible Expenses</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs w-full">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b365d] text-white">
                  <th className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-semibold w-2/5 sm:w-1/4 min-w-[140px] sm:min-w-[200px]">
                    Expense Head
                  </th>
                  <th className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-semibold">
                    Details / Guidelines
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {permissibleExpenses.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-bold text-[#1b365d] align-top">
                      {item.head}
                    </td>
                    <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 text-slate-700 leading-relaxed align-top">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Non-Permissible Expenses */}
        <div className="space-y-2.5 pt-4">
          <div className="flex items-center gap-2 font-bold text-[#1b365d] text-sm sm:text-base">
            <span className="text-base">❌</span>
            <span>Non-Permissible Expenses</span>
          </div>

          <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <li>
              <strong className="font-semibold text-slate-900">Prior Obligations:</strong> Repayment of loans or financial commitments made before signing the project agreement.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Personal Accommodation:</strong> Rent or housing-related costs of any kind.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Civil Works:</strong> Construction of permanent infrastructure, sheds, or buildings.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Retrospective Costs:</strong> Any expense incurred before the official project start date.
            </li>
          </ul>
        </div>

        {/* Fund Utilisation Documentation Note */}
        <div className="pt-2">
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/40 border border-amber-200/60 text-slate-700 text-xs sm:text-sm italic leading-relaxed">
            <strong className="font-semibold text-slate-900 not-italic">Fund Utilisation Documentation: </strong>Startups must maintain a dedicated bank account exclusively for this grant project. A Utilisation Certificate (UC) and detailed Expenditure Statement, certified by an independent practising Chartered Accountant (CA), must be submitted at each milestone instalment stage.
          </div>
        </div>
      </div>
    </section>
  );
};
