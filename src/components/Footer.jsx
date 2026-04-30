import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex-shrink-0 flex items-center mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                MED<span className="text-brand-accent"> Growth</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bütünsel Dijital Çözümler ile KOBİ'lerin dijital dönüşümüne öncülük ediyor, veri güdümlü stratejilerle sürdürülebilir büyüme sağlıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Neden Biz?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Başarı Hikayeleri</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog & İçgörüler</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Uzmanlık Alanlarımız</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">Performans Pazarlaması</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">SEO & GEO Stratejileri</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">MVP & Web Geliştirme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">CRM & Veri Analizi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">Çağlayan, Kağıthane<br/>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-accent flex-shrink-0" />
                <span className="text-gray-400">0531 939 9701</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-accent flex-shrink-0" />
                <a href="mailto:grandpason_-_emin@outlook.com" className="text-gray-400 hover:text-white transition-colors cursor-hover-target">grandpason_-_emin@outlook.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MED Growth Partners. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
