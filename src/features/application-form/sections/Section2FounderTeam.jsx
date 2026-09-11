import React from 'react';

export const Section2FounderTeam = ({ formData, handleChange, handleCoreTeamChange }) => {
  const coreTeamList = formData.coreTeamMembers || [
    { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
    { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
    { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
    { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
    { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' }
  ];

  return (
    <div className="space-y-5">
      
      {/* 1. Primary Founder / Authorised Signatory (SPOC) */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#1b365d] border-b border-slate-200 pb-1.5">
          Primary Founder / Authorised Signatory (SPOC)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: Founder Name & Designation */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
              Founder Name (SPOC) <span className="text-rose-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              name="spocFounderName"
              required
              value={formData.spocFounderName || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
              <span>Designation / Role</span>
              <span className="text-rose-500">*</span>
              <span className="font-normal text-[11px] text-slate-500 ml-1 truncate">e.g. CEO, Managing Partner</span>
            </label>
            <input
              type="text"
              name="spocDesignation"
              required
              value={formData.spocDesignation || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>

          {/* Row 2: Mobile Number & Email Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
              <span>Mobile Number</span>
              <span className="text-rose-500">*</span>
              <span className="font-normal text-[11px] text-slate-500 ml-1">+91 XXXXX XXXXX</span>
            </label>
            <input
              type="tel"
              name="spocMobile"
              required
              value={formData.spocMobile || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center">
              Email Address <span className="text-rose-500 ml-0.5">*</span>
            </label>
            <input
              type="email"
              name="spocEmail"
              required
              value={formData.spocEmail || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>

          {/* Row 3: LinkedIn Profile */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
              <span>LinkedIn Profile</span>
              <span className="font-normal text-[11px] text-slate-500 ml-1">https://linkedin.com/in/...</span>
            </label>
            <input
              type="url"
              name="spocLinkedin"
              value={formData.spocLinkedin || ''}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
            />
          </div>
        </div>
      </div>

      {/* 2. Co-Founders (3 separate input boxes for Full Name, Role, Email Address) */}
      <div className="space-y-3 pt-3 border-t border-slate-200">
        <h3 className="text-sm font-semibold text-[#1b365d] border-b border-slate-200 pb-1.5">
          Co-Founders
        </h3>

        <div className="space-y-3">
          {[
            { num: 1, nameKey: 'coFounder1Name', roleKey: 'coFounder1Role', emailKey: 'coFounder1Email' },
            { num: 2, nameKey: 'coFounder2Name', roleKey: 'coFounder2Role', emailKey: 'coFounder2Email' },
            { num: 3, nameKey: 'coFounder3Name', roleKey: 'coFounder3Role', emailKey: 'coFounder3Email' },
          ].map((cf) => (
            <div key={cf.num} className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-700">
                Co-Founder {cf.num}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <input
                    type="text"
                    name={cf.nameKey}
                    placeholder="Full Name"
                    value={formData[cf.nameKey] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name={cf.roleKey}
                    placeholder="Role"
                    value={formData[cf.roleKey] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name={cf.emailKey}
                    placeholder="Email Address"
                    value={formData[cf.emailKey] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Team Table */}
      <div className="space-y-2.5 pt-3 border-t border-slate-200">
        <div className="flex flex-wrap items-baseline justify-between gap-1 border-b border-slate-200 pb-1.5">
          <h3 className="text-sm font-semibold text-[#1b365d]">
            Core Team
          </h3>
          <span className="text-[11px] text-slate-500">
            Core Team Members including Founders <span className="text-rose-500">*</span> &nbsp;·&nbsp; List all key team members
          </span>
        </div>

        <div className="overflow-x-auto border border-slate-300 rounded-lg bg-white shadow-2xs">
          <table className="w-full text-left text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-300 divide-x divide-slate-300">
                <th className="py-2 px-3 w-[22%]">Full Name</th>
                <th className="py-2 px-3 w-[20%]">Role / Designation</th>
                <th className="py-2 px-3 w-[20%]">Highest Qualification</th>
                <th className="py-2 px-3 w-[26%]">Relevant Experience</th>
                <th className="py-2 px-3 w-[12%] text-center">Full-Time?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {coreTeamList.map((row, idx) => (
                <tr key={idx} className="divide-x divide-slate-200 hover:bg-slate-50/70 transition-colors">
                  <td className="p-0">
                    <input
                      type="text"
                      value={row.fullName || ''}
                      onChange={(e) => handleCoreTeamChange(idx, 'fullName', e.target.value)}
                      className="w-full h-full px-3 py-2 bg-transparent focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] text-xs text-slate-800"
                    />
                  </td>
                  <td className="p-0">
                    <input
                      type="text"
                      value={row.role || ''}
                      onChange={(e) => handleCoreTeamChange(idx, 'role', e.target.value)}
                      className="w-full h-full px-3 py-2 bg-transparent focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] text-xs text-slate-800"
                    />
                  </td>
                  <td className="p-0">
                    <input
                      type="text"
                      value={row.qualification || ''}
                      onChange={(e) => handleCoreTeamChange(idx, 'qualification', e.target.value)}
                      className="w-full h-full px-3 py-2 bg-transparent focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] text-xs text-slate-800"
                    />
                  </td>
                  <td className="p-0">
                    <input
                      type="text"
                      value={row.experience || ''}
                      onChange={(e) => handleCoreTeamChange(idx, 'experience', e.target.value)}
                      className="w-full h-full px-3 py-2 bg-transparent focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] text-xs text-slate-800"
                    />
                  </td>
                  <td className="p-0 text-center">
                    <select
                      value={row.isFullTime || ''}
                      onChange={(e) => handleCoreTeamChange(idx, 'isFullTime', e.target.value)}
                      className="w-full h-full px-2 py-2 bg-transparent focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-inset focus:ring-[#1b365d] text-xs text-center font-medium text-slate-800 cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Team Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>Total Full-Time Team Size</span>
            <span className="text-rose-500">*</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">Including founders</span>
          </label>
          <input
            type="text"
            name="totalFullTimeTeamSize"
            required
            value={formData.totalFullTimeTeamSize || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5 h-4 flex items-center gap-1">
            <span>% of Workforce that are Women</span>
            <span className="font-normal text-[11px] text-slate-500 ml-1">Approximate %</span>
          </label>
          <input
            type="text"
            name="womenWorkforcePercent"
            value={formData.womenWorkforcePercent || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
          />
        </div>
      </div>

      {/* 5. Founders Background Narrative */}
      <div className="pt-3 border-t border-slate-200 space-y-1.5">
        <label className="block text-xs font-semibold text-slate-800">
          Founders' Background and Experience <span className="text-rose-500">*</span>
          <span className="font-normal text-[11px] text-slate-500 ml-2">Profiles, domain expertise, and key achievements</span>
        </label>
        <textarea
          name="foundersBackground"
          rows={4}
          required
          value={formData.foundersBackground || ''}
          onChange={handleChange}
          placeholder="Describe each founder's background, domain expertise, and why this team is uniquely positioned to solve this problem. (Max 300 words)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1b365d] focus:ring-1 focus:ring-[#1b365d]"
        />
      </div>

    </div>
  );
};
