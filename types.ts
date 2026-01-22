
export interface Job {
  jobId: string;
  jobTitle: string;
  department: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salaryRange?: string;
  postedDate: string; // ISO date
  directApplyUrl: string;
  sponsorshipAvailable: boolean;
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Lead';
}

export interface Company {
  id: string;
  companyName: string;
  officialWebsite: string;
  industry: string;
  sponsorshipType: 'Skilled Worker' | 'Global Business Mobility' | 'Health and Care Worker' | 'Other';
  atsProvider: string;
  careersPageUrl: string;
  location: string;
  companySize?: string;
  description: string;
  logoUrl?: string;
  activeJobs: Job[];
  totalActiveJobs: number;
}

export interface FilterState {
  search: string;
  industry: string;
  atsProvider: string;
  sponsorshipType: string;
  location: string;
}
