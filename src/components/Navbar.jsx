import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Navbar = ({ onOpenModal, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className="font-bold text-2xl tracking-tight text-white">
              MED<span className="text-brand-accent"> Growth</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('about')}
              className="relative text-gray-300 hover:text-white font-medium transition-colors cursor-hover-target group py-1"
            >
              Neden Biz?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="relative text-gray-300 hover:text-white font-medium transition-colors cursor-hover-target group py-1"
            >
              Sistem Mimarisi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => onNavigate('case-studies')}
              className="relative text-gray-300 hover:text-white font-medium transition-colors cursor-hover-target group py-1"
            >
              Case Study
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => onNavigate('blog')}
              className="relative text-gray-300 hover:text-white font-medium transition-colors cursor-hover-target group py-1"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="relative text-gray-300 hover:text-white font-medium transition-colors cursor-hover-target group py-1"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={onOpenModal}>
              <MagneticButton className="bg-brand-accent hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md">
                Analiz Talep Et
              </MagneticButton>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-20 left-0 w-full border-t border-border-dark">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <button 
              onClick={() => {
                onNavigate('about');
                setIsOpen(false);
              }}
              className="block px-3 py-3 text-gray-300 font-medium hover:bg-surface-darker hover:text-white w-full text-center rounded-md transition-colors"
            >
              Neden Biz?
            </button>
            <button 
              onClick={() => {
                onNavigate('home');
                setIsOpen(false);
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block px-3 py-3 text-gray-300 font-medium hover:bg-surface-darker hover:text-white w-full text-center rounded-md transition-colors"
            >
              Sistem Mimarisi
            </button>
            <button 
              onClick={() => {
                onNavigate('case-studies');
                setIsOpen(false);
              }}
              className="block px-3 py-3 text-gray-300 font-medium hover:bg-surface-darker hover:text-white w-full text-center rounded-md transition-colors"
            >
              Case Study
            </button>
            <button 
              onClick={() => {
                onNavigate('blog');
                setIsOpen(false);
              }}
              className="block px-3 py-3 text-gray-300 font-medium hover:bg-surface-darker hover:text-white w-full text-center rounded-md transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => {
                onNavigate('home');
                setIsOpen(false);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block px-3 py-3 text-gray-300 font-medium hover:bg-surface-darker hover:text-white w-full text-center rounded-md transition-colors"
            >
              İletişim
            </button>
            <button onClick={onOpenModal} className="w-full mt-4">
              <div className="w-full bg-brand-accent hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition-colors text-center cursor-pointer">
                Analiz Talep Et
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
