import React from 'react';
import { Target, Search, Rocket, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Target size={32} />,
    title: "Performans Pazarlaması",
    subtitle: "Dönüşüm Optimizasyonu",
    description: "Google Ads ve Meta Ads sistemleri, doğrudan satış odaklı algoritmalarla kurgulanır. Bütçe verimliliği maksimize edilerek doğru hedef kitleye ulaşım sağlanır ve ciro hedeflerine ulaşılır.",
    color: "bg-blue-500/10 text-blue-400 border border-blue-500/20"
  },
  {
    icon: <Search size={32} />,
    title: "Yeni Nesil Görünürlük",
    subtitle: "SEO, GEO & AEO",
    description: "Marka konumlandırması, geleneksel arama motorlarının ötesinde yapay zeka araçlarına (Perplexity, Gemini, ChatGPT) entegre edilir. Sektörel aramalarda pazar payı güvence altına alınır.",
    color: "bg-purple-500/10 text-purple-400 border border-purple-500/20"
  },
  {
    icon: <Rocket size={32} />,
    title: "Teknoloji & Ürün Geliştirme",
    subtitle: "MVP & Web Altyapısı",
    description: "Yeni iş fikirleri, düşük maliyetli Minimum Viable Product (MVP) modelleriyle hızla pazara sunulur. Ziyaretçi-müşteri dönüşüm (CVP) oranlarını artıran modern arayüzler inşa edilir.",
    color: "bg-orange-500/10 text-orange-400 border border-orange-500/20"
  },
  {
    icon: <Database size={32} />,
    title: "Veri & CRM Stratejileri",
    subtitle: "Müşteri Yaşam Döngüsü",
    description: "Müşteri verileri anlamlandırılarak satış tahminleme (forecasting) fırsatlarına dönüştürülür. CRM sistemleri kurularak satış hunisi (sales funnel) verimliliği artırılır.",
    color: "bg-green-500/10 text-green-400 border border-green-500/20"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Sistem Mimarisi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bütünsel Büyüme (Growth) Ekosistemi
          </h3>
          <p className="text-lg text-gray-400 font-light">
            Metrikler ve yapay zeka algoritmalarıyla yönlendirilen, tamamen işletme kârlılığını (ROI/ROAS) artırmaya odaklı dijital hizmet altyapısı.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-3xl glass hover:bg-surface-dark transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 \${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-1">{service.title}</h4>
              <p className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wider">{service.subtitle}</p>
              
              <p className="text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-gray-300 font-medium group-hover:text-brand-accent transition-colors cursor-pointer cursor-hover-target">
                Süreci İncele 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
