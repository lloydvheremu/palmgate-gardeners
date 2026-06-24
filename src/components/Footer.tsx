import React from 'react';
import { ActiveTab } from '../types';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (tab: ActiveTab, serviceId?: string) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900" id="app-footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo 
              textClassName="text-white font-serif font-bold text-lg" 
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Professional, organic-focused residential and commercial landscape design and gardening operators serving clients across Zimbabwe.
          </p>
          <div className="flex gap-3 text-xs pt-1">
            <span className="px-2 py-1 bg-slate-900 text-emerald-400 font-semibold border border-emerald-500/10 rounded">
              Est. 2024
            </span>
            <span className="px-2 py-1 bg-slate-900 text-amber-400 font-semibold border border-amber-500/10 rounded">
              🇿🇼 Zimbabwe Countrywide Care
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-2 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400/80 font-bold uppercase block">Follow Our Work:</span>
            <div className="flex flex-col gap-2">
              <a 
                href="https://instagram.com/palmgate_gardeners" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-pink-400 transition-colors w-fit"
              >
                <svg className="w-4 h-4 text-pink-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@palmgate_gardeners</span>
              </a>
              <a 
                href="https://tiktok.com/@palmgate.gardners" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors w-fit"
              >
                <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.17 1.94-.13 2.82-.64.01 1.4-.21 2.8-.75 4.09-.81-.03-1.63-.16-2.42-.42l-.02 5.09c-.06 2.01-.89 3.95-2.39 5.3-1.63 1.48-3.92 2.22-6.11 1.95-2.36-.26-4.52-1.74-5.63-3.87-1.28-2.39-1.07-5.46.54-7.63 1.42-1.95 3.79-3.05 6.22-2.86v4.08c-1.12-.11-2.27.34-2.92 1.27-.77 1.05-.62 2.58.38 3.44.88.79 2.26.78 3.12-.04.47-.46.73-1.11.72-1.77L12.5 0h.025z"/>
                </svg>
                <span>@palmgate.gardners</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Pages</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer text-left block">
                Home (Palmgate Hub)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left block">
                Services &amp; Custom Quote
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('pricing')} className="hover:text-[#fdc23a] text-emerald-400 font-semibold transition-colors text-left block">
                💰 Flat-Rate Prices List
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors cursor-pointer text-left block">
                Gallery &amp; Transformations
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left block">
                About Our History
              </button>
            </li>
            {/* <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left block">
                Zimbabwe Sowing Calendar
              </button>
            </li> */}
          </ul>
        </div>

        {/* Specialist services */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Top Services</h4>
          <div className="flex flex-col gap-2 text-xs">
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services', 'landscaping')}>✔ Landscaping</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services', 'lawn')}>✔ Yard Maintenance</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services', 'solar')}>✔ Solar Panel Cleaning</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services', 'gutter')}>✔ Gutter Cleaning</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services', 'cleanup')}>✔ Post Event Cleanup</span>
          </div>
        </div>

        {/* Call support */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Need Consultation?</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Estimates and initial measurements are completely offline-safe and free. WhatsApp or book instantly!
          </p>
          <div className="space-y-1 bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">WhatsApp Center:</div>
            <a href="tel:+263785366349" className="text-white text-sm font-bold block hover:underline tracking-wide">+263 785 366 349</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Palmgate Gardeners. All rights reserved. Zimbabwe.</p>
        <p className="text-[10px] text-slate-600 font-mono">Crafted under premium ecological and botanical standards.</p>
      </div>
    </footer>
  );
}
