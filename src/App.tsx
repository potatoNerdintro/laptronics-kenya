/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CompareModal } from './components/CompareModal';
import { Footer } from './components/Footer';
import { LAPTOPS } from './data/laptops';
import { Category, Laptop, SortOption } from './types/laptop';
import { filterAndSortLaptops } from './utils/catalogueLogic';
import { ArrowRightLeft } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [activeLaptopDetails, setActiveLaptopDetails] = useState<Laptop | null>(null);
  const [whatsAppLaptop, setWhatsAppLaptop] = useState<Laptop | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Compute filtered & sorted laptops
  const displayedLaptops = useMemo(() => {
    return filterAndSortLaptops(LAPTOPS, searchQuery, selectedCategory, sortBy);
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    // Smooth scroll to catalogue if lower down
    const catalogueEl = document.getElementById('catalogue-section');
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateHome = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-sky-500 selection:text-black">
      {/* 1. Private Demo Notice Banner */}
      <DemoBanner />

      {/* 2. Top Header Navigation */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section with Find Your Next Laptop */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onExploreAll={() => handleSelectCategory('all')}
        />

        {/* Floating Compare Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-sky-500/50 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-sm cursor-pointer"
            aria-label="Open Laptop Compare Tool"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-sky-400" />
            <span>Compare Specifications</span>
          </button>
        </div>

        {/* 4. Product Catalogue Grid */}
        <ProductGrid
          laptops={displayedLaptops}
          totalAvailable={LAPTOPS.length}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
          onResetFilters={handleResetFilters}
          onViewDetails={(laptop) => setActiveLaptopDetails(laptop)}
          onEnquireWhatsApp={(laptop) => setWhatsAppLaptop(laptop)}
        />
      </main>

      {/* 5. Product Details Modal / View */}
      <ProductDetailsModal
        laptop={activeLaptopDetails}
        onClose={() => setActiveLaptopDetails(null)}
        onEnquireWhatsApp={(laptop) => {
          setActiveLaptopDetails(null);
          setWhatsAppLaptop(laptop);
        }}
      />

      {/* 6. Enquire on WhatsApp Placeholder Modal */}
      <WhatsAppModal
        laptop={whatsAppLaptop}
        onClose={() => setWhatsAppLaptop(null)}
      />

      {/* 7. Compare Modal */}
      <CompareModal
        laptops={LAPTOPS}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onViewDetails={(laptop) => setActiveLaptopDetails(laptop)}
      />

      {/* 8. Demo Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
        onOpenCompare={() => setIsCompareOpen(true)}
      />
    </div>
  );
}
