import React from 'react';

export const WhatWeLookForSection = () => {
  const attributes = [
    {
      icon: '👥',
      title: 'Committed Founders',
      description: 'A strong, capable, and highly dedicated founding team with relevant domain expertise.'
    },
    {
      icon: '🔍',
      title: 'Validated Problem',
      description: 'A clearly defined problem statement supported by verified customer need and market evidence.'
    },
    {
      icon: '🔒',
      title: 'Defensible Technology',
      description: 'A well-differentiated technology or proprietary innovation — with a patent filed, published, or granted, or evidence of intent to file.'
    },
    {
      icon: '⚗️',
      title: 'Technical Feasibility',
      description: 'Clear evidence of engineering feasibility or active, demonstrable product development progress.'
    },
    {
      icon: '📊',
      title: 'Market Potential',
      description: 'A large, meaningful, and addressable target market with clear demand and demonstrable societal impact.'
    },
    {
      icon: '📈',
      title: 'Early Traction',
      description: 'Initial validation through pilots, customer onboarding, strategic partnerships, or early revenues.'
    },
    {
      icon: '🗺️',
      title: 'Commercial Strategy',
      description: 'A credible commercialisation plan with a clear, realistic strategy for scale-up and market penetration.'
    },
    {
      icon: '🏁',
      title: 'Defined Milestones',
      description: 'Realistic and measurable operational targets achievable within 12 months through the proposed grant funding.'
    }
  ];

  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">What We Look For</h2>
      </div>

      <div className="space-y-2.5">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            Attributes of a Strong Application
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            We seek technology-driven startups that demonstrate the following core attributes across their team, product, and strategy:
          </p>
        </div>

        {/* Attributes Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs w-full">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b365d] text-white">
                  <th className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-semibold w-2/5 sm:w-1/3 min-w-[150px] sm:min-w-[220px]">
                    Key Attribute
                  </th>
                  <th className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-semibold">
                    Description / Evaluation Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {attributes.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-bold text-[#1b365d] align-top whitespace-nowrap">
                      <span className="mr-1.5 sm:mr-2 text-base sm:text-lg inline-block">{item.icon}</span>
                      <span>{item.title}</span>
                    </td>
                    <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 text-slate-700 leading-relaxed align-top">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
