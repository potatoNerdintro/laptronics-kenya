import React, { useState } from 'react';
import {
  MessageSquare,
  X,
  Copy,
  Check,
  ShieldAlert,
  Info,
  PhoneCall,
} from 'lucide-react';
import { Laptop } from '../types/laptop';
import { formatKshPrice } from '../data/laptops';

interface WhatsAppModalProps {
  laptop: Laptop | null;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ laptop, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!laptop) return null;

  const enquiryMessage = `Hello Laptronics Kenya,

I am enquiring about the ${laptop.name} (${laptop.variantSubtitle || laptop.categoryLabel}) listed in your catalogue demo for ${formatKshPrice(laptop.priceKsh)}.

Key Specifications:
- RAM: ${laptop.specs.ram}
- Storage: ${laptop.specs.storage}
${laptop.specs.processor ? `- Processor: ${laptop.specs.processor}\n` : ''}${
    laptop.specs.graphics || laptop.specs.gpu
      ? `- Graphics/GPU: ${laptop.specs.graphics || laptop.specs.gpu}\n`
      : ''
  }- Display: ${laptop.specs.display}

Please advise on availability and purchasing details.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(enquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 id="whatsapp-modal-title" className="text-base font-bold text-white">
                WhatsApp Enquiry (Demo Mode)
              </h3>
              <p className="text-xs text-zinc-400">Laptronics Kenya</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Unverified WhatsApp Notice */}
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Seller WhatsApp Number Pending Verification</span>
            </div>
            <p className="text-amber-200/90 leading-relaxed text-xs">
              As this is a private sales demonstration, direct redirection to an unverified telephone number is disabled. Once Laptronics Kenya approves and officially verifies their business WhatsApp line, direct 1-click messaging will be activated.
            </p>
          </div>

          {/* Drafted Message Box */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="enquiry-preview" className="text-xs font-semibold text-zinc-300">
                Pre-formatted Product Enquiry Message:
              </label>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-medium px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            <textarea
              id="enquiry-preview"
              readOnly
              value={enquiryMessage}
              rows={8}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-xs font-mono text-zinc-200 focus:outline-none resize-none leading-relaxed selection:bg-sky-500 selection:text-black"
            />
          </div>

          {/* Verification Status Placeholder */}
          <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-zinc-500" />
              <span>Configured WhatsApp Line:</span>
            </div>
            <span className="font-mono text-zinc-300 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              +254 (Pending Verification)
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-colors shadow-md shadow-sky-500/10"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied Message!' : 'Copy Enquiry Message'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
