import React from 'react';
// @ts-ignore
import logoImg from '../images/Logo.png';

interface LogoProps {
  className?: string; // class for the container
  iconSize?: string;  // size for the image wrapper
  textClassName?: string; // class for the text (dynamic styling in header vs footer)
  showText?: boolean;
}

export default function Logo({ 
  className = "flex items-center gap-3 select-none", 
  iconSize = "w-12 h-12",
  textClassName = "text-lg font-bold font-serif text-[#1e3f20] leading-none transition-all",
  showText = true
}: LogoProps) {
  return (
    <div className={className} id="palmgate-gardeners-logo">
      {/* Lawnmower Logo Image container styled in a beautiful clean card */}
      <div className={`${iconSize} relative flex-shrink-0 flex items-center justify-center rounded-xl bg-white shadow-sm p-1 border border-slate-200/50 overflow-hidden transition-all duration-300 group-hover:scale-105`}>
        <img 
          src={logoImg} 
          alt="Palmgate Gardeners Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {showText && (
        <div className="text-left">
          <div className={textClassName}>Palmgate Gardeners</div>
        </div>
      )}
    </div>
  );
}
