/**
 * Format numbers with compact notations (e.g. 1.2k)
 */
export function formatCompactNumber(num) {
  if (typeof num !== 'number') return '0';
  return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(num);
}

/**
 * Truncate text with ellipsis
 */
export function truncate(str, length = 100) {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Capitalize first letter of words
 */
export function titleCase(str) {
  if (!str) return '';
  return str.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Format timestamp into relative or human readable string
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
