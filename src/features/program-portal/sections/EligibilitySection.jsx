import React from 'react';

export const EligibilitySection = () => {
  return (
    <section className="mt-7 sm:mt-8">
      <div className="inline-flex items-center bg-amber-50/40 border border-[#b8860b]/60 rounded-lg px-4 py-1.5 mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#b8860b]">Eligibility Criteria</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-[#1b365d]">
            Who Can Apply
          </h3>
          <p className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed text-justify">
            This programme is open to early-stage technology startups based in India that meet all of the following requirements:
          </p>
        </div>

        {/* Clean, Non-Congested 3 Criteria Blocks */}
        <div className="space-y-4 pt-1 text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed">
          
          {/* 1. Legal Status & Entity Type */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              1. Legal Status & Entity Type
            </h4>
            <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <li>Private Limited Company</li>
              <li>Limited Liability Partnership (LLP)</li>
              <li>Registered Partnership Firm</li>
              <li>Incorporated in India within the last 5 years from the date of application.</li>
              <li>A valid DPIIT Recognition Certificate is mandatory.</li>
            </ul>
          </div>

          {/* 2. Ownership & Funding Limits */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              2. Ownership & Funding Limits
            </h4>
            <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <li>
                <strong className="font-semibold text-slate-900">Indian Ownership:</strong> Minimum 51% Indian equity ownership or shareholding is required.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">No Duplicate Funding:</strong> Applicants must not have received any other grant for the same project objective, scope, or milestone. Prior KonguTBI grant or investment support must not exceed ₹10 Lakhs.
              </li>
            </ul>
          </div>

          {/* 3. Technology & Market Readiness */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              3. Technology & Market Readiness (<span className="text-[#b8860b]">TRL ≥ 5 · MRL ≥ 5 · IRL ≥ 5</span>)
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Must possess a clear commercialisation roadmap, a defined problem statement, and an identified target customer segment.
            </p>
            <div className="pt-1">
              <span className="font-semibold text-slate-900 text-xs sm:text-sm block mb-1">Eligible Venture Stages:</span>
              <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong className="font-medium text-slate-900">Prototype / Unpaid Pilots:</strong> Testing functional models or conducting non-commercial field trials.
                </li>
                <li>
                  <strong className="font-medium text-slate-900">Pre-Revenue / Paid Pilots:</strong> Running commercial product validation trials without yet achieving scale revenue.
                </li>
                <li>
                  <strong className="font-medium text-slate-900">Early Revenue:</strong> Commercialised products generating lifetime or annual revenue of ₹25 Lakhs or less.
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic mt-1.5">
                Preference is given to ventures that have progressed beyond the prototype or MVP stage with validated customer engagement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
