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
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="max-w-4xl mx-auto glass p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl pointer-events-auto"
          >
            {!showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <Cookie className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Gizliliğiniz ve Çerez Tercihleriniz</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-2xl">
                      Sitemizde size en iyi deneyimi sunmak, trafiği analiz etmek ve pazarlama faaliyetlerimizi optimize etmek için çerezler kullanıyoruz. 
                      <strong> KVKK ve GDPR</strong> kapsamında verilerinizin güvenliği bizim için önceliklidir.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center"
                  >
                    <SettingsIcon size={16} className="mr-2" /> Ayarlar
                  </button>
                  <button 
                    onClick={handleRejectAll}
                    className="flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all"
                  >
                    Reddet
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 md:flex-none px-8 py-3 rounded-full text-sm font-bold bg-brand-accent hover:bg-blue-600 text-white shadow-lg shadow-brand-accent/20 transition-all"
                  >
                    Hepsini Kabul Et
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white">Çerez Ayarları</h4>
                  <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div 
                    className={`p-5 rounded-3xl border transition-all ${preferences.necessary ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white">Zorunlu</span>
                      <Check size={16} className="text-brand-accent" />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">Sitenin temel fonksiyonları için gereklidir. Kapatılamaz.</p>
                  </div>
                  
                  <div 
                    onClick={() => togglePreference('analytics')}
                    className={`p-5 rounded-3xl border transition-all cursor-pointer ${preferences.analytics ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10 opacity-60'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white">Analitik</span>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${preferences.analytics ? 'bg-brand-accent' : 'bg-gray-600'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">Ziyaretçi trafiğini ve kullanım verilerini analiz etmemizi sağlar.</p>
                  </div>
                  
                  <div 
                    onClick={() => togglePreference('marketing')}
                    className={`p-5 rounded-3xl border transition-all cursor-pointer ${preferences.marketing ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/10 opacity-60'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white">Pazarlama</span>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${preferences.marketing ? 'bg-brand-accent' : 'bg-gray-600'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">Size özel reklamlar ve pazarlama teklifleri sunmamıza yardımcı olur.</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <p className="text-[10px] text-gray-500 max-w-md">
                    Seçimleriniz bu tarayıcıda kaydedilecektir. Veri sorumlusu: MED Growth Partners. 
                    <a href="#" className="text-brand-accent ml-1 hover:underline">Aydınlatma Metni</a>
                  </p>
                  <button 
                    onClick={handleSavePreferences}
                    className="px-8 py-3 rounded-full text-sm font-bold bg-white text-brand-dark hover:bg-gray-200 transition-all"
                  >
                    Tercihlerimi Kaydet
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
