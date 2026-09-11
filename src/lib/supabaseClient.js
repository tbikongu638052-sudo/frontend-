import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cqstfmbcpzpwirijkqho.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxc3RmbWJjcHpwd2lyaWprcWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxMTgxNDUsImV4cCI6MjEwNDY5NDE0NX0.47cZBzinbCB9dbp441RWDAVJjqFgSvrBHfkUb2r47Ic';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Upload a document / signature to the tbi_pdfs Supabase Storage bucket
 * @param {File} file 
 * @param {string} appId 
 * @param {string} docKey 
 * @returns {Promise<{ path: string, url: string }>}
 */
export const uploadFileToSupabase = async (file, appId, docKey) => {
  if (!file) return null;

  // Clean filename: remove special chars to avoid path encoding issues
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const filePath = `${appId}/${docKey}_${Date.now()}_${sanitizedName}`;

  const { data, error } = await supabase.storage
    .from('tbi_pdfs')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    console.error(`Error uploading ${docKey}:`, error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from('tbi_pdfs')
    .getPublicUrl(filePath);

  return {
    path: filePath,
    url: publicUrlData?.publicUrl || filePath,
    name: file.name,
    size: file.size,
    type: file.type
  };
};

/**
 * Save complete application submission into applications table
 * @param {Object} formData 
 * @param {string} appId 
 * @param {Object} uploadedFilesMap 
 * @returns {Promise<Object>}
 */
export const submitApplicationToSupabase = async (formData, appId, uploadedFilesMap = {}) => {
  // Strip File objects from formData before saving as JSON
  const cleanFormData = { ...formData };
  delete cleanFormData.uploadedDocumentFiles;

  const payload = {
    application_id: appId,
    legal_name: formData.legalName || 'N/A',
    contact_email: formData.contactEmail || formData.spocEmail || 'N/A',
    phone_number: formData.mobileNumber || formData.spocMobile || 'N/A',
    entity_type: formData.constitution || 'N/A',
    registration_number: formData.registrationNumber || formData.dpiitNumber || 'N/A',
    primary_sector: formData.primarySector || 'N/A',
    budget_csr_grant_requested: formData.budgetCsrGrantRequested || 'N/A',
    status: 'Under Review',
    form_data: cleanFormData,
    uploaded_files: uploadedFilesMap,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('applications')
    .insert([payload])
    .select();

  if (error) {
    console.error('Error inserting application into Supabase:', error);
    throw error;
  }

  return data;
};

/**
 * Query application status by ID or Email
 * @param {string} identifier 
 * @returns {Promise<Object|null>}
 */
export const fetchApplicationStatus = async (identifier) => {
  if (!identifier) return null;

  const cleanQuery = identifier.trim();

  // Search by application_id or contact_email
  const { data, error } = await supabase
    .from('applications')
    .select('application_id, legal_name, contact_email, primary_sector, status, created_at')
    .or(`application_id.eq.${cleanQuery},contact_email.eq.${cleanQuery}`)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error fetching application status:', error);
    throw error;
  }

  return data && data.length > 0 ? data[0] : null;
};
