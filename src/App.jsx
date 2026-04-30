import React, { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

// Lazy loaded components
const Navbar = lazy(() => import('./components/Navbar'));
const NeuralNetwork = lazy(() => import('./components/NeuralNetwork'));
const LeadForm = lazy(() => import('./components/LeadForm'));
const Modal = lazy(() => import('./components/Modal'));
const CaseStudiesPage = lazy(() => import('./components/CaseStudiesPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const TechStack = lazy(() => import('./components/TechStack'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Services = lazy(() => import('./components/Services'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top or specific section on route change
    if (location.pathname === '/iletisim') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (location.pathname === '/sistem-mimarisi') {
      setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNavigate = (path) => {
    // Check if it's a section on the home page
    if (path === 'services') {
      navigate('/sistem-mimarisi');
    } else if (path === 'contact') {
      navigate('/iletisim');
    } else if (path === 'home') {
      navigate('/');
    } else if (path === 'about') {
      navigate('/neden-biz');
    } else if (path === 'case-studies') {
      navigate('/basari-hikayeleri');
    } else if (path === 'blog') {
      navigate('/blog');
    } else {
      navigate(path);
    }
  };

  const handleSelectPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const Home = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onOpenModal={openModal} />
      <Services onOpenModal={openModal} />
      <TechStack />
      <CaseStudy onNavigate={handleNavigate} />
      <section id="analysis">
        <LeadForm />
      </section>
    </motion.div>
  );

  const BlogDetailWrapper = () => {
    const { postId } = useParams();
    return <BlogPost postId={postId} onBack={() => navigate('/blog')} />;
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Helmet>
        <title>MED Growth Partners | Veri Odaklı B2B Büyüme Ajansı</title>
        <meta name="description" content="Veri odaklı dijital pazarlama ve B2B büyüme stratejileriyle KOBİ'lerin cirosunu ve dönüşüm oranlarını maksimize eden bütüncül growth ajansı." />
      </Helmet>

      {/* Background elements stay consistent across pages */}
      <Suspense fallback={null}>
        <NeuralNetwork />
      </Suspense>
      <div className="mesh-gradient">
        <div className="mesh-blob-1"></div>
        <div className="mesh-blob-2"></div>
        <div className="mesh-blob-3"></div>
        <div className="mesh-blob-4"></div>
      </div>

      <CustomCursor />
      
      <Suspense fallback={null}>
        <Navbar onOpenModal={openModal} onNavigate={handleNavigate} />
      </Suspense>
      
      <main>
        <Suspense fallback={<div className="min-h-screen bg-brand-dark" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/sistem-mimarisi" element={<Home />} />
            <Route path="/iletisim" element={<Home />} />
            <Route path="/neden-biz" element={<AboutPage onNavigate={handleNavigate} />} />
            <Route path="/basari-hikayeleri" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
            <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} onSelectPost={handleSelectPost} />} />
            <Route path="/blog/:postId" element={<BlogDetailWrapper />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onNavigate={handleNavigate} />
      </Suspense>

      <Suspense fallback={null}>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <LeadForm isModal={true} />
        </Modal>
      </Suspense>

      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}

export default App;
