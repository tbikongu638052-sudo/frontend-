import React, { useState } from 'react';
import { X, Search, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { useNotification } from '../../hooks/useNotification';
import { fetchApplicationStatus } from '../../lib/supabaseClient';

export const CheckStatusModal = ({ isOpen, onClose }) => {
  const { notify } = useNotification();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      notify('Please enter an Application ID or registered email', 'error');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await fetchApplicationStatus(query);
      if (data) {
        const dateStr = data.created_at ? new Date(data.created_at).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }) : '11 Sep 2026';

        setResult({
          appId: data.application_id,
          legalName: data.legal_name,
          program: 'PITCH 2KONNECT — KonguTBI × KVB CSR Grant',
          status: data.status || 'Under Review',
          submissionDate: dateStr,
          evaluationHub: 'KonguTBI @ Kongu Engineering College, Erode',
          statusColor: data.status === 'Approved' ? 'text-emerald-700' : 'text-amber-700',
          bgColor: data.status === 'Approved' ? 'bg-emerald-50' : 'bg-amber-50',
          borderColor: data.status === 'Approved' ? 'border-emerald-200' : 'border-amber-200',
        });
        notify('Application record located successfully!', 'success');
      } else {
        notify('No application found with the provided ID or email. Please check and try again.', 'error');
      }
    } catch (err) {
      console.error(err);
      notify('Failed to query status. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-extrabold text-[#83272e]">
              Check Application Status
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              PITCH 2KONNECT · Prototype-to-Market Grant
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Application Reference ID or Email</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. P2K-2026-123456 or founder@mail.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#83272e] focus:ring-2 focus:ring-[#83272e]/20 outline-none pr-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#83272e] cursor-pointer p-1"
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1b365d] hover:bg-[#0c2340] disabled:bg-slate-400 text-white py-2.5 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Checking Database...</span>
              </>
            ) : (
              <span>Track Status</span>
            )}
          </button>
        </form>

        {/* Results Card */}
        {result && (
          <div className={`mt-5 p-4 rounded-xl border ${result.borderColor} ${result.bgColor} space-y-2.5 text-left`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#83272e] font-mono tracking-wide">{result.appId}</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                {result.submissionDate}
              </span>
            </div>

            <div className="text-xs space-y-1 text-slate-700">
              <div><strong>Programme:</strong> {result.program}</div>
              <div><strong>Incubation Hub:</strong> {result.evaluationHub}</div>
              <div className="pt-1">
                <strong>Current Status:</strong>{' '}
                <span className={`font-extrabold ${result.statusColor}`}>
                  {result.status}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
