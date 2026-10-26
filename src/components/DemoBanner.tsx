import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Demo Disclaimer Banner"
      className="bg-amber-950/70 border-b border-amber-500/30 text-amber-200 text-xs sm:text-sm px-4 py-2.5 backdrop-blur-sm relative z-30 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
          <p className="leading-snug">
            <strong className="font-semibold text-amber-300">Private Sales Demo:</strong>{' '}
            This is an unapproved sales demonstration for <span className="text-white font-medium">Laptronics Kenya</span>.
            Product photos are representative placeholders to be replaced with seller-approved photography.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:bg-amber-900/50 rounded text-amber-300 hover:text-white transition-colors shrink-0"
          aria-label="Dismiss demo notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
