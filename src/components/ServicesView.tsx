import React, { useState, useEffect } from 'react';
import { QuoteState } from '../types';

interface ServicesViewProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  onOpenConsultation: () => void;
}

export default function ServicesView({ selectedServiceId, setSelectedServiceId, onOpenConsultation }: ServicesViewProps) {
  const [gardenSize, setGardenSize] = useState<'small' | 'medium' | 'large' | 'estate'>('medium');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'lawn-mowing',
    'weed-control'
  ]);
  const [frequency, setFrequency] = useState<'weekly' | 'fortnightly' | 'monthly' | 'once-off'>('fortnightly');
  
  // Custom quotes submit form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formMessage, setFormMessage] = useState('');
  
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Recalculate price dynamically whenever any factor changes
  useEffect(() => {
    let base = 0;
    switch (gardenSize) {
      case 'small': base = 25; break;
      case 'medium': base = 50; break;
      case 'large': base = 90; break;
      case 'estate': base = 150; break;
    }

    let servicesCost = 0;
    selectedServices.forEach(srv => {
      switch (srv) {
        case 'lawn-mowing': servicesCost += 15; break;
        case 'weed-control': servicesCost += 10; break;
        case 'pruning': servicesCost += 20; break;
        case 'leaf-clearance': servicesCost += 10; break;
        case 'fertilizing': servicesCost += 25; break;
        case 'irrigation': servicesCost += 30; break;
      }
    });

    let multiplier = 1.0;
    switch (frequency) {
      case 'weekly': multiplier = 1.8; break;    // 4 visits per month
      case 'fortnightly': multiplier = 1.25; break; // 2 visits per month
      case 'monthly': multiplier = 0.8; break;     // 1 visit per month
      case 'once-off': multiplier = 2.0; break;    // one-time deep clean
    }

    const total = Math.round((base + servicesCost) * multiplier);
    setCalculatedCost(total);
  }, [gardenSize, selectedServices, frequency]);

  const toggleService = (srvId: string) => {
    if (selectedServices.includes(srvId)) {
      setSelectedServices(selectedServices.filter(id => id !== srvId));
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      alert("Please provide at least your Name and Phone number.");
      return;
    }
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setFormAddress('');
    setFormMessage('');
    setSelectedServices(['lawn-mowing', 'weed-control']);
    setGardenSize('medium');
    setFrequency('fortnightly');
  };

  const servicesList = [
    {
      id: "landscaping",
      icon: "outdoor_garden",
      iconName: "filter_vintage",
      title: "Landscaping & Garden Design",
      desc: "Transform your outdoor space with a layout tailored to local soils. Includes flagstone paving paths, hand-laid ornamental flower borders, and custom dry riverbed stone installations.",
      highlight: "Custom Blueprints",
      details: [
        "Symmetrical flagstone pathway layout & structuring",
        "Expert plant selections matching your soil hydration properties",
        "Bespoke floral palette selections & garden ornamental beds",
        "Full 3D/2D planning blueprints for premium estates & compounds",
        "Professional flower border building with premium organic mulch"
      ],
      whatsapp: "Hi Palmgate, I want a quote for Landscaping & Garden Design."
    },
    {
      id: "lawn",
      icon: "grass",
      iconName: "grass",
      title: "Premium Turfing & Lawn Care",
      desc: "Laying professional instant lawns (Kikuyu, Paspalum, or Couch grass). Includes seasonal aerating, biological soil feeding, top-dressing turf feed, and smart spot weed treatments.",
      highlight: "Organic Feed Included",
      details: [
        "Certified organic certified instant lawn supply & roll-out",
        "Deep core aeration to relieve compacted clay layers in Zimbabwe soils",
        "Scheduled custom-height mowing with professional low-noise gear",
        "Precision edges, weeding bed clearance, and biological turf feed solutions"
      ],
      whatsapp: "Hi Palmgate, I noticed your Lawn Care package and want a lawn turfing/maintenance estimate."
    },
    {
      id: "pruning",
      icon: "content_cut",
      iconName: "content_cut",
      title: "Tree & Shrub Care / Hedge Sculpting",
      desc: "Precision pruning and formal box hedge sculpting. Our expert horticulturists keep hedges tight, clear dead wood safely, and shape ornamental shrubs with flawless lines.",
      highlight: "Pruning Up to 4m",
      details: [
        "Laser-straight formal box hedge and compound boundary cutting",
        "Deadwood removal for safety, aesthetic value, and lighting gain",
        "Ornamental shrub shaping, rose pruning, and seasonal canopy trims",
        "Thorough organic branch hauling, shredding, and clearance"
      ],
      whatsapp: "Hi Palmgate, I would like to get a quote to trim and sculpt our perimeter hedges."
    },
    {
      id: "cleaning",
      icon: "delete_sweep",
      iconName: "delete_sweep",
      title: "Deep Garden Clean-up & Waste clears",
      desc: "Seasonal leaves and debris clearance. We run comprehensive branch, weed, and leaf sweeps, mulching the organics. Includes safe, eco-certified branch and organic compost hauling.",
      highlight: "Zero Waste Landfill",
      details: [
        "Thorough pavement joint weed-purging and brick chemical detail cleaning",
        "Raking dry grass thatch layers to ventilate root beds and lawn prep",
        "Seasonal acacia leaf, twig, and general organic material compound sweeps",
        "Eco-certified branches and organic green waste hauling and compost conversion"
      ],
      whatsapp: "Hi Palmgate, I want a quote for seasonal garden/yard cleaning and deep cleanup."
    },
    {
      id: "irrigation",
      icon: "ld_water",
      iconName: "potted_plant",
      title: "Smart Irrigation Systems",
      desc: "Install weather-smart drip lines and automated controller boxes. We tune spray nozzles to maximize coverage while cutting water waste.",
      highlight: "Water Saving Tech",
      details: [
        "Custom, leak-proof micro-drip networks for hedges and borders",
        "Automated controller systems and water zone timers (WiFi/Smart models)",
        "Accurate nozzle pressure adjustments to minimize runoff and water wastage",
        "Seasonal system audits, filter cleanups, and spray nozzle replacements"
      ],
      whatsapp: "Hi Palmgate, I'd like a quote for putting in an automated custom drip irrigation system."
    },
    {
      id: "lighting",
      icon: "lightbulb",
      iconName: "wb_sunny",
      title: "Outdoor Lighting Systems",
      desc: "Illuminate your garden pathing with low-voltage warm brass LED stake spotlights, crown accents, and focus fixtures that combine nighttime security with serene visual warmth.",
      highlight: "Warm LED Accents",
      details: [
        "Low-voltage garden pathways post/stake lighting setup",
        "Beautiful tree canopy, focal shrub, and flowerbed spot spotlighting",
        "Time-delayed twilight sensors and automated motion integration",
        "Weatherproof heavy-duty brass/aluminum outdoor landscape wiring"
      ],
      whatsapp: "Hi Palmgate, I'd like to get a custom low-voltage LED landscape lighting quote."
    },
    {
      id: "gutter",
      icon: "cleaning_bucket",
      iconName: "cleaning_services",
      title: "Gutter Clearance & Water Harvesting",
      desc: "Complete clearing of dry seasonal leaves, dirt, and nests from roof gutters so your rainwater harvesting tank captures transparent, clean organic water.",
      highlight: "Rain Preparedness",
      details: [
        "Certified operator high-reach ladder and harness clearing of all gutters",
        "Full downspout wash-throughs to verify zero blockages or silt traps",
        "Rainwater flow testing and harvesting mesh adapter verification",
        "Foundation drainage reviews next to high-volume downspout outputs"
      ],
      whatsapp: "Hi Palmgate, I would like to book the gutter clearing and downspout wash special."
    },
    {
      id: "solar",
      icon: "solar_power",
      iconName: "solar_power",
      title: "Solar Panel Cleaning & Care",
      desc: "Maximize solar efficiency under thick dust. We clean panels with scratch-free telescopic brushes, removing pollen, hard-water spots, and baked soot safely.",
      highlight: "Daylight Boost 30%",
      details: [
        "Telescopic water-fed scratch-resistant microfiber brushes",
        "De-ionized pure spot-free water rinses with safe, low-pressure washes",
        "Clears baked-on bird droppings, fireplace soot, and heavy iron-clay dust",
        "Structural bracket and electrical safety inspection with photo updates"
      ],
      whatsapp: "Hi Palmgate, I want a quote to perform specialized solar panel washing on my house."
    },
    {
      id: "cleanup",
      icon: "cleaning_bucket",
      iconName: "event_available",
      title: "Post-Event Fast Spotless Clears",
      desc: "Rapid response house-clearing and garden sweeping after weddings, corporate parties, and private dinners. We leave your lawns and pavements spotless.",
      highlight: "Pristine Ground",
      details: [
        "Immediate morning-after collection of glass, papers, and trash",
        "Porch, lawn, and brick driveway sweep and power washing as needed",
        "Uniformed respectful workforce deployed for fast turnaround",
        "Waste disposal and site restoration under professional ecological standards"
      ],
      whatsapp: "Hi Palmgate, I saw your post-event cleanup and want a service quote for our upcoming gathering."
    }
  ];

  const currentService = servicesList.find(s => s.id === selectedServiceId);

  return (
    <div className="space-y-24 pb-16 animate-fade-in" id="services-view">
      {currentService ? (
        /* Detailed View of a Specific Service */
        <section className="max-w-4xl mx-auto px-6 pt-10">
          <button 
            onClick={() => setSelectedServiceId(null)}
            className="inline-flex items-center gap-2 group text-slate-500 hover:text-emerald-800 font-semibold mb-8 transition-colors font-sans text-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to All Services
          </button>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">{currentService.iconName || currentService.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-100 rounded-lg">
                    {currentService.highlight}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">{currentService.title}</h1>
                </div>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                {currentService.desc}
              </p>

              <div className="bg-slate-50/80 border border-slate-150 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="font-serif font-bold text-slate-900 text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-800">task_alt</span>
                  What is Included in this Package:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-650 font-sans">
                  {currentService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-emerald-700 text-[18px] shrink-0 pt-0.5 select-none">check_circle</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-emerald-50 rounded-2xl p-6 sm:p-8 space-y-4">
                <h4 className="font-serif font-bold text-white text-base">Book a Visit Across Zimbabwe</h4>
                <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                  We offer absolutely free, offline-safe measurement and soil assessments in Harare, Mabvazuva, Glen Lorne, Borrowdale, and other provinces around Zimbabwe. No commitments are necessary.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href={`https://wa.me/263785366349?text=${encodeURIComponent(currentService.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base sm:text-lg select-none">chat</span>
                    Book Service via WhatsApp
                  </a>
                  <button 
                    onClick={onOpenConsultation}
                    className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl shadow transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base sm:text-lg select-none">spa</span>
                    Request Free Site Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Original Grid View of Services */
        <>
          <section className="text-center max-w-4xl mx-auto px-6 space-y-6 pt-10">
            <span className="text-emerald-800 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">Palmgate Gardeners Services Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-serif leading-tight">
              Nurturing Nature, <br />
              <span className="italic font-normal text-emerald-800">One Plot at a Time</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              From residential backyards to wide institution green parks, our trained Zimbabwe field crews keep your soil vibrant, turf plush, and flowerbeds blooming beautifully.
            </p>
          </section>

          {/* Services grid */}
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((srv, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedServiceId(srv.id)}
                  className="bg-white rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between hover:border-emerald-700/40 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <div className="space-y-5">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                        <span className="material-symbols-outlined text-[28px]">{srv.iconName || srv.icon}</span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-100">
                        {srv.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors">{srv.title}</h3>
                    <p className="text-slate-605 text-sm leading-relaxed font-light">{srv.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Available across Zimbabwe</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedServiceId(srv.id);
                      }}
                      className="text-emerald-800 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      View Details &amp; Book <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Custom Quote Calculator (Hidden for now, strictly WhatsApp communication) */}
      {false && (
      <section id="quote-calculator" className="max-w-7xl mx-auto px-6">
        <div className="bg-[#122615] rounded-3xl text-emerald-50 overflow-hidden shadow-2xl border border-emerald-900/45 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Controls Panel (Left) */}
          <div className="p-8 md:p-12 lg:col-span-8 space-y-8 bg-gradient-to-br from-[#122615] to-[#18331c]">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Interactive Estimator</span>
              <h2 className="text-3xl font-bold font-serif text-white">Estimate Your Project Cost</h2>
              <p className="text-emerald-100/60 text-sm max-w-xl">
                Choose your garden size, frequency of visits, and individual service items. Estimate updating in real-time!
              </p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-6 text-sm">
              {/* Step 1: Garden Size */}
              <div className="space-y-3">
                <label className="block text-emerald-300 font-medium uppercase tracking-wider text-xs">1. Select Approximate Garden Size:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'small', title: 'Small Block', desc: 'Under 100 sqm' },
                    { id: 'medium', title: 'Medium Yard', desc: '100 - 300 sqm' },
                    { id: 'large', title: 'Large Garden', desc: '300 - 600 sqm' },
                    { id: 'estate', title: 'Grand Estate', desc: 'Over 600 sqm' }
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setGardenSize(size.id as any)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${gardenSize === size.id ? 'bg-amber-400 border-amber-400 text-[#122615]' : 'bg-[#1c3820] border-emerald-800 hover:border-emerald-600 text-emerald-100'}`}
                    >
                      <div className="font-bold text-sm">{size.title}</div>
                      <div className={`text-[10px] ${gardenSize === size.id ? 'text-[#122615]/70' : 'text-emerald-300/60'}`}>{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Checked Services */}
              <div className="space-y-3">
                <label className="block text-emerald-300 font-medium uppercase tracking-wider text-xs">2. Choose Services Needed:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'lawn-mowing', label: 'Lawn Mowing, Edging & Sweeping', costDesc: '+$15' },
                    { id: 'weed-control', label: 'Weeding Bed Clearance & Care', costDesc: '+$10' },
                    { id: 'pruning', label: 'Shrub Shading & Hedge Sculpting', costDesc: '+$20' },
                    { id: 'leaf-clearance', label: 'Autumn / Dry Season Leaf Clearing', costDesc: '+$10' },
                    { id: 'fertilizing', label: 'Organic Composting & Fertilizing', costDesc: '+$25' },
                    { id: 'irrigation', label: 'Irrigation Audit & Line Tune-Up', costDesc: '+$30' }
                  ].map((srv) => (
                    <div 
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${selectedServices.includes(srv.id) ? 'bg-emerald-900/60 border-emerald-400/80 text-emerald-100' : 'bg-[#18311c] border-emerald-850 hover:border-emerald-700 text-emerald-200/80'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-amber-400">
                          {selectedServices.includes(srv.id) ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span className="text-xs font-medium">{srv.label}</span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 bg-emerald-950/85 text-emerald-300 font-bold rounded">
                        {srv.costDesc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Frequency Dropdown */}
              <div className="space-y-3">
                <label className="block text-emerald-300 font-medium uppercase tracking-wider text-xs">3. Frequency:</label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'weekly', title: 'Weekly Care', badge: 'Best Result' },
                    { id: 'fortnightly', title: 'Fortnightly', badge: 'Standard' },
                    { id: 'monthly', title: 'Monthly Care', badge: 'Economical' },
                    { id: 'once-off', title: 'Once-off Overhaul', badge: 'Deep Clean' }
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id as any)}
                      className={`p-3 rounded-lg text-center border transition-all cursor-pointer ${frequency === freq.id ? 'bg-emerald-100 border-emerald-100 text-[#122615]' : 'bg-[#1c3820] border-emerald-800 hover:border-emerald-600 text-emerald-100'}`}
                    >
                      <div className="font-semibold text-xs">{freq.title}</div>
                      <div className={`text-[9px] font-bold ${frequency === freq.id ? 'text-amber-700' : 'text-amber-400'}`}>{freq.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact details block */}
              <div className="pt-6 border-t border-emerald-850 space-y-4">
                <label className="block text-emerald-300 font-medium uppercase tracking-wider text-xs">4. Tell Us Where To Contact You:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#18311c] border border-emerald-800 rounded-xl px-4 py-3 placeholder-emerald-200/40 text-emerald-50 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Phone *"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#18311c] border border-emerald-800 rounded-xl px-4 py-3 placeholder-emerald-200/40 text-emerald-50 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-[#18311c] border border-emerald-800 rounded-xl px-4 py-3 placeholder-emerald-200/40 text-emerald-50 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Address (e.g. Palmgate, Mabvazuva)"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    className="w-full bg-[#18311c] border border-emerald-800 rounded-xl px-4 py-3 placeholder-emerald-200/40 text-emerald-50 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Additional description of your garden (e.g. steep slopes, aggressive weeds, particular tree blockages)..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-[#18311c] border border-emerald-800 rounded-xl px-4 py-3 placeholder-emerald-200/40 text-emerald-50 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined">send_and_archive</span>
                  Submit My Quote request
                </button>
              </div>
            </form>
          </div>

          {/* Real-time Pricing Screen / Success Receipt (Right) */}
          <div className="lg:col-span-4 bg-[#0d1c10] border-t lg:border-t-0 lg:border-l border-emerald-900/60 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            {!isSubmitted ? (
              <div className="space-y-8 my-auto text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-300/20 text-amber-400 flex items-center justify-center mx-auto lg:mx-0">
                  <span className="material-symbols-outlined text-[36px]">receipt_long</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-emerald-300/70">Estimated Cost:</h3>
                  <div className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
                    ${calculatedCost}
                    <span className="text-amber-400 font-sans text-lg block pt-2">
                      {frequency === 'once-off' ? 'Single visit fee' : 'Estimated monthly'}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-emerald-200/60 leading-relaxed border-t border-emerald-900/45 pt-4 space-y-2">
                  <p>✔ Pricing estimate calculated dynamically based on Zimbabwe local service catalog.</p>
                  <p>✔ Actual site review is completed completely free before starting work.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 my-auto text-center border border-emerald-800/40 p-6 rounded-2xl bg-[#09150b]">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined font-bold text-[24px]">verified</span>
                </div>
                <h3 className="text-xl font-bold text-white font-serif">Quote Request Submitted!</h3>
                <div className="space-y-2 text-xs text-emerald-200/85">
                  <p className="font-semibold text-amber-300">ESTIMATE RECEIPT:</p>
                  <div className="bg-[#102414] p-3 rounded-lg border border-emerald-900/50 space-y-1 block text-left">
                    <p>👦 Name: <strong className="text-white">{formName}</strong></p>
                    <p>📲 Phone: <strong className="text-white">{formPhone}</strong></p>
                    <p>📏 Garden: <strong className="text-white uppercase">{gardenSize} yard</strong></p>
                    <p>💸 Estimate: <strong className="text-amber-400 hover:underline">${calculatedCost} / month</strong></p>
                  </div>
                  <p className="pt-2 text-emerald-100/70">
                    Thank you! A Palmgate Gardeners team lead will contact you via WhatsApp shortly to finalize your custom schedule.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-4 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Configure Another Estimate
                </button>
              </div>
            )}

            <div className="text-[10px] text-emerald-300/45 text-center lg:text-left pt-6">
              Palmgate Gardeners Ltd. Est. 2024. All quotes bound by terms of services.
            </div>
          </div>

        </div>
      </section>
      )}

      {/* Seasonal Gutter Callout */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/15 border border-amber-400/20 text-amber-400 rounded-full text-xs font-semibold tracking-wide">
              ☔ Essential Dry Season Task
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif">Gutter Clearing Special</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In Zimbabwe, dry winters leave roof gutters heavily clogged with dry acacia leaves, dust, and twigs. When the summer downpours arrive, blocked gutters cause roof overflows, mold, and contaminate rain-harvesting containers. We offer complete leaf-clearing & wash-through services.
            </p>
          </div>
          <a
            href="https://wa.me/263785366349?text=Hi%20Palmgate%20Gardeners%2C%20I%27d%20like%20to%20book%20the%20Gutter%20Clearing%20special%20for%20my%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-neutral-900 font-bold rounded-xl text-sm whitespace-nowrap cursor-pointer shadow text-center inline-block"
          >
            Clear My Gutters Now
          </a>
        </div>
      </section>
    </div>
  );
}
