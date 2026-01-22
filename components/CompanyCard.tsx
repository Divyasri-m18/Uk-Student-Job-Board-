
import React from 'react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
  onClick: (company: Company) => void;
}

const getAtsColor = (ats: string) => {
  const colors: Record<string, string> = {
    'Greenhouse': 'bg-green-100 text-green-700 border-green-200',
    'Lever': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'Workday': 'bg-blue-100 text-blue-700 border-blue-200',
    'Ashby': 'bg-slate-100 text-slate-700 border-slate-200',
    'SmartRecruiters': 'bg-orange-100 text-orange-700 border-orange-200',
    'Custom/In-house': 'bg-gray-100 text-gray-600 border-gray-200'
  };
  return colors[ats] || 'bg-slate-100 text-slate-600 border-slate-200';
};

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  return (
    <div 
      onClick={() => onClick(company)}
      className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {company.companyName}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{company.location}</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
          {company.industry}
        </span>
      </div>

      <div className="bg-blue-50/50 rounded-xl p-3 mb-4 border border-blue-100/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-sm font-bold text-blue-700">{company.totalActiveJobs} Open Positions</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${getAtsColor(company.atsProvider)}`}>
          {company.atsProvider}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-500">
          {company.sponsorshipType}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
        <span className="text-xs text-slate-400 font-medium">
          {company.companySize || 'Size N/A'}
        </span>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
          View Jobs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};
