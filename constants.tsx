
import { Company, Job } from './types';

export const INDUSTRIES = [
  'All Industries',
  'Technology',
  'Finance',
  'Professional Services',
  'Healthcare',
  'Retail',
  'Engineering',
  'Energy',
  'Education',
  'Media'
];

export const ATS_PROVIDERS = [
  'All ATS',
  'Workday',
  'Greenhouse',
  'Lever',
  'SmartRecruiters',
  'Ashby',
  'iCIMS',
  'Taleo',
  'Custom'
];

export const SPONSORSHIP_TYPES = [
  'All Types',
  'Skilled Worker',
  'Global Business Mobility',
  'Health and Care Worker'
];

export const LOCATIONS = [
  'All Locations',
  'London',
  'Manchester',
  'Reading',
  'Cambridge',
  'Edinburgh',
  'Bristol',
  'Birmingham',
  'Leeds',
  'Glasgow'
];

const createJob = (id: string, title: string, dept: string, loc: string, sponsor: boolean, url: string): Job => ({
  jobId: id,
  jobTitle: title,
  department: dept,
  location: loc,
  jobType: 'Full-time',
  postedDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  directApplyUrl: url,
  sponsorshipAvailable: sponsor,
  experienceLevel: ['Entry', 'Mid', 'Senior', 'Lead'][Math.floor(Math.random() * 4)] as any
});

