import React from 'react';
import { Cpu, HardDrive, Monitor, Layers, ArrowRight, MessageSquare, Info } from 'lucide-react';
import { Laptop } from '../types/laptop';
import { formatKshPrice } from '../data/laptops';

interface ProductCardProps {
  laptop: Laptop;
  onViewDetails: (laptop: Laptop) => void;
  onEnquireWhatsApp: (laptop: Laptop) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  laptop,
  onViewDetails,
  onEnquireWhatsApp,
}) => {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'gaming':
        return 'text-purple-400 bg-purple-950/60 border-purple-500/30';
      case 'workstations':
        return 'text-sky-400 bg-sky-950/60 border-sky-500/30';
      case 'apple':
        return 'text-zinc-200 bg-zinc-800/80 border-zinc-700';
      default:
        return 'text-zinc-400 bg-zinc-900 border-zinc-800';
    }
  };

  return (
    <article
      className="group bg-zinc-900/70 border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between"
      aria-labelledby={`product-title-${laptop.id}`}
    >
      {/* Top Media & Badges */}
      <div>
        <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
          <img
            src={laptop.imageUrl}
            alt={laptop.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border backdrop-blur-md ${getCategoryTheme(
                laptop.category
              )}`}
            >
              {laptop.categoryLabel}
            </span>
          </div>

          {/* Placeholder Photo Disclaimer Badge */}
          <div className="absolute bottom-2 left-3 right-3">
            <span className="inline-flex items-center gap-1 text-[10px] text-zinc-400 bg-zinc-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-zinc-800/80">
              <Info className="w-3 h-3 text-sky-400 shrink-0" />
              <span className="truncate">Representative placeholder photo</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {/* Title & Subtitle */}
          <div className="mb-3">
            <h3
              id={`product-title-${laptop.id}`}
              className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight"
            >
              {laptop.name}
            </h3>
            {laptop.variantSubtitle && (
              <p className="text-xs text-zinc-400 font-mono mt-0.5 line-clamp-1">
                {laptop.variantSubtitle}
              </p>
            )}
          </div>

          {/* Advertised Price */}
          <div className="mb-4 pb-3 border-b border-zinc-800/80 flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                Advertised Price
              </span>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {formatKshPrice(laptop.priceKsh)}
              </span>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
              In Stock Listing
            </span>
          </div>

          {/* Key Specifications Grid */}
          <div className="space-y-2 text-xs text-zinc-300">
            {/* Processor / CPU or Chip */}
            {laptop.specs.processor && (
              <div className="flex items-start gap-2">
                <Cpu className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span className="line-clamp-1">{laptop.specs.processor}</span>
              </div>
            )}

            {/* Graphics / GPU */}
            {(laptop.specs.graphics || laptop.specs.gpu) && (
              <div className="flex items-start gap-2">
                <Layers className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span className="line-clamp-1 font-medium text-zinc-200">
                  {laptop.specs.graphics || `GPU: ${laptop.specs.gpu}`}
                </span>
              </div>
            )}

            {/* Memory & Storage */}
            <div className="flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>
                {laptop.specs.ram} RAM • {laptop.specs.storage}
              </span>
            </div>

            {/* Display */}
            <div className="flex items-start gap-2">
              <Monitor className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{laptop.specs.display}</span>
            </div>

            {/* Use Case if specified */}
            {laptop.specs.useCase && (
              <div className="pt-1 text-[11px] text-zinc-400 italic line-clamp-1">
                Target: {laptop.specs.useCase}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 flex items-center gap-2">
        <button
          onClick={() => onViewDetails(laptop)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs transition-colors shadow-md shadow-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label={`View details for ${laptop.name}`}
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onEnquireWhatsApp(laptop)}
          className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          title="Enquire on WhatsApp"
          aria-label={`Enquire on WhatsApp about ${laptop.name}`}
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
        </button>
      </div>
    </article>
  );
};
