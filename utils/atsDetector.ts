
/**
 * Detects the ATS provider from a given career page URL.
 * 
 * @param url The career page or job application URL
 * @returns The name of the detected ATS or "Custom/In-house"
 */
export const detectATS = (url: string): string => {
  if (!url) return 'Unknown';
  
  const lowerUrl = url.toLowerCase();

  const patterns: Record<string, string[]> = {
    'Greenhouse': ['greenhouse.io', 'boards.greenhouse.io'],
    'Lever': ['lever.co', 'jobs.lever.co'],
    'Workday': ['myworkdayjobs.com', 'workday.com/careers'],
    'SmartRecruiters': ['smartrecruiters.com', 'jobs.smartrecruiters.com'],
    'Ashby': ['ashbyhq.com', 'jobs.ashbyhq.com'],
    'BambooHR': ['bamboohr.com', 'bamboohr.co.uk'],
    'JazzHR': ['applytojob.com', 'jazz.co'],
    'Teamtailor': ['teamtailor.com'],
    'Recruitee': ['recruitee.com'],
    'Personio': ['personio.de', 'personio.com'],
    'iCIMS': ['icims.com'],
    'Taleo': ['taleo.net', 'oraclecloud.com'],
    'Applied': ['beapplied.com'],
    'Workable': ['workable.com'],
    'Breezy HR': ['breezy.hr']
  };

  for (const [provider, domains] of Object.entries(patterns)) {
    if (domains.some(domain => lowerUrl.includes(domain))) {
      return provider;
    }
  }

  // Common URL path patterns
  if (lowerUrl.includes('/careers/') || lowerUrl.includes('/jobs/') || lowerUrl.includes('/vacancies/')) {
    // If it looks like a standard careers page but no ATS domain found
    return 'Custom/In-house';
  }

  return 'Custom/In-house';
};
