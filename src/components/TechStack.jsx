import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Chrome, Sparkles, Eye } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Analiz Araçları",
      icon: <BarChart size={24} />,
      color: "blue",
      tools: ["Google Analytics", "Search Console", "Google Ads", "Meta Ads", "PageSpeed Insights", "Screaming Frog"]
    },
    {
      title: "Tarayıcı Uzantıları",
      icon: <Chrome size={24} />,
      color: "purple",
      tools: ["Wappalyzer", "SEOquake", "SEO Meta in 1 Click", "Lighthouse", "Similarweb"]
    },
    {
      title: "Yapay Zeka Seti",
      icon: <Sparkles size={24} />,
      color: "emerald",
      tools: ["Gemini", "NotebookLLM", "Claude"]
    },
    {
      title: "Rakip Analizi",
      icon: <Eye size={24} />,
      color: "orange",
      tools: ["Transparency Center", "Meta Ad Library"]
    }
  ];

  const colorMap = {
    blue: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/50",
    purple: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-500/50",
    emerald: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-emerald-500/50",
    orange: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:border-orange-500/50"
  };

  const iconColorMap = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    emerald: "text-emerald-400",
    orange: "text-orange-400"
  };

  return (
    <section id="tech-stack" className="py-24 relative bg-surface-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3 block">Teknoloji Ekosistemimiz</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">En Modern Araçlarla Ölçeklendiriyoruz</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Büyüme stratejilerimizi, sektör standartlarını belirleyen teknik araç seti ve yapay zeka entegrasyonlarıyla destekliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-6 rounded-3xl border border-white/5 transition-all duration-500 ${colorMap[cat.color]}`}
            >
              <div className={`mb-6 flex items-center space-x-3 ${iconColorMap[cat.color]}`}>
                {cat.icon}
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
