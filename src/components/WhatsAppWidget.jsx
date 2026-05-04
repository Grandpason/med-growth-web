import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WhatsApp Widget Configuration
 * Değişkenler bölümü: Numarayı ve mesajı buradan değiştirebilirsiniz.
 */
const WHATSAPP_CONFIG = {
  phoneNumber: "905319399701",
  defaultMessage: "Merhaba, web siteniz üzerinden ulaşıyorum. Hizmetleriniz hakkında bilgi alabilir miyim?",
  tooltipText: "Bize Yazın",
  delay: 2000
};

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, WHATSAPP_CONFIG.delay);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end group/container">
      <div className="flex items-center">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              className="mr-3 glass py-2 px-4 rounded-2xl text-white text-sm font-medium whitespace-nowrap relative hidden sm:block border-white/10"
            >
              {WHATSAPP_CONFIG.tooltipText}
              {/* Tooltip Arrow (Matching Glass Theme) */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-surface-dark/60 backdrop-blur-[15px]"></div>
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
          whileHover={{ scale: 1.1, shadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 transition-all duration-300 group relative border border-white/10"
        >
          {/* Pulsing effect using brand-accent */}
          <span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>
          
          <MessageCircle size={32} className="relative z-10" />
        </motion.a>
      </div>

      {/* Consent Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        className="mt-2 text-[8px] text-white text-right max-w-[120px] leading-tight select-none pointer-events-none group-hover/container:opacity-80 transition-opacity"
      >
        Tıklayarak iletişim izni ve KVKK şartlarını kabul etmiş sayılırsınız.
      </motion.p>
    </div>
  );
};

export default WhatsAppWidget;
