import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Target, Zap, Rocket, BarChart3 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: "La Villa Spa & Masaj",
    category: "Güzellik & Sağlık",
    metric: "%140 Gelir Artışı",
    description: "Zarar eden bir işletmeyi 30 günde kâra geçiren ve ciro rekoru kıran bütüncül büyüme stratejisi.",
    color: "from-blue-500/20 to-purple-500/20",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    title: "NESA İnşaat",
    category: "İnşaat & Gayrimenkul",
    metric: "10x Görünürlük",
    description: "Lokal SEO ve dijital itibar yönetimi ile yeni projeler için sürdürülebilir talep akışı.",
    color: "from-orange-500/20 to-red-500/20",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Görkem Tattoo",
    category: "Sanat & Hizmet",
    metric: "%95 Doluluk",
    description: "Kreatif içerik ve keskin nişancı reklam kurgusuyla randevu trafiği optimizasyonu.",
    color: "from-green-500/20 to-emerald-500/20",
    size: "md:col-span-1 md:row-span-1"
  }
];

const CaseStudiesPage = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
              Ana Sayfaya Dön
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Başarıyı <span className="text-gradient">Ölçeklendiriyoruz</span>: Tüm Projelerimiz
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Veri, strateji ve yaratıcılığın birleştiği noktada markalar için yarattığımız somut etkileri inceleyin.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer ${project.size}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-6 inline-block">
                    <p className="text-2xl font-bold text-white tracking-tight">{project.metric}</p>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform">
                    Detayları İncele <Zap size={14} className="ml-2 text-brand-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center glass rounded-[3rem] p-12 md:p-20 border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sıradaki Başarı Hikayesi Sizinki Olsun</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Veri odaklı büyüme stratejilerimizle işletmenizi yeni zirvelere taşıyalım.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MagneticButton className="bg-brand-accent hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-lg">
              Ücretsiz Analiz Başlat
            </MagneticButton>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudiesPage;
