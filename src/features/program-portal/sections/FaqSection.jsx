import React, { useState } from 'react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Are there specific limits on how the contingency fund may be spent?',
      answer: 'Yes. The contingency fund is reserved exclusively for unforeseen project expenses or price fluctuations in raw materials. It is capped at a maximum of 10% of the total approved grant amount and cannot be used for planned or foreseen expenditure.'
    },
    {
      question: 'What happens if a startup fails to achieve a milestone within the proposed timeline?',
      answer: 'Since the grant is released in milestone-based instalments, a delay in milestone achievement will pause subsequent disbursements. The KonguTBI review committee will assess the situation and may offer mentorship support and a formal timeline extension. Founders must submit a formal extension request at least 15 days before the affected milestone deadline.'
    },
    {
      question: 'Can a startup that has already received funding from KonguTBI apply for this grant?',
      answer: 'Yes, conditionally. Applicants are eligible only if the proposed project focuses on an entirely new objective, a distinct technology advancement, or a different scope of work. Prior KonguTBI grant or investment support must not exceed ₹10 Lakhs. The evaluation committee will audit previous funding allocations to ensure there is no financial overlap.'
    },
    {
      question: 'How are milestone reviews conducted before each instalment release?',
      answer: 'The Investment Committee schedules a formal progress review at the close of each milestone phase. Founders must present a technical progress report, demonstrate the relevant prototype feature or deliverable, and submit supporting expenditure documentation to verify that milestone goals have been met and that grant funds have been used for permissible heads only.'
    },
    {
      question: 'What documentation is required to prove proper fund utilisation?',
      answer: "Startups must maintain a dedicated bank account exclusively for this grant project, along with the startup's own contribution. A Utilisation Certificate (UC) and a detailed Expenditure Statement, signed and verified by an independent, practising Chartered Accountant (CA), must be submitted for all permissible expenditure categories at each instalment stage."
    },
    {
      question: 'How is a successful outcome defined under this programme?',
      answer: "Programme success is measured by the venture's ability to transition from prototype to commercial enterprise. Key metrics include achieving a TRL of 8 or 9, a successful product launch, market validation, sustainable revenue generation, and demonstrated readiness for follow-on Angel, Venture Capital, or institutional funding."
    },
    {
      question: 'Will KonguTBI showcase successful startups to investors?',
      answer: 'Yes. Startups that successfully meet their milestone outcomes will be featured in exclusive Demo Days, corporate networking events, and investor pitches organised by KonguTBI — providing direct channels to secure commercial scale-up capital and strategic customer partnerships.'
    },
    {
      question: 'Is co-incubation or multi-incubation permitted under this programme?',
      answer: 'Yes. Co-incubation or multi-incubation is permitted, provided there is no overlapping financial conflict or duplication of grant funding for the same project objective, scope, or milestones.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            Common Questions Answered
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            Find answers to key questions regarding application rules, fund disbursement, eligibility constraints, and incubation guidelines:
          </p>
        </div>

        {/* Interactive Dropdown / Accordion FAQ List */}
        <div className="space-y-2.5 pt-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200/90 bg-slate-50/60 overflow-hidden transition-all duration-200 hover:border-[#1b365d]/40 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 font-bold text-slate-900 text-xs sm:text-sm cursor-pointer select-none"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-[#1b365d] shrink-0">{index + 1}.</span>
                    <span className="text-slate-900 leading-snug">{faq.question}</span>
                  </div>
                  <span 
                    className={`shrink-0 ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#1b365d] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#1b365d] text-white border-[#1b365d]' : 'rotate-0'}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-1 border-t border-slate-200/60 text-slate-700 text-xs sm:text-sm leading-relaxed text-justify sm:text-left bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
