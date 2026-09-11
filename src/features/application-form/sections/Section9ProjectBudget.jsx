import React from 'react';
import { Info } from 'lucide-react';

export const Section9ProjectBudget = ({ formData, handleChange, setFormData }) => {
  const primarySectors = [
    'Climate Innovation',
    'Biodiversity Preservation',
    'Energy Efficiency and Clean Energy',
    'Waste Disposal and Management',
    'Carbon and Greenhouse Gas Mitigation',
    'Sustainable Agriculture and Rural Development'
  ];

  const sdgList = [
    'SDG 1: No Poverty',
    'SDG 2: Zero Hunger',
    'SDG 3: Good Health and Well-Being',
    'SDG 4: Quality Education',
    'SDG 5: Gender Equality',
    'SDG 6: Clean Water and Sanitation',
    'SDG 7: Affordable and Clean Energy',
    'SDG 8: Decent Work and Economic Growth',
    'SDG 9: Industry, Innovation and Infrastructure',
    'SDG 10: Reduced Inequalities',
    'SDG 11: Sustainable Cities and Communities',
    'SDG 12: Responsible Consumption and Production',
    'SDG 13: Climate Action',
    'SDG 14: Life Below Water',
    'SDG 15: Life on Land',
    'SDG 16: Peace, Justice and Strong Institutions',
    'SDG 17: Partnerships for the Goals'
  ];

  const handleSdgToggle = (sdg) => {
    const currentList = Array.isArray(formData.selectedSdgs) ? formData.selectedSdgs : [];
    let updatedList;
    if (currentList.includes(sdg)) {
      updatedList = currentList.filter((item) => item !== sdg);
    } else {
      updatedList = [...currentList, sdg];
    }

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        selectedSdgs: updatedList
      }));
    }
  };

  const expenseHeads = [
    { key: 'outsourcing', label: 'Outsourcing Charges — design engineering, consultancy, testing, expert fees' },
    { key: 'dev_costs', label: 'Development Costs — raw materials and consumables for product development' },
    { key: 'fabrication', label: 'Fabrication / Assembly / Synthesis Charges' },
    { key: 'manpower', label: 'Manpower — team salaries (capped at maximum 10% of approved grant)' },
    { key: 'ip', label: 'Intellectual Property — patent / PCT filing costs (capped at maximum 10% of approved grant)' },
    { key: 'contingency', label: 'Contingency — unforeseen costs / price fluctuations (capped at maximum 10% of approved grant)' },
    { key: 'total', label: 'TOTAL', isTotal: true }
  ];

  const milestoneIndices = [0, 1, 2, 3];

  return (
    <div className="space-y-7">
      
      {/* 1. Project Description */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Project Description
        </h3>

        <div className="space-y-5">
          {/* Scope and Objectives of the Project * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Scope and Objectives of the Project <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">State 3–5 clear, measurable objectives</span>
            </div>
            <textarea
              name="projectScopeObjectives"
              rows={4}
              required
              value={formData.projectScopeObjectives || ''}
              onChange={handleChange}
              placeholder="What does this project aim to achieve? Define measurable outcomes. (Max 250 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Activities Envisaged to Achieve Outcomes * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Activities Envisaged to Achieve Outcomes <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Key activities and methodology under this grant</span>
            </div>
            <textarea
              name="projectActivitiesEnvisaged"
              rows={4}
              required
              value={formData.projectActivitiesEnvisaged || ''}
              onChange={handleChange}
              placeholder="Describe activities, approach, and methodology to deliver the project outcomes. (Max 250 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>
        </div>
      </div>

      {/* 2. Project Summary */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Project Summary
        </h3>

        <div className="space-y-5">
          {/* Need of the Project * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Need of the Project <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Why is this project necessary now?</span>
            </div>
            <textarea
              name="projectNeed"
              rows={3}
              required
              value={formData.projectNeed || ''}
              onChange={handleChange}
              placeholder="(Max 150 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Competitive Advantage * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Competitive Advantage <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">What makes your solution superior to current alternatives?</span>
            </div>
            <textarea
              name="projectCompetitiveAdvantage"
              rows={3}
              required
              value={formData.projectCompetitiveAdvantage || ''}
              onChange={handleChange}
              placeholder="(Max 150 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Level of Impact the Project Could Bring * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Level of Impact the Project Could Bring <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Expected economic, environmental, and social impact</span>
            </div>
            <textarea
              name="projectLevelOfImpact"
              rows={3}
              required
              value={formData.projectLevelOfImpact || ''}
              onChange={handleChange}
              placeholder="(Max 200 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Capability and Capacity of the Applicant * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Capability and Capacity of the Applicant <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Why is this team best placed to deliver this project?</span>
            </div>
            <textarea
              name="applicantCapabilityCapacity"
              rows={3}
              required
              value={formData.applicantCapabilityCapacity || ''}
              onChange={handleChange}
              placeholder="Describe team capability, infrastructure, and institutional support. (Max 150 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>

          {/* Collaboration */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Collaboration
              </label>
              <span className="text-[11px] font-normal text-slate-500">Partners or institutions whose involvement would advance this innovation</span>
            </div>
            <textarea
              name="projectCollaborationDetails"
              rows={3}
              value={formData.projectCollaborationDetails || ''}
              onChange={handleChange}
              placeholder="Organisation Name  |  Nature of Collaboration  |  Status (Active / Planned)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>
        </div>
      </div>

      {/* 3. Sector Classification */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Sector Classification
        </h3>

        <div className="space-y-5">
          {/* Primary Sector * Select one */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Primary Sector <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Select one</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {primarySectors.map((sector) => {
                const selected = formData.primarySector === sector;
                return (
                  <label
                    key={sector}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all select-none ${
                      selected
                        ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="primarySector"
                      value={sector}
                      checked={selected}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#1b365d] focus:ring-[#1b365d] accent-[#1b365d]"
                    />
                    <span className="text-xs">{sector}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 2-column: Sub-Category & Project Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="h-4 flex items-center gap-1.5 mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Sub-Category of Sector (if applicable)
                </label>
              </div>
              <input
                type="text"
                name="subCategorySector"
                value={formData.subCategorySector || ''}
                onChange={handleChange}
                placeholder="e.g. Agri-Waste Upcycling / Bioplastics"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
              />
            </div>

            <div>
              <div className="h-4 flex items-center gap-1.5 mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Project Duration <span className="text-rose-500 font-bold">*</span>
                </label>
                <span className="text-[11px] font-normal text-slate-500">Maximum 12 months; enter number of months</span>
              </div>
              <input
                type="text"
                name="projectDurationMonths"
                required
                value={formData.projectDurationMonths || ''}
                onChange={handleChange}
                placeholder="e.g. 10"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sustainable Development Goals (SDG) Mapping */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Sustainable Development Goals (SDG) Mapping
        </h3>

        <div className="space-y-5">
          {/* SDG Checkboxes */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Sustainable Development Goals (SDG) Mapping <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Select all SDGs that your product / project directly addresses</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {sdgList.map((sdg) => {
                const selected = Array.isArray(formData.selectedSdgs) && formData.selectedSdgs.includes(sdg);
                return (
                  <label
                    key={sdg}
                    onClick={() => handleSdgToggle(sdg)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all select-none ${
                      selected
                        ? 'border-[#1b365d] bg-blue-50/50 text-[#1b365d] font-medium shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1b365d] border-slate-300 focus:ring-[#1b365d] accent-[#1b365d]"
                    />
                    <span className="text-xs">{sdg}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Brief Justification for SDG Mapping * */}
          <div>
            <div className="h-4 flex items-center gap-1.5 mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Brief Justification for SDG Mapping <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-[11px] font-normal text-slate-500">Explain how your product / project contributes to the selected SDG(s)</span>
            </div>
            <textarea
              name="sdgJustification"
              rows={3}
              required
              value={formData.sdgJustification || ''}
              onChange={handleChange}
              placeholder="For each SDG selected above, briefly describe the direct link between your innovation and that goal. (Max 150 words)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
            />
          </div>
        </div>
      </div>

      {/* 5. Budget & Milestone Plan */}
      <div>
        <h3 className="text-sm font-bold text-[#1b365d] border-b border-slate-100 pb-2 mb-4">
          Budget &amp; Milestone Plan
        </h3>

        {/* Grant Info Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-[#1b365d] text-xs leading-relaxed mb-5">
          <Info size={16} className="text-[#1b365d] mt-0.5 shrink-0" />
          <span>
            The grant is disbursed in milestone-based instalments. Maximum grant: ₹20 Lakhs. Applicant's own contribution must be stated for each milestone.
          </span>
        </div>

        {/* 3-Column Summary Budget Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Total Project Budget (₹)
            </label>
            <input
              type="text"
              name="budgetTotalProject"
              value={formData.budgetTotalProject || ''}
              onChange={handleChange}
              placeholder="e.g. ₹ 25,00,000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Applicant's Contribution (₹)
            </label>
            <input
              type="text"
              name="budgetApplicantContribution"
              value={formData.budgetApplicantContribution || ''}
              onChange={handleChange}
              placeholder="e.g. ₹ 5,00,000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              CSR Grant Requested (₹)
            </label>
            <input
              type="text"
              name="budgetCsrGrantRequested"
              value={formData.budgetCsrGrantRequested || ''}
              onChange={handleChange}
              placeholder="e.g. ₹ 20,00,000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] bg-white transition-all"
            />
          </div>
        </div>

        {/* Milestone-wise Activity Plan Table */}
        <div className="space-y-2 mb-6">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Milestone-wise Activity Plan <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Maximum 4 milestones; maximum project timeline is 12 months</span>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="px-3.5 py-2.5 min-w-[200px] border-r border-slate-200">
                      Activities / Deliverables
                    </th>
                    <th className="px-3.5 py-2.5 min-w-[200px] border-r border-slate-200">
                      Expected Output / Outcome
                    </th>
                    <th className="px-3 py-2.5 min-w-[120px] text-center border-r border-slate-200">
                      Timeline (months)
                    </th>
                    <th className="px-3 py-2.5 min-w-[130px] text-center border-r border-slate-200">
                      Grant Amount (₹)
                    </th>
                    <th className="px-3 py-2.5 min-w-[140px] text-center">
                      Startup Contribution (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {milestoneIndices.map((i) => (
                    <tr key={i} className="divide-x divide-slate-200 hover:bg-slate-50/40 transition-colors">
                      <td className="p-0">
                        <input
                          type="text"
                          name={`milestone_${i}_activities`}
                          value={formData[`milestone_${i}_activities`] || ''}
                          onChange={handleChange}
                          placeholder={`Milestone ${i + 1} Deliverables`}
                          className="w-full h-full px-3 py-2 text-xs text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`milestone_${i}_output`}
                          value={formData[`milestone_${i}_output`] || ''}
                          onChange={handleChange}
                          placeholder="Expected Outcome"
                          className="w-full h-full px-3 py-2 text-xs text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`milestone_${i}_timeline`}
                          value={formData[`milestone_${i}_timeline`] || ''}
                          onChange={handleChange}
                          placeholder="e.g. Month 1-3"
                          className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`milestone_${i}_grant`}
                          value={formData[`milestone_${i}_grant`] || ''}
                          onChange={handleChange}
                          placeholder="e.g. ₹6,00,000"
                          className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name={`milestone_${i}_contribution`}
                          value={formData[`milestone_${i}_contribution`] || ''}
                          onChange={handleChange}
                          placeholder="e.g. ₹1,50,000"
                          className="w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                        />
                      </td>
                    </tr>
                  ))}
                  <tr className="divide-x divide-slate-200 bg-slate-50/80 font-bold">
                    <td className="px-3.5 py-2 text-slate-800 font-bold" colSpan={3}>
                      TOTAL
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name="milestones_total_grant"
                        value={formData.milestones_total_grant || ''}
                        onChange={handleChange}
                        placeholder="Total Grant (₹)"
                        className="w-full h-full px-3 py-2 text-xs font-bold text-center text-slate-800 placeholder:text-slate-400 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name="milestones_total_contribution"
                        value={formData.milestones_total_contribution || ''}
                        onChange={handleChange}
                        placeholder="Total Contribution (₹)"
                        className="w-full h-full px-3 py-2 text-xs font-bold text-center text-slate-800 placeholder:text-slate-400 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Indicative Budget Breakup Table */}
        <div className="space-y-2">
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Indicative Budget Breakup <span className="text-rose-500 font-bold">*</span>
            </label>
            <span className="text-[11px] font-normal text-slate-500">Allocate the CSR grant across permissible expense heads</span>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/90 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="px-3.5 py-2.5 min-w-[320px] border-r border-slate-200">
                      Expense Head
                    </th>
                    <th className="px-3.5 py-2.5 min-w-[160px] text-center">
                      Estimated Amount (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {expenseHeads.map((head) => {
                    const isTotal = head.isTotal;
                    return (
                      <tr
                        key={head.key}
                        className={`divide-x divide-slate-200 transition-colors ${
                          isTotal ? 'bg-slate-50/80 font-bold' : 'hover:bg-slate-50/40'
                        }`}
                      >
                        <td className={`px-3.5 py-2 text-slate-800 ${isTotal ? 'font-bold' : 'font-medium'}`}>
                          {head.label}
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name={`budget_head_${head.key}`}
                            value={formData[`budget_head_${head.key}`] || ''}
                            onChange={handleChange}
                            placeholder={isTotal ? 'Total ₹20,00,000' : 'e.g. ₹5,00,000'}
                            className={`w-full h-full px-3 py-2 text-xs text-center text-slate-800 placeholder:text-slate-300 border-none outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] bg-transparent ${
                              isTotal ? 'font-bold' : ''
                            }`}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Non-Financial Support Expected & Additional Info */}
      <div className="space-y-5">
        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Non-Financial Support Expected from KonguTBI
            </label>
            <span className="text-[11px] font-normal text-slate-500">Mentoring, lab access, networks, investor introductions, etc.</span>
          </div>
          <textarea
            name="nonFinancialSupportExpected"
            rows={3}
            value={formData.nonFinancialSupportExpected || ''}
            onChange={handleChange}
            placeholder="Describe the non-financial support you expect from the TBI ecosystem."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>

        <div>
          <div className="h-4 flex items-center gap-1.5 mb-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Any Additional Information
            </label>
          </div>
          <textarea
            name="projectAdditionalInformation"
            rows={3}
            value={formData.projectAdditionalInformation || ''}
            onChange={handleChange}
            placeholder="Any other pertinent details or notes you wish to include..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d] transition-all"
          />
        </div>
      </div>

    </div>
  );
};
