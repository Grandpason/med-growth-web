import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Calendar, User, Building2, Mail, Phone, BarChart, Loader2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const LeadForm = ({ isModal = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    goal: 'Reklam Optimizasyonu & ROAS Artışı'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToCRM = async (data) => {
    // Backend Preparation (n8n, Firebase, etc.)
    console.log('Sending data to CRM:', JSON.stringify(data, null, 2));
    
    // Simulate API delay
    return new Promise(resolve => setTimeout(resolve, 2000));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await sendToCRM(formData);
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Talep Alındı!</h3>
          <p className="text-gray-400 text-lg mb-8">
            Büyüme mühendislerimiz verilerinizi incelemeye başladı. 24 saat içinde sizinle iletişime geçeceğiz.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-accent font-medium hover:underline"
          >
            Yeni bir analiz talebi oluştur
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={isModal ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"}>
      <div className={isModal ? "flex flex-col" : "grid lg:grid-cols-2 gap-16 items-center"}>
        
        {/* Header Section */}
        <div className={isModal ? "mb-8 text-center" : ""}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`inline-flex items-center space-x-2 bg-surface-dark border border-border-dark px-4 py-2 rounded-full mb-6 ${isModal ? 'mx-auto' : ''}`}>
              <Calendar size={16} className="text-brand-accent" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest text-center">Ücretsiz Strateji Oturumu</span>
            </div>
            
            <h2 className={`${isModal ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-4 leading-tight`}>
              İşletmenizi <span className="text-gradient">Veriyle</span> Ölçeklendirelim
            </h2>
            
            {/* Social Proof */}
            <div className={`flex items-center space-x-2 mb-6 text-sm text-brand-accent ${isModal ? 'justify-center' : ''}`}>
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-ping"></span>
              <span className="font-medium tracking-wide">Son 24 saatte 3 işletme analiz talebinde bulundu</span>
            </div>
            
            {!isModal && (
              <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
                Rakiplerinizin göremediği büyüme fırsatlarını görün. Mevcut reklam hesaplarınızı, SEO yapınızı ve dönüşüm oranlarınızı ücretsiz analiz ediyoruz.
              </p>
            )}
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${isModal ? '' : 'glass p-6 sm:p-8 md:p-10 rounded-[2.5rem] border-white/5 relative'}`}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 flex items-center ml-1"><User size={12} className="mr-2" /> İsim Soyisim</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder="Adınız Soyadınız"
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 flex items-center ml-1"><Building2 size={12} className="mr-2" /> Şirket Adı / Web Sitesi</label>
                <input 
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder="domain.com"
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 flex items-center ml-1"><Mail size={12} className="mr-2" /> E-posta Adresi</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email" 
                  placeholder="iletisim@sirket.com"
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 flex items-center ml-1"><Phone size={12} className="mr-2" /> Telefon Numarası</label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel" 
                  placeholder="05xx xxx xx xx"
                  className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 flex items-center ml-1"><BarChart size={12} className="mr-2" /> Büyüme Hedefiniz Nedir?</label>
              <select 
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full bg-surface-dark border border-border-dark rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] outline-none transition-all appearance-none cursor-pointer"
              >
                <option>Reklam Optimizasyonu & ROAS Artışı</option>
                <option>Bütünsel Ciro Artışı</option>
                <option>SEO & Yapay Zeka Görünürlüğü (GEO)</option>
                <option>Yeni Ürün / MVP Lansmanı</option>
                <option>CRM & Sadık Müşteri Kitlesi Oluşturma</option>
              </select>
            </div>

            <MagneticButton 
              type="submit"
              disabled={loading}
              className="w-full bg-brand-accent hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-accent/20 disabled:opacity-50 mt-4 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  Analizi Başlat
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </MagneticButton>
            
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-tighter">
              Verileriniz 256-bit SSL ile korunmaktadır.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadForm;