const BASE_REAL_COMPANIES: Partial<Company>[] = [
  { id: 'acc-uk', companyName: 'Accenture', industry: 'Professional Services', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.accenture.com/gb-en', careersPageUrl: 'https://www.accenture.com/gb-en/careers', description: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security.' },
  { id: 'adobe-uk', companyName: 'Adobe UK', industry: 'Technology', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.adobe.com/uk', careersPageUrl: 'https://www.adobe.com/uk/careers.html', description: 'Adobe is the global leader in digital media and digital marketing solutions.' },
  { id: 'airbus-uk', companyName: 'Airbus', industry: 'Engineering', atsProvider: 'Workday', location: 'Bristol', companySize: '10,001+', officialWebsite: 'https://www.airbus.com/en', careersPageUrl: 'https://www.airbus.com/en/careers', description: 'Airbus is a global leader in aeronautics, space and related services.' },
  { id: 'apple-uk', companyName: 'Apple UK', industry: 'Technology', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.apple.com/uk', careersPageUrl: 'https://www.apple.com/uk/careers', description: 'Apple designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories.' },
  { id: 'arm-uk', companyName: 'ARM', industry: 'Technology', atsProvider: 'Workday', location: 'Cambridge', companySize: '5,001 - 10,000', officialWebsite: 'https://www.arm.com', careersPageUrl: 'https://careers.arm.com', description: 'Arm technology is at the heart of a computing and connectivity revolution that is transforming the way people live.' },
  { id: 'bae-uk', companyName: 'BAE Systems', industry: 'Engineering', atsProvider: 'Taleo', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.baesystems.com', careersPageUrl: 'https://www.baesystems.com/en/careers', description: 'BAE Systems provides some of the world\'s most advanced, technology-led defence, aerospace and security solutions.' },
  { id: 'bbc-uk', companyName: 'BBC', industry: 'Media', atsProvider: 'Custom', location: 'Manchester', companySize: '10,001+', officialWebsite: 'https://www.bbc.co.uk', careersPageUrl: 'https://www.bbc.co.uk/careers', description: 'The British Broadcasting Corporation is the national broadcaster of the United Kingdom.' },
  { id: 'bloom-uk', companyName: 'Bloomberg', industry: 'Finance', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.bloomberg.com', careersPageUrl: 'https://www.bloomberg.com/careers', description: 'Bloomberg is a global leader in business and financial data, news and insight.' },
  { id: 'bosch-uk', companyName: 'Bosch UK', industry: 'Engineering', atsProvider: 'SmartRecruiters', location: 'Denham', companySize: '10,001+', officialWebsite: 'https://www.bosch.co.uk', careersPageUrl: 'https://www.bosch.co.uk/careers', description: 'The Bosch Group is a leading global supplier of technology and services.' },
  { id: 'bt-uk', companyName: 'BT Group', industry: 'Technology', atsProvider: 'Taleo', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.bt.com', careersPageUrl: 'https://www.bt.com/careers', description: 'BT is one of the world\'s leading communications services companies.' },
  { id: 'cisco-uk', companyName: 'Cisco Systems', industry: 'Technology', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.cisco.com/c/en_uk', careersPageUrl: 'https://jobs.cisco.com', description: 'Cisco is the worldwide leader in technology that powers the Internet.' },
  { id: 'citi-uk', companyName: 'Citibank', industry: 'Finance', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.citibank.co.uk', careersPageUrl: 'https://careers.citigroup.com', description: 'Citi is a preeminent digital bank, a leading financial services company.' },
  { id: 'dell-uk', companyName: 'Dell Technologies', industry: 'Technology', atsProvider: 'Workday', location: 'Bracknell', companySize: '10,001+', officialWebsite: 'https://www.dell.com/en-uk', careersPageUrl: 'https://jobs.dell.com', description: 'Dell Technologies helps organizations and individuals build their digital future.' },
  { id: 'dyson-uk', companyName: 'Dyson', industry: 'Engineering', atsProvider: 'Workday', location: 'Malmesbury', companySize: '10,001+', officialWebsite: 'https://www.dyson.co.uk', careersPageUrl: 'https://careers.dyson.com', description: 'Dyson is a global technology company founded in 1991 by James Dyson.' },
  { id: 'exp-uk', companyName: 'Experian', industry: 'Technology', atsProvider: 'Taleo', location: 'Nottingham', companySize: '10,001+', officialWebsite: 'https://www.experian.co.uk', careersPageUrl: 'https://www.experian.co.uk/careers', description: 'Experian is the world’s leading global information services company.' },
  { id: 'meta-uk', companyName: 'Meta (Facebook)', industry: 'Technology', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://about.meta.com', careersPageUrl: 'https://www.metacareers.com', description: 'Meta builds technologies that help people connect, find communities, and grow businesses.' },
  { id: 'gsk-uk', companyName: 'GSK', industry: 'Healthcare', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.gsk.com', careersPageUrl: 'https://www.gsk.com/en-gb/careers', description: 'GSK is a science-led global healthcare company.' },
  { id: 'ibm-uk', companyName: 'IBM UK', industry: 'Technology', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.ibm.com/uk-en', careersPageUrl: 'https://www.ibm.com/uk-en/employment', description: 'IBM is a leading cloud platform and cognitive solutions company.' },
  { id: 'intel-uk', companyName: 'Intel', industry: 'Technology', atsProvider: 'Workday', location: 'Reading', companySize: '10,001+', officialWebsite: 'https://www.intel.co.uk', careersPageUrl: 'https://www.intel.co.uk/content/www/uk/en/jobs/jobs-at-intel.html', description: 'Intel is an industry leader, creating world-changing technology that enables global progress.' },
  { id: 'jlr-uk', companyName: 'Jaguar Land Rover', industry: 'Engineering', atsProvider: 'Custom', location: 'Gaydon', companySize: '10,001+', officialWebsite: 'https://www.jaguarlandrover.com', careersPageUrl: 'https://www.jaguarlandrovercareers.com', description: 'Jaguar Land Rover is the UK’s largest automotive manufacturer.' },
  { id: 'morgan-uk', companyName: 'Morgan Stanley', industry: 'Finance', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.morganstanley.com', careersPageUrl: 'https://www.morganstanley.com/about-us/careers', description: 'Morgan Stanley is a global leader in financial services.' },
  { id: 'netflix-uk', companyName: 'Netflix UK', industry: 'Media', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.netflix.com', careersPageUrl: 'https://jobs.netflix.com', description: 'Netflix is the world\'s leading streaming entertainment service.' },
  { id: 'nvidia-uk', companyName: 'NVIDIA', industry: 'Technology', atsProvider: 'Workday', location: 'Cambridge', companySize: '10,001+', officialWebsite: 'https://www.nvidia.com/en-gb', careersPageUrl: 'https://www.nvidia.com/en-us/about-nvidia/careers', description: 'NVIDIA is the pioneer of GPU-accelerated computing.' },
  { id: 'oracle-uk', companyName: 'Oracle', industry: 'Technology', atsProvider: 'Custom', location: 'Reading', companySize: '10,001+', officialWebsite: 'https://www.oracle.com/uk', careersPageUrl: 'https://www.oracle.com/uk/corporate/careers', description: 'Oracle is a cloud technology company that provides organizations around the world with computing infrastructure.' },
  { id: 'pfizer-uk', companyName: 'Pfizer', industry: 'Healthcare', atsProvider: 'Workday', location: 'Sandwich', companySize: '10,001+', officialWebsite: 'https://www.pfizer.co.uk', careersPageUrl: 'https://www.pfizer.co.uk/careers', description: 'Pfizer is one of the world\'s premier biopharmaceutical companies.' },
  { id: 'rolls-uk', companyName: 'Rolls-Royce', industry: 'Engineering', atsProvider: 'Workday', location: 'Derby', companySize: '10,001+', officialWebsite: 'https://www.rolls-royce.com', careersPageUrl: 'https://www.rolls-royce.com/careers.aspx', description: 'Rolls-Royce pioneers cutting-edge technologies that deliver clean, safe and competitive solutions.' },
  { id: 'sales-uk', companyName: 'Salesforce', industry: 'Technology', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.salesforce.com/uk', careersPageUrl: 'https://www.salesforce.com/company/careers', description: 'Salesforce is the global leader in Customer Relationship Management (CRM).' },
  { id: 'sap-uk', companyName: 'SAP UK', industry: 'Technology', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.sap.com/uk', careersPageUrl: 'https://www.sap.com/about/careers.html', description: 'SAP is the world leader in enterprise resource planning software.' },
  { id: 'shell-uk', companyName: 'Shell', industry: 'Energy', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.shell.co.uk', careersPageUrl: 'https://www.shell.co.uk/careers.html', description: 'Shell is a global group of energy and petrochemical companies.' },
  { id: 'siemens-uk', companyName: 'Siemens UK', industry: 'Engineering', atsProvider: 'Custom', location: 'Manchester', companySize: '10,001+', officialWebsite: 'https://www.siemens.com/uk/en.html', careersPageUrl: 'https://new.siemens.com/uk/en/company/jobs.html', description: 'Siemens is a technology company centered on industry, infrastructure, transport, and healthcare.' },
  { id: 'sky-uk', companyName: 'Sky', industry: 'Media', atsProvider: 'Workday', location: 'Osterley', companySize: '10,001+', officialWebsite: 'https://www.sky.com', careersPageUrl: 'https://careers.sky.com', description: 'Sky is Europe\'s leading media and entertainment company.' },
  { id: 'sony-uk', companyName: 'Sony Interactive', industry: 'Technology', atsProvider: 'Greenhouse', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.playstation.com/en-gb', careersPageUrl: 'https://www.playstation.com/en-gb/corporate/careers', description: 'Sony Interactive Entertainment is a global leader in interactive and digital entertainment.' },
  { id: 'tesla-uk', companyName: 'Tesla UK', industry: 'Technology', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.tesla.com/en_gb', careersPageUrl: 'https://www.tesla.com/careers', description: 'Tesla is accelerating the world\'s transition to sustainable energy.' },
  { id: 'unilever-uk', companyName: 'Unilever', industry: 'Retail', atsProvider: 'Workday', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.unilever.co.uk', careersPageUrl: 'https://www.unilever.co.uk/careers', description: 'Unilever is one of the world’s leading suppliers of Beauty & Personal Care, Home Care, and Foods & Refreshment products.' },
  { id: 'voda-uk', companyName: 'Vodafone', industry: 'Technology', atsProvider: 'Taleo', location: 'Newbury', companySize: '10,001+', officialWebsite: 'https://www.vodafone.co.uk', careersPageUrl: 'https://careers.vodafone.com', description: 'Vodafone is a leading technology communications company in Europe and Africa.' },
  { id: 'disney-uk', companyName: 'The Walt Disney Company', industry: 'Media', atsProvider: 'Custom', location: 'London', companySize: '10,001+', officialWebsite: 'https://www.disney.co.uk', careersPageUrl: 'https://jobs.disneycareers.com', description: 'The Walt Disney Company is a leading diversified international family entertainment and media enterprise.' }
];

const generateLargeDataset = (): Company[] => {
  const companies: Company[] = [];
  
  // 1. Add our high-quality real companies first
  BASE_REAL_COMPANIES.forEach((base, idx) => {
    const jobCount = 3 + Math.floor(Math.random() * 5);
    const jobs: Job[] = Array.from({ length: jobCount }).map((_, jidx) => {
      // Create a plausible apply URL based on the company's career page
      const applyPath = base.atsProvider === 'Greenhouse' ? '/jobs/' : (base.atsProvider === 'Workday' ? '/apply/' : '/application/');
      const directUrl = `${base.careersPageUrl || 'https://example.com'}${applyPath}${jidx + 100}`;
      return createJob(`${base.id}-job-${jidx}`, `Senior ${base.industry} Specialist`, base.industry || 'Department', base.location || 'London', true, directUrl);
    });
    
    companies.push({
      id: base.id || `real-${idx}`,
      companyName: base.companyName || 'Unknown Company',
      officialWebsite: base.officialWebsite || 'https://example.com',
      industry: base.industry || INDUSTRIES[1],
      sponsorshipType: 'Skilled Worker',
      atsProvider: base.atsProvider || 'Workday',
      careersPageUrl: base.careersPageUrl || 'https://example.com/careers',
      location: base.location || 'London',
      companySize: base.companySize || '1,001 - 5,000',
      description: base.description || 'A major UK sponsor company providing various services.',
      activeJobs: jobs,
      totalActiveJobs: jobs.length
    });
  });

  // 2. Generate remaining up to 1000+ entries
  const suffixes = ['Solutions', 'Group', 'Partners', 'Systems', 'Global', 'Digital', 'Consulting', 'Dynamics', 'Technologies', 'Ventures'];
  const genericIndustries = INDUSTRIES.filter(i => i !== 'All Industries');
  const genericAts = ATS_PROVIDERS.filter(a => a !== 'All ATS');
  const genericLocations = LOCATIONS.filter(l => l !== 'All Locations');

  for (let i = companies.length; i < 1100; i++) {
    const industry = genericIndustries[Math.floor(Math.random() * genericIndustries.length)];
    const location = genericLocations[Math.floor(Math.random() * genericLocations.length)];
    const ats = genericAts[Math.floor(Math.random() * genericAts.length)];
    const baseName = `${industry} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    const name = `${baseName} ${i}`;
    const id = `company-${i}`;
    
    // Create a realistic-looking domain name
    const domainPart = baseName.toLowerCase().replace(/[^a-z]/g, '') + i;
    const officialWebsite = `https://www.${domainPart}.co.uk`;
    const careersUrl = `${officialWebsite}/careers`;
    
    const jobCount = 1 + Math.floor(Math.random() * 4);
    const jobs: Job[] = Array.from({ length: jobCount }).map((_, jidx) => {
      // Determine apply path based on ATS
      const applyPath = ats === 'Greenhouse' ? '/jobs/' : (ats === 'Workday' ? '/apply/' : '/posting/');
      const directUrl = `${careersUrl}${applyPath}${jidx + 1000}`;
      return createJob(`${id}-job-${jidx}`, `${industry} Professional`, industry, location, true, directUrl);
    });

    companies.push({
      id,
      companyName: name,
      officialWebsite,
      industry,
      sponsorshipType: i % 10 === 0 ? 'Global Business Mobility' : 'Skilled Worker',
      atsProvider: ats,
      careersPageUrl: careersUrl,
      location,
      companySize: ['11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '10,001+'][Math.floor(Math.random() * 6)],
      description: `Leading provider in the ${industry} sector, focusing on innovation and quality service across the UK. Founded with a mission to transform the ${industry.toLowerCase()} landscape.`,
      activeJobs: jobs,
      totalActiveJobs: jobs.length
    });
  }

  return companies;
};

export const SAMPLE_COMPANIES: Company[] = generateLargeDataset();
