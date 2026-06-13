import React, { useState } from 'react';

type GalleryCategory = 'all' | 'residential' | 'corporate' | 'specialty';

interface GalleryViewProps {
  onOpenConsultation: () => void;
}

export default function GalleryView({ onOpenConsultation }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0-100)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const categories = [
    { id: 'all', name: 'All Spaces' },
    { id: 'residential', name: 'Home Gardens' },
    { id: 'corporate', name: 'Offices & Compounds' },
    { id: 'specialty', name: 'Specialty Features' }
  ];

  const projects = [
    {
      category: 'residential',
      title: 'Lush Backyard Sanctuary',
      location: 'Mabvazuva Estate, Harare District',
      desc: 'Complete terrain leveling, lawn planting, natural stone pathways, and border jasmine beds.',
      bgGradient: 'from-emerald-800 to-green-700',
      icon: "home_pin"
    },
    {
      category: 'corporate',
      title: 'Corporate Hedges & Walkways',
      location: 'Corporate Office Complex',
      desc: 'Elegant symmetrical box hedging, drought-resistant succulents, and scheduled seasonal lawn feeds.',
      bgGradient: 'from-teal-800 to-emerald-700',
      icon: "corporate_fare"
    },
    {
      category: 'specialty',
      title: 'Smart Sprinkler & Drip Network',
      location: 'Residential Estate Compound',
      desc: 'Multi-zone automated sprinkler calibration with weather sensors providing 45% water containment.',
      bgGradient: 'from-cyan-900 to-emerald-800',
      icon: "nest_eco_leaf"
    },
    {
      category: 'residential',
      title: 'Artisan Stone Rosebed',
      location: 'Sunninghill Close, Harare',
      desc: 'Curved custom stacked retaining stone wall featuring rich organic compost and multicolored rose cultivars.',
      bgGradient: 'from-amber-800 to-emerald-800',
      icon: "local_florist"
    },
    {
      category: 'specialty',
      title: 'Formal European Hedge Walk',
      location: 'Residential Close Block B',
      desc: 'Pristinely trimmed evergreen Eugenia border shields paired with central Agapanthus rows.',
      bgGradient: 'from-[#1e3f20] to-emerald-900',
      icon: "nature"
    },
    {
      category: 'corporate',
      title: 'School Recreational Green park',
      location: 'Elite Academy Grounds, Harare',
      desc: 'Large active lawn rehabilitation using native kikuyu turf, custom aerators, and high-impact sports turf feeds.',
      bgGradient: 'from-emerald-800 to-teal-900',
      icon: "school"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-24 pb-16 animate-fade-in" id="gallery-view">
      {/* Gallery Header */}
      <section className="text-center max-w-4xl mx-auto px-6 space-y-6 pt-10">
        <span className="text-amber-700 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100">Palmgate Gardeners Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-serif leading-tight">
          Our Work: Living Art, <br />
          <span className="italic font-normal text-emerald-800">Rooted in Zimbabwe</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          View Palmgate Gardeners&apos; real work across residential, commercial, and institutional estates. Every garden expresses its own unique structural narrative.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as GalleryCategory)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeCategory === cat.id ? 'bg-[#1e3f20] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Before/After Split Slider */}
      <section id="before-after-slider" className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#1e3f20] font-bold">Interactive Showcase</span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">Overgrown Block to Premier Turf Sanctuary</h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Use the dynamic slider to view our horticultural rehabilitation process. Left is Before, right is After!
          </p>
        </div>

        {/* Container */}
        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 select-none">
          
          {/* BACKGROUND: BEFORE IMAGE (Overgrown, neglected, dry) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e2b24] via-[#3a352a] to-[#25221b] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="px-3.5 py-1.5 bg-red-950/80 backdrop-blur border border-red-500/30 text-red-300 text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                Overgrown & Neglected
              </span>
            </div>
            
            {/* Visual representation of dry soil and weeds */}
            <div className="space-y-4 max-w-md text-slate-300/80 font-mono text-xs bg-black/45 p-6 rounded-2xl border border-white/5 shadow-inner">
              <div className="text-red-400 font-bold uppercase text-sm font-sans flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">dangerous</span> 
                Initial Plot Report
              </div>
              <ul className="space-y-1 block">
                <li>• Invasive local weeds (Blackjack, couch weeds) overtaking.</li>
                <li>• Soil depleted of core macronutrients, heavily compacted.</li>
                <li>• Irregular water drainage causing pooling and dry spots.</li>
                <li>• Out-of-control thornwood blocking light pathways.</li>
              </ul>
            </div>
            <div className="text-amber-500/30 font-serif text-7xl md:text-9xl font-bold absolute right-10 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
              BEFORE
            </div>
          </div>

          {/* FOREGROUND: AFTER IMAGE (Lush, vibrant, manicured) - Cloaked via clip path */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#122615] via-[#1e3f20] to-[#122514] p-8 flex flex-col justify-between transition-all"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <div className="flex justify-between items-start">
              <span className="px-3.5 py-1.5 bg-emerald-500 text-neutral-950 text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                Palmgate Manicured
              </span>
            </div>

            {/* Visual representation of beautiful garden */}
            <div className="space-y-4 max-w-md text-emerald-100/90 font-mono text-xs bg-emerald-950/85 p-6 rounded-2xl border border-emerald-550/30 shadow-2xl">
              <div className="text-amber-300 font-bold uppercase text-sm font-sans flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-amber-300 animate-pulse">check_circle</span> 
                Horticultural Restoration
              </div>
              <ul className="space-y-1 block">
                <li>✔ Soil chemically aerated and organic compost incorporated.</li>
                <li>✔ Perfect hand-laid Kikuyu instant lawn rolls.</li>
                <li>✔ Box hedging sculpted perfectly in alignment.</li>
                <li>✔ Scheduled deep drenching drip lines installed.</li>
              </ul>
            </div>
            <div className="text-emerald-300/10 font-serif text-7xl md:text-9xl font-bold absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
              AFTER
            </div>
          </div>

          {/* Dynamic Slider Bar */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 shadow-[0_0_20px_#f59e0b]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-400 text-[#122615] rounded-full flex items-center justify-center shadow-2xl border border-white font-bold select-none z-30">
              <span className="material-symbols-outlined select-none text-[22px]">swap_horiz</span>
            </div>
          </div>

          {/* Hidden Real Native Input Range covering the element */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={handleSliderChange}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
            aria-label="Before/After Slider Control"
          />
        </div>
      </section>

      {/* Grid of completed projects */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-[1.01]"
            >
              {/* Project Visual Block */}
              <div className={`aspect-[1.5] w-full bg-gradient-to-br ${proj.bgGradient} p-6 relative flex flex-col justify-between overflow-hidden text-white`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                
                {/* Visual design elements representing structural landscaping */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[20px]">{proj.icon}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-950/50 backdrop-blur border border-white/10 text-[10px] font-bold rounded uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>

                <div className="relative z-10 space-y-1 block text-left">
                  <div className="text-amber-300 text-xs font-bold font-mono tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">location_on</span>
                    {proj.location}
                  </div>
                  <h3 className="text-xl font-bold font-serif leading-tight">{proj.title}</h3>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">{proj.desc}</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Completed Projects Catalog</span>
                  <a 
                    href={`https://wa.me/263782824022?text=Hi%20Palmgate%20Gardeners%2C%20I%20saw%20the%20project%20%22${encodeURIComponent(proj.title)}%22%20in%20your%20gallery%20and%20would%20like%20to%20get%20a%20similar%20layout.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Get Similar Layout <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty callout */}
      <section className="bg-[#f2f2eb] rounded-3xl p-10 md:p-14 max-w-7xl mx-auto px-6 border border-[#e2e2d9] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[#132a15] font-extrabold uppercase tracking-widest text-xs block">Artisan Craft</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight">We Sculpt Custom Botanical Garden Paths</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            A proper garden is experienced through pathing. We don&apos;t just space plants; we lay custom curved flagstones, structure high-density stone borders, and seed walkable moss beds so families can experience their yard on foot. Each stone walkway is carefully angled for rainwater runoff.
          </p>
          <ul className="space-y-2 text-xs font-medium text-slate-700">
            <li className="flex items-center gap-2">✔ High-quality local Zimbabwe flagstone slabs.</li>
            <li className="flex items-center gap-2">✔ Embedded ground lights for spectacular sunset visual feedback.</li>
            <li className="flex items-center gap-2">✔ Hand-weeded gravel borders for drainage.</li>
          </ul>
        </div>
        <div className="bg-[#1e3f20] rounded-3xl p-8 text-emerald-100 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-serif text-white font-bold">Have an ambitious organic design in mind?</h3>
          <p className="text-xs leading-relaxed text-emerald-200/80">
            Tell us about your yard plans. Our head designer does computer layouts, recommends plant palettes, and establishes pricing estimates for a complete transformation.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/263782824022?text=Hi%20Palmgate%20Gardeners%2C%20I%27d%20like%20to%20consult%20with%20your%20head%20designer%20about%20a%20custom%20design/transformation%20for%20my%20yard."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold rounded-xl text-xs transition-all duration-300 shadow-md cursor-pointer text-center"
            >
              Consult with Head Designer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
