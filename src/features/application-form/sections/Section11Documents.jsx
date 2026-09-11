import React from 'react';
import { FileText, Upload } from 'lucide-react';

export const Section11Documents = ({ formData, handleChange }) => {
  return (
    <div className="space-y-5">
      <p className="text-xs text-slate-600 mb-4">
        Please prepare PDF documents for upload. Files will be verified during the due diligence review.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Doc 1: Pitch Deck */}
        <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-[#1b365d]" size={20} />
              <h4 className="text-xs font-bold text-slate-800">Pitch Deck (Max 15 Slides) <span className="text-rose-500">*</span></h4>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">PDF format, max 20MB</p>
          </div>
          <label className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[#1b365d] text-[#1b365d] font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all">
            <Upload size={14} />
            <span>Select Pitch Deck PDF</span>
            <input type="file" accept=".pdf,.ppt,.pptx" className="hidden" />
          </label>
        </div>

        {/* Doc 2: Certificate of Incorporation */}
        <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-[#1b365d]" size={20} />
              <h4 className="text-xs font-bold text-slate-800">Certificate of Incorporation <span className="text-rose-500">*</span></h4>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">Issued by MCA / Registrar of Companies</p>
          </div>
          <label className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[#1b365d] text-[#1b365d] font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all">
            <Upload size={14} />
            <span>Select COI PDF</span>
            <input type="file" accept=".pdf" className="hidden" />
          </label>
        </div>

        {/* Doc 3: Prototype Photos / Test Reports */}
        <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-[#1b365d]" size={20} />
              <h4 className="text-xs font-bold text-slate-800">Prototype Photos / Test Reports <span className="text-rose-500">*</span></h4>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">High-res photos or lab test results (PDF)</p>
          </div>
          <label className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[#1b365d] text-[#1b365d] font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all">
            <Upload size={14} />
            <span>Select Test Reports PDF</span>
            <input type="file" accept=".pdf,.zip" className="hidden" />
          </label>
        </div>

        {/* Doc 4: DPIIT Certificate */}
        <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-slate-50 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-[#1b365d]" size={20} />
              <h4 className="text-xs font-bold text-slate-800">DPIIT Recognition Certificate</h4>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">Startup India DPIIT recognition (if available)</p>
          </div>
          <label className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[#1b365d] text-[#1b365d] font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all">
            <Upload size={14} />
            <span>Select DPIIT PDF</span>
            <input type="file" accept=".pdf" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};
