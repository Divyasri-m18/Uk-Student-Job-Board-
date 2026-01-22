
import React, { useEffect, useState } from 'react';
import { Company, Job } from '../types';

interface DetailModalProps {
  company: Company | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ company, onClose }) => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'about'>('jobs');
  const [jobSearch, setJobSearch] = useState('');

  useEffect(() => {
    if (company) {
      document.body.style.overflow = 'hidden';
      setActiveTab('jobs');
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [company]);

  if (!company) return null;

  const filteredJobs = company.activeJobs.filter(job => 
    job.jobTitle.toLowerCase().includes(jobSearch.toLowerCase()) ||
    job.department.toLowerCase().includes(jobSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="relative bg-slate-900 text-white px-8 py-8 pt-10">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 font-black text-2xl uppercase shadow-xl">
                {company.companyName.charAt(0)}
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{company.companyName}</h2>
                <div className="flex items-center gap-3 mt-1 text-slate-400 text-sm">
                  <span>{company.location}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <a 
                    href={company.officialWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Official Website
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex bg-white/10 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'jobs' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-300 hover:text-white'}`}
              >
                Jobs ({company.totalActiveJobs})
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'about' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-300 hover:text-white'}`}
              >
                About
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
          {activeTab === 'jobs' ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4 sticky top-0 z-10 bg-slate-50 pb-4">
                <div className="relative flex-1">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search roles in this company..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <div key={job.jobId} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all group">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {job.jobTitle}
                          </h4>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1 font-medium">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.department}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{job.location}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-bold uppercase tracking-wider">{job.jobType}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {job.sponsorshipAvailable && (
                            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold border border-green-100">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Visa Sponsored
                            </span>
                          )}
                          <a 
                            href={job.directApplyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-blue-200 active:scale-95 text-center"
                          >
                            Apply Direct
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    No jobs matching your search in this company.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Company Overview</h3>
                <p className="text-slate-600 leading-relaxed">
                  {company.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={company.officialWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
                  >
                    Visit Official Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">ATS Platform</h4>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{company.atsProvider}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">Sponsorship Type</h4>
                  <span className="font-bold text-slate-900">{company.sponsorshipType}</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">Size</h4>
                  <span className="font-bold text-slate-900">{company.companySize}</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">Region</h4>
                  <span className="font-bold text-slate-900">{company.location}</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <a 
                  href={company.careersPageUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                >
                  View All {company.companyName} Careers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
