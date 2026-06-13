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
        
        {/* Booking Form (Left) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col justify-between">
          {!formSubmitted ? (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#1e3f20] font-bold">Free On-Site Inspection</span>
                <h3 className="text-3xl font-bold font-serif text-slate-950">Book Site Visit</h3>
                <p className="text-slate-500 text-sm">
                  We visit your property, inspect soil compaction, check weeds, review grass layouts, and provide a full cost breakdown entirely for free!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs block text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +263 782..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Estate / Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mabvazuva, Ruwa"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Preferred Visit Date *</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none text-slate-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Time Shift *</label>
                    <select
                      value={timeslot}
                      onChange={(e) => setTimeslot(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-750 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    >
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Message / Description of Needs</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your garden space, plant targets, or any gutter cleaning concerns..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-4 bg-[#1e3f20] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full text-sm"
                  >
                    <span className="material-symbols-outlined">schedule_send</span>
                    Confirm Consultation Slot
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-6 my-auto max-w-md mx-auto py-10 animate-fade-in block">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-[#1e3f20] flex items-center justify-center mx-auto shadow-inner">
                <span className="material-symbols-outlined font-bold text-[32px]">check_circle</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-slate-950 font-bold">Consultation Slot Locked!</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thank you, <strong className="text-slate-800">{name}</strong>! We have registered your on-site request on <strong className="text-slate-800">{date}</strong> during the <strong className="text-slate-800 uppercase">{timeslot}</strong> slot.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl block text-xs space-y-1 text-left">
                <p>📍 Location: <strong className="text-slate-800">{address}</strong></p>
                <p>📲 WhatsApp: <strong className="text-emerald-800 font-bold">{phone}</strong></p>
                <p>🙋 Staff Assignment: <strong className="text-slate-800">Ruwa Field Supervisor</strong></p>
              </div>

              <p className="text-[11px] text-slate-400 block">
                A horticultural technician is reviewing your schedule in Mabvazuva and will confirm via WhatsApp call within one hour to confirm driving routes.
              </p>
              
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1e3f20] text-emerald-50 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Schedule Another Slot
              </button>
            </div>
          )}
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
                    +263 782 824 022 <br />
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
