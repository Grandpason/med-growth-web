import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Music, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20"
    >
      <Helmet>
        <title>Neden Biz? | MED Growth Partners</title>
        <meta name="description" content="MED Growth Partners'ı farklı kılan akademik disiplin, kreatif vizyon ve veri odaklı teknik altyapıyı keşfedin." />
        <link rel="canonical" href="https://med-growth-web.vercel.app/neden-biz" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        <div className="text-center mb-20">
          <span className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Neden Biz?</span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Strateji, Yaratıcılık ve <br /> Verinin Kesişimi
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
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
              className="glass p-10 rounded-[3rem] border-white/5 hover:border-brand-accent/30 transition-all duration-500 group"
              style={{ willChange: 'transform' }}
            >
              <div className="mb-8 w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">{pillar.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-8 font-light text-lg">{pillar.description}</p>
              <div className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-accent uppercase tracking-widest">
                {pillar.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
