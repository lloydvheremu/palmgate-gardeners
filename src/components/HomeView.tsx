import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenConsultation: () => void;
}

export default function HomeView({ onNavigate, onOpenConsultation }: HomeViewProps) {
  const values = [
    {
      icon: "psychiatry", // Sprout/Leaf associated icon
      title: "Eco-Friendly Practices",
      desc: "We use 100% organic insecticides, bird-safe fertilizers, and water-wise irrigation loops designed for Zimbabwe's specific rainfall."
    },
    {
      icon: "verified", // Certified
      title: "Certified Horticulturists",
      desc: "Our field team is led by expert nursery workers trained in ornamental pruning, soil health restoration, and turf grass pathology."
    },
    {
      icon: "palette", // Creative
      title: "Creative Floral Design",
      desc: "We compose vivid gardens leveraging the rich colors of Strelitzia, Agapanthus, vibrant Bougainvillea, and fragrant Jasmine."
    },
    {
      icon: "schedule", // Reliable
      title: "Clockwork Reliability",
      desc: "We show up on your scheduled day, rain or shine, in full uniform with state-of-the-art battery-operated low-noise equipment."
    },
    {
      icon: "architecture", // Structural/Full Service
      title: "Full-Scale Architecture",
      desc: "From initial layout blueprints and trench digging to paving, water streams, and advanced drip system configurations."
    },
    {
      icon: "distance", // Local Care
      title: "Deep Local Roots",
      desc: "Proudly Zimbabwean. We understand the specific dry winter/wet summer cycles of our country's beautiful provinces."
    }
  ];

  return (
    <div className="space-y-24 pb-16 animate-fade-in" id="home-view">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4 my-6 bg-gradient-to-br from-[#122615] via-[#1E3F20] to-[#122615] text-white py-16 px-6 md:px-12 shadow-2xl">
        {/* Abstract organic background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-12 translate-y-12"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-sm font-medium tracking-wide shadow-inner">
            <span className="material-symbols-outlined text-[18px] animate-pulse">spa</span>
            Residential & Commercial Horticultural Masters
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto">
            Professional Landscaping & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-300 to-amber-200">
              Garden Maintenance
            </span>
          </h1>

          <p className="text-emerald-100/85 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Eco-friendly, certified garden care to elevate your residential or commercial property across <strong className="text-white font-medium">Zimbabwe</strong>. Rooted in passion, grown with surgical precision. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/263782824022?text=Hello%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20chat%20about%20my%20garden."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span className="material-symbols-outlined">chat</span>
              Let&apos;s Chat on WhatsApp
            </a>
            <button
              id="hero-portfolio-btn"
              onClick={() => onNavigate('gallery')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200 font-semibold rounded-xl border border-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined">collections</span>
              View Our Work
            </button>
          </div>

          {/* Core highlights banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto border-t border-emerald-500/20 text-left">
            <div className="space-y-1">
              <div className="text-amber-400 text-3xl font-bold font-serif">150+</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="space-y-1">
              <div className="text-amber-400 text-3xl font-bold font-serif">100%</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">Organic Options</div>
            </div>
            <div className="space-y-1">
              <div className="text-amber-400 text-3xl font-bold font-serif">10+</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">Expert Gardeners</div>
            </div>
            <div className="space-y-1">
              <div className="text-amber-400 text-3xl font-bold font-serif">24/7</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">Support Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Rooted in Passion Section */}
      <section id="expertise-narrative" className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm block">Zimbabwe&apos;s Premium Gardeners</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Expertise Rooted in Passion
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed pt-2">
            Since our humble establishment, <strong className="text-slate-900">Palmgate Gardeners</strong> has catered to the finest residential estates, institutional parks, and corporate lawns. We deliver science-backed lawn rehabilitation, custom soil feeding, and artisan landscape pruning.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-[#ecece6] hover:border-emerald-600/30 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Preview Section */}
      <section id="packages-preview" className="bg-gradient-to-b from-emerald-50/50 to-amber-50/20 py-20 px-6 rounded-3xl mx-4 border border-[#eeeede]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-emerald-950/5">
            <div className="space-y-3 max-w-xl">
              <span className="text-emerald-800 font-semibold tracking-widest uppercase text-xs">Standardized Clean Care Plans</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                Our Top Maintenance Packages
              </h2>
              <p className="text-slate-600 text-sm">
                Transparent flat rates for standard properties in Zimbabwe. All organic, fully-equipped, and strictly managed.
              </p>
            </div>
            <div>
              <button 
                onClick={() => onNavigate('services')}
                className="px-6 py-3 bg-[#1e3f20] hover:bg-[#132a15] text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">calculate</span>
                Calculate Custom Quote
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Basic Care</span>
                  <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium">Bi-Weekly</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900">$45<span className="text-base text-slate-500 font-normal">/month</span></div>
                  <p className="text-xs text-slate-500 pt-1">Ideal for small suburban garden blocks</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Lawn Mowing & Edging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Weed Control (Flowerbeds)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Sweeping & Blow Clearing
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 line-through">
                    <span className="material-symbols-outlined text-slate-300 text-[18px]">block</span>
                    Hedge Sculpting & Pruning
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 line-through">
                    <span className="material-symbols-outlined text-slate-300 text-[18px]">block</span>
                    Seasonal Organic Fertilizer
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('services')}
                className="w-full mt-8 py-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold rounded-xl text-xs transition-all duration-300 border border-slate-200 cursor-pointer"
              >
                Choose Basic Care
              </button>
            </div>

            {/* Standard Plan (Featured) */}
            <div className="bg-[#1e3f20] text-emerald-50 rounded-3xl p-8 border border-emerald-800/20 flex flex-col justify-between shadow-xl relative overflow-hidden group scale-100 lg:scale-[1.03]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-3 right-6 bg-amber-400 text-amber-950 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                Highly Popular
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-amber-300">Standard Plan</span>
                  <span className="px-3 py-1 bg-emerald-950/50 text-emerald-300 rounded-full text-xs font-medium">Weekly visits</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">$85<span className="text-base text-emerald-300/60 font-normal">/month</span></div>
                  <p className="text-xs text-emerald-200/70 pt-1">Best for medium estates & busy families</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-emerald-850/50 text-sm text-emerald-100/90">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span>
                    Mowing, Edging & Aeration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span>
                    Weed & Moss Eradication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span>
                    Hedge Sculpting & Bush Pruning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span>
                    Organic Feeding (Spring & Rain)
                  </li>
                  <li className="flex items-center gap-2 text-emerald-400/50 line-through">
                    <span className="material-symbols-outlined text-emerald-400/40 text-[18px]">block</span>
                    Smart Irrigation Maintenance
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('services')}
                className="w-full mt-8 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold rounded-xl text-xs transition-all duration-300 shadow-md cursor-pointer"
              >
                Get Standard Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Premium Care</span>
                  <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium">Weekly + Specialist</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900">$150<span className="text-base text-slate-500 font-normal">/month</span></div>
                  <p className="text-xs text-slate-500 pt-1">The supreme treatment for large gardens</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    All Standard lawn & bed care
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Shrub/Tree surgical trimming Up to 3m
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Irrigation Audit & Smart Schedulers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Monthly Pest & Fungal Control
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    Soil Mulching & Composting
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('services')}
                className="w-full mt-8 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl text-xs transition-all duration-300 shadow-sm cursor-pointer"
              >
                Choose Premium Care
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA banner */}
      <section id="footer-cta" className="mx-4 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-2xl p-12 text-center text-emerald-50 space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
        <h3 className="text-3xl font-serif font-bold text-white max-w-xl mx-auto">Have a space that needs a green professional touch?</h3>
        <p className="text-emerald-100/70 text-sm max-w-lg mx-auto">
          Contact our horticulturists today for a complete landscaping, lawn repair, or irrigation tune-up. Estimates and site visits are fully free across Zimbabwe!
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/263782824022?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20get%20a%20free%20inspection%20for%20my%20garden."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#122615] font-semibold rounded-xl text-sm transition-all duration-300 shadow-md transform hover:scale-[1.02] cursor-pointer text-center"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Contact us on WhatsApp for an inspection
          </a>
        </div>
      </section>
    </div>
  );
}
