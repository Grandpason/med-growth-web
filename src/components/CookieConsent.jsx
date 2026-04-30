import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings as SettingsIcon, Check, ChevronRight } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allPrefs));
    setShowConsent(false);
    // Here you would normally trigger script loads for Analytics/Ads
  };

  const handleRejectAll = () => {
    const rejectPrefs = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(rejectPrefs));
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="max-w-3xl mx-auto glass p-4 md:p-6 rounded-[2rem] border border-white/10 shadow-2xl pointer-events-auto"
          >
            {!showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <Cookie className="text-brand-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Çerez Tercihleriniz</h4>
                    <p className="text-[11px] text-gray-300 font-light leading-relaxed max-w-xl">
                      Deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler kullanıyoruz. 
                      <strong> KVKK/GDPR</strong> kapsamında verileriniz güvendedir.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="flex-1 md:flex-none px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center"
                  >
                    <SettingsIcon size={14} className="mr-1.5" /> Ayarlar
                  </button>
                  <button 
                    onClick={handleRejectAll}
                    className="flex-1 md:flex-none px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all"
                  >
                    Reddet
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 md:flex-none px-6 py-2 rounded-full text-xs font-bold bg-[#2563eb] hover:bg-blue-700 text-white shadow-lg transition-all"
                  >
                    Hepsini Kabul Et
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">Çerez Ayarları</h4>
                  <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-3">
                  <div 
                    className={`p-4 rounded-2xl border transition-all ${preferences.necessary ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Zorunlu</span>
                      <Check size={14} className="text-brand-accent" />
                    </div>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Temel fonksiyonlar için gereklidir.</p>
                  </div>
                  
                  <div 
                    onClick={() => togglePreference('analytics')}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${preferences.analytics ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10 opacity-60'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Analitik</span>
                      <div className={`w-8 h-4 rounded-full relative transition-colors ${preferences.analytics ? 'bg-brand-accent' : 'bg-gray-600'}`}>
                        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${preferences.analytics ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Kullanım verilerini analiz eder.</p>
                  </div>
                  
                  <div 
                    onClick={() => togglePreference('marketing')}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${preferences.marketing ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10 opacity-60'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Pazarlama</span>
                      <div className={`w-8 h-4 rounded-full relative transition-colors ${preferences.marketing ? 'bg-brand-accent' : 'bg-gray-600'}`}>
                        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${preferences.marketing ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Size özel teklifler sunar.</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <p className="text-[9px] text-gray-400 max-w-md uppercase tracking-wider font-semibold">
                    MED GROWTH PARTNERS • <a href="#" className="text-brand-accent hover:underline">KVKK AYDINLATMA METNİ</a>
                  </p>
                  <button 
                    onClick={handleSavePreferences}
                    className="px-6 py-2 rounded-full text-xs font-bold bg-white text-brand-dark hover:bg-gray-200 transition-all"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
