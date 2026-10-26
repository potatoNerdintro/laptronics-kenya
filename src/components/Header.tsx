import React, { useState } from 'react';
import { Laptop as LaptopIcon, Menu, X, Search, ShieldAlert } from 'lucide-react';
import { Category } from '../types/laptop';

interface HeaderProps {
  currentCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onNavigateHome: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onNavigateHome,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks: { label: string; category: Category }[] = [
    { label: 'All Laptops', category: 'all' },
    { label: 'Gaming', category: 'gaming' },
    { label: 'Workstations', category: 'workstations' },
    { label: 'Apple', category: 'apple' },
  ];

  const handleNavClick = (cat: Category) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            aria-label="Laptronics Kenya Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <LaptopIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">
                  Laptronics <span className="text-sky-400 font-extrabold">Kenya</span>
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 tracking-wider">
                  Demo
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">Premium Laptop Catalogue</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            <button
              onClick={onNavigateHome}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentCategory === 'all' && !searchQuery
                  ? 'text-white bg-zinc-800/80'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => {
              const isActive = currentCategory === item.category;
              return (
                <button
                  key={item.category}
                  onClick={() => handleNavClick(item.category)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-sky-400 bg-sky-950/40 border border-sky-500/30 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2">
            {/* Quick search input */}
            <div className="relative hidden sm:block w-48 lg:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specs, brand..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-sky-500 text-xs text-white pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-zinc-500 transition-colors"
                aria-label="Search laptops by specification or name"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white p-0.5 rounded text-xs"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Mobile search toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="sm:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg"
              aria-label="Toggle mobile search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Drawer */}
        {showSearchInput && (
          <div className="sm:hidden py-2 border-t border-zinc-800/80">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specs, RTX, M1, RAM..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-xs text-white pl-9 pr-3 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                aria-label="Search catalogue on mobile"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 text-sm"
                  aria-label="Clear search query"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-zinc-800 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
            aria-label="Mobile Navigation"
          >
            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentCategory === 'all' && !searchQuery
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => (
              <button
                key={item.category}
                onClick={() => handleNavClick(item.category)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  currentCategory === item.category
                    ? 'bg-sky-950/60 text-sky-400 border border-sky-500/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <span>{item.label}</span>
                {currentCategory === item.category && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                )}
              </button>
            ))}

            <div className="pt-3 mt-3 border-t border-zinc-800/80 px-4 text-xs text-zinc-500 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Private Demo: Prices in KSh. Contact via enquiry drawer.</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
