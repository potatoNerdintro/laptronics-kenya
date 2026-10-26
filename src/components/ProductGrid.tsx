import React from 'react';
import { ArrowUpDown, Filter, RotateCcw, SearchX } from 'lucide-react';
import { Category, Laptop, SortOption } from '../types/laptop';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  laptops: Laptop[];
  totalAvailable: number;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  searchQuery: string;
  onClearSearch: () => void;
  onResetFilters: () => void;
  onViewDetails: (laptop: Laptop) => void;
  onEnquireWhatsApp: (laptop: Laptop) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  laptops,
  totalAvailable,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  searchQuery,
  onClearSearch,
  onResetFilters,
  onViewDetails,
  onEnquireWhatsApp,
}) => {
  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Laptops' },
    { id: 'workstations', label: 'Workstations' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'apple', label: 'Apple' },
  ];

  return (
    <section id="catalogue-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Catalogue Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-zinc-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Sort Selector */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm">
          <span className="text-zinc-400">
            Showing <strong className="text-white">{laptops.length}</strong> of{' '}
            <strong className="text-white">{totalAvailable}</strong> listings
          </span>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 focus-within:border-sky-500">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" aria-hidden="true" />
            <label htmlFor="sort-select" className="sr-only">
              Sort laptops by
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-transparent text-xs text-white focus:outline-none cursor-pointer pr-1"
            >
              <option value="default" className="bg-zinc-900 text-white">
                Featured Order
              </option>
              <option value="price-asc" className="bg-zinc-900 text-white">
                Price: Low to High
              </option>
              <option value="price-desc" className="bg-zinc-900 text-white">
                Price: High to Low
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Search Filter Banner */}
      {searchQuery && (
        <div className="mt-4 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl flex items-center justify-between gap-3 text-xs">
          <div className="text-zinc-300">
            Search filter active for: <span className="font-semibold text-sky-400">"{searchQuery}"</span>
          </div>
          <button
            onClick={onClearSearch}
            className="text-zinc-400 hover:text-white underline underline-offset-2 flex items-center gap-1"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Product Grid or Empty State */}
      {laptops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {laptops.map((laptop) => (
            <ProductCard
              key={laptop.id}
              laptop={laptop}
              onViewDetails={onViewDetails}
              onEnquireWhatsApp={onEnquireWhatsApp}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 p-12 text-center bg-zinc-900/40 border border-dashed border-zinc-800 rounded-2xl max-w-lg mx-auto">
          <SearchX className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No Laptops Found</h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            We couldn't find any laptops matching your current search or category filter. Try clearing your search keywords or switching categories.
          </p>
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </section>
  );
};
