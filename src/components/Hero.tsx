import React from 'react';
import { Search, Cpu, Gamepad2, Briefcase, Apple, Sparkles } from 'lucide-react';
import { Category } from '../types/laptop';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onExploreAll: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onExploreAll,
}) => {
  const quickSearches = ['RTX A3000', 'Apple M1 Max', 'Core i7-13700H', '32GB DDR5', 'CAD & 3D'];

  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950">
      {/* Background ambient electric-blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Curated Kenyan Stock Listings • Official Advertised Specs</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Find Your <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">Next Laptop</span>.
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 mb-8 leading-relaxed">
          Explore accurate specifications and verified advertised prices in Kenyan Shillings (KSh) for high-performance engineering workstations, competitive gaming laptops, and Apple MacBook Pro systems.
        </p>

        {/* Prominent Hero Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-2xl shadow-xl shadow-black/40 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all p-1.5">
            <Search className="w-5 h-5 text-zinc-400 ml-3.5 shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by model, GPU, CPU, RAM or use case (e.g., RTX, M1, CAD)..."
              className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
              aria-label="Search laptops by specification or name"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="px-3 py-1 text-xs text-zinc-400 hover:text-white rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors mr-1"
              >
                Clear
              </button>
            ) : (
              <button
                onClick={onExploreAll}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-sky-500/20 shrink-0"
              >
                Browse All
              </button>
            )}
          </div>

          {/* Quick search pills */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-zinc-400">
            <span className="text-zinc-500 mr-1">Suggested searches:</span>
            {quickSearches.map((term) => (
              <button
                key={term}
                onClick={() => onSearchChange(term)}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Category Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-2">
          {/* Workstations Card */}
          <button
            onClick={() => onSelectCategory('workstations')}
            className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all ${
              selectedCategory === 'workstations'
                ? 'bg-zinc-900/90 border-sky-500/80 ring-1 ring-sky-500/50 shadow-lg shadow-sky-950/50'
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                Workstations
                <span className="text-[11px] text-zinc-400 font-normal">2 listings</span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-1">HP ZBook Fury 16 G9 for CAD & 3D</p>
            </div>
          </button>

          {/* Gaming Card */}
          <button
            onClick={() => onSelectCategory('gaming')}
            className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all ${
              selectedCategory === 'gaming'
                ? 'bg-zinc-900/90 border-sky-500/80 ring-1 ring-sky-500/50 shadow-lg shadow-sky-950/50'
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                Gaming
                <span className="text-[11px] text-zinc-400 font-normal">2 listings</span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-1">RTX 4060 & RTX 5060 rigs</p>
            </div>
          </button>

          {/* Apple Card */}
          <button
            onClick={() => onSelectCategory('apple')}
            className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all ${
              selectedCategory === 'apple'
                ? 'bg-zinc-900/90 border-sky-500/80 ring-1 ring-sky-500/50 shadow-lg shadow-sky-950/50'
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-200 shrink-0">
              <Apple className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                Apple
                <span className="text-[11px] text-zinc-400 font-normal">2 listings</span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-1">MacBook Pro 16" M1 Max & Pro</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
