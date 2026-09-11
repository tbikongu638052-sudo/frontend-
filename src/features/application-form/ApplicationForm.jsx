import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Cloud, 
  Trash2, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Building2,
  Users,
  Lightbulb,
  Gauge,
  TrendingUp,
  DollarSign,
  History,
  Workflow,
  Calculator,
  ShieldCheck,
  FolderUp,
  Compass,
  CheckSquare
} from 'lucide-react';
import tbiLogo from '../../assets/tbi logo.png';
import kvbLogo from '../../assets/kvb logo.png';
import { useNotification } from '../../hooks/useNotification';

// Modular Form Section Components
import {
  Section1StartupIdentity,
  Section2FounderTeam,
  Section3ProductOverview,
  Section4ReadinessLevels,
  Section5MarketTraction,
  Section6Financials,
  Section7FundingHistory,
  Section8IncubationHistory,
  Section9ProjectBudget,
  Section10IntellectualProperty,
  Section11Documents,
  Section12Discovery,
  Section13Declaration
} from './sections';

export const ApplicationForm = ({ onBack }) => {
  const { notify } = useNotification();
  const [currentSection, setCurrentSection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [draftRestored, setDraftRestored] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 13 Sections List
  const sectionsList = [
    { id: 1, name: 'Startup identity', icon: Building2, shortName: 'Startup & Company Identification' },
    { id: 2, name: 'Founder & core team', icon: Users, shortName: 'Founder & Core Team Details' },
    { id: 3, name: 'Product overview', icon: Lightbulb, shortName: 'Startup & Product Overview' },
    { id: 4, name: 'Readiness levels', icon: Gauge, shortName: 'Technology Readiness & Current Stage' },
    { id: 5, name: 'Market & traction', icon: TrendingUp, shortName: 'Market, Traction & Customer Details' },
    { id: 6, name: 'Financials', icon: DollarSign, shortName: 'Financial Performance' },
    { id: 7, name: 'Funding history', icon: History, shortName: 'Funding History & Capital Structure' },
    { id: 8, name: 'Incubation history', icon: Workflow, shortName: 'Incubation History & Prior Grant / CSR Funding' },
    { id: 9, name: 'Project & budget', icon: Calculator, shortName: 'Project Details & Funding Proposal' },
    { id: 10, name: 'Intellectual property', icon: ShieldCheck, shortName: 'Intellectual Property' },
    { id: 11, name: 'Documents', icon: FolderUp, shortName: 'Documents Checklist' },
    { id: 12, name: 'Discovery', icon: Compass, shortName: 'Discovery & Additional Details' },
    { id: 13, name: 'Declaration', icon: CheckSquare, shortName: 'Declaration & Signatures' },
  ];

  const initialFormState = {
    // 1. Startup Identity
    legalName: '',
    brandName: '',
    incorporationDate: '',
    websiteUrl: '',
    contactEmail: '',
    mobileNumber: '',
    registeredState: 'Tamil Nadu',
    hqCity: '',
    pinCode: '',
    registeredAddress: '',
    entityType: 'Private Limited Company',
    cinNumber: '',
    panNumber: '',
    dpiitNumber: '',
    gstNumber: '',
    isDpiitRecognised: 'Yes',

    // 2. Founder & Core Team Details
    spocFounderName: '',
    spocDesignation: '',
    spocMobile: '',
    spocEmail: '',
    spocLinkedin: '',
    coFounder1Name: '',
    coFounder1Role: '',
    coFounder1Email: '',
    coFounder2Name: '',
    coFounder2Role: '',
    coFounder2Email: '',
    coFounder3Name: '',
    coFounder3Role: '',
    coFounder3Email: '',
    coreTeamMembers: [
      { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
      { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
      { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
      { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
      { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' }
    ],
    totalFullTimeTeamSize: '',
    womenWorkforcePercent: '',
    foundersBackground: '',

    // 3. Startup & Product Overview
    projectTitle: '',
    oneSentencePitch: '',
    proposedProductName: '',
    coreTechDomain: '',
    productsServicesOffered: '',
    problemStatement: '',
    proposedSolution: '',
    innovationDifferentiation: '',
    natureOfInnovation: [],

    // 4. Technology Readiness & Current Stage
    currentTrl: '',
    currentMrl: '',
    currentIrl: '',
    readinessSummary: '',
    startupStage: '',
    techBlockersNextSteps: '',

    // 5. Market, Traction & Customer Details
    tractionAchieved: '',
    currentCustomerSegments: [],
    payingCustomersCount: '',
    pilotsCompletedCount: '',
    targetCustomerMarketOpportunity: '',
    socialImpactCreated: '',

    // 6. Financial Performance
    fin_rev_23: '',
    fin_rev_24: '',
    fin_rev_25: '',
    fin_rev_26: '',
    fin_pl_23: '',
    fin_pl_24: '',
    fin_pl_25: '',
    fin_pl_26: '',
    fin_exp_23: '',
    fin_exp_24: '',
    fin_exp_25: '',
    fin_exp_26: '',
    cumulativeRevenue: '',
    currentFinancialNeeds: '',

    // 7. Funding History & Capital Structure
    funding_equity_amount: '',
    funding_equity_provider: '',
    funding_equity_year: '',
    funding_grants_amount: '',
    funding_grants_provider: '',
    funding_grants_year: '',
    funding_debt_amount: '',
    funding_debt_provider: '',
    funding_debt_year: '',
    funding_bootstrap_amount: '',
    funding_bootstrap_provider: '',
    funding_bootstrap_year: '',
    funding_total_amount: '',
    captable_name_0: '',
    captable_percent_0: '',
    captable_instrument_0: '',
    captable_name_1: '',
    captable_percent_1: '',
    captable_instrument_1: '',
    captable_name_2: '',
    captable_percent_2: '',
    captable_instrument_2: '',
    captable_name_3: '',
    captable_percent_3: '',
    captable_instrument_3: '',
    tbiKecInterest: 'No',
    tbiKecPersonName: '',
    tbiKecPersonRole: '',
    tbiKecPersonShare: '',
    tbiKecPersonInstrument: '',
    incubatorEquityHold: 'No',
    incubatorNameWithEquity: '',
    incubatorEquityInstrumentDetails: '',
    awardsAndRecognitions: '',

    // 8. Incubation History & Prior Grant / CSR Funding
    isIncubationPart: 'No',
    incubationProgrammeDetails: '',
    receivedPriorGrantThroughIncubator: 'No',
    priorIncubatorGrantDetails: '',
    totalBootstrappedAmount: '',
    totalExternalFundingAmount: '',
    legalRegulatoryCompliance: '',

    // 9. Project Details & Funding Proposal
    projectScopeObjectives: '',
    projectActivitiesEnvisaged: '',
    projectNeed: '',
    projectCompetitiveAdvantage: '',
    projectLevelOfImpact: '',
    applicantCapabilityCapacity: '',
    projectCollaborationDetails: '',
    primarySector: 'Sustainable Agriculture and Rural Development',
    subCategorySector: '',
    projectDurationMonths: '',
    selectedSdgs: [],
    sdgJustification: '',
    budgetTotalProject: '',
    budgetApplicantContribution: '',
    budgetCsrGrantRequested: '',
    nonFinancialSupportExpected: '',
    projectAdditionalInformation: '',

    // 10. Intellectual Property
    ipStatus: [],
    patentApplicationNumbers: '',
    coreProprietaryInnovation: '',

    // 11. Documents Checklist
    uploadedDocuments: {},
    productDemoVideoUrl: '',

    // 12. Discovery & Additional Details
    discoverySources: [],
    heardFromOther: '',
    additionalDetails: '',

    // 13. Declaration
    declarationAgreed: false,
    signatoryFullName: '',
    signatoryDesignation: '',
    signatoryDate: '',
    signatoryPlace: '',
    signatorySignatureFile: '',
    companySealFile: '',
    witnessFullName: '',
    witnessDesignation: '',
    witnessDate: '',
    witnessPlace: '',
    witnessSignatureFile: '',
  };

  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('pitch2konnect_form_draft');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialFormState;
  });

  // Check if draft was restored
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pitch2konnect_form_draft');
      if (saved) {
        setDraftRestored(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    try {
      localStorage.setItem('pitch2konnect_form_draft', JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCoreTeamChange = (index, field, value) => {
    setFormData((prev) => {
      const list = [...(prev.coreTeamMembers || [
        { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
        { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
        { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
        { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' },
        { fullName: '', role: '', qualification: '', experience: '', isFullTime: '' }
      ])];
      list[index] = { ...list[index], [field]: value };
      return { ...prev, coreTeamMembers: list };
    });
  };

  const handleClearForm = () => {
    if (window.confirm('Are you sure you want to clear all form fields? This cannot be undone.')) {
      setFormData(initialFormState);
      localStorage.removeItem('pitch2konnect_form_draft');
      setDraftRestored(false);
      setCurrentSection(1);
      notify('Form draft cleared.', 'info');
    }
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (currentSection < 13) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declarationConfirmed || !formData.incubationTermsConfirmed) {
      notify('Please accept the declaration conditions before submitting.', 'error');
      return;
    }
    const generatedId = 'P2K-2026-' + Math.floor(100000 + Math.random() * 900000);
    setAppId(generatedId);
    setSubmitted(true);
    localStorage.removeItem('pitch2konnect_form_draft');
    notify(`Application submitted successfully! Application ID: ${generatedId}`, 'success');
  };

  const statesOfIndia = [
    'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 
    'Gujarat', 'Delhi NCR', 'Uttar Pradesh', 'Rajasthan', 'Haryana', 'Punjab', 
    'West Bengal', 'Odisha', 'Madhya Pradesh', 'Goa', 'Other State / UT'
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased font-['Graphik',sans-serif]">
      {/* Top Header with Back Navigation & Logos */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-[0_2px_15px_rgba(0,0,0,0.05)] h-20 sm:h-24 md:h-26 flex items-center">
        <div className="w-full px-4 sm:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1b365d] hover:text-[#0c2340] hover:underline cursor-pointer transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to Programme Guidelines</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="flex items-center justify-center gap-6 sm:gap-14 md:gap-18 h-full py-2">
            <img 
              src={tbiLogo} 
              alt="Kongu TBI Logo" 
              className="h-11 sm:h-16 md:h-20 w-auto object-contain scale-110 sm:scale-140 transform origin-center"
            />
            <img 
              src={kvbLogo} 
              alt="Karur Vysya Bank Logo" 
              className="h-8 sm:h-13 md:h-16 w-auto object-contain scale-110 sm:scale-140 transform origin-center"
            />
          </div>

          <div className="w-20 sm:w-48 hidden sm:block"></div>
        </div>
      </header>

      {/* Main Full-Width Split Layout */}
      <div className="w-full max-w-[100%] mx-auto px-3 sm:px-8 py-6 sm:py-8">
        
        {/* Main Title Heading - Centered */}
        <div className="mb-6 sm:mb-8 px-1 sm:px-2 text-center flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b365d] tracking-tight text-center">
            PITCH 2KONNECT — CSR GRANT APPLICATION FORM
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 text-center">
            KonguTBI × Karur Vysya Bank CSR Initiative &nbsp;·&nbsp; Prototype-to-Market Commercialisation Grant
          </p>
        </div>

        {submitted ? (
          /* Submission Success View */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-14 text-center max-w-2xl mx-auto my-8 space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={48} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Application Submitted Successfully!
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Your grant application for <strong>PITCH 2KONNECT</strong> has been registered with KonguTBI evaluation committee.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 inline-block w-full max-w-md">
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                Application Reference ID
              </span>
              <span className="text-3xl font-extrabold text-[#1b365d] tracking-wider font-mono">
                {appId}
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              A formal confirmation receipt with due diligence evaluation timelines has been sent to <strong>{formData.contactEmail || formData.spocEmail || 'your email'}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto bg-[#1b365d] hover:bg-[#0c2340] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Return to Programme Portal
              </button>
            </div>
          </div>
        ) : (
          /* Split Layout: Slim Left Sidebar (Desktop) / Modern Header Stepper (Mobile) + Form */
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 items-start">
            
            {/* Mobile View: Horizontal Stepper Strip & Quick Selector (lg:hidden) */}
            <div className="w-full lg:hidden bg-white rounded-2xl border border-slate-200 p-3.5 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0284c7] text-white flex items-center justify-center text-xs font-bold">
                    {currentSection}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block leading-tight">SECTION {currentSection} OF 13</span>
                    <span className="text-xs font-bold text-[#1b365d]">{sectionsList[currentSection - 1].name}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#1b365d] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Sections ({currentSection}/13)</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#0284c7] h-full transition-all duration-300"
                  style={{ width: `${(currentSection / 13) * 100}%` }}
                />
              </div>

              {/* Horizontal Scrollable Quick Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {sectionsList.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      setCurrentSection(sec.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                      currentSection === sec.id
                        ? 'bg-[#0284c7] text-white shadow-xs'
                        : currentSection > sec.id
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-50 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {sec.id}. {sec.name}
                  </button>
                ))}
              </div>

              {/* Expandable Mobile Sections Sheet */}
              {isMobileMenuOpen && (
                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-60 overflow-y-auto">
                  {sectionsList.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => {
                        setCurrentSection(sec.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-left cursor-pointer transition-all ${
                        currentSection === sec.id
                          ? 'bg-[#e0f2fe] text-[#0369a1] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        currentSection === sec.id ? 'bg-[#0284c7] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {sec.id}
                      </span>
                      <span className="truncate">{sec.name}</span>
                    </button>
                  ))}

                  <div className="col-span-full pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleClearForm}
                      className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold py-1 px-2"
                    >
                      <Trash2 size={13} />
                      <span>Clear Form</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Desktop Left Sidebar (13 Sections) - Hidden on Mobile */}
            <aside className="hidden lg:block w-56 shrink-0 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-3 lg:p-0 border lg:border-none border-slate-200 sticky top-24 z-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="pb-2.5 px-2">
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  13 SECTIONS
                </span>
              </div>

              <nav className="space-y-0.5">
                {sectionsList.map((sec) => {
                  const isActive = currentSection === sec.id;
                  const isCompleted = currentSection > sec.id;

                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setCurrentSection(sec.id)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#e0f2fe] text-[#0369a1] font-bold shadow-xs'
                          : isCompleted
                          ? 'text-slate-700 hover:bg-slate-100'
                          : 'text-slate-500 hover:bg-slate-100/70'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#0284c7] text-white shadow-xs'
                            : isCompleted
                            ? 'bg-emerald-100 text-emerald-700 font-bold'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        {sec.id}
                      </span>
                      <span className="truncate">{sec.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Clear Form Option */}
              <div className="pt-4 mt-3 border-t border-slate-200 px-2">
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-rose-600 cursor-pointer transition-colors"
                >
                  <Trash2 size={14} />
                  <span>Clear the form</span>
                </button>
              </div>
            </aside>

            {/* Right Main Form Container (White Card) */}
            <main className="flex-1 w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-8">
              
              {/* Form Card Header */}
              <div className="space-y-6">
                

                {/* Current Section Title */}
                <div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">
                    SECTION {currentSection} OF 13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b365d]">
                    {sectionsList[currentSection - 1].shortName}
                  </h2>
                </div>

                {/* Form Body - Dynamic Sections */}
                <form onSubmit={currentSection === 13 ? handleSubmit : handleNext}>
                  
                  {/* Section 1: Startup & Company Identification */}
                  {currentSection === 1 && (
                    <Section1StartupIdentity
                      formData={formData}
                      handleChange={handleChange}
                      statesOfIndia={statesOfIndia}
                    />
                  )}

                  {/* Section 2: Founder & Core Team Details */}
                  {currentSection === 2 && (
                    <Section2FounderTeam
                      formData={formData}
                      handleChange={handleChange}
                      handleCoreTeamChange={handleCoreTeamChange}
                    />
                  )}

                  {/* Section 3: Startup & Product Overview */}
                  {currentSection === 3 && (
                    <Section3ProductOverview
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 4: Technology Readiness & Current Stage */}
                  {currentSection === 4 && (
                    <Section4ReadinessLevels
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}

                  {/* Section 5: Market, Traction & Customer Details */}
                  {currentSection === 5 && (
                    <Section5MarketTraction
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 6: Financials */}
                  {currentSection === 6 && (
                    <Section6Financials
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}

                  {/* Section 7: Funding History */}
                  {currentSection === 7 && (
                    <Section7FundingHistory
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}

                  {/* Section 8: Incubation History */}
                  {currentSection === 8 && (
                    <Section8IncubationHistory
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}

                  {/* Section 9: Project Details & Funding Proposal */}
                  {currentSection === 9 && (
                    <Section9ProjectBudget
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 10: Intellectual Property */}
                  {currentSection === 10 && (
                    <Section10IntellectualProperty
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 11: Documents Checklist */}
                  {currentSection === 11 && (
                    <Section11Documents
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 12: Discovery & Additional Details */}
                  {currentSection === 12 && (
                    <Section12Discovery
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Section 13: Declaration & Signatures */}
                  {currentSection === 13 && (
                    <Section13Declaration
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                    />
                  )}

                  {/* Form Action Controls (Next, Previous, Submit) */}
                  <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between gap-4">
                    {currentSection > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm cursor-pointer transition-all"
                      >
                        <ChevronLeft size={16} />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {currentSection < 13 ? (
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#1b365d] hover:bg-[#0c2340] text-white px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
                      >
                        <span>Save & Continue</span>
                        <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#1b365d] hover:bg-[#0c2340] text-white px-9 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
                      >
                        <CheckCircle2 size={18} />
                        <span>Submit Final Application</span>
                      </button>
                    )}
                  </div>

                </form>
              </div>
            </main>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-12">
        <p className="font-semibold text-slate-800 text-xs sm:text-sm tracking-wide mb-1">
          Empowering Innovation &nbsp;·&nbsp; Accelerating Technology &nbsp;·&nbsp; Creating Impact
        </p>
        <p className="text-[0.75rem] sm:text-xs text-slate-500 leading-relaxed">
          © 2026 Technology Business Incubator @ Kongu Engineering College (TBI@KEC) &nbsp;·&nbsp; KonguTBI × KVB Pitch 2Konnect CSR Grant Programme
        </p>
      </footer>
    </div>
  );
};
