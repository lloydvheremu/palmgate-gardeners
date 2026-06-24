import React, { useState } from 'react';
import { ActiveTab } from '../types';
import Logo from './Logo';

interface NavbarProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab, serviceId?: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ activeTab, onNavigate, onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'room_service' },
    { id: 'gallery', label: 'Gallery', icon: 'collections' },
    { id: 'about', label: 'About Us', icon: 'info' },
  ];

  const servicesChildren = [
    { id: 'landscaping', label: 'Landscaping & Design', icon: 'filter_vintage' },
    { id: 'lawn', label: 'Premium Turfing & Lawn Care', icon: 'grass' },
    { id: 'pruning', label: 'Tree & Hedge Sculpting', icon: 'content_cut' },
    { id: 'cleaning', label: 'Deep Garden Clean-up', icon: 'delete_sweep' },
    { id: 'irrigation', label: 'Smart Irrigation Systems', icon: 'potted_plant' },
    { id: 'lighting', label: 'Outdoor Lighting Systems', icon: 'wb_sunny' },
    { id: 'gutter', label: 'Gutter Clearance & Care', icon: 'cleaning_services' },
    { id: 'solar', label: 'Solar Panel Cleaning & Care', icon: 'solar_power' },
    { id: 'cleanup', label: 'Post-Event Fast Spotless Clears', icon: 'event_available' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-150/80 shadow-sm px-4 sm:px-6 py-3 sm:py-4 transition-all" id="app-navbar">
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
          {navItems.map((item) => {
            if (item.id === 'services') {
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleNavClick('services')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${activeTab === 'services' ? 'bg-[#1e3f20] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                    {item.label}
                    <span className="material-symbols-outlined text-[14px] transition-transform duration-200 group-hover:rotate-180">keyboard_arrow_down</span>
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-250 z-50">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-3 w-80 grid gap-1 grid-cols-1">
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 py-1.5 border-b border-slate-50">
                        Our Specialist Services
                      </div>
                      {servicesChildren.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            onNavigate('services', child.id);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-left text-slate-650 hover:text-[#1e3f20] hover:bg-emerald-50/60 transition-all font-medium cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-teal-850 text-[18px]">{child.icon}</span>
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${activeTab === item.id ? 'bg-[#1e3f20] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
              >
                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* PHONE / ACCENT CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="tel:+263785366349" 
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 transition-all"
            title="Call Palmgate Gardeners Zimbabwe"
          >
            <span className="material-symbols-outlined text-[14px]">phone</span>
            <span className="text-xs font-bold font-mono tracking-wide">+263 785 366 349</span>
          </a>
          <a
            href="https://wa.me/263785366349?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20book%20a%20garden%20visit."
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
            href="tel:+263785366349" 
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 sm:p-5 space-y-4 animate-fade-in z-50 max-h-[85vh] overflow-y-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#1e3f20] font-extrabold block pb-1.5 border-b border-slate-100">Browse Palmgate Gardeners</span>
          <div className="flex flex-col gap-1 text-left">
            {navItems.map((item) => {
              if (item.id === 'services') {
                return (
                  <div key={item.id} className="space-y-1.5">
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center justify-between cursor-pointer ${activeTab === 'services' ? 'bg-[#1e3f20] text-emerald-50' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                        {item.label}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-450 bg-slate-100 px-2 py-0.5 rounded-md">9 Packages</span>
                    </button>
                    
                    {/* Collapsible/Indented Mobile child services */}
                    <div className="pl-6 pt-1 pb-1.5 grid gap-1 border-l-2 border-slate-100 ml-6">
                      {servicesChildren.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            onNavigate('services', child.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full px-3 py-2.5 rounded-lg text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-[#1e3f20] text-left flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <span className="material-symbols-outlined text-teal-800 text-[16px]">{child.icon}</span>
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center gap-3 cursor-pointer ${activeTab === item.id ? 'bg-[#1e3f20] text-emerald-50' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-gradient-to-br from-amber-50 to-emerald-50/40 rounded-2xl border border-amber-100/75 flex items-center justify-between gap-3 text-left">
            <div className="space-y-0.5 block">
              <span className="text-[8px] font-mono tracking-widest text-amber-850 font-bold uppercase block">Looking for Rates?</span>
              <span className="text-[11px] font-bold text-slate-800 leading-tight block">All 9 Service Start Prices</span>
            </div>
            <button 
              onClick={() => { onNavigate('pricing'); setMobileMenuOpen(false); }}
              className="px-3.5 py-1.5 bg-[#1e3f20] hover:bg-[#122615] text-white text-[10px] font-bold tracking-wide rounded-md transition-colors"
            >
              See prices
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/263785366349?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20book%20a%20free%20site%20inspection%20visit."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#1e3f20] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer block"
            >
              Book Free Site Inspection
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
