import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const NumberCounter = ({ from = 0, to, duration = 2.5, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(from + (to - from) * easeProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <span className="tabular-nums">{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

const Hero = ({ onOpenModal }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const fontWeight = useTransform(scrollY, [0, 500], [800, 400]);

  const particles = useMemo(() => [...Array(6)].map((_, i) => ({
    x: (i % 2 === 0 ? -15 : 15) * Math.random(),
    delay: i * 0.4
  })), []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-surface-dark border border-border-dark px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Bütüncül Büyüme Ortaklığı</span>
            </div>
            
            <motion.h1 
              style={{ fontWeight }}
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight"
            >
              Veri Odaklı <span className="text-gradient">Growth</span> Stratejileriyle Ölçeklendirildi
            </motion.h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Geleneksel reklamcılığın ötesinde; bir <strong>B2B büyüme ajansı</strong> olarak KOBİ'lerin dönüşüm oranlarını maksimize ediyor, <strong>veri odaklı dijital pazarlama</strong> ile sürdürülebilir gelir artışı kurguluyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={onOpenModal} className="w-full sm:w-auto">
                <MagneticButton className="w-full bg-brand-accent hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group">
                  <span className="flex items-center justify-center">
                    Analiz Talep Et
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </MagneticButton>
              </button>
              
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
                <MagneticButton className="w-full bg-transparent hover:bg-white/5 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/10 hover:border-white/30">
                  <span className="flex items-center justify-center">
                    Süreci İncele
                  </span>
                </MagneticButton>
              </button>
            </div>
          </motion.div>

          {/* Abstract Dashboard/Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              
              {/* Floating Cards simulating app/results */}
              <motion.div style={{ y: y1 }} className="absolute top-10 right-10 glass rounded-2xl p-6 w-64 overflow-hidden group">
                {/* Background Animated Line Chart */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                  <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    role="img"
                    aria-labelledby="chartTitle chartDesc"
                  >
                    <title id="chartTitle">MED Growth Kümülatif Büyüme Tablosu</title>
                    <desc id="chartDesc">İşletmelerin MED Growth stratejileriyle yakaladığı kümülatif büyüme trendini gösteren grafik.</desc>
                    <defs>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M-10,110 C30,90 60,40 110,20"
                      stroke="url(#greenGradient)"
                      strokeWidth="4"
                      fill="transparent"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    />
                  </motion.svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <TrendingUp size={24} aria-hidden="true" className="text-green-500" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Kümülatif Büyüme</p>
                      <p className="text-2xl font-bold text-white">
                        <NumberCounter from={0} to={142} prefix="+" suffix="%" />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y2 }} className="absolute bottom-20 left-0 glass rounded-2xl p-6 w-72">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center border border-brand-accent/20">
                    <BarChart3 size={24} aria-hidden="true" className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dönüşüm Optimizasyonu</p>
                    <p className="text-2xl font-bold text-white">
                      <NumberCounter from={0} to={12.8} decimals={1} suffix="%" />
                    </p>
                  </div>
                </div>
                
                {/* Animated Funnel */}
                <div className="relative h-20 w-full flex flex-col items-center mt-2">
                  <svg width="100" height="50" viewBox="0 0 100 50" className="absolute top-0 z-10 text-brand-accent/20 fill-current drop-shadow-md">
                    <path d="M10,0 L90,0 L60,50 L40,50 Z" />
                    <path d="M20,0 L80,0 L55,50 L45,50 Z" fill="rgba(59, 130, 246, 0.3)" />
                  </svg>
                  
                  {/* Falling Leads/Sales Particles */}
                  {particles.map((p, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(59,130,246,1)] z-20"
                      initial={{ y: -10, x: p.x, opacity: 0, scale: 0.5 }}
                      animate={{ 
                        y: [-10, 20, 60],
                        x: 0,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeIn"
                      }}
                    />
                  ))}
                  
                  <div className="absolute bottom-[-10px] w-16 h-3 bg-brand-accent/30 rounded-full blur-md"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>

        {/* Managed Projects / Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] mb-10">Yönetilen Projeler ve Büyüme Ortaklıkları</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-white tracking-tighter">GORKEMTATTOO</span>
            <span className="text-xl font-bold text-white tracking-tighter">LAVILLASPA</span>
            <span className="text-xl font-bold text-white tracking-tighter">NESA İNŞAAT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
