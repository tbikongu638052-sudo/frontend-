import React, { useState } from 'react';
import { X, CheckCircle2, UploadCloud, FileText } from 'lucide-react';
import { useNotification } from '../../hooks/useNotification';

export const ApplyModal = ({ isOpen, onClose }) => {
  const { notify } = useNotification();
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    email: '',
    phone: '',
    institution: '',
    sector: 'AgriTech & Food Processing',
    grantAmount: '₹5,00,000 - ₹10,00,000',
    stage: 'Working Prototype (TRL 4 - TRL 6)',
    pitchSummary: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'P2K-2026-' + Math.floor(100000 + Math.random() * 900000);
    setAppId(generatedId);
    setSubmitted(true);
    notify(`Grant application submitted successfully! Application ID: ${generatedId}`, 'success');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9d4851]">
              PITCH 2KONNECT · KVB CSR GRANT
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#83272e]">
              {submitted ? 'Application Received' : 'Call for Applications'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              KonguTBI @ Kongu Engineering College × Karur Vysya Bank
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            
            <h4 className="text-xl font-extrabold text-slate-900">
              Application Submitted Successfully!
            </h4>
            
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your grant application for <strong>PITCH 2KONNECT</strong> has been registered with KonguTBI evaluation committee.
            </p>

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 inline-block">
              <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Application Reference Number</span>
              <span className="text-2xl font-extrabold text-[#83272e] tracking-wider font-mono">{appId}</span>
            </div>

            <p className="text-xs text-slate-500">
              Confirmation and pitch presentation guidelines sent to <strong>{formData.email}</strong>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full bg-[#9d4851] hover:bg-[#83272e] text-white font-bold py-3 rounded-xl transition-all cursor-pointer shadow-md"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Startup / Team Info */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Project / Startup Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. AgriSense Tech Solutions"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all"
                value={formData.startupName}
                onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Lead Innovator / Founder Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all"
                  value={formData.founderName}
                  onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="founder@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">College / Institution / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Kongu Engineering College"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Sector / Domain *</label>
                <select
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none bg-white transition-all"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                >
                  <option>AgriTech & Food Processing</option>
                  <option>CleanTech & Renewable Energy</option>
                  <option>HealthTech & Biomedical</option>
                  <option>Industry 4.0, IoT & AI</option>
                  <option>Textile & Advanced Materials</option>
                  <option>Water & Waste Management</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Prototype Readiness Level *</label>
                <select
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none bg-white transition-all"
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                >
                  <option>Working Prototype (TRL 4 - TRL 6)</option>
                  <option>Pilot / Field Testing Ready</option>
                  <option>Commercialized / Early Customers</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Brief Innovation Summary & Market Potential *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your prototype, technical uniqueness, target customers, and how the KVB CSR Grant will accelerate your market entry..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none transition-all resize-none"
                value={formData.pitchSummary}
                onChange={(e) => setFormData({ ...formData, pitchSummary: e.target.value })}
              />
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#9d4851] hover:bg-[#83272e] text-white px-7 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
              >
                Submit Grant Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
