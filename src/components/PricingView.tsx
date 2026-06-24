import React from 'react';
import { motion } from 'motion/react';
import { ActiveTab } from '../types';

interface PricingViewProps {
  onNavigate: (tab: ActiveTab, serviceId?: string) => void;
  onOpenConsultation: () => void;
}

export default function PricingView({ onNavigate, onOpenConsultation }: PricingViewProps) {
  const priceList = [
    {
      id: "landscaping",
      title: "Landscaping & Garden Design",
      icon: "filter_vintage",
      price: "$180",
      unit: "starting rate",
      desc: "Beautiful custom ground layout planning, flagstone paving pathways, hand-laid floral decorative borders, and professional mulching.",
      features: [
        "Flagstone pathways and stone layouts",
        "Custom garden borders and plant positioning",
        "Decorative rose/shrub positioning",
        "Includes ground levelling and initial topsoil prep"
      ],
      whatsapp: "Hi Palmgate, I saw your $180 starting rate for Landscaping and would like a custom design quote."
    },
    {
      id: "lawn",
      title: "Yard Maintenance",
      icon: "grass",
      price: "$45",
      unit: "starting rate",
      desc: "Scheduled property yard maintenance, lawn turfing, soil feeding, and comprehensive grounds upkeep.",
      features: [
        "Scheduled lawn mowing, edging, and professional turfing",
        "Perimeter hedge sculpting and decorative shrub trimming",
        "Weed and moss eradication from flowerbeds and paving",
        "Raking dry thatch and leaf clearance for healthy soil"
      ],
      whatsapp: "Hi Palmgate, I want a quote for professional Yard Maintenance starting from $45."
    },
    {
      id: "solar",
      title: "Solar Panel Cleaning",
      icon: "solar_power",
      price: "$2.00",
      unit: "per solar panel",
      desc: "Washing heavy Zimbabwean clay dust, chimney soot, and bird droppings off panels using soft scratch-free microfiber rods.",
      features: [
        "Scratch-free telescopic soft brush cleaning",
        "Cleans soot, heavy dust, pollen, and hard water spots",
        "Restores premium sunlight capture and energy output",
        "Note: $20 minimum callout applies for small home arrays"
      ],
      whatsapp: "Hi Palmgate, I want a quote to wash my solar panels at $2.00 per panel."
    },
    {
      id: "gutter",
      title: "Gutter Cleaning",
      icon: "cleaning_services",
      price: "$30",
      unit: "per single roof level",
      desc: "Clearing dried acacia pods, clay silt, leaves, and nests from roof gutters to prevent overflow and shield foundations.",
      features: [
        "Safe ladder climbing and gutter debris hand removal",
        "Detail downspout water flushing to ensure clear flows",
        "Clears nesting silt and organic sludge safely",
        "Reviewing simple overflow issues around your compound"
      ],
      whatsapp: "Hi Palmgate, I want to book your gutter clearing special starting from $30."
    },
    {
      id: "cleanup",
      title: "Post Event Cleanup",
      icon: "event_available",
      price: "$75",
      unit: "starting rate",
      desc: "Rapid response tidy-up of compounds, lawns, and patios after private gatherings, family parties, corporate events, or weddings.",
      features: [
        "Prompt collection of paper plates, bottles, and food trash",
        "Thorough sweeping of driveway pavers, entertainment porches, and lawns",
        "On-time, respectful, and fast-working local crew",
        "Restores your garden to pristine clean order"
      ],
      whatsapp: "Hi Palmgate, I see your post-event cleanup starts at $75. I'd like an estimate for an upcoming gathering."
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 animate-fade-in text-left px-4 sm:px-6 max-w-7xl mx-auto pt-6 sm:pt-10" id="pricing-view">
      
      {/* HEADER STATEMENT */}
      <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
        <span className="text-[#1e3f20] font-bold uppercase tracking-widest text-[10px] px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
          Transparent Care Rates
        </span>
        <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
          Fair, Flat-Rate Pricing <br />
          <span className="italic font-normal text-emerald-800">No Hidden Fees</span>
        </h1>
        <p className="text-slate-655 text-xs sm:text-sm md:text-base leading-relaxed">
          At Palmgate Gardeners, we believe in honest prices with absolute clarity. Browse our starting rates for residential yards, houses, and corporate compounds.
        </p>
      </section>

      {/* PRICING GRID LAYOUT OF ALL 9 SERVICES */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {priceList.map((item, idx) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-emerald-700/20 transition-all duration-300 relative group overflow-hidden"
            id={`price-card-${item.id}`}
          >
            {/* Top design indicators */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1e3f20] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Icon & Title */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-55/40 text-[#1e3f20] bg-emerald-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <button 
                    onClick={() => onNavigate('services', item.id)}
                    className="text-[11px] text-emerald-800 font-semibold hover:underline inline-flex items-center gap-0.5 cursor-pointer mt-0.5"
                  >
                    View details
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Real Transparent Price presentation */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif">{item.price}</span>
                <span className="text-xs text-slate-500 font-medium">/ {item.unit}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-light">
                {item.desc}
              </p>

              {/* Point highlights list */}
              <ul className="space-y-2 border-t border-slate-100 pt-4 text-[11px] text-slate-650 font-sans">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-700 text-[14px] shrink-0 pt-0.5 select-none font-bold">check</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote and WhatsApp CTA widgets */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 space-y-2.5">
              <a 
                href={`https://wa.me/263785366349?text=${encodeURIComponent(item.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-sm transition-colors text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] select-none">chat</span>
                Book on WhatsApp
              </a>
              <button 
                onClick={onOpenConsultation}
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold rounded-xl border border-slate-200 transition-colors text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] select-none">spa</span>
                Request Site Measurement
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* WHY PALMGATE POLICY NOTICE */}
      <section className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-emerald-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded-lg">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            Palmgate Service Promise
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-white">How We Calculate Your Written Estimate</h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-light">
            Every home and corporate lawn around Zimbabwe is distinct. Our prices displayed on this page provide transparent standard starting rates. When you book a <strong className="text-white">Free Site Inspection</strong>, our uniformed professionals travel to your property to measure dimensions, evaluate soil densities, inspect tree heights, and deliver a precise written quotation with no local call-out charges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:grid-cols-3 pt-2 sm:pt-4 text-xs">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
              <span className="material-symbols-outlined text-amber-400 text-lg">payments</span>
              <h4 className="font-bold text-white">Always Transparent</h4>
              <p className="text-emerald-100/70 text-[11px] leading-relaxed">No surprise fuel helper surcharges, dynamic gate fees, or hidden tax add-ons.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
              <span className="material-symbols-outlined text-amber-400 text-lg">calendar_today</span>
              <h4 className="font-bold text-white">Free Rescheduling</h4>
              <p className="text-emerald-100/70 text-[11px] leading-relaxed">Change your lawn service date or routine trims up to 24 hours in advance.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
              <span className="material-symbols-outlined text-amber-400 text-lg">high_quality</span>
              <h4 className="font-bold text-white">Guaranteed Work</h4>
              <p className="text-emerald-100/70 text-[11px] leading-relaxed">If you find we missed a section or lawn corner during cleaning, we sweep it for free.</p>
            </div>
          </div>
          <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start">
            <button 
              onClick={onOpenConsultation}
              className="px-6 sm:px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-md">spa</span>
              Book Your Free Measure &amp; Quote Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
