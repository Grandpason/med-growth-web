import React, { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Lazy loaded components
const NeuralNetwork = lazy(() => import('./components/NeuralNetwork'));
const LeadForm = lazy(() => import('./components/LeadForm'));
const Modal = lazy(() => import('./components/Modal'));
const CaseStudiesPage = lazy(() => import('./components/CaseStudiesPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const TechStack = lazy(() => import('./components/TechStack'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));
import CookieConsent from './components/CookieConsent';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

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
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setCurrentPostId(null);
  };
  const handleSelectPost = (postId) => {
    setCurrentPostId(postId);
    setCurrentPage('blog-detail');
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Helmet>
        {currentPage === 'home' ? (
          <>
            <title>MED Growth Partners | Veri Odaklı B2B Büyüme Ajansı</title>
            <meta name="description" content="Veri odaklı dijital pazarlama ve B2B büyüme stratejileriyle KOBİ'lerin cirosunu ve dönüşüm oranlarını maksimize eden bütüncül growth ajansı." />
          </>
        ) : (
          <>
            <title>Vaka Analizleri | MED Growth Başarı Hikayeleri</title>
            <meta name="description" content="Zarar eden işletmeleri kâra geçiren ve 8.2x ROAS değerlerine ulaşan gerçek dijital pazarlama başarı hikayelerimiz." />
          </>
        )}
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
      
      <Navbar onOpenModal={openModal} onNavigate={handleNavigate} />
      
      <main>
        <Suspense fallback={<div className="min-h-screen bg-brand-dark" />}>
          <AnimatePresence mode="wait">
            {currentPage === 'home' ? (
              <motion.div
                key="home"
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
            ) : currentPage === 'case-studies' ? (
              <CaseStudiesPage key="case-studies" onNavigate={handleNavigate} />
            ) : currentPage === 'about' ? (
              <AboutPage key="about" onNavigate={handleNavigate} />
            ) : currentPage === 'blog' ? (
              <BlogPage key="blog" onNavigate={handleNavigate} onSelectPost={handleSelectPost} />
            ) : (
              <BlogPost key="blog-detail" onBack={() => setCurrentPage('blog')} />
            )}
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <LeadForm isModal={true} />
        </Modal>
      </Suspense>

      <CookieConsent />
    </div>
  );
}

export default App;
