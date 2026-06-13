import React, { useState } from 'react';
import { ActiveTab } from '../types';
import Logo from './Logo';

interface NavbarProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ activeTab, onNavigate, onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services & Quote', icon: 'room_service' },
    { id: 'gallery', label: 'Gallery', icon: 'collections' },
    { id: 'about', label: 'About Us', icon: 'info' },
    // { id: 'contact', label: 'Calendar & Book', icon: 'calendar_month' }
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-150/80 shadow-sm px-6 py-4 transition-all" id="app-navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer group"
          id="navbar-logo"
        >
          <Logo 
            textClassName="text-lg font-bold font-serif text-[#1e3f20] leading-none group-hover:text-emerald-700 transition-all"
          />
        </div>

        {/* DESKTOP NAV ITEMS */}
        <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${activeTab === item.id ? 'bg-[#1e3f20] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* PHONE / ACCENT CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="tel:+263782824022" 
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 transition-all"
            title="Call Palmgate Gardeners Zimbabwe"
          >
            <span className="material-symbols-outlined text-[14px]">phone</span>
            <span className="text-xs font-bold font-mono tracking-wide">+263 782 824 022</span>
          </a>
          <a
            href="https://wa.me/263782824022?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20book%20a%20garden%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#1e3f20] hover:bg-emerald-950 text-white rounded-xl text-xs font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">chat</span>
            Book Visit
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex lg:hidden items-center gap-2">
          <a 
            href="tel:+263782824022" 
            className="p-2 bg-amber-50 rounded-xl text-amber-900 border border-amber-200 flex items-center justify-center shrink-0"
            title="Call Support"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer border border-slate-200"
            aria-label="Toggle Mobile Menu"
            id="mobile-menu-burger"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER NAV */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 space-y-3 animate-fade-in z-50">
          <span className="text-[10px] uppercase tracking-widest text-[#1e3f20] font-bold block pb-1 border-b border-slate-100">Browse Palmgate Gardeners</span>
          <div className="flex flex-col gap-1 text-left">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-3 cursor-pointer ${activeTab === item.id ? 'bg-[#1e3f20] text-emerald-50' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/263782824022?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20book%20a%20free%20site%20inspection%20visit."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#1e3f20] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer block"
            >
              Book Free Site Inspection
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
