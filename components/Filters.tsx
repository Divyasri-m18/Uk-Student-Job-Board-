
import React from 'react';
import { INDUSTRIES, ATS_PROVIDERS, SPONSORSHIP_TYPES, LOCATIONS } from '../constants';
import { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClear: () => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, onClear }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-800">Filters</h3>
        <button 
          onClick={onClear}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => onFilterChange('industry', e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">ATS Provider</label>
          <select
            value={filters.atsProvider}
            onChange={(e) => onFilterChange('atsProvider', e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            {ATS_PROVIDERS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Sponsorship Type</label>
          <select
            value={filters.sponsorshipType}
            onChange={(e) => onFilterChange('sponsorshipType', e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            {SPONSORSHIP_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Location</label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};
