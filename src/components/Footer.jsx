import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex-shrink-0 flex items-center mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                MED<span className="text-brand-accent"> Growth</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bütünsel Dijital Çözümler ile KOBİ'lerin dijital dönüşümüne öncülük ediyor, veri güdümlü stratejilerle sürdürülebilir büyüme sağlıyoruz.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/medgrowth.official/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram profilimizi ziyaret edin"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/emin-dedeo%C4%9Flu-2a50b2183/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profilimizi ziyaret edin"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:medgrowthofficial@gmail.com"
                aria-label="Bize e-posta gönderin"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/sistem-mimarisi"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="/neden-biz"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Neden Biz?
                </Link>
              </li>
              <li>
                <Link 
                  to="/basari-hikayeleri"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Başarı Hikayeleri
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog & İçgörüler
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Uzmanlık Alanlarımız</h3>
            <ul className="space-y-4">
              <li><Link to="/sistem-mimarisi" className="text-gray-400 hover:text-brand-accent transition-colors">Performans Pazarlaması</Link></li>
              <li><Link to="/sistem-mimarisi" className="text-gray-400 hover:text-brand-accent transition-colors">SEO & GEO Stratejileri</Link></li>
              <li><Link to="/sistem-mimarisi" className="text-gray-400 hover:text-brand-accent transition-colors">MVP & Web Geliştirme</Link></li>
              <li><Link to="/sistem-mimarisi" className="text-gray-400 hover:text-brand-accent transition-colors">CRM & Veri Analizi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">Çağlayan, Kağıthane<br/>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-accent flex-shrink-0" />
                <a href="tel:+905319399701" className="text-gray-400 hover:text-white transition-colors">0531 939 9701</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-accent flex-shrink-0" />
                <a href="mailto:medgrowthofficial@gmail.com" className="text-gray-400 hover:text-white transition-colors cursor-hover-target">medgrowthofficial@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram size={20} className="text-brand-accent flex-shrink-0" />
                <a href="https://www.instagram.com/medgrowth.official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-hover-target">@medgrowth.official</a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin size={20} className="text-brand-accent flex-shrink-0" />
                <a href="https://www.linkedin.com/in/emin-dedeo%C4%9Flu-2a50b2183/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-hover-target">Emin Dedeoğlu</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MED Growth Partners. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/kvkk" className="hover:text-white transition-colors">KVKK ve Gizlilik Politikası</Link>
            <Link to="/" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
