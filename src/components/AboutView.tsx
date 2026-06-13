import React, { useState } from 'react';
import { PlantRecommendationQuery, Plant } from '../types';

export default function AboutView() {
  const [sun, setSun] = useState<'full-sun' | 'partial-shade' | 'deep-shade'>('full-sun');
  const [soil, setSoil] = useState<'sandy' | 'loamy' | 'clay' | 'rocky'>('sandy');
  const [purpose, setPurpose] = useState<'flowering' | 'privacy-hedge' | 'ground-cover' | 'drought-hardy' | 'shade-tree'>('flowering');
  const [showResult, setShowResult] = useState<boolean>(true);

  const plantsList: Plant[] = [
    {
      name: "Strelitzia Reginae",
      scientificName: "Bird of Paradise",
      type: "Ornamental Tropical Shrub",
      soil: "sandy, loamy",
      sun: "full-sun, partial-shade",
      watering: "Moderate",
      growthRate: "Slow-Medium",
      description: "Iconic structural native with dramatic orange-and-blue bird-like flowers. Exceptionally hardy in dry winters.",
      highlights: ["Drought Resistant", "Low Maintenance", "Dramatic focal point"]
    },
    {
      name: "Agapanthus Praecox",
      scientificName: "African Lily",
      type: "Perennial Flowerbed Shrub",
      soil: "sandy, loamy, clay",
      sun: "full-sun, partial-shade",
      watering: "Moderate",
      growthRate: "Medium",
      description: "Evergreen clustering plants projecting tall spheres of blue or white bell-shaped flora. Perfectly keeps retaining walls in place.",
      highlights: ["Stabilizes slopes", "Vivid color blooms", "Tolerates clay well"]
    },
    {
      name: "Bougainvillea Spectabilis",
      scientificName: "Bougainvillea",
      type: "Climbing Woody Vine",
      soil: "sandy, rocky, loamy",
      sun: "full-sun",
      watering: "Low (Drought-wise)",
      growthRate: "Fast",
      description: "Bursting purple, magenta, or red climbing foliage. Ideal for boundary fence coverage or perimeter security spikes.",
      highlights: ["Security barrier", "High sun thrives", "Virtually indestructible"]
    },
    {
      name: "Eugenia Myrtifolia",
      scientificName: "Brush Cherry",
      type: "Hedge and Screen Tree",
      soil: "clay, loamy",
      sun: "full-sun, partial-shade",
      watering: "Regular",
      growthRate: "Fast",
      description: "Dense, glossy deep-green leaves with burgundy-tipped new growth. The absolute best plant for formal privacy box hedging.",
      highlights: ["Perfect for trimming", "Dense windbreak", "Glossy evergreen focus"]
    },
    {
      name: "Pennisetum Clandestinum",
      scientificName: "Kikuyu Grass",
      type: "Premium Summer Turf",
      soil: "loamy, clay",
      sun: "full-sun",
      watering: "Regular to High",
      growthRate: "Very Fast",
      description: "Dense creeping stolon runner grass. Perfect comfortable soft lawn carpets that recover effortlessly from high-impact sports.",
      highlights: ["Excellent self-repair", "Soft carpet layer", "Vibrant summer green"]
    },
    {
      name: "Cynodon Dactylon",
      scientificName: "Couch / Bermuda Grass",
      type: "Drought-Hardy Turf",
      soil: "sandy, clay, loamy",
      sun: "full-sun, partial-shade",
      watering: "Low-Moderate",
      growthRate: "Fast",
      description: "Deep-rooting, drought-hardy fine turf grass. Stays robust under severe heat and sandy soil water drainages.",
      highlights: ["Deep root networks", "Extremely water-wise", "Thrives in dry weathers"]
    },
    {
      name: "Jasminum Multi-florum",
      scientificName: "Star Jasmine",
      type: "Fragrant Ground Cover/Climber",
      soil: "loamy, sandy",
      sun: "partial-shade, deep-shade",
      watering: "Moderate",
      growthRate: "Medium",
      description: "Glorious evergreen creeper sending out small white stars of heavy sweet fragrance. Best under partial shade canopies.",
      highlights: ["Heavily aromatic", "Loves light shade", "Lush dark foliage"]
    },
    {
      name: "Tecoma Capensis",
      scientificName: "Cape Honeysuckle",
      type: "Vigorous Border Shrub",
      soil: "sandy, loamy, rocky",
      sun: "full-sun, partial-shade",
      watering: "Low-Moderate",
      growthRate: "Fast",
      description: "Displays rich orange and red trumpet flowers that attract nectar-feeding birds. Highly suitable for wild borders.",
      highlights: ["Attracts local birds", "Salty breeze tolerant", "Fast hedge cover"]
    }
  ];

  // Simple filter logic for plant recommendation wizard
  const recommendedPlants = plantsList.filter(plant => {
    const sunMatch = plant.sun.includes(sun);
    
    // Check soil match
    const soilParts = plant.soil.split(', ');
    const soilMatch = soilParts.includes(soil) || soil === 'loamy'; // loamy is a great generic match
    
    // Check purpose match
    let purposeMatch = false;
    const lowerHighlights = plant.highlights.map(h => h.toLowerCase());
    
    if (purpose === 'flowering') {
      purposeMatch = lowerHighlights.some(h => h.includes('bloom') || h.includes('color') || h.includes('flower')) || 
                     plant.name.includes('Reginae') || 
                     plant.name.includes('Praecox') || 
                     plant.name.includes('Tecoma');
    } else if (purpose === 'privacy-hedge') {
      purposeMatch = lowerHighlights.some(h => h.includes('barrier') || h.includes('hedge') || h.includes('security')) || 
                     plant.type.toLowerCase().includes('hedge') || 
                     plant.name.includes('Eugenia') || 
                     plant.name.includes('Bougainvillea');
    } else if (purpose === 'ground-cover') {
      purposeMatch = plant.type.toLowerCase().includes('turf') || 
                     plant.type.toLowerCase().includes('cover') || 
                     plant.name.includes('Kikuyu') || 
                     plant.name.includes('Cynodon') || 
                     plant.name.includes('Jasminum');
    } else if (purpose === 'drought-hardy') {
      purposeMatch = lowerHighlights.some(h => h.includes('drought') || h.includes('water-wise') || h.includes('drought-wise') || h.includes('hardy')) || 
                     plant.name.includes('Bougainvillea') || 
                     plant.name.includes('Cynodon') || 
                     plant.name.includes('Strelitzia');
    } else {
      purposeMatch = plant.highlights.length > 0;
    }

    return sunMatch && soilMatch && purposeMatch;
  }).slice(0, 3); // top 3 recommendations

  const timelineMilestones = [
    {
      year: "Early 2024",
      title: "The Sprout",
      desc: "Launched in Zimbabwe with two passionate horticulturists, a single mower, and a clear vision: bring scientific, environmental-focused care to local garden spaces."
    },
    {
      year: "Late 2024",
      title: "Deep Roots",
      desc: "Appointed landscape managers for several major security estates. Replaced harmful synthetic sprays with premium bio-organic fertilizers."
    },
    {
      year: "Early 2025",
      title: "Smart Irrigation & Growth",
      desc: "Built our local compost nursery. Trained 10 certified landscape operators. Added smart automatic water sprinkler configuration workflows."
    }
  ];

  const team = [
    {
      name: "Lloyd Junior M.",
      role: "Founder & Lead Horticulturist",
      bio: "Master in tropical soil structures and certified plant tree surgeon. Hand-mixes all Palmgate Gardeners organic soil feeds.",
      avatar: "LM"
    },
    {
      name: "Tafadzwa C.",
      role: "Head of Irrigation Systems",
      bio: "Graduated irrigation engineer specialized in smart drip line layouts and pump calibration setups.",
      avatar: "TC"
    },
    {
      name: "Chipo M.",
      role: "Chief Floral & Hardscape Designer",
      bio: "Artist in multi-tier flowerbed palettes and natural slate-stone path configurations.",
      avatar: "CM"
    }
  ];

  return (
    <div className="space-y-24 pb-16 animate-fade-in" id="about-view">
      {/* About Header */}
      <section className="text-center max-w-4xl mx-auto px-6 space-y-6 pt-10">
        <span className="text-emerald-800 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">Our Origin Story</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-serif leading-tight">
          Rooted in Care, <br />
          <span className="italic font-normal text-emerald-800">Grown with Passion</span>
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 font-mono">
          <span>Est. 2024</span>
          <span>•</span>
          <span>Available Across Zimbabwe</span>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-12 space-y-6 text-slate-700 leading-relaxed text-base text-center md:text-left">
          <p className="text-lg text-slate-900 font-medium">
            At Palmgate Gardeners, we believe a garden is not merely an outdoor accessory—it is an evolving, breathing ecosystem that reflects the character of your home or corporate workplace.
          </p>
          <p>
            Operating across Zimbabwe, we cater to unique microclimatic and varied soil profiles. These soils require carefully monitored nutrient supplementation, balanced humus composting, and smart watering plans. We saw how traditional gardeners routinely deployed toxic chemical pesticide sprays that damaged local bird populations and hardened lawns. Under the leadership of professional horticulturists, we launched Palmgate Gardeners with a pledge to use 100% organic-safe ingredients, scientific grass feeding calendars, and noise-reduced low-emission tools.
          </p>
          <p>
            Whether managing residential lawns or shaping commercial landscape hedges for industrial structures, we approach every blade of grass with surgical precision.
          </p>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section id="timelines" className="bg-[#122615] text-[#f2f2eb] py-20 px-6 rounded-3xl mx-4 border border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-amber-400 font-extrabold uppercase tracking-widest text-xs">Our Steps So Far</span>
            <h2 className="text-3xl font-serif font-bold text-white">How We Grown</h2>
            <div className="h-0.5 w-16 bg-amber-400 mx-auto rounded"></div>
          </div>

          <div className="relative border-l border-emerald-800 space-y-12 pl-6 md:pl-10">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative space-y-2 text-left">
                {/* Bullet */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-[#122615]"></div>
                
                <span className="bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider select-none">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold font-serif text-white pt-2">{milestone.title}</h3>
                <p className="text-emerald-100/75 text-sm leading-relaxed max-w-2xl">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#1e3f20] font-bold">The Caretakers</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Meet Our Horticulturists</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Experienced, friendly professionals passionate about soils, plants, and structural landscaping precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 hover:border-emerald-600/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#122615] to-[#1e3f20] text-emerald-100 rounded-full flex items-center justify-center font-bold font-serif text-lg mx-auto shadow-inner">
                {member.avatar}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">{member.role}</p>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Zimbabwean Local Plant Recommendation Tool */}
      <section id="plant-assistant" className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-[#eeeede] space-y-8 shadow-sm">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold px-2.5 py-1 bg-emerald-100 rounded-lg border border-emerald-200 inline-block">Zimbabwe Flora Wizard</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-950">Zimbabwe Plant Suggester</h2>
            <p className="text-slate-600 text-xs">
              Tell our botanical analyzer about your garden spot conditions (sun hours, soil compaction, landscape goal) and see matching Zimbabwean native species that thrive under dry winters!
            </p>
          </div>

          <div className="space-y-5 text-xs text-slate-700">
            {/* Control line 1: Sun */}
            <div className="space-y-2">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-500 block">1. Sun Exposure:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'full-sun', label: '🌞 Full Sun (6+ hours)' },
                  { id: 'partial-shade', label: '⛅ Partial Shade (3-6 hours)' },
                  { id: 'deep-shade', label: '🌳 Deep Shade (under canopies)' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => { setSun(opt.id as any); setShowResult(true); }}
                    className={`px-4 py-2.5 rounded-lg border transition-all text-xs font-medium cursor-pointer ${sun === opt.id ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control line 2: Soil */}
            <div className="space-y-2">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-500 block">2. Soil Dryness & Type:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'sandy', label: '🏜 Sandy / Free draining' },
                  { id: 'loamy', label: '🌱 Rich Loamy compost' },
                  { id: 'clay', label: '🧱 Red Clay / Compacted' },
                  { id: 'rocky', label: '🏔 Rocky / Steep slope' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => { setSoil(opt.id as any); setShowResult(true); }}
                    className={`px-4 py-2.5 rounded-lg border transition-all text-xs font-medium cursor-pointer ${soil === opt.id ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control line 3: Goal */}
            <div className="space-y-2">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-500 block">3. Primary Vision & Purpose:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'flowering', label: '🌸 Magnificent Flowers & Birds' },
                  { id: 'privacy-hedge', label: '🛡 Dense Perimeter Privacy Hedgerow' },
                  { id: 'ground-cover', label: '🍀 Soft Ground Lawn Carpet' },
                  { id: 'drought-hardy', label: '💧 High Drought Safety' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => { setPurpose(opt.id as any); setShowResult(true); }}
                    className={`px-4 py-2.5 rounded-lg border transition-all text-xs font-medium cursor-pointer ${purpose === opt.id ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200"></div>

          {/* Wizard recommendations results */}
          {showResult && (
            <div className="space-y-4 animate-fade-in block">
              <h4 className="text-sm font-semibold text-slate-900 tracking-wide">💡 Highly Recommended Sowing Species:</h4>
              
              {recommendedPlants.length === 0 ? (
                <div className="p-6 bg-white border border-slate-200 rounded-xl text-center text-xs text-slate-500">
                  No exact species match found, but standard native succulent Agaves or Strelitzias will thrive beautifully here!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedPlants.map((plant, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm">
                      <div className="space-y-1 block text-left">
                        <span className="text-[10px] uppercase font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block">{plant.type}</span>
                        <h5 className="text-base font-bold text-[#1e3f20] font-serif">{plant.name}</h5>
                        <p className="text-[11px] text-slate-400 italic">({plant.scientificName})</p>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed block text-left">{plant.description}</p>
                      
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                        {plant.highlights.map((hlt, i) => (
                          <span key={i} className="text-[9px] px-1.5 py-0.5 bg-slate-50 text-slate-600 font-medium rounded">
                            🌱 {hlt}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
