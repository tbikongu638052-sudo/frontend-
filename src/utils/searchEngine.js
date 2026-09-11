/**
 * Smart search and filter for skills and tools
 * @param {Array} items 
 * @param {string} query 
 * @param {string} category 
 * @returns {Array}
 */
export function searchSkills(items = [], query = '', category = 'all') {
  if (!Array.isArray(items)) return [];
  
  const normalizedQuery = query.toLowerCase().trim();

  return items.filter(item => {
    const matchesCategory = category === 'all' || item.category?.toLowerCase() === category.toLowerCase();
    
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const nameMatch = item.name?.toLowerCase().includes(normalizedQuery);
    const descMatch = item.description?.toLowerCase().includes(normalizedQuery);
    const tagMatch = item.tags?.some(tag => tag.toLowerCase().includes(normalizedQuery));
    const triggersMatch = item.triggers?.some(trig => trig.toLowerCase().includes(normalizedQuery));

    return nameMatch || descMatch || tagMatch || triggersMatch;
  });
}
