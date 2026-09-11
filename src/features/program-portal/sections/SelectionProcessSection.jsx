import React from 'react';

export const SelectionProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Online Call for Applications',
      description: 'Startups sensitised and scouted through social media, partner events, and institutional outreach.'
    },
    {
      number: '02',
      title: 'Application Shortlisting',
      description: "Eligibility screening by TBI@KEC's internal committee and host institution experts."
    },
    {
      number: '03',
      title: 'Startup Selection for Boot Camp',
      description: 'Approximately 10–15 promising startups selected by the Selection Committee for the structured boot camp.'
    },
    {
      number: '04',
      title: 'Capacity Building',
      description: 'Online and offline sessions with domain experts covering technology, business, and market readiness.'
    },
    {
      number: '05',
      title: 'Demo Day — Final Pitch',
      description: '5–6 startups selected by the Investment Committee following competitive final pitch presentations.'
    },
    {
      number: '06',
      title: 'Agreement & Fund Release',
      description: 'Grant agreements signed with clear milestones, timelines, and milestone-linked disbursement conditions.'
    },
    {
      number: '07',
      title: 'Progress Review & Project Completion',
      description: "Milestone-based progress monitored by KonguTBI's Monitoring Committee throughout the 12-month project period."
    }
  ];

  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Selection Process</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            How We Select Grantees
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            A rigorous, multi-stage evaluation ensures only the most investment-ready and high-impact ventures are selected. All applications undergo initial screening by TBI@KEC. Shortlisted startups may be invited for presentations, technical discussions, and due diligence. Final funding decisions are subject to evaluation and approval by the designated Investment Committee.
          </p>
        </div>

        {/* 7-Step Selection Process Cards */}
        <div className="space-y-2.5 pt-1">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-[#1b365d]/30 transition-colors shadow-xs"
            >
              <span className="shrink-0 font-bold text-[#1b365d] bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs sm:text-sm shadow-2xs">
                {step.number}
              </span>
              <div className="space-y-0.5">
                <h4 className="font-bold text-slate-900 text-sm sm:text-[0.95rem]">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
