import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NeuralNetwork from './components/NeuralNetwork';
import LeadForm from './components/LeadForm';
import Modal from './components/Modal';
import CaseStudiesPage from './components/CaseStudiesPage';
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
      <NeuralNetwork />
      <div className="mesh-gradient">
        <div className="mesh-blob-1"></div>
        <div className="mesh-blob-2"></div>
        <div className="mesh-blob-3"></div>
        <div className="mesh-blob-4"></div>
      </div>

      <CustomCursor />
      
      <Navbar onOpenModal={openModal} onNavigate={handleNavigate} />
      
      <main>
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
      </main>

      <Footer />

      {/* Global Analysis Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm isModal={true} />
      </Modal>
    </div>
  );
}

export default App;
