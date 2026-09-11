import React, { useState } from 'react';
import { ApplyModal } from './ApplyModal';
import { CheckStatusModal } from './CheckStatusModal';
import { ToastContainer } from '../../components/ui/Toast';
import tbiLogo from '../../assets/tbi logo.png';
import kvbLogo from '../../assets/kvb logo.png';

// Modular Section Components
import {
  DescriptionSection,
  ObjectiveSection,
  BenefitsSection,
  FocusSectorsSection,
  ImpactFocusSection,
  EligibilitySection,
  FundingDisbursementSection,
  FundUtilisationSection,
  IncubationTermsSection,
  WhatWeLookForSection,
  SelectionProcessSection,
  OutcomesSection,
  FaqSection,
  DeadlineCtaSection,
  ContactFooterSection
} from './sections';

export const ProgramPortal = ({ onNavigateToApply }) => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const handleApplyClick = () => {
    if (onNavigateToApply) {
      onNavigateToApply();
    } else {
      setIsApplyOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-0 font-['Graphik',sans-serif]">
      {/* Top Navbar Header with Centered Logos and Bottom Shadow */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-18 sm:h-24 md:h-26 flex items-center justify-center">
        <div className="w-full max-w-[96%] xl:max-w-[1480px] mx-auto px-3 sm:px-4 h-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-8 sm:gap-20 md:gap-24 h-full">
            <img 
              src={tbiLogo} 
              alt="Kongu TBI Logo" 
              className="h-11 sm:h-16 md:h-19 w-auto object-contain scale-110 sm:scale-145 transform origin-center"
            />
            <img 
              src={kvbLogo} 
              alt="Karur Vysya Bank Logo" 
              className="h-10 sm:h-16 md:h-20 w-auto object-contain scale-130 sm:scale-185 transform origin-center"
            />
          </div>
        </div>
      </header>

      {/* Main Container Card */}
      <main className="w-full max-w-[98%] sm:max-w-[96%] xl:max-w-[1480px] mx-auto px-2 sm:px-8 mt-4 sm:mt-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-10 lg:p-12">
          
          {/* Header Row: Title, Deadline, and Apply CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 pb-2">
            <div className="flex-1">
              
              {/* Program Title in Deep Navy Blue Color */}
              <h1 className="text-xl sm:text-3xl lg:text-[2.2rem] font-medium text-[#1b365d] tracking-tight leading-snug">
                PITCH 2KONNECT - KonguTBI × KVB CSR Grant Programme | Prototype-to-Market Grant
              </h1>

              {/* Deadline immediately after */}
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
                Deadline: Aug 31, 2026
              </div>
            </div>

            {/* Desktop Apply CTA */}
            <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0 pt-1">
              <button
                onClick={handleApplyClick}
                className="bg-[#1b365d] hover:bg-[#0c2340] text-white px-8 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
              >
                Apply
              </button>
              <button
                onClick={() => setIsStatusOpen(true)}
                className="text-xs text-slate-700 hover:text-[#1b365d] hover:underline cursor-pointer font-normal"
              >
                Already applied? Check Status
              </button>
            </div>
          </div>

          {/* Tags Bar */}
          <div className="text-xs sm:text-sm font-medium text-slate-900 py-4 leading-relaxed">
            PITCH 2KONNECT | KonguTBI | KVB CSR Grant | Prototype-to-Market | Innovation Grant | Kongu Engineering College | Karur Vysya Bank | Tamil Nadu Startups
          </div>

          {/* Section 1: Description */}
          <DescriptionSection />

          {/* Section 2: Programme Objective */}
          <ObjectiveSection />

          {/* Section 3: Programme Benefits */}
          <BenefitsSection />

          {/* Section 4: Focus Sectors */}
          <FocusSectorsSection />

          {/* Section 5: Innovation & Impact Focus */}
          <ImpactFocusSection />

          {/* Section 6: Eligibility Criteria */}
          <EligibilitySection />

          {/* Section 7: Funding & Disbursement */}
          <FundingDisbursementSection />

          {/* Section 8: Fund Utilisation Guidelines */}
          <FundUtilisationSection />

          {/* Section 9: Incubation Terms */}
          <IncubationTermsSection />

          {/* Section 10: What We Look For */}
          <WhatWeLookForSection />

          {/* Section 11: Selection Process */}
          <SelectionProcessSection />

          {/* Section 12: Key Programme Outcomes */}
          <OutcomesSection />

          {/* Section 13: Frequently Asked Questions (Interactive Dropdown / Accordion) */}
          <FaqSection />

          {/* Section 14: Application Deadline & Portal Access CTA */}
          <DeadlineCtaSection onApplyClick={handleApplyClick} />

        </div>
      </main>

      {/* Section 15: Full-Width Contact & Inquiries Footer */}
      <ContactFooterSection />

      {/* Interactive Modals */}
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <CheckStatusModal isOpen={isStatusOpen} onClose={() => setIsStatusOpen(false)} />
      <ToastContainer />
    </div>
  );
};
