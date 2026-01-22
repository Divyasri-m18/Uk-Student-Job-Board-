
/**
 * Validates if a URL points directly to an application form or job listing
 */
export const isValidApplyUrl = (url: string): boolean => {
  const applyPatterns = [
    '/apply',
    '/application',
    '/job/',
    '/posting/',
    '/positions/',
    'greenhouse.io/jobs/',
    'lever.co/jobs/',
    'myworkdayjobs.com/',
    'smartrecruiters.com/jobs/',
    'ashbyhq.com'
  ];
  return applyPatterns.some(pattern => url.toLowerCase().includes(pattern));
};

/**
 * Safely opens a direct application link in a new tab
 */
export const handleApply = (url: string) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};
