import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Import newly uploaded authentic images of Palmgate crew in action
// @ts-ignore
import teamPhoto from '../assets/images/theteam.jpeg';
// @ts-ignore
import sweeping1 from '../assets/images/sweeping1.jpeg';
// @ts-ignore
import sweeping2 from '../assets/images/sweeping2.jpeg';
// @ts-ignore
import raking2 from '../assets/images/racking2.jpeg';
// @ts-ignore
import solar1 from '../assets/images/solar1.jpeg';
// @ts-ignore
import solar2 from '../assets/images/solar2.jpeg';
// @ts-ignore
import solar3 from '../assets/images/solar3.jpeg';

// Import newly generated high-detail identity-concealed operational images
// @ts-ignore
import palmgatePruning from '../assets/images/palmgate_pruning_1781442698455.jpg';
// @ts-ignore
import palmgateMowing from '../assets/images/palmgate_mowing_1781442715386.jpg';
// @ts-ignore
import palmgateWatering from '../assets/images/palmgate_watering_1781442732705.jpg';
// @ts-ignore
import palmgateSoilPrep from '../assets/images/palmgate_soil_prep_1781442748315.jpg';

interface GalleryViewProps {
  onOpenConsultation: () => void;
}

const IMAGES = [
  {
    id: 1,
    url: teamPhoto,
    title: 'Professional Landscaping Team',
    desc: 'Our dedicated Palmgate gardening and landscaping crew, standing together in uniform and ready to design, maintain, and transform your home or business gardens.',
    category: 'The Team',
    location: 'Mabvazuva Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I saw your team photo and would like to discuss a custom garden landscaping project.'
  },
  {
    id: 2,
    url: sweeping1,
    title: 'Paving Broom Yard Sweeping',
    desc: 'Sweeping and clean-up of brick driveways, joints, and garden paths to remove built-up dust and debris, leaving compound pathways absolutely pristine.',
    category: 'Yard Maintenance',
    location: 'Glen Lorne Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I\'d like to book your paving sweeping and yard cleanup maintenance package.'
  },
  {
    id: 3,
    url: sweeping2,
    title: 'Meticulous Joint Detailing',
    desc: 'Using high-quality heavy-duty sweep brushes to detail garden pavement seams, clearing leaves, organic compost soil, and dust accumulation.',
    category: 'Yard Maintenance',
    location: 'Borrowdale Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I saw your pathway detailing services and want some yard maintenance for our home driveway.'
  },
  {
    id: 4,
    url: raking2,
    title: 'Dry Thatch Raking & Feeding',
    desc: 'Carefully pulling old dry thatch layers to ventilate rootbeds, paving the way for organic fertilizer integration and vibrant, thick lawn re-seeding.',
    category: 'Lawn Health',
    location: 'Sunninghill Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I want a free inspection to rake, level, or reseed my dry grass lawn.'
  },
  {
    id: 5,
    url: solar1,
    title: 'Premium Solar Dust Wash',
    desc: 'Using specialized telescopic microfiber wash brushes to clean dust layers off high-efficiency photovoltaic module surfaces, boosting power absorption.',
    category: 'Solar Care',
    location: 'Mabvazuva Estate, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I\'d like to book your premium solar panel cleaning service.'
  },
  {
    id: 6,
    url: solar2,
    title: 'Detailing Panel Drip Wash',
    desc: 'Climbing roof frames with certified safety steps to perform deep-rinse panel washes that clear hard water blemishes, soot, and industrial dust.',
    category: 'Solar Care',
    location: 'Residential Estate Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I want an inspection/wash estimate for my rooftop solar modules.'
  },
  {
    id: 7,
    url: solar3,
    title: 'Solar Energy Optimization',
    desc: 'A full-suite solar restoration and optimization wash, restoring your solar cells back to maximum output capacity while removing baked-on grime.',
    category: 'Solar Care',
    location: 'Highlands Block, Harare',
    whatsappText: 'Hi Palmgate Gardeners, my solar panel output has dropped, and I need a professional solar panel wash performed.'
  },
  {
    id: 8,
    url: palmgatePruning,
    title: 'Geometric Hedge Shaping',
    desc: 'Carefully trimming outer branch tips to promote dense branching foliage, creating clean geometric hedges and gorgeous modern perimeter barriers.',
    category: 'Lawn & Gardens',
    location: 'Borrowdale Estate, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I see your clean geometric hedge trimming snapshot and would like to request an estimate to clean up my perimeter hedges.'
  },
  {
    id: 9,
    url: palmgateMowing,
    title: 'Precision Turf Lawn Mowing',
    desc: 'Operating high-torque lawn mowers set to perfect horticultural height limits to encourage healthy leaf cell reproduction, leaving a vibrant green texture.',
    category: 'Lawn Health',
    location: 'Chishawasha Hills, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I saw your lawn detailing snapshot and want to book consistent mowing for our household lawn.'
  },
  {
    id: 10,
    url: palmgateWatering,
    title: 'Micro-Mist Deep Hydration',
    desc: 'Using micro-nozzle irrigation sweeps to deeply hydrate garden beds, delivering steady water mist directly to the deep root clusters of lawns and groundcovers.',
    category: 'Lawn & Gardens',
    location: 'Mabvazuva Estate, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I see your plant watering snapshot and need a custom scheduled irrigation or hydration routine.'
  },
  {
    id: 11,
    url: palmgateSoilPrep,
    title: 'Organic Base Soil Aeration',
    desc: 'Using high-tensile garden hand forks to aerate compacted soils, infusing rich nitrogen-packed organic compost mixtures to prep rootbeds for fresh planting or lawn rolls.',
    category: 'Soil Prep',
    location: 'Glen Lorne Compound, Harare',
    whatsappText: 'Hi Palmgate Gardeners, I saw your compost preparation snapshot and would like to schedule a turf lawn soil rehabilitation visit.'
  }
];

