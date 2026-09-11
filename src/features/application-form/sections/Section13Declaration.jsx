import React from 'react';
import { Upload, CheckCircle2, X, ShieldCheck } from 'lucide-react';

export const Section13Declaration = ({ formData, handleChange, setFormData }) => {
  const declarationPoints = [
    'All information provided in this application form and attached documents is true, accurate, and complete to the best of my / our knowledge and belief.',
    'The proposed innovative project does not in any way duplicate work already done or currently being carried out under any other grant for the same objective, scope, or milestones.',
    'The startup meets all eligibility criteria specified in the Pitch 2Konnect – KonguTBI × KVB CSR Grant Programme guidelines.',
    'I / We have not suppressed any material fact regarding prior funding, incubation history, regulatory non-compliance, or disputes.',
    'I / We agree to comply with all incubation protocols, fund utilisation guidelines, milestone review processes, and reporting requirements of TBI@KEC.',
    'I / We acknowledge that KonguTBI and KVB reserve the right to reject any application at any stage without being obligated to provide specific reasons.',
    'I / We understand that any misrepresentation or suppression of facts may result in immediate disqualification and recovery of any funds disbursed.'
  ];

  const handleSignFileUpload = (fieldKey, file) => {
    if (!file) return;
    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        [fieldKey]: file.name
      }));
    }
  };

  const handleSignFileRemove = (fieldKey) => {
    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        [fieldKey]: ''
      }));
    }
  };

  return (
    <div className="space-y-7">
      
      {/* 1. Declaration Statement Box */}
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/70 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1b365d] uppercase tracking-wider border-b border-slate-200 pb-2">
          <ShieldCheck size={16} />
          <span>DECLARATION</span>
        </div>

        <p className="text-xs text-slate-700 font-medium leading-relaxed">
          I / We, the undersigned, hereby declare that:
        </p>

        <ul className="space-y-2.5 pl-2">
          {declarationPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
              <span className="text-[#1b365d] font-bold text-base leading-none select-none">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Declaration Confirmation Checkbox */}
        <div className="pt-3 border-t border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="declarationAgreed"
              required
              checked={formData.declarationAgreed || false}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
            />
            <span className="text-xs font-semibold text-slate-800 leading-snug">
              I / We confirm that I / we have read, understood, and agree to all the declarations stated above. <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* 2. Signatures & Witness Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Column 1: Authorised Signatory */}
        <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-4 shadow-xs">
          <h4 className="text-xs font-bold text-[#1b365d] uppercase tracking-wider border-b border-slate-100 pb-2">
            Authorised Signatory
          </h4>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="text"
              name="signatoryFullName"
              required
              value={formData.signatoryFullName || ''}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Designation <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="text"
              name="signatoryDesignation"
              required
              value={formData.signatoryDesignation || ''}
              onChange={handleChange}
              placeholder="e.g. Founder & CEO / Managing Director"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Date <span className="text-rose-500 font-bold">*</span>
              </label>
              <input
                type="date"
                name="signatoryDate"
                required
                value={formData.signatoryDate || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Place <span className="text-rose-500 font-bold">*</span>
              </label>
              <input
                type="text"
                name="signatoryPlace"
                required
                value={formData.signatoryPlace || ''}
                onChange={handleChange}
                placeholder="e.g. Erode"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
              />
            </div>
          </div>

          {/* Signature File Upload */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Signature <span className="text-rose-500 font-bold">*</span>
            </label>
            {formData.signatorySignatureFile ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold w-full justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate text-[11px]">{formData.signatorySignatureFile}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSignFileRemove('signatorySignatureFile')}
                  className="text-slate-400 hover:text-rose-600 p-0.5"
                  title="Remove file"
                >
                  <X size={12} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl border border-dashed border-slate-300 hover:border-slate-400 bg-slate-50/50 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors">
                <Upload size={14} className="text-[#1b365d]" />
                <span>Upload Signature (PNG / JPG / PDF)</span>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleSignFileUpload('signatorySignatureFile', e.target.files[0]);
                    }
                  }}
                />
              </label>
            )}
          </div>

          {/* Company Seal File Upload */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Company Seal
            </label>
            {formData.companySealFile ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold w-full justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate text-[11px]">{formData.companySealFile}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSignFileRemove('companySealFile')}
                  className="text-slate-400 hover:text-rose-600 p-0.5"
                  title="Remove file"
                >
                  <X size={12} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl border border-dashed border-slate-300 hover:border-slate-400 bg-slate-50/50 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors">
                <Upload size={14} className="text-[#1b365d]" />
                <span>Upload Company Seal (PNG / JPG / PDF)</span>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleSignFileUpload('companySealFile', e.target.files[0]);
                    }
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* Column 2: Co-Founder / Witness */}
        <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-4 shadow-xs">
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-100 pb-2">
            Co-Founder / Witness <span className="text-[11px] font-normal normal-case text-slate-400">(if applicable)</span>
          </h4>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="witnessFullName"
              value={formData.witnessFullName || ''}
              onChange={handleChange}
              placeholder="e.g. Jane Smith"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              name="witnessDesignation"
              value={formData.witnessDesignation || ''}
              onChange={handleChange}
              placeholder="e.g. Co-Founder & CTO"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="witnessDate"
                value={formData.witnessDate || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Place
              </label>
              <input
                type="text"
                name="witnessPlace"
                value={formData.witnessPlace || ''}
                onChange={handleChange}
                placeholder="e.g. Coimbatore"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white"
              />
            </div>
          </div>

          {/* Witness Signature File Upload */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Signature
            </label>
            {formData.witnessSignatureFile ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold w-full justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate text-[11px]">{formData.witnessSignatureFile}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSignFileRemove('witnessSignatureFile')}
                  className="text-slate-400 hover:text-rose-600 p-0.5"
                  title="Remove file"
                >
                  <X size={12} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl border border-dashed border-slate-300 hover:border-slate-400 bg-slate-50/50 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors">
                <Upload size={14} className="text-[#1b365d]" />
                <span>Upload Signature (PNG / JPG / PDF)</span>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleSignFileUpload('witnessSignatureFile', e.target.files[0]);
                    }
                  }}
                />
              </label>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
