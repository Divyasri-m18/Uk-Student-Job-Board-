
import React from 'react';

export const ScrapingStrategy: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm mt-12 mb-20">
      <div className="p-10 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-3xl font-bold text-slate-900">Job Extraction Pipeline (Phase 2 & 5)</h2>
        <p className="text-slate-500 mt-2 text-lg">How we aggregate real-time openings from 1,000+ licensed sponsors.</p>
      </div>
      
      <div className="p-10 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-black">API</span>
              ATS-Specific APIs
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We leverage public job board APIs used by major ATS providers. This ensures 100% accuracy and direct application links.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex gap-2">
                <span className="font-bold text-slate-700">Greenhouse:</span>
                <code>boards-api.greenhouse.io/v1/boards/{"{company}"}/jobs</code>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-slate-700">Lever:</span>
                <code>api.lever.co/v0/postings/{"{company}"}</code>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-slate-700">SmartRecruiters:</span>
                <code>api.smartrecruiters.com/v1/companies/{"{id}"}/postings</code>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-black">URL</span>
              Direct Apply Validation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every job link is passed through a validation engine. We bypass intermediate "Job Description" pages and link users directly to the <code>/apply</code> or <code>/form</code> endpoint.
            </p>
          </section>

          <section>
             <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl">
               <h4 className="font-bold mb-2">Automated Refresh</h4>
               <p className="text-sm text-blue-100">Our scraper runs every 6 hours via GitHub Actions, marking jobs as 'Expired' if they return a 404 or redirect to a landing page.</p>
             </div>
          </section>
        </div>

        <div className="space-y-6">
           <section className="bg-slate-900 text-white p-8 rounded-3xl font-mono text-xs overflow-x-auto shadow-2xl">
            <h4 className="text-blue-400 font-bold mb-6 flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
               Greenhouse Scraper Logic
            </h4>
            <pre className="text-slate-300 leading-relaxed">{`
import requests

def scrape_greenhouse(company_id):
    API = f"https://boards-api.greenhouse.io/v1/boards/{company_id}/jobs"
    r = requests.get(API).json()
    
    active_jobs = []
    for job in r['jobs']:
        # We transform the listing link to a direct apply link
        direct_url = job['absolute_url'].replace("/jobs/", "/apply/")
        
        active_jobs.append({
            "title": job['title'],
            "location": job['location']['name'],
            "url": direct_url,
            "dept": job['departments'][0]['name']
        })
    return active_jobs
            `}</pre>
          </section>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
               <span className="text-2xl font-black text-slate-900">2.4k</span>
               <p className="text-xs font-bold text-slate-500 uppercase mt-1">Jobs Tracked/Day</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
               <span className="text-2xl font-black text-slate-900">98%</span>
               <p className="text-xs font-bold text-slate-500 uppercase mt-1">Link Validity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
