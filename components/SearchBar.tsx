
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full p-4 pl-12 text-sm text-slate-900 border border-slate-200 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
        placeholder="Search for companies (e.g. Monzo, Revolut...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
