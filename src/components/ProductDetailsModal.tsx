import React, { useEffect } from 'react';
import {
  ArrowLeft,
  X,
  MessageSquare,
  Cpu,
  HardDrive,
  Layers,
  Monitor,
  Activity,
  Cable,
  Target,
  Sparkles,
  Info,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Laptop } from '../types/laptop';
import { formatKshPrice } from '../data/laptops';

interface ProductDetailsModalProps {
  laptop: Laptop | null;
  onClose: () => void;
  onEnquireWhatsApp: (laptop: Laptop) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  laptop,
  onClose,
  onEnquireWhatsApp,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!laptop) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-laptop-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-zinc-800/80 bg-zinc-900/60 sticky top-0 z-20 backdrop-blur-md">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Back to Catalogue"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Catalogue</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
          {/* Header Section: Image & Main Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Image Container with Placeholder Notice */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={laptop.imageUrl}
                alt={laptop.imageAlt}
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Placeholder Image:</strong> Representative hardware render for demo purposes. Replace with verified seller photo before production launch.
                </span>
              </div>
            </div>

            {/* Title, Category & Price */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-sky-950/70 border border-sky-500/40 text-sky-400">
                  {laptop.categoryLabel}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Listing ID: #{laptop.id}
                </span>
              </div>

              <div>
                <h2 id="modal-laptop-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {laptop.name}
                </h2>
                {laptop.variantSubtitle && (
                  <p className="text-sm sm:text-base text-zinc-400 font-medium mt-1">
                    {laptop.variantSubtitle}
                  </p>
                )}
              </div>

              {/* Price card */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider block">
                    Advertised Price
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {formatKshPrice(laptop.priceKsh)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Advertised Spec
                  </span>
                  <span className="text-[11px] text-zinc-500 block mt-0.5">
                    Kenyan Shillings (KSh)
                  </span>
                </div>
              </div>

              {/* Call to action: Enquire on WhatsApp */}
              <div className="pt-2">
                <button
                  onClick={() => onEnquireWhatsApp(laptop)}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm sm:text-base transition-colors shadow-lg shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Enquire on WhatsApp about this laptop"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <p className="text-[11px] text-zinc-500 text-center mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Opens seller demo enquiry draft (Seller contact placeholder)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Full Specifications Section */}
          <div className="border-t border-zinc-800/80 pt-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Full Advertised Specifications</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              {/* Processor */}
              {laptop.specs.processor && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    Processor (CPU)
                  </span>
                  <p className="font-semibold text-white">{laptop.specs.processor}</p>
                </div>
              )}

              {/* Graphics or GPU */}
              {(laptop.specs.graphics || laptop.specs.gpu) && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Layers className="w-3.5 h-3.5 text-sky-400" />
                    Graphics (GPU)
                  </span>
                  <p className="font-semibold text-white">
                    {laptop.specs.graphics || laptop.specs.gpu}
                  </p>
                </div>
              )}

              {/* RAM */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                  <HardDrive className="w-3.5 h-3.5 text-sky-400" />
                  Memory (RAM)
                </span>
                <p className="font-semibold text-white">{laptop.specs.ram}</p>
              </div>

              {/* Storage */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                  <HardDrive className="w-3.5 h-3.5 text-sky-400" />
                  Storage
                </span>
                <p className="font-semibold text-white">{laptop.specs.storage}</p>
              </div>

              {/* Display */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                  <Monitor className="w-3.5 h-3.5 text-sky-400" />
                  Display
                </span>
                <p className="font-semibold text-white">{laptop.specs.display}</p>
              </div>

              {/* Refresh Rate if listed */}
              {laptop.specs.refreshRate && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    Refresh Rate
                  </span>
                  <p className="font-semibold text-white">{laptop.specs.refreshRate}</p>
                </div>
              )}

              {/* Ports and Connectivity if listed */}
              {laptop.specs.portsAndConnectivity && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 md:col-span-2">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Cable className="w-3.5 h-3.5 text-sky-400" />
                    Ports and Connectivity
                  </span>
                  <p className="font-semibold text-white">{laptop.specs.portsAndConnectivity}</p>
                </div>
              )}

              {/* Use Case from listing if listed */}
              {laptop.specs.useCase && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 md:col-span-2">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Target className="w-3.5 h-3.5 text-sky-400" />
                    Use Case from Listing
                  </span>
                  <p className="font-semibold text-sky-300">{laptop.specs.useCase}</p>
                </div>
              )}

              {/* Other advertised features if listed */}
              {laptop.specs.otherFeatures && (
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 md:col-span-2">
                  <span className="text-zinc-400 flex items-center gap-1.5 mb-1 font-medium text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    Other Advertised Features
                  </span>
                  <p className="font-semibold text-white">{laptop.specs.otherFeatures}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 bg-zinc-900/80 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Laptronics Kenya Demo Listing</span>
          <button
            onClick={onClose}
            className="text-white hover:text-sky-400 font-medium underline underline-offset-4"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
