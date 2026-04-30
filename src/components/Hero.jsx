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
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Geleneksel reklamcılığın ötesinde; KOBİ'lerin dönüşüm oranları maksimize ediliyor, nitelikli trafik akışı sağlanıyor ve sürdürülebilir gelir artışı kurgulanıyor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={onOpenModal} className="w-full sm:w-auto">
                <MagneticButton className="w-full bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-brand-accent/20">
                  <span className="mr-2">Büyüme Analizi Talep Et</span>
                  <motion.span
                    className="inline-block"
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 5 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                  </motion.span>
                </MagneticButton>
              </button>
              
              <button onClick={onOpenModal} className="w-full sm:w-auto">
                <MagneticButton className="w-full bg-surface-dark/50 hover:bg-surface-dark text-white border border-border-dark px-8 py-4 rounded-full font-semibold text-lg transition-colors backdrop-blur-md">
                  <span className="mr-2">Hemen Başla</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
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
                  >
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
                      <TrendingUp size={24} className="text-green-500" />
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
                    <BarChart3 size={24} className="text-brand-accent" />
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
      </div>
    </section>
  );
};

export default Hero;
