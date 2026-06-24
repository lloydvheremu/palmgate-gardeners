import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SocialFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when user clicks outside the widget
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      id="social-floating-widget"
    >
      {/* FLOATING SOCIAL LINKS (SLIDES UP ON OPEN) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="flex flex-col gap-2 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-2xl min-w-[210px]"
          >
            <div className="px-2 pb-1.5 border-b border-slate-800 text-left">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">Palmgate Gardeners</p>
              <p className="text-[9px] text-slate-400">Join our growing community</p>
            </div>

            {/* INSTAGRAM LINK */}
            <a 
              href="https://instagram.com/palmgate_gardeners" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-2 rounded-xl text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20 border border-transparent hover:border-pink-500/30 transition-all text-left"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="block">
                <span className="text-xs font-bold block leading-none">Instagram</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">@palmgate_gardeners</span>
              </div>
            </a>

            {/* TIKTOK LINK */}
            <a 
              href="https://tiktok.com/@palmgate.gardners" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/65 border border-transparent hover:border-cyan-500/30 transition-all text-left"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white flex-shrink-0 shadow-sm border border-slate-800">
                <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.17 1.94-.13 2.82-.64.01 1.4-.21 2.8-.75 4.09-.81-.03-1.63-.16-2.42-.42l-.02 5.09c-.06 2.01-.89 3.95-2.39 5.3-1.63 1.48-3.92 2.22-6.11 1.95-2.36-.26-4.52-1.74-5.63-3.87-1.28-2.39-1.07-5.46.54-7.63 1.42-1.95 3.79-3.05 6.22-2.86v4.08c-1.12-.11-2.27.34-2.92 1.27-.77 1.05-.62 2.58.38 3.44.88.79 2.26.78 3.12-.04.47-.46.73-1.11.72-1.77L12.5 0h.025z"/>
                </svg>
              </div>
              <div className="block">
                <span className="text-xs font-bold block leading-none">TikTok</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">@palmgate.gardners</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-3 rounded-full font-bold shadow-xl border transition-all duration-300 cursor-pointer ${
          isOpen 
            ? 'bg-slate-900 text-amber-400 border-slate-800 scale-95' 
            : 'bg-[#1e3f20] text-amber-400 border-amber-500/25 hover:bg-emerald-950 hover:scale-105 active:scale-95'
        }`}
        aria-label="Follow Us on Social Media"
      >
        <span className="material-symbols-outlined text-lg leading-none animate-pulse">favorite</span>
        <span className="text-xs uppercase tracking-wider font-mono">Follow Us</span>
        
        {/* Toggle arrow indicator */}
        <span className={`material-symbols-outlined text-sm leading-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_less
        </span>
      </button>
    </div>
  );
}