interface CollageSlot {
  id: string;
  image: typeof IMAGES[0];
  left: number; // percentage
  top: number; // percentage
  rotate: number; // degrees
  scale: number;
  key: number; // incrementing key for force re-animation
}

export default function GalleryView({ onOpenConsultation }: GalleryViewProps) {
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define initial slots that correspond to left, center-right, and far-right sections.
  // Each has its own layout bounds in the collage to look natural.
  const [slots, setSlots] = useState<CollageSlot[]>([
    { id: 'slot-0', image: IMAGES[0], left: 8, top: 12, rotate: -4, scale: 0.98, key: 0 },
    { id: 'slot-1', image: IMAGES[1], left: 38, top: 22, rotate: 5, scale: 1.02, key: 100 },
    { id: 'slot-2', image: IMAGES[3], left: 68, top: 8, rotate: -3, scale: 0.96, key: 200 },
  ]);

  const getResponsiveSlots = () => {
    if (windowWidth < 640) {
      // Only 1 slot on small mobile - center nicely
      const copy = { ...slots[0] };
      // 185px wide is ~50% of typical 360px. left: 15% centers it nicely.
      copy.left = windowWidth > 420 ? 20 : 12;
      copy.top = 18;
      return [copy];
    }
    if (windowWidth < 1024) {
      // 2 slots on tablets - separate neatly without collision
      const s0 = { ...slots[0], left: 8, top: 18 };
      const s1 = { ...slots[1], left: 54, top: 22 };
      return [s0, s1];
    }
    return slots;
  };

  // Handle automatic swapping of image slots with smooth fade-in and random coordinates
  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      // Pick a random slot to modify
      const slotIndexToChange = Math.floor(Math.random() * 3);

      setSlots(currSlots => {
        const currentlyRenderedIds = currSlots.map(s => s.image.id);
        const availablePool = IMAGES.filter(img => !currentlyRenderedIds.includes(img.id));
        
        if (availablePool.length === 0) return currSlots;
        
        // Pick new random image
        const newImage = availablePool[Math.floor(Math.random() * availablePool.length)];

        // Calculate custom relative boundaries for each slot so they span nicely and overlap slightly
        let minX = 4, maxX = 22;
        let minY = 6, maxY = 30;
        
        if (slotIndexToChange === 1) {
          minX = 30; maxX = 54;
          minY = 12; maxY = 38;
        } else if (slotIndexToChange === 2) {
          minX = 62; maxX = 82;
          minY = 6; maxY = 30;
        }

        const nextX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const nextY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        const nextRotate = Math.floor(Math.random() * 14) - 7; // -7deg to 7deg
        const nextScale = 0.92 + Math.random() * 0.12; // 0.92 to 1.04

        const newSlots = [...currSlots];
        newSlots[slotIndexToChange] = {
          ...newSlots[slotIndexToChange],
          image: newImage,
          left: nextX,
          top: nextY,
          rotate: nextRotate,
          scale: nextScale,
          key: newSlots[slotIndexToChange].key + 1
        };

        return newSlots;
      });
    }, 4500);

    return () => clearInterval(shuffleInterval);
  }, []);

  // Manual shuffle functionality
  const handleManualShuffle = () => {
    setSlots(currSlots => {
      // We shuffle all 3 positions randomly with fresh images
      const shuffledImages = [...IMAGES].sort(() => 0.5 - Math.random());
      
      return currSlots.map((slot, idx) => {
        let minX = 4, maxX = 22;
        let minY = 6, maxY = 30;
        
        if (idx === 1) {
          minX = 30; maxX = 54;
          minY = 12; maxY = 38;
        } else if (idx === 2) {
          minX = 62; maxX = 82;
          minY = 6; maxY = 30;
        }

        const nextX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const nextY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        const nextRotate = Math.floor(Math.random() * 14) - 7;
        const nextScale = 0.92 + Math.random() * 0.12;

        return {
          ...slot,
          image: shuffledImages[idx],
          left: nextX,
          top: nextY,
          rotate: nextRotate,
          scale: nextScale,
          key: slot.key + 1
        };
      });
    });
  };

  return (
    <div className="space-y-16 py-12 pb-16 animate-fade-in" id="gallery-view">
      {/* DETAILED ACTIVE COLLAGE SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1e3f20]/5 border border-[#1e3f20]/15 text-emerald-950 rounded-full text-xs font-bold leading-none">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            <span>LIVE OPERATIONAL SNAPSHOTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif">Crew Snapshot Polaroid Collage</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Our team posts real project visual feedback live. Below, watch actual photographs from our garden maintenance and solar panel cleaning teams fade in and out to random positions. Click any polaroid to enlarge!
          </p>
        </div>

        {/* THE MAIN COLLAGE BOARD */}
        <div className="relative w-full h-[520px] md:h-[580px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl select-none group/board mb-12">
          
          {/* Subtle background grid accent lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <AnimatePresence mode="popLayout" initial={false}>
            {getResponsiveSlots().map((slot) => (
              <motion.div
                key={`${slot.id}-${slot.key}`}
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: slot.scale, 
                  left: `${slot.left}%`, 
                  top: `${slot.top}%`, 
                  rotate: `${slot.rotate}deg`,
                  y: 0 
                }}
                exit={{ opacity: 0, scale: 0.75, y: -20, filter: 'blur(3px)' }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                style={{ position: 'absolute' }}
                onClick={() => setSelectedImage(slot.image)}
                className="w-[185px] sm:w-[240px] md:w-[275px] bg-white p-3 pr-3 pt-3 pb-5 sm:pb-7 rounded-lg shadow-[0_12px_28px_rgba(0,0,0,0.6)] cursor-pointer hover:z-30 hover:scale-105 active:scale-95 transition-transform duration-200 border border-slate-100"
              >
                {/* Simulated Tape at Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-amber-400/25 backdrop-blur-xs border border-amber-300/30 rotate-2 block shadow-xs"></div>

                {/* Polaroid Photo */}
                <div className="aspect-[4/5] bg-slate-100 rounded overflow-hidden relative">
                  <img 
                    src={slot.image.url} 
                    alt={slot.image.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Category Accent */}
                  <div className="absolute top-2 left-2 bg-slate-900/75 backdrop-blur-xs border border-white/10 px-2 py-0.5 rounded text-[8px] sm:text-[9px] text-white font-semibold font-mono uppercase tracking-wider">
                    {slot.image.category}
                  </div>
                </div>

                {/* Hand-written look Title */}
                <div className="pt-3.5 block select-none">
                  <div className="text-slate-800 font-bold text-xs md:text-sm font-sans truncate tracking-tight text-center">
                    {slot.image.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Info HUD Controls */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono flex items-center gap-1.5 self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Refreshing random positions every 4s • Overlapping enabled
            </div>
            
            <button
              onClick={handleManualShuffle}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all text-[#122615] rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm font-bold">shuffle</span>
              Shuffle Snapshot Board
            </button>
          </div>
        </div>

        {/* FULL IMAGE SELECTOR GRID FOR QUICK SELECTION */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-mono text-slate-400">Can&apos;t wait for the automatic shuffle? See all {IMAGES.length} active snapshots below:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-3">
            {IMAGES.map((img) => (
              <div 
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="aspect-square rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-700 cursor-pointer group transition-all"
              >
                <div className="w-full h-full relative">
                  <img 
                    src={img.url} 
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-base">zoom_in</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg lg:max-w-xl w-full flex flex-col max-h-[90vh]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] sm:aspect-video w-full bg-slate-100">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform duration-150 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/75 backdrop-blur-xs border border-white/10 text-white text-xs font-semibold rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-sm text-amber-400">location_on</span>
                  {selectedImage.location}
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 md:p-8 space-y-4 flex-1 overflow-y-auto">
                <div className="space-y-1 block text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#1e3f20] font-extrabold font-mono block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-serif">
                    {selectedImage.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed text-left">
                  {selectedImage.desc}
                </p>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-mono text-left">Palmgate Gardens Zimbabwe</span>
                  <a 
                    href={`https://wa.me/263785366349?text=${encodeURIComponent(selectedImage.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Inquire About This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
