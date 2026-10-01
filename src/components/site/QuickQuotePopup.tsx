import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  FileText,
  MessageSquare,
  Phone,
  ShieldCheck,
  X,
  Headphones,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { COMPANY } from "@/lib/site-content";

export function QuickQuotePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("vevra_quote_popup_dismissed");
    if (dismissed === "true") {
      setIsOpen(false);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    sessionStorage.setItem("vevra_quote_popup_dismissed", "true");
  };

  const handleOpen = () => {
    setIsOpen(true);
    sessionStorage.removeItem("vevra_quote_popup_dismissed");
  };

  return (
    <aside
      aria-label="Quick RFQ and Support Hub"
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-50 select-none font-sans"
    >
      {isOpen ? (
        /* 1. COMPACT UNIQUE POPUP CARD */
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="quick-quote-heading"
          className="relative w-[300px] sm:w-[325px] overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_16px_40px_rgba(8,24,48,0.16)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Top Brand Accent Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-brand via-rose-500 to-amber-500" />

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close quote popup"
            className="absolute right-2.5 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100/80 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors z-10"
          >
            <X className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>

          <div className="p-4 sm:p-4.5">
            {/* Header with Online status & Avatar */}
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span>ONLINE NOW</span>
                </div>

                <h3
                  id="quick-quote-heading"
                  className="mt-1.5 text-[15px] font-black tracking-tight text-slate-900 leading-snug"
                >
                  <span className="text-brand">VEVRA</span> Packaging Hub
                </h3>
                <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                  Your Packaging Solutions Partner
                </p>
              </div>

              {/* Headset Badge */}
              <div className="relative shrink-0 pr-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 text-brand border border-rose-100/80 shadow-2xs">
                  <Headphones className="h-5 w-5 stroke-[2.2]" />
                </div>
              </div>
            </div>

            {/* Micro Pitch */}
            <p className="mt-2.5 text-[11.5px] leading-relaxed text-slate-600 font-normal">
              Need custom packaging, RFQ pricing, or transit solutions? We’re active right now to assist.
            </p>

            {/* Action Buttons */}
            <div className="mt-3.5 space-y-2">
              {/* Primary: Get a Quote */}
              <Link
                to="/calculator"
                className="group flex w-full items-center justify-between rounded-lg bg-brand px-3.5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white shadow-sm shadow-brand/20 transition-all duration-200 hover:bg-brand-dark hover:shadow-md hover:scale-[1.01]"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 stroke-[2.2]" />
                  <span>GET A QUOTE</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary: Contact Us */}
              <Link
                to="/contact"
                className="group flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-brand-blue-dark transition-all duration-200 hover:border-brand hover:text-brand hover:bg-rose-50/20"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 stroke-[2.2]" />
                  <span>CONTACT US</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Compact Info Strip */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px]">
              {/* Call Us */}
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-2 min-w-0 text-slate-600 hover:text-brand transition-colors"
                title={`Call ${COMPANY.phone}`}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-50 text-brand">
                  <Phone className="h-3 w-3 stroke-[2.2]" />
                </div>
                <div className="min-w-0 truncate">
                  <span className="text-[9px] text-slate-400 block leading-none">Call us</span>
                  <span className="font-bold text-slate-800 block truncate group-hover:text-brand">
                    {COMPANY.phone}
                  </span>
                </div>
              </a>

              {/* Support Timings */}
              <div className="flex items-center gap-2 border-l border-slate-100 pl-2 min-w-0">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <Clock className="h-3 w-3 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-slate-400 block leading-none">Support</span>
                  <span className="font-bold text-slate-700 block truncate leading-tight">
                    10 AM – 7 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 2. MINIMIZED FLOATING PILL BUTTON */
        <button
          type="button"
          onClick={handleOpen}
          className="group flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 py-2 px-3.5 sm:px-4 shadow-lg transition-all duration-300 hover:scale-105 hover:border-brand/40 hover:shadow-xl"
          aria-label="Open Quick RFQ & Quote Assistant"
        >
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-brand">
            <Headphones className="h-3.5 w-3.5 stroke-[2.2]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-brand-blue-dark group-hover:text-brand transition-colors">
            Get a Quote
          </span>
          <Sparkles className="h-3 w-3 text-amber-500" />
        </button>
      )}
    </aside>
  );
}
