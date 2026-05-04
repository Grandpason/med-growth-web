import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    id: 'la-villa-spa-ciro',
    title: "La Villa Spa & Masaj: 250k'dan 600k'ya Ölçeklendirme",
    excerpt: "Veri odaklı stratejiler ve otomasyon kurgusuyla 30 günde elde edilen %140 gelir artışının teknik detayları.",
    date: "15 Nisan 2024",
    author: "MED Growth Team",
    readTime: "8 dk",
    category: "Vaka Analizi",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?fm=webp&fit=crop&q=80&w=800"
  },
  {
    id: 'nesa-insaat-seo',
    title: "NESA İnşaat: SEO ve Lokal Görünürlük Başarısı",
    excerpt: "Geleneksel bir inşaat firmasının dijitaldeki görünürlüğünü nasıl 10 katına çıkardık?",
    date: "20 Nisan 2024",
    author: "MED Growth Team",
    readTime: "6 dk",
    category: "Vaka Analizi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=webp&fit=crop&q=80&w=800"
  },
  {
    id: 'gorkem-tattoo-reklam',
    title: "Görkem Tattoo: Kreatif Reklam Stratejisi",
    excerpt: "Sanat ve performansı birleştiren reklam kurgularıyla randevu doluluk oranlarını %95'e ulaştırdık.",
    date: "25 Nisan 2024",
    author: "MED Growth Team",
    readTime: "5 dk",
    category: "Vaka Analizi",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?fm=webp&fit=crop&q=80&w=800"
  },
  {
    id: 'n8n-b2b-email-otomasyonu',
    title: "B2B Pazarlamada n8n ile E-posta Otomasyonu: Pipeline Kurulumu",
    excerpt: "B2B şirketleri için n8n tabanlı e-posta pazarlama otomasyonu ile verimlilik artışı.",
    date: "30 Nisan 2024",
    author: "MED Growth Team",
    readTime: "10 dk",
    category: "Teknoloji",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?fm=webp&fit=crop&q=80&w=800"
  }
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20"
    >
      <Helmet>
        <title>Blog & Insights | MED Growth Partners</title>
        <meta name="description" content="MED Growth Partners blog: Büyüme stratejileri, vaka analizleri ve dijital pazarlamanın geleceğine dair teknik incelemeler." />
        <link rel="canonical" href="https://med-growth-web.vercel.app/blog" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Blog & <span className="text-gradient">Insights</span></h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Büyüme stratejileri, vaka analizleri ve dijital pazarlamanın geleceğine dair teknik incelemeler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="block glass rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
                style={{ willChange: 'transform' }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                    width="800"
                    height="450"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=800';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-brand-accent text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4 uppercase tracking-widest font-semibold">
                    <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-brand-accent" /> {post.date}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1.5 text-brand-accent" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-white font-bold text-sm">
                    Devamını Oku <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
