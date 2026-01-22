
import React, { useState, useMemo, useEffect } from 'react';
import { Company, FilterState } from './types';
import { SAMPLE_COMPANIES } from './constants';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { CompanyCard } from './components/CompanyCard';
import { DetailModal } from './components/DetailModal';
import { ScrapingStrategy } from './components/ScrapingStrategy';

const ITEMS_PER_PAGE = 24;

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    industry: 'All Industries',
    atsProvider: 'All ATS',
    sponsorshipType: 'All Types',
    location: 'All Locations'
  });
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [activeTab, setActiveTab] = useState<'directory' | 'strategy'>('directory');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredCompanies = useMemo(() => {
    // Reset visible count when search or filters change
    setVisibleCount(ITEMS_PER_PAGE);
    
    return SAMPLE_COMPANIES.filter(company => {
      const matchesSearch = company.companyName.toLowerCase().includes(search.toLowerCase());
      const matchesIndustry = filters.industry === 'All Industries' || company.industry === filters.industry;
      const matchesAts = filters.atsProvider === 'All ATS' || company.atsProvider === filters.atsProvider;
      const matchesSponsor = filters.sponsorshipType === 'All Types' || company.sponsorshipType === filters.sponsorshipType;
      const matchesLocation = filters.location === 'All Locations' || company.location === filters.location;

      return matchesSearch && matchesIndustry && matchesAts && matchesSponsor && matchesLocation;
    });
  }, [search, filters]);

  const visibleCompanies = useMemo(() => {
    return filteredCompanies.slice(0, visibleCount);
  }, [filteredCompanies, visibleCount]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      industry: 'All Industries',
      atsProvider: 'All ATS',
      sponsorshipType: 'All Types',
      location: 'All Locations'
    });
    setSearch('');
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">UK Visa Directory</h1>
            </div>

            <nav className="flex gap-4">
              <button 
                onClick={() => setActiveTab('directory')}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${activeTab === 'directory' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                Directory
              </button>
              <button 
                onClick={() => setActiveTab('strategy')}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${activeTab === 'strategy' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                Our Strategy
              </button>
            </nav>

            <div className="hidden md:block">
              <a 
                href="https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" 
                target="_blank"
                className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 uppercase tracking-wider"
              >
                Gov.uk Data Source
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'directory' ? (
          <div className="space-y-10">
            {/* Search and Welcome */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Find your next role with <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Visa Support</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Browse through <span className="text-slate-900 font-bold">{SAMPLE_COMPANIES.length}+</span> UK-licensed sponsors. We detect their Applicant Tracking Systems (ATS) so you know where to apply.
              </p>
              <div className="pt-4">
                <SearchBar value={search} onChange={setSearch} />
              </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:col-span-1 space-y-6">
                <div className="sticky top-24">
                  <Filters 
                    filters={filters} 
                    onFilterChange={handleFilterChange} 
                    onClear={clearFilters}
                  />
                  
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl">
                    <h4 className="font-bold mb-2">Want the full dataset?</h4>
                    <p className="text-slate-400 text-sm mb-4">Download the raw JSON for all {SAMPLE_COMPANIES.length}+ companies including direct ATS links.</p>
                    <button className="w-full py-2.5 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                      Export Dataset
                    </button>
                  </div>
                </div>
              </aside>

              {/* Company Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-slate-500">
                    Showing <span className="text-slate-900 font-bold">{filteredCompanies.length}</span> companies
                  </span>
                </div>

                {visibleCompanies.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {visibleCompanies.map(company => (
                        <CompanyCard 
                          key={company.id} 
                          company={company} 
                          onClick={setSelectedCompany}
                        />
                      ))}
                    </div>
                    {visibleCount < filteredCompanies.length && (
                      <div className="mt-12 flex justify-center">
                        <button 
                          onClick={loadMore}
                          className="px-8 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                        >
                          Load More Companies
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-100 p-20 text-center space-y-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">No results found</h3>
                      <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                    </div>
                    <button 
                      onClick={clearFilters}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <ScrapingStrategy />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">UK Visa Directory</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} - Independent directory of UK licensed sponsors. Not affiliated with the UK Home Office.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 font-medium text-sm">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 font-medium text-sm">Terms</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 font-medium text-sm">Contact</a>
          </div>
        </div>
      </footer>

      {/* Details Modal */}
      <DetailModal 
        company={selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
      />
    </div>
  );
};

export default App;
