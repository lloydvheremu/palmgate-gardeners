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
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services')}>✔ Kikuyu Turf Laying</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services')}>✔ Symmetrical Hedge Sculpting</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services')}>✔ Organic Top Dressing compost</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services')}>✔ Automatic sprinkler setups</span>
            <span className="block hover:text-white transition-all cursor-pointer" onClick={() => onNavigate('services')}>✔ Roof Gutter leaf clearances</span>
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
