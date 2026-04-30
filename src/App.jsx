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
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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
  const handleNavigate = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-transparent">
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
                <CaseStudy onNavigate={handleNavigate} />
                <section id="analysis">
                  <LeadForm />
                </section>
              </motion.div>
            ) : (
              <CaseStudiesPage key="case-studies" onNavigate={handleNavigate} />
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
    </div>
  );
}

export default App;
