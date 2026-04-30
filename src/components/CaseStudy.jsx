import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowUpRight, TrendingDown, Target, Zap, Briefcase, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import MagneticButton from './MagneticButton';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const BentoCard = ({ className, children, title, subtitle, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "glass rounded-3xl p-8 relative overflow-hidden group",
      className
    )}
  >
    {/* Subtle Inner Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          {subtitle && <p className="text-brand-accent text-sm font-semibold tracking-wider uppercase mb-1">{subtitle}</p>}
          {title && <h3 className="text-2xl font-bold text-gray-100">{title}</h3>}
        </div>
        {icon && <div className="text-gray-400 group-hover:text-brand-accent transition-colors duration-300">{icon}</div>}
      </div>
      {children}
    </div>
  </motion.div>
);

const HoverLogo = ({ label, glowColor }) => (
  <div className="relative group cursor-pointer w-full">
    <div className={cn(
      "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
      glowColor
    )}></div>
    <div className="relative flex items-center justify-center h-20 bg-surface-darker/50 border border-border-dark rounded-2xl group-hover:border-white/20 transition-colors duration-300">
      <span className="text-gray-400 group-hover:text-white font-medium tracking-wide transition-colors duration-300">{label}</span>
    </div>
  </div>
);

const CaseStudy = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden" id="case-study">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-surface-dark border border-border-dark px-4 py-2 rounded-full mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">Amiral Proje Analizi</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            La Villa Spa & Masaj
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Zarar eden bir işletmenin, "Bütüncül Büyüme Ortaklığı" ile sadece 1 ayda nasıl sektör liderine dönüştürüldüğünün veri güdümlü analizi.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Stat (Span 2 cols, Span 2 rows) */}
          <BentoCard 
            className="md:col-span-2 md:row-span-2 glass-highlight" 
            title="Dönüşüm Metrikleri" 
            subtitle="The Impact"
            icon={<ArrowUpRight size={28} />}
          >
            <div className="grid grid-cols-2 gap-8 h-full items-center mt-4">
              <div>
                <p className="text-gray-400 mb-2">Kasım Ciro</p>
                <p className="text-3xl font-light text-gray-500 line-through decoration-red-500/50">252.300 ₺</p>
                <div className="mt-8">
                  <p className="text-gray-400 mb-2">Aralık Ciro</p>
                  <div className="text-5xl font-bold text-white flex items-center">
                    462.600 ₺
                  </div>
                </div>
              </div>
              <div className="h-full flex flex-col justify-center">
                <div className="bg-surface-darker rounded-2xl p-6 border border-brand-accent/20">
                  <p className="text-sm text-brand-accent uppercase tracking-widest mb-2">Net Kâr Artışı</p>
                  <div className="text-4xl font-bold text-white flex items-baseline">
                    +83.300 ₺
                  </div>
                  <p className="text-xs text-gray-500 mt-2">11.000 ₺ zarardan sadece 15 günde geçiş.</p>
                </div>
                
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <span className="text-green-500 font-bold text-xl">6.5x</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">ROAS</p>
                    <p className="text-sm text-gray-400">Harcanan 1₺ = 6.5₺ Getiri</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Problem Card */}
          <BentoCard 
            className="bg-surface-darker/80 border-red-500/10" 
            title="Mevcut Durum" 
            subtitle="Before"
            icon={<TrendingDown size={24} className="text-red-500" />}
            delay={0.1}
          >
            <ul className="space-y-4 mt-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Yanlış kurgulanan reklamlar ve filtrelenmeyen bot trafikleri.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <span className="text-red-500 mt-0.5">•</span>
                <span>"Fırsat sitesi spası" algısı nedeniyle düşen kârlılık marjları.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <span className="text-red-500 mt-0.5">•</span>
                <span>-%42 sahte dönüşüm oranları.</span>
              </li>
            </ul>
          </BentoCard>

          {/* CPA Stats */}
          <BentoCard 
            className="flex flex-col justify-center items-center text-center" 
            delay={0.2}
          >
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-2">Günlük Hasılat Büyümesi</p>
            <div className="text-5xl font-bold text-white mb-2 flex justify-center">
              4 Kat
            </div>
            <p className="text-sm text-gray-500">4.100 ₺ ➔ 15.816 ₺</p>
          </BentoCard>

          {/* Strategy (Span 2 cols) */}
          <BentoCard 
            className="md:col-span-2" 
            title="Büyüme Motoru" 
            subtitle="The Solution"
            icon={<Target size={24} />}
            delay={0.3}
          >
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-white font-medium mb-2 flex items-center"><Zap size={16} className="text-brand-accent mr-2" /> Keskin Nişancı + Geniş Ağ</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Arama Ağı ile anında niyetli müşteriler hedeflenirken, P.Max modeliyle CPA (Müşteri Edinme Maliyeti) 30 TL'ye optimize edildi.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2 flex items-center"><Briefcase size={16} className="text-brand-accent mr-2" /> GEO & Marka Konumlandırma</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Yapay zeka aramaları (Gemini/ChatGPT) için "Şişli'nin göbeğinde bir vaha" olarak yeni bir marka algısı inşa edildi.</p>
              </div>
            </div>
          </BentoCard>

          {/* Logos / Tech Stack */}
          <BentoCard 
            title="Tech Stack" 
            subtitle="Entegrasyonlar"
            delay={0.4}
          >
            <div className="grid grid-cols-2 gap-4 mt-6">
              <HoverLogo label="Google Ads" glowColor="bg-blue-500" />
              <HoverLogo label="Meta Ads" glowColor="bg-blue-600" />
              <HoverLogo label="n8n" glowColor="bg-red-500" />
              <HoverLogo label="Firebase" glowColor="bg-yellow-500" />
            </div>
          </BentoCard>
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button onClick={() => onNavigate('case-studies')}>
            <MagneticButton className="bg-surface-dark/50 hover:bg-surface-dark text-white border border-border-dark px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-md flex items-center group">
              <span>Tüm Başarı Hikayelerini İncele</span>
              <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
