import React from 'react';
import { Upload, CheckCircle2, X, AlertTriangle, Link as LinkIcon, FileText } from 'lucide-react';

export const Section11Documents = ({ formData, handleChange, setFormData }) => {
  const documentsList = [
    { key: 'coi', name: 'Certificate of Incorporation / Registration Document (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'dpiit', name: 'DPIIT Recognition Certificate (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'pan', name: 'PAN Card of Entity (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'moa_aoa', name: 'Memorandum & Articles of Association / LLP Agreement / Partnership Deed (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'board_res', name: 'Board Resolution authorising application and fund acceptance — duly signed with company seal (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'cap_table', name: 'Current Capital Structure and Cap Table — signed by authorised signatory with company seal (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'financial_stmt', name: 'Audited / CA-certified Financial Statements: P&L, Balance Sheet, Cash Flow — FY 2021-22 to FY 2025-26 (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'rev_exp_proj', name: 'Revenue & Expenditure Projections — quarterly, for 3 years (Excel)', status: 'Mandatory', accept: '.xls,.xlsx,.pdf' },
    { key: 'cash_flow_proj', name: 'Cash Flow Projections — quarterly, for 3 years (Excel)', status: 'Mandatory', accept: '.xls,.xlsx,.pdf' },
    { key: 'income_profit_stmt', name: 'Expected Income & Profit Statement — quarterly, for 3 years (Excel)', status: 'Mandatory', accept: '.xls,.xlsx,.pdf' },
    { key: 'pitch_deck', name: 'Startup Pitch Deck — max 15–17 slides; one slide must detail fund use with milestone plan (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'team_cvs', name: 'Team CVs / Resumes — merged PDF of all founders and core team members (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'bank_stmt', name: 'Bank Account Statement — last 6 months, primary business account (PDF)', status: 'Mandatory', accept: '.pdf' },
    { key: 'product_demo_doc', name: 'Product Demo Video or Photographs — Google Drive link with view/download access', status: 'Mandatory', accept: '.pdf,.zip,.mp4' },
    { key: 'patent_cert', name: 'Patent Certificate / Application Filing Receipt (if applicable)', status: 'Optional', accept: '.pdf' },
    { key: 'loi_contracts', name: 'Letters of Intent / Pilot Agreements / Customer Contracts (if available)', status: 'Optional', accept: '.pdf' },
    { key: 'prev_grants', name: 'Previous Grant / Funding Agreements (if applicable)', status: 'Optional', accept: '.pdf' },
    { key: 'awards_press', name: 'Press Coverage, Awards, or Recognition Documentation (if available)', status: 'Optional', accept: '.pdf' },
  ];

  const handleFileUpload = (docKey, file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert(`File "${file.name}" is larger than 5 MB (${(file.size / (1024 * 1024)).toFixed(2)} MB). Please select a file under 5 MB.`);
      return;
    }
    const uploadedDocs = { ...(formData.uploadedDocuments || {}) };
    uploadedDocs[docKey] = file.name;

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        uploadedDocuments: uploadedDocs,
        uploadedDocumentFiles: {
          ...(prev.uploadedDocumentFiles || {}),
          [docKey]: file
        }
      }));
    }
  };

  const handleFileRemove = (docKey) => {
    const uploadedDocs = { ...(formData.uploadedDocuments || {}) };
    delete uploadedDocs[docKey];

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        uploadedDocuments: uploadedDocs
      }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Mandatory Notice Box */}
      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs leading-relaxed">
        <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
        <span>
          All Mandatory documents must be submitted at the time of application. Incomplete submissions will not be processed.
        </span>
      </div>

      {/* Documents Checklist Table */}
      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                <th className="px-3.5 py-2.5 min-w-[340px] border-r border-slate-200">
                  Document
                </th>
                <th className="px-3.5 py-2.5 min-w-[180px] text-center">
                  Upload File
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {documentsList.map((doc) => {
                const uploadedFileName = formData.uploadedDocuments?.[doc.key];
                const isMandatory = doc.status === 'Mandatory';

                return (
                  <tr key={doc.key} className="divide-x divide-slate-200 hover:bg-slate-50/40 transition-colors">
                    <td className="px-3.5 py-3 text-slate-800">
                      <div className="flex items-start gap-2">
                        <FileText size={15} className={`mt-0.5 shrink-0 ${uploadedFileName ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span className="leading-snug">
                          {doc.name}
                          {isMandatory && <span className="text-rose-500 font-bold ml-1">*</span>}
                        </span>
                      </div>
                    </td>

                    <td className="px-3 py-2.5 text-center">
                      {uploadedFileName ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold max-w-[220px]">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span className="truncate text-[11px]">{uploadedFileName}</span>
                          <button
                            type="button"
                            onClick={() => handleFileRemove(doc.key)}
                            className="text-slate-400 hover:text-rose-600 ml-1 p-0.5"
                            title="Remove file"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors shadow-2xs">
                          <Upload size={13} className="text-[#1b365d]" />
                          <span>Choose File</span>
                          <input
                            type="file"
                            accept={doc.accept}
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                handleFileUpload(doc.key, e.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Demo Video / Link */}
      <div>
        <div className="h-4 flex items-center gap-1.5 mb-1.5">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <LinkIcon size={14} className="text-[#1b365d]" />
            <span>Product Demo Video / Link</span>
            <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] font-normal text-slate-500">Google Drive link with view/download access</span>
        </div>
        <input
          type="url"
          name="productDemoVideoUrl"
          required
          value={formData.productDemoVideoUrl || ''}
          onChange={handleChange}
          placeholder="https://drive.google.com/..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
        />
      </div>

    </div>
  );
};
