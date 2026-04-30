import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, Zap, CheckCircle2, BarChart3 } from 'lucide-react';

const BlogPost = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
          Blog'a Dön
        </button>

        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest">
              Vaka Analizi
            </span>
            <span className="text-gray-500 text-sm font-medium">15 Nisan 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            SPA Merkezi Ciro Ölçeklendirme: 250k'dan 600k'ya Yolculuk
          </h1>
          <div className="flex items-center space-x-4 p-6 glass rounded-3xl border-white/5">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
              <TrendingUp className="text-brand-accent" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Sonuç</p>
              <p className="text-2xl font-bold text-white">+140% Gelir Artışı (30 Gün)</p>
            </div>
          </div>
        </header>

        <article className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Giriş: Mevcut Durum Analizi</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              İşletme bize ulaştığında, aylık 250.000 ₺ ciro ile başabaş noktasının altında kalıyordu. Ana sorunlar; reklam bütçesinin yanlış hedeflenmesi, yüksek CPA (Müşteri Edinme Maliyeti) ve web sitesindeki düşük dönüşüm oranlarıydı.
            </p>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-surface-darker p-8 rounded-[2rem] border border-white/5">
              <Target className="text-red-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Darboğazlar</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Bot trafik çeken reklam setleri</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Mobil uyumsuz randevu sistemi</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Düşük kaliteli lead datası</li>
              </ul>
            </div>
            <div className="bg-surface-darker p-8 rounded-[2rem] border border-brand-accent/20">
              <Zap className="text-brand-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Uygulanan Çözüm</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li className="flex items-start"><span className="text-brand-accent mr-2">•</span> Keskin nişancı Google Ads kurgusu</li>
                <li className="flex items-start"><span className="text-brand-accent mr-2">•</span> n8n ile otomatik lead doğrulama</li>
                <li className="flex items-start"><span className="text-brand-accent mr-2">•</span> UX odaklı landing page revizyonu</li>
              </ul>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Stratejik Uygulama</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-6">
              İlk hafta tüm reklam setlerini durdurup, veri toplama aşamasına geçtik. <strong>n8n otomasyonu</strong> kurarak, sadece telefon numarası doğrulanmış leadlerin CRM'e düşmesini sağladık. Bu, satış ekibinin zamanını %40 daha verimli kullanmasını sağladı.
            </p>
            <div className="glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <BarChart3 size={120} />
               </div>
               <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">Teknik Detay</h4>
               <p className="text-white text-xl font-medium leading-relaxed relative z-10">
                 "Performance Max (P.Max) kampanyalarını, sadece yüksek LTV (Müşteri Ömür Boyu Değeri) potansiyeli taşıyan kitle sinyalleriyle besleyerek ROAS değerini 8.2x seviyesine çıkardık."
               </p>
            </div>
          </section>

          <section className="bg-white/5 p-10 rounded-[3rem] border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Somut Etki</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Ciro</p>
                  <p className="text-2xl font-bold text-white">600K+</p>
               </div>
               <div className="text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Artış</p>
                  <p className="text-2xl font-bold text-brand-accent">+140%</p>
               </div>
               <div className="text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Lead Kalite</p>
                  <p className="text-2xl font-bold text-white">%85</p>
               </div>
               <div className="text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">ROAS</p>
                  <p className="text-2xl font-bold text-emerald-400">8.2x</p>
               </div>
            </div>
          </section>

          <section className="text-center pt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Siz de İşletmenizi Ölçeklendirmek İster misiniz?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light">Benzer sonuçları kendi işletmeniz için almak istiyorsanız, bugün bir analiz talebinde bulunun.</p>
            <button className="bg-brand-accent hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
               Ücretsiz Analiz Başlat
            </button>
          </section>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;
