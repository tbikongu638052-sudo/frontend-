import React from 'react';

export const ContactFooterSection = () => {
  const contacts = [
    {
      channel: '📧 Primary Email',
      details: (
        <div className="space-x-2">
          <a href="mailto:tbikec@kongu.edu" className="text-[#1b365d] hover:underline font-medium">tbikec@kongu.edu</a>
          <span className="text-slate-400">|</span>
          <a href="mailto:tbi-kec@kongu.ac.in" className="text-[#1b365d] hover:underline font-medium">tbi-kec@kongu.ac.in</a>
        </div>
      )
    },
    {
      channel: '🌐 Web Portal',
      details: (
        <a href="https://www.tbi-kec.org" target="_blank" rel="noopener noreferrer" className="text-[#1b365d] hover:underline font-medium">
          www.tbi-kec.org
        </a>
      )
    },
    {
      channel: '📞 Telephone',
      details: '+91-4294-226649 / 226650 / 226633'
    },
    {
      channel: '📍 Address',
      details: 'TBI@KEC, Kongu Engineering College Campus, Perundurai, Erode – 638060, Tamil Nadu, India.'
    }
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-4 sm:mt-6 pt-5 sm:pt-6 pb-6 sm:pb-7 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] font-['Graphik',sans-serif]">
      <div className="w-full max-w-[98%] sm:max-w-[96%] xl:max-w-[1480px] mx-auto px-4 sm:px-8">
        
        {/* Contact Header: Deep Blue Title + Right Side Social Icons */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#1b365d]">
            Contact & Inquiries
          </h2>
          
          {/* Social Media Channels */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a 
              href="https://www.facebook.com/KonguTBI/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              title="Facebook"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1b365d] text-[#1b365d] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer transform hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/kongutbi/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              title="Instagram"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1b365d] text-[#1b365d] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer transform hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/kongutbi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1b365d] text-[#1b365d] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer transform hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@kongutbi8360" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              title="YouTube"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1b365d] text-[#1b365d] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer transform hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-2.5">


          {/* Contact Table with Compact Height */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs w-full">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b365d] text-white">
                  <th className="py-2 sm:py-2.5 px-3 sm:px-5 font-semibold w-2/5 sm:w-1/3 min-w-[150px] sm:min-w-[200px]">
                    Contact Channel
                  </th>
                  <th className="py-2 sm:py-2.5 px-3 sm:px-5 font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {contacts.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-2 sm:py-2.5 px-3 sm:px-5 font-bold text-[#1b365d] align-middle whitespace-nowrap">
                      {item.channel}
                    </td>
                    <td className="py-2 sm:py-2.5 px-3 sm:px-5 text-slate-700 leading-relaxed align-middle">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tagline & Copyright Footer Banner - Compact & Single Line */}
          <div className="mt-4 pt-3.5 border-t border-slate-200 text-center space-y-1">
            <p className="font-semibold text-slate-800 text-xs sm:text-sm tracking-wide">
              Empowering Innovation &nbsp;·&nbsp; Accelerating Technology &nbsp;·&nbsp; Creating Impact
            </p>
            <p className="text-[0.75rem] sm:text-xs text-slate-500 leading-relaxed w-full whitespace-normal md:whitespace-nowrap">
              © 2026 Technology Business Incubator @ Kongu Engineering College (TBI@KEC) &nbsp;·&nbsp; KonguTBI × KVB Pitch 2Konnect CSR Grant Programme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


