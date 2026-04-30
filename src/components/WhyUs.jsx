import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Music, Cpu, Award } from 'lucide-react';

const WhyUs = () => {
  const pillars = [
    {
      icon: <GraduationCap size={32} className="text-blue-400" />,
      title: "Akademik Temel",
      description: "Reklamcılık ve Halkla İlişkiler mezunu olarak, reklam bitirme projemde elde ettiğim birincilik derecesini profesyonel stratejilerimin temeline koyuyorum.",
      highlight: "Birincilik Derecesi"
    },
    {
      icon: <Music size={32} className="text-purple-400" />,
      title: "Kreatif Disiplin",
      description: "8 yılı aşkın müzik prodüksiyonu ve sound design geçmişimi, pazarlamadaki ritim, zamanlama ve kreatif kompozisyon yeteneğimle harmanlıyorum.",
      highlight: "8+ Yıl Kreatif Geçmiş"
    },
    {
      icon: <Cpu size={32} className="text-emerald-400" />,
      title: "Teknik & Veri",
      description: "n8n otomasyonları ve veri odaklı (data-driven) büyüme modelleriyle, kreatif vizyonu ölçeklenebilir teknik altyapıyla birleştiriyorum.",
      highlight: "n8n & Otomasyon Uzmanlığı"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Neden Biz?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Strateji, Yaratıcılık ve Verinin Kesişimi</h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Sadece reklam yönetmiyoruz; akademik disiplin ve kreatif vizyonu teknik verilerle birleştirerek markanızın hikayesini büyüme odaklı bir senfoniye dönüştürüyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] border-white/5 hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <div className="mb-6 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{pillar.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">{pillar.description}</p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-accent uppercase tracking-widest">
                {pillar.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
