import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WhatsApp Widget Configuration
 * Değişkenler bölümü: Numarayı ve mesajı buradan değiştirebilirsiniz.
 */
const WHATSAPP_CONFIG = {
  phoneNumber: "905319399701", // Ülke koduyla birlikte, boşluksuz (Örn: 90531...)
  defaultMessage: "Merhaba, web siteniz üzerinden ulaşıyorum. Hizmetleriniz hakkında bilgi alabilir miyim?",
  tooltipText: "Bize Yazın",
  delay: 2000 // Tooltip'in görünmesi için beklenecek süre (ms)
};

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Tooltip'i belirli bir süre sonra göster ve sonra gizle
    const timer = setTimeout(() => {
      setShowTooltip(true);
      
      // 5 saniye sonra otomatik gizle
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      
      return () => clearTimeout(hideTimer);
    }, WHATSAPP_CONFIG.delay);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="mr-3 bg-white text-brand-dark py-2 px-4 rounded-2xl shadow-2xl text-sm font-bold whitespace-nowrap relative hidden sm:block"
          >
            {WHATSAPP_CONFIG.tooltipText}
            {/* Tooltip Arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 group relative"
      >
        {/* Pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>
        
        <MessageCircle size={32} className="relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppWidget;
