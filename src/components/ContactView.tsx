import React, { useState } from 'react';

type SeasonTab = 'summer' | 'winter' | 'spring';

export default function ContactView() {
  const [activeSeason, setActiveSeason] = useState<SeasonTab>('summer');
  
  // Form submission state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [timeslot, setTimeslot] = useState('morning');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      alert("Please fill in Name, Phone, and Preferred Date.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setDate('');
    setTimeslot('morning');
    setMessage('');
  };

  // Seasonal guides
  const seasonGuides = {
    summer: {
      title: "Hot Wet Summer (November to March)",
      subtitle: "☔ Period of Torrential Rain & Rapid Botanical Growth",
      tasks: [
        { label: "Weekly Mowing", desc: "Premium kikuyu and couch grasses enter explosive growth. Weekly mowing is required to prevent stalk hardening." },
        { label: "Weed Spreading", desc: "Warm thundershores trigger immediate germination of weeds. Systematic hand-weeding of beds preserves soil feeds." },
        { label: "Water Leveling", desc: "Verify automatic sprinklers are programmed to 'Rain Off' to prevent waterlogging and root fungal diseases." },
        { label: "Insect Protection", desc: "Spray organic fruit tree protectors as citrus and stone fruits mature during peak humidity." }
      ]
    },
    winter: {
      title: "Cool Dry Winter (April to July)",
      subtitle: "❄ Severe Frost Risk & Near-Zero Moisture Levels",
      tasks: [
        { label: "Slow Mow Timetables", desc: "Lawn metabolic activity slows down. Reduce mowing frequency to once every 3-4 weeks at a higher deck setting." },
        { label: "Smart Irrigation Program", desc: "With zero natural rain, run smart drippers 2 to 3 times a week, strictly early mornings to avoid ice frost glaze." },
        { label: "Tree Surgery", desc: "Optimal period for severe pruning of large acacia or deciduous tree barriers while they are dormant." },
        { label: "Gutter Clears", desc: "Strong winds dump heavy dry leaves into roof alleys. Clean immediately to safeguard rainwater systems." }
      ]
    },
    spring: {
      title: "Hot Dry Spring (August to October)",
      subtitle: "🔥 High Soil Ash Evaporation & Preparation for Rains",
      tasks: [
        { label: "Compost & Mulching", desc: "Lay thick 5cm layers of organic bark mulches round flower beds to trap soil moisture under extreme hot weather." },
        { label: "Hedge Sculpting", desc: "Prune border box hedges in late August so fresh September foliage spikes out in uniform straight lines." },
        { label: "Top-Dressing Turf", desc: "Right after the first light rain spit, apply organic soil feeds and compost top-dress to wake the lawn." },
        { label: "Nozzle Calibrations", desc: "Clean dusty spray nozzles in sprinkler zones ahead of summer turfing setups." }
      ]
    }
  };

  return (
    <div className="space-y-24 pb-16 animate-fade-in" id="contact-view">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6 space-y-6 pt-10">
        <span className="text-amber-700 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100">Consult Our Masters</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-serif leading-tight">
          Zimbabwe Garden Calendar <br />
          <span className="italic font-normal text-emerald-800">&amp; Free Consultation Booking</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Plan your garden according to Zimbabwe&apos;s distinct seasons. Book a free site visit in Ruwa or Palmgate with our expert horticulturists.
        </p>
      </section>

      {/* Seasonal calendar tabs layout */}
      <section id="seasonal-calendar" className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Tabs header */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
            {(['summer', 'winter', 'spring'] as SeasonTab[]).map((season) => (
              <button
                key={season}
                onClick={() => setActiveSeason(season)}
                className={`py-5 text-center text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 border-b-2 cursor-pointer ${activeSeason === season ? 'border-[#1e3f20] text-[#1e3f20] bg-white' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'}`}
              >
                {season === 'summer' && "🌧 Summer"}
                {season === 'winter' && "❄ Winter"}
                {season === 'spring' && "☀️ Spring"}
              </button>
            ))}
          </div>

          {/* Guide body */}
          <div className="p-8 md:p-12 space-y-10">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold block">Zimbabwean Season Guide</span>
              <h3 className="text-2xl font-bold font-serif text-slate-950">{seasonGuides[activeSeason].title}</h3>
              <p className="text-slate-500 font-medium text-xs md:text-sm">{seasonGuides[activeSeason].subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {seasonGuides[activeSeason].tasks.map((task, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1e3f20] text-emerald-50 text-[11px] font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900">{task.label}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-8">{task.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking & Contacts block */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* WhatsApp & Call Direct Booking Panel (Left) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col justify-between space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#1e3f20] font-bold">Free On-Site Inspection</span>
            <h3 className="text-3xl font-bold font-serif text-slate-950">Book Site Visit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We visit your property, inspect soil compaction, check weeds, review grass layouts, and provide a full cost breakdown. No commitments are necessary! 
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Currently, form-based website booking is not active. However, we have dedicated field crews ready to schedule your consultation immediately over WhatsApp or direct call.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-800">event_available</span>
              Free Scheduling Guidelines
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-800 font-bold">✓</span>
                <span>Includes Harare, Ruwa, Mabvazuva, Glen Lorne, Borrowdale, and other surrounding provinces.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-800 font-bold">✓</span>
                <span>Select any Morning (8am - 12pm) or Afternoon (12pm - 4pm) slot.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-800 font-bold">✓</span>
                <span>A field supervisor will review and confirm your driving directions via WhatsApp.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="https://wa.me/263785366349?text=Hi%20Palmgate%20Gardeners%2C%20I%20would%20like%20to%20book%20a%20free%20on-site%20inspection%20and%20measurement%20consultation%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer flex-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.022-.014-.45-.222-.52-.245-.07-.024-.12-.037-.17.038-.05.075-.195.245-.24.295-.045.05-.09.055-.162.018-.072-.037-.303-.11-.577-.355-.213-.19-.358-.424-.4-.496-.044-.073-.005-.112.032-.148.033-.033.075-.088.112-.132.038-.044.05-.074.075-.124.025-.05.013-.09-.007-.13-.02-.04-.17-.41-.233-.564-.062-.152-.123-.131-.17-.133-.044-.002-.095-.002-.146-.002-.05 0-.131.02-.199.092-.068.074-.261.256-.261.625 0 .368.268.724.305.772.037.048.528.807 1.28 1.127.178.076.317.122.425.156.179.057.342.049.47.03.143-.022.45-.184.52-.363.07-.18.07-.333.05-.362-.02-.028-.07-.045-.143-.058zM12.008 1.916c-5.56 0-10.08 4.52-10.08 10.08 0 1.777.463 3.511 1.343 5.04l-1.428 5.21 5.33-1.4c1.478.806 3.136 1.231 4.829 1.231 5.56 0 10.08-4.52 10.08-10.08 0-5.56-4.52-10.08-10.08-10.08zm0 18.455c-1.508 0-2.986-.405-4.286-1.171l-.307-.182-3.184.835.85-3.1-.2-.318c-.84-1.336-1.283-2.883-1.283-4.478 0-4.63 3.77-8.4 8.4-8.4 2.243 0 4.352.873 5.938 2.46 1.587 1.587 2.46 3.696 2.46 5.94 0 4.63-3.77 8.4-8.4 8.4z"/>
              </svg>
              Book via WhatsApp
            </a>
            <a 
              href="tel:+263785366349"
              className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-[#1e3f20] font-bold rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer flex-1 border border-slate-250"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us Directly
            </a>
          </div>
        </div>

        {/* Contact Info Panel (Right) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#122615] to-[#0f1f11] text-[#f2f2eb] rounded-3xl p-8 md:p-12 border border-emerald-900 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
          
          <div className="space-y-8 relative z-10 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Contact Directory</span>
              <h3 className="text-3xl font-bold font-serif text-white leading-tight">Get in Touch Directly</h3>
              <p className="text-emerald-100/60 text-xs">
                Feel free to call us directly, drop a WhatsApp text, or swing by our plant nursery in Ruwa!
              </p>
            </div>

            <div className="space-y-6 pt-4 text-xs md:text-sm">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider text-emerald-300">WhatsApp &amp; Calls:</h4>
                  <div className="text-base text-white font-semibold pt-1 tracking-wide">
                    +263 785 366 349
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider text-emerald-300">Email Address:</h4>
                  <p className="text-base text-white font-semibold pt-1 tracking-wide">
                    info@palmgategardeners.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider text-emerald-300">Main Service Center:</h4>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed pt-1">
                    Mabvazuva Compound Rd, <br />
                    Ruwa-Palmgate District, <br />
                    Zimbabwe
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-950 text-emerald-300/60 text-[11px] relative z-10 leading-relaxed block text-center lg:text-left">
            <p>✔ Operational: Mon – Sat (7:30 AM – 5:00 PM)</p>
            <p>💥 Off-hours emergency storm branch clears active.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
