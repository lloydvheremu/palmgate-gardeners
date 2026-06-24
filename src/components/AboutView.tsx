import React from 'react';

export default function AboutView() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-20 animate-fade-in text-left px-4 sm:px-6 max-w-5xl mx-auto pt-6 sm:pt-10" id="about-view">
      
      {/* HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 inline-block">
          Palmgate Gardeners
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-serif leading-tight">
          About Us
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1e3f20]">
          Welcome to Palmgate Gardeners
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
      </section>

      {/* INTRO CARD */}
      <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-6">
        <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
          At Palmgate Gardeners, we are passionate about creating, maintaining, and transforming outdoor spaces into clean, functional, and visually outstanding environments. With over 2 years of professional experience, we have built a reputation as a trusted property maintenance company dedicated to delivering reliable, high-quality services to both residential and commercial clients across Zimbabwe.
        </p>
      </section>

      {/* TWO-COLUMN CONTENT AREA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Our Growth and Services */}
        <div className="bg-[#122615] text-[#f2f2eb] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-emerald-950 flex flex-col justify-between space-y-6">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-amber-400 text-3xl">trending_up</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Our Journey</h3>
            </div>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              What started as a landscaping and garden care business has grown into a complete property maintenance solutions company, offering specialized services designed to help homeowners, businesses, institutions, and event organizers maintain clean, professional, and well-managed spaces.
            </p>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              Our expertise covers a wide range of services including Landscaping, Yard Maintenance, Solar Panel Cleaning, Gutter Cleaning, and Post-Event Cleanup Services — all delivered by a trained team committed to professionalism, safety, and customer satisfaction.
            </p>
          </div>
          <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-[11px] text-emerald-300 font-mono">
            <span>Zimbabwe Wide Services</span>
            <span>2+ Years Experience</span>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4 sm:space-y-5 text-slate-700">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#1e3f20] text-3xl">spa</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">Our Philosophy</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              We believe that every property reflects the people and businesses behind it. That is why we take pride in helping our clients maintain spaces that are attractive, safe, environmentally friendly, and built to leave a lasting impression.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed">
              At Palmgate Gardeners, we combine professional equipment, skilled personnel, eco-friendly practices, and attention to detail to ensure every project is completed to the highest standard.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <p className="text-slate-650 text-xs sm:text-sm font-semibold italic text-[#1e3f20] leading-relaxed">
              "Delivering excellence, one property at a time."
            </p>
          </div>
        </div>

      </section>

      {/* DETAILED STATEMENT */}
      <section className="bg-amber-50/40 rounded-2xl border border-amber-100 p-6 sm:p-8 text-center max-w-4xl mx-auto">
        <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto">
          Whether it is maintaining corporate premises, transforming residential gardens, cleaning solar panels for maximum efficiency, clearing gutters to protect your property, or restoring event venues after special occasions — we approach every job with one commitment:
        </p>
        <p className="text-[#1e3f20] text-lg sm:text-xl font-bold font-serif mt-3">
          Delivering excellence, one property at a time.
        </p>
      </section>

      {/* WHY CHOOSE US & MISSION/VISION CONTAINER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Why Clients Choose Us list */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-700">Client Advantages</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950">Why Clients Choose Us</h3>
            <div className="h-0.5 w-16 bg-amber-500 rounded"></div>
          </div>
          
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            {[
              "Professional and uniformed team",
              "Reliable and on-time service delivery",
              "Modern equipment and industry best practices",
              "Affordable and flexible service packages",
              "Eco-friendly maintenance solutions",
              "Trusted by residential and commercial clients",
              "Commitment to quality workmanship and customer satisfaction"
            ].map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-700 text-lg flex-shrink-0 mt-0.5">check_circle</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission and Vision cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">track_changes</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              To provide professional, dependable, and affordable property maintenance solutions that improve the appearance, safety, and long-term value of every property we service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              To become Zimbabwe’s leading property maintenance and landscaping company, recognized for excellence, innovation, and exceptional customer service.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
