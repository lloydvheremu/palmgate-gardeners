import React, { useState } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Modal Form States
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalAddress, setModalAddress] = useState('');
  const [modalConfirmed, setModalConfirmed] = useState(false);

  const handleNavigate = (tab: ActiveTab, serviceId?: string) => {
    setActiveTab(tab);
    if (tab === 'services') {
      setSelectedServiceId(serviceId || null);
    } else {
      setSelectedServiceId(null);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName || !modalPhone) {
      alert("Please enter Name and Phone/WhatsApp to proceed.");
      return;
    }
    setModalConfirmed(true);
  };

  const closeModal = () => {
    setIsConsultationModalOpen(false);
    setModalConfirmed(false);
    setModalName('');
    setModalPhone('');
    setModalAddress('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcf9] text-[#1a1e1b] relative font-sans selection:bg-[#1e3f20]/10 selection:text-[#1e3f20]" id="app-root-container">
      
      {/* HEADER NAVIGATION */}
      <Navbar 
        activeTab={activeTab} 
        onNavigate={handleNavigate} 
        onOpenConsultation={() => setIsConsultationModalOpen(true)} 
      />

      {/* RENDER ACTIVE VIEW */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomeView 
            onNavigate={handleNavigate} 
            onOpenConsultation={() => setIsConsultationModalOpen(true)} 
          />
        )}
        {activeTab === 'services' && (
          <ServicesView 
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onOpenConsultation={() => setIsConsultationModalOpen(true)} 
          />
        )}
        {activeTab === 'gallery' && (
          <GalleryView 
            onOpenConsultation={() => setIsConsultationModalOpen(true)} 
          />
        )}
        {activeTab === 'about' && (
          <AboutView />
        )}
        {/* {activeTab === 'contact' && (
          <ContactView />
        )} */}
      </main>

      {/* FOOTER AREA */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenConsultation={() => setIsConsultationModalOpen(true)} 
      />

      {/* MODAL WINDOW FOR FREE INSPECTION OUTLET */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" id="consultation-modal">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-md w-full relative">
            
            {/* Header branding */}
            <div className="bg-gradient-to-r from-[#122615] to-[#1e3f20] p-6 text-white text-left relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-emerald-200 hover:text-white transition-colors cursor-pointer w-8 h-8 rounded-full bg-black/10 flex items-center justify-center"
                aria-label="Close Modal"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[12px]">spa</span>
                Free site consult
              </div>
              <h3 className="text-xl font-bold font-serif pt-1.5">Free Measurement &amp; Intake</h3>
              <p className="text-xs text-emerald-100/70 pt-1">Let us check your yard, lawns, and drainage borders.</p>
            </div>

            {/* Modal Body content */}
            <div className="p-6 md:p-8">
              {!modalConfirmed ? (
                <form onSubmit={handleModalSubmit} className="space-y-4 text-left text-xs">
                  <div className="space-y-1 block">
                    <label className="font-bold text-slate-700">Your Good Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tendai"
                      value={modalName}
                      onChange={(e) => setModalName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1 block">
                    <label className="font-bold text-slate-700">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +263 782 824 022"
                      value={modalPhone}
                      onChange={(e) => setModalPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1 block">
                    <label className="font-bold text-slate-700">Property / Estate Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Palmgate Close Block A"
                      value={modalAddress}
                      onChange={(e) => setModalAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:bg-white focus:border-[#1e3f20] focus:outline-none"
                    />
                  </div>

                  <p className="text-[10px] text-slate-400 leading-normal block">
                    * By clicking submit, our local Mabvazuva crew is notified to reach out. No commitments or credit card fees are required.
                  </p>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-1/2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl cursor-pointer"
                    >
                      Nevermind
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-3 bg-[#1e3f20] hover:bg-emerald-950 text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer"
                    >
                      Book Free Visit
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4 py-6 animate-fade-in block">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined font-bold text-[24px]">verified</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif font-bold text-slate-900">Request Sent Safely!</h4>
                    <p className="text-xs text-slate-500">
                      We have captured your dispatch ticket, <strong className="text-slate-800">{modalName}</strong>. 
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 bg-slate-50 border border-slate-150 p-3 rounded-lg leading-normal">
                    We will ring you at <strong className="text-emerald-800">{modalPhone}</strong> in a few minutes to authorize driving access tags for your security gate.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 bg-[#1e3f20] text-emerald-50 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Back to Browsing
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
