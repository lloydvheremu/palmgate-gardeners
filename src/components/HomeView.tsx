import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { motion, AnimatePresence } from 'motion/react';

// Import newly generated high-detail identity-concealed operational images for background slides
// @ts-ignore
import palmgatePruning from '../assets/images/palmgate_pruning_1781442698455.jpg';
// @ts-ignore
import palmgateMowing from '../assets/images/palmgate_mowing_1781442715386.jpg';
// @ts-ignore
import palmgateWatering from '../assets/images/palmgate_watering_1781442732705.jpg';
// @ts-ignore
import palmgateSoilPrep from '../assets/images/palmgate_soil_prep_1781442748315.jpg';
// @ts-ignore
import sweeping1 from '../assets/images/sweeping1.jpeg';
// @ts-ignore
import sweeping2 from '../assets/images/sweeping2.jpeg';
// @ts-ignore
import palmgateLighting from '../assets/images/palmgate_lighting_1781602228945.jpg';
// @ts-ignore
import palmgateGutter from '../assets/images/palmgate_gutter_1781602247173.jpg';
// @ts-ignore
import solar2 from '../assets/images/solar2.jpeg';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab, serviceId?: string) => void;
  onOpenConsultation: () => void;
}

export default function HomeView({ onNavigate, onOpenConsultation }: HomeViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Swipe detection coordinates
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const SLIDES = [
    {
      id: "landscaping",
      title: "Landscaping & Garden Design",
      desc: "Beautiful outdoor designs that transform your space and increase your property value. We install flagstone paving paths, hand-laid decorative flower borders, and tailored garden layouts.",
      image: palmgateSoilPrep,
      whatsapp: "Hi, Palmgate Gardeners, I saw your Landscaping & Garden Design showcase and would like to talk about custom garden landscaping and flagstone walkway designs.",
      tag: "Garden Design",
      highlights: [
        "Flagstone pathways and stone layouts",
        "Custom garden borders and design",
        "Select decorative flowers and shrubs",
        "Tailored to commercial and home yards"
      ]
    },
    {
      id: "lawn",
      title: "Yard Maintenance",
      desc: "Scheduled property yard maintenance, lawn turfing, soil feeding, and comprehensive grounds upkeep. We keep your grass plush, hedges sculpted, and flowerbeds weed-free.",
      image: palmgateMowing,
      whatsapp: "Hi, Palmgate Gardeners, I want a quote for professional Yard Maintenance.",
      tag: "Yard Maintenance",
      highlights: [
        "Scheduled lawn mowing, edging, and turfing",
        "Perimeter hedge sculpting and pruning",
        "Weed and moss eradication from flowerbeds",
        "Organic compost and lawn feed application"
      ]
    },
    {
      id: "solar",
      title: "Solar Panel Cleaning",
      desc: "Washing heavy dust, pollen, bird droppings, and soot off your house solar panels with non-scratch brushes to restore your energy efficiency.",
      image: solar2,
      whatsapp: "Hi, Palmgate Gardeners, I saw your Solar Panel Cleaning & Care slide and would like to get a quote to wash our solar panels.",
      tag: "Solar Panel Care",
      highlights: [
        "Non-scratch soft brush cleaning",
        "Dust, pollen, and soot washing",
        "Restoring electricity output efficiency",
        "Safe worker roof cleaning methods"
      ]
    },
    {
      id: "gutter",
      title: "Gutter Cleaning",
      desc: "Clearing leaves, twigs, dirt, and nests from roof gutters to ensure smooth flow and prevent water overflow and foundation damage.",
      image: palmgateGutter,
      whatsapp: "Hi, Palmgate Gardeners, I would like to book the gutter clearing and downspout wash special.",
      tag: "Gutter Clearance",
      highlights: [
        "Safe ladder and clearing methods",
        "Thorough downspout water flushing",
        "Removing blockages and mud buildup",
        "Preventing roof overflow damage"
      ]
    },
    {
      id: "cleanup",
      title: "Post Event Cleanup",
      desc: "Professional cleaning of compounds, driveways, and lawns after private parties, weddings, or corporate events. We collect all rubbish and leave the venue spotless.",
      image: sweeping2,
      whatsapp: "Hi, Palmgate Gardeners, I'd like a quote for your Post Event Cleanup service for an upcoming gathering.",
      tag: "Event Cleanup",
      highlights: [
        "Rubbish, bottles, and trash collection",
        "Thorough pavement and driveway sweeping",
        "Professional, fast, on-time crew",
        "Complete restoration of tidy outdoor order"
      ]
    }
  ];

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

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-advance every 4 seconds as requested
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="space-y-20 pb-16 animate-fade-in" id="home-view">
      {/* Full-Screen Rotating Service Showcase Hero Section */}
      <section 
        id="hero-slideshow" 
        className="relative min-h-[645px] sm:min-h-[580px] md:h-[80vh] lg:h-[85vh] flex items-center overflow-hidden rounded-3xl mx-4 my-6 bg-slate-950 shadow-2xl group/slideshow"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dynamic Background Image Layers with gentle crossfade */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1.00 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center pointer-events-none select-none"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
        </AnimatePresence>

        {/* Subtle dark overlay for absolute text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none z-10" />

        {/* Abstract organic background visual grids & blur highlights */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />

        {/* Content Overlay - Constrained layout for static height & stability */}
        <div className="relative z-20 w-full max-w-4xl h-full flex flex-col justify-center p-6 sm:p-12 md:p-16 lg:p-24 pb-16 sm:pb-12">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-4 sm:space-y-6 text-left w-full h-auto"
            >
              {/* Tag Badge and Index Indicator */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 text-amber-300 bg-amber-400/15 border border-amber-300/20 rounded-full backdrop-blur-md select-none">
                  {currentSlide.tag}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-emerald-300/80 uppercase select-none">
                  Slide {currentIndex + 1} of {SLIDES.length}
                </span>
              </div>

              {/* Service Name Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-serif">
                {currentSlide.title}
              </h1>

              {/* Concise Value Description */}
              <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed font-sans">
                {currentSlide.desc}
              </p>

              {/* Highlighted bullets */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl text-xs sm:text-sm text-slate-300 pt-2 font-sans">
                {currentSlide.highlights.map((hl, k) => (
                  <li key={k} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-400 text-[16px] flex-shrink-0 select-none pt-0.5">check_circle</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a 
                  href={`https://wa.me/263785366349?text=${encodeURIComponent(currentSlide.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3.5 sm:px-8 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer text-center text-xs sm:text-sm"
                >
                  <span className="material-symbols-outlined text-base sm:text-lg select-none">chat</span>
                  Book via WhatsApp
                </a>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation();
                    onNavigate('services', currentSlide.id);
                  }}
                  className="px-6 py-3.5 sm:px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <span className="material-symbols-outlined text-base sm:text-lg select-none">info</span>
                  View Service Details
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Left/Right Arrow Navigation Controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/40 hover:bg-slate-950/85 border border-white/10 hover:border-white/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-white z-35 cursor-pointer select-none opacity-0 group-hover/slideshow:opacity-100 hidden md:flex"
          aria-label="Previous Slide"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/40 hover:bg-slate-950/85 border border-white/10 hover:border-white/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-white z-35 cursor-pointer select-none opacity-0 group-hover/slideshow:opacity-100 hidden md:flex"
          aria-label="Next Slide"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>

        {/* Bottom Slide Indicators/Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-35">
          {SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Expertise & Rooted in Passion Section */}
      <section id="expertise-narrative" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-xs sm:text-sm block">Zimbabwe&apos;s Premium Gardeners</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Expertise Rooted in Passion
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-650 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
            Since our humble establishment, <strong className="text-slate-900">Palmgate Gardeners</strong> has catered to the finest residential estates, institutional parks, and corporate lawns. We deliver science-backed lawn rehabilitation, custom soil feeding, and artisan landscape pruning.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#ecece6] hover:border-emerald-600/30 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">{val.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">{val.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Preview Section */}
      <section id="packages-preview" className="bg-gradient-to-b from-emerald-50/50 to-amber-50/20 py-12 sm:py-20 px-4 sm:px-8 md:px-10 rounded-2xl sm:rounded-3xl mx-3 sm:mx-4 border border-[#eeeede]">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-emerald-950/5">
            <div className="space-y-3 max-w-xl">
              <span className="text-emerald-800 font-bold tracking-widest uppercase text-xs">Standardized Clean Care Plans</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                Our Top Maintenance Packages
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Transparent flat rates for standard properties in Zimbabwe. All organic, fully-equipped, and strictly managed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => onNavigate('pricing')}
                className="px-5 py-3 bg-[#1e3f20] hover:bg-[#132a15] text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">payments</span>
                See Service Start Prices
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
              <div className="absolute top-3 right-6 bg-amber-400 text-amber-950 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                Highly Popular
              </div>
              <div className="space-y-6 relative z-10 pt-4">
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
      <section id="footer-cta" className="mx-3 sm:mx-4 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-2xl p-6 sm:p-12 text-center text-emerald-50 space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white max-w-xl mx-auto">Have a space that needs a green professional touch?</h3>
        <p className="text-emerald-100/70 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Contact our horticulturists today for a complete landscaping, lawn repair, or irrigation tune-up. Estimates and site visits are fully free across Zimbabwe!
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/263785366349?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20get%20a%20free%20inspection%20for%20my%20garden."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#122615] font-bold rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-md transform hover:scale-[1.02] cursor-pointer text-center"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Contact us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
