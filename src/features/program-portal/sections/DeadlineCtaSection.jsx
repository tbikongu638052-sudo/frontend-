import React from 'react';

export const DeadlineCtaSection = ({ onApplyClick }) => {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="flex flex-col items-center justify-center text-center space-y-4 font-['Graphik',sans-serif]">
        {/* Deep Navy Blue Header Bar */}
        <div className="w-full bg-[#1b365d] py-2.5 sm:py-3 px-4 rounded-lg shadow-xs">
          <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">
            Application Deadline
          </span>
        </div>

        {/* Highlighted Gold Date */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b8860b] tracking-wider pt-1">
          11 OCTOBER 2026
        </div>

        {/* Interactive Link that triggers the Application Form */}
        <div>
          <button
            type="button"
            onClick={onApplyClick}
            className="text-[#1b365d] hover:text-[#0c2340] font-bold text-sm sm:text-base underline underline-offset-4 decoration-2 hover:decoration-[#b8860b] cursor-pointer transition-all transform active:scale-98"
          >
            Click Here to Access the Application Portal
          </button>
        </div>
      </div>
    </section>
  );
};


