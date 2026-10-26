import React from 'react';
import { Laptop as LaptopIcon, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import { Category } from '../types/laptop';

interface FooterProps {
  onSelectCategory: (cat: Category) => void;
  onNavigateHome: () => void;
  onOpenCompare: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateHome,
  onOpenCompare,
}) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs mt-16">
      {/* Top Banner inside Footer */}
      <div className="bg-zinc-900/50 border-b border-zinc-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-zinc-300">
              <strong className="text-white">Demonstration Notice:</strong> This is a private, unapproved sales demo created for Laptronics Kenya.
            </p>
          </div>
          <button
            onClick={onOpenCompare}
            className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer"
          >
            Compare Specifications Side-by-Side →
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-zinc-950 font-bold">
                <LaptopIcon className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white">
                Laptronics <span className="text-sky-400">Kenya</span>
              </span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                Sales Demo
              </span>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Curated catalogue showcasing high-end workstations, performance gaming laptops, and Apple MacBooks with exact advertised specifications and pricing in Kenyan Shillings (KSh).
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <p>• Prices displayed in Kenyan Shillings (KSh).</p>
              <p>• Unapproved sales demonstration for product discovery.</p>
              <p>• Placeholder photography strictly for layout visualization.</p>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors"
                >
                  All Laptops (6 listings)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('workstations')}
                  className="hover:text-white transition-colors"
                >
                  Workstations (HP ZBook Fury)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('gaming')}
                  className="hover:text-white transition-colors"
                >
                  Gaming (HP Victus & Legion 5)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('apple')}
                  className="hover:text-white transition-colors"
                >
                  Apple (MacBook Pro 16")
                </button>
              </li>
            </ul>
          </div>

          {/* Demonstration Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Demo Disclaimers
            </h4>
            <ul className="space-y-2 text-[11px] text-zinc-400">
              <li className="flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>Strict adherence to supplied listing specs without embellishments.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>Product photos must be replaced with seller-approved photos prior to publishing.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>WhatsApp enquiry links will link directly once the phone line is verified.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
          <p>© {new Date().getFullYear()} Laptronics Kenya (Sales Demo). All rights reserved.</p>
          <p>Built with React & Tailwind CSS • Offline Functional Demo</p>
        </div>
      </div>
    </footer>
  );
};
