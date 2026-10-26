import React, { useState } from 'react';
import { X, ArrowRightLeft, Check, Layers, Cpu, HardDrive, Monitor, DollarSign } from 'lucide-react';
import { Laptop } from '../types/laptop';
import { formatKshPrice } from '../data/laptops';

interface CompareModalProps {
  laptops: Laptop[];
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: (laptop: Laptop) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  laptops,
  isOpen,
  onClose,
  onViewDetails,
}) => {
  const [firstId, setFirstId] = useState<string>(laptops[0]?.id || '');
  const [secondId, setSecondId] = useState<string>(laptops[1]?.id || '');

  if (!isOpen) return null;

  const laptopA = laptops.find((l) => l.id === firstId) || laptops[0];
  const laptopB = laptops.find((l) => l.id === secondId) || laptops[1];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-sky-400" />
            <h3 id="compare-modal-title" className="text-base font-bold text-white">
              Side-by-Side Laptop Specification Comparison
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close comparison"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <label htmlFor="compare-select-a" className="text-xs text-zinc-400 block mb-1 font-medium">
                Model A:
              </label>
              <select
                id="compare-select-a"
                value={laptopA.id}
                onChange={(e) => setFirstId(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-2 text-xs font-semibold text-white focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {laptops.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name} - {formatKshPrice(l.priceKsh)}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <label htmlFor="compare-select-b" className="text-xs text-zinc-400 block mb-1 font-medium">
                Model B:
              </label>
              <select
                id="compare-select-b"
                value={laptopB.id}
                onChange={(e) => setSecondId(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-2 text-xs font-semibold text-white focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {laptops.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name} - {formatKshPrice(l.priceKsh)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="py-3 px-3 w-1/3">Specification</th>
                  <th className="py-3 px-3 w-1/3 text-white font-bold">{laptopA.name}</th>
                  <th className="py-3 px-3 w-1/3 text-white font-bold">{laptopB.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Advertised Price</td>
                  <td className="py-3 px-3 font-extrabold text-sky-400 text-sm">
                    {formatKshPrice(laptopA.priceKsh)}
                  </td>
                  <td className="py-3 px-3 font-extrabold text-sky-400 text-sm">
                    {formatKshPrice(laptopB.priceKsh)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Category</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.categoryLabel}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.categoryLabel}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Processor / CPU</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.specs.processor || 'Apple Silicon'}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.specs.processor || 'Apple Silicon'}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Graphics / GPU</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.specs.graphics || laptopA.specs.gpu}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.specs.graphics || laptopB.specs.gpu}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Memory (RAM)</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.specs.ram}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.specs.ram}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Storage</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.specs.storage}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.specs.storage}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Display</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopA.specs.display}</td>
                  <td className="py-3 px-3 text-zinc-200">{laptopB.specs.display}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Use Case / Highlights</td>
                  <td className="py-3 px-3 text-zinc-400 italic">
                    {laptopA.specs.useCase || laptopA.keyHighlights.slice(0, 2).join(', ')}
                  </td>
                  <td className="py-3 px-3 text-zinc-400 italic">
                    {laptopB.specs.useCase || laptopB.keyHighlights.slice(0, 2).join(', ')}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-zinc-400 font-medium">Action</td>
                  <td className="py-3 px-3">
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(laptopA);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs"
                    >
                      View Model A
                    </button>
                  </td>
                  <td className="py-3 px-3">
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(laptopB);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs"
                    >
                      View Model B
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
