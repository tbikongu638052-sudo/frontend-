import React from 'react';

export const Section3ProductOverview = ({ formData, handleChange, setFormData }) => {
  const natureOptions = [
    'New Product / Technology',
    'Significantly Improved Existing Product',
    'New Process / Method',
    'New Business Model',
    'Service Innovation',
    'Platform / Marketplace'
  ];

  const handleNatureToggle = (option) => {
    const currentList = Array.isArray(formData.natureOfInnovation)
      ? formData.natureOfInnovation
      : [];
    
    let updatedList;
    if (currentList.includes(option)) {
      updatedList = currentList.filter((item) => item !== option);
    } else {
      updatedList = [...currentList, option];
    }

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        natureOfInnovation: updatedList
      }));
    }
  };

  const domainOptions = [
    'Artificial Intelligence / ML',
    'IoT & Embedded Systems',
    'Biotechnology',
    'Renewable Energy',
    'Nanotechnology',
    'Advanced Materials',
    'Robotics & Automation',
    'Blockchain',
    'Other'
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Project / Product Title * 5–10 words */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Project / Product Title <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">5–10 words</span>
          </div>
          <input
            type="text"
            name="projectTitle"
            required
            value={formData.projectTitle || ''}
            onChange={handleChange}
            placeholder="e.g. AI-driven Smart Sensor Module for Precision Irrigation"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          />
        </div>

        {/* One-Sentence Pitch * Summarise your venture in a single compelling sentence */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              One-Sentence Pitch <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Summarise your venture in a single compelling sentence</span>
          </div>
          <input
            type="text"
            name="oneSentencePitch"
            required
            value={formData.oneSentencePitch || ''}
            onChange={handleChange}
            placeholder="e.g. We help [target customer] achieve [outcome] through [unique approach]."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          />
        </div>

        {/* Name of Proposed Product / Solution * */}
        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Name of Proposed Product / Solution <span className="text-rose-500 font-bold">*</span>
            </label>
          </div>
          <input
            type="text"
            name="proposedProductName"
            required
            value={formData.proposedProductName || ''}
            onChange={handleChange}
            placeholder="e.g. AgroSensor AI"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          />
        </div>

        {/* Core Science / Technology Domain * */}
        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Core Science / Technology Domain <span className="text-rose-500 font-bold">*</span>
            </label>
          </div>
          <select
            name="coreTechDomain"
            required
            value={formData.coreTechDomain || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
          >
            <option value="">Select Domain</option>
            {domainOptions.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Products / Services Offered * List all with a brief description */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Products / Services Offered <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">List all with a brief description</span>
          </div>
          <textarea
            name="productsServicesOffered"
            rows={3}
            required
            value={formData.productsServicesOffered || ''}
            onChange={handleChange}
            placeholder="Product / Service Name — Brief Description (one per line)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>

        {/* Problem Statement * What problem are you solving, and for whom? */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Problem Statement <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">What problem are you solving, and for whom?</span>
          </div>
          <textarea
            name="problemStatement"
            rows={4}
            required
            value={formData.problemStatement || ''}
            onChange={handleChange}
            placeholder="Describe the problem in the sector where the innovation is proposed. Include scale, urgency, and evidence of the gap. (Max 250 words)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>

        {/* Proposed Solution * Describe the product/solution and the science or technology behind it */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Proposed Solution <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Describe the product/solution and the science or technology behind it</span>
          </div>
          <textarea
            name="proposedSolution"
            rows={4}
            required
            value={formData.proposedSolution || ''}
            onChange={handleChange}
            placeholder="Explain how your solution addresses the problem — the technology, approach, and mechanism. (Max 300 words)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>

        {/* Innovation and Differentiation * What is unique, defensible, or novel compared to existing alternatives? */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Innovation and Differentiation <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">What is unique, defensible, or novel compared to existing alternatives?</span>
          </div>
          <textarea
            name="innovationDifferentiation"
            rows={4}
            required
            value={formData.innovationDifferentiation || ''}
            onChange={handleChange}
            placeholder="Describe your moat — proprietary technology, process, data advantage, regulatory positioning, or other differentiation. (Max 200 words)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>

        {/* Nature of Innovation * Select all that apply */}
        <div className="md:col-span-2">
          <div className="h-4 flex items-center gap-1.5 mb-2">
            <label className="text-xs font-semibold text-slate-700">
              Nature of Innovation <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Select all that apply</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {natureOptions.map((option) => {
              const selected = Array.isArray(formData.natureOfInnovation) && formData.natureOfInnovation.includes(option);
              return (
                <label
                  key={option}
                  onClick={() => handleNatureToggle(option)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                    selected
                      ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => {}} // Handled by label click
                    className="w-4 h-4 rounded text-[#1b365d] border-slate-300 focus:ring-[#1b365d] accent-[#1b365d]"
                  />
                  <span className="text-xs">{option}</span>
                </label>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
