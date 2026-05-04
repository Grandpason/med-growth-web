import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const KVKKPage = () => {
  const sections = [
    {
      icon: <ShieldCheck className="text-brand-accent" size={24} />,
      title: "1. Veri Sorumlusu",
      content: "6698 sayılı Kişisel Verilerin Korunması Kanunu ('Kanun') uyarınca, kişisel verileriniz veri sorumlusu olarak 'MED Growth Partners' tarafından aşağıda açıklanan kapsamda işlenebilecektir."
    },
    {
      icon: <Eye className="text-brand-accent" size={24} />,
      title: "2. İşlenen Kişisel Verileriniz",
      content: "Web sitemizdeki formlar aracılığıyla bizimle paylaştığınız; Ad-Soyad, E-posta adresi, Telefon numarası ve Şirket bilgileri gibi verileriniz işlenmektedir."
    },
    {
      icon: <Lock className="text-brand-accent" size={24} />,
      title: "3. Kişisel Verilerin İşlenme Amacı",
      content: "Toplanan kişisel verileriniz; analiz taleplerinizin değerlendirilmesi, strateji oturumlarının planlanması, müşteri ilişkileri süreçlerinin yönetilmesi ve onay vermeniz halinde pazarlama faaliyetleri (SMS/E-posta) amacıyla işlenmektedir."
    },
    {
      icon: <Scale className="text-brand-accent" size={24} />,
      title: "4. İlgili Kişinin Hakları",
      content: "Kanun'un 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini isteme haklarına sahipsiniz. Taleplerinizi medgrowthofficial@gmail.com adresine iletebilirsiniz."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-brand-dark"
    >
      <Helmet>
        <title>KVKK Aydınlatma Metni | MED Growth Partners</title>
        <meta name="description" content="Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve gizlilik politikamız." />
        <link rel="canonical" href="https://med-growth-web.vercel.app/kvkk" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Kişisel Verilerin İşlenmesine İlişkin <span className="text-brand-accent">Aydınlatma Metni</span>
          </h1>
          <p className="text-gray-400 font-light leading-relaxed">
            Son güncelleme: 4 Mayıs 2026
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-accent/10 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed font-light">
                {section.content}
              </p>
            </motion.section>
          ))}

          <section className="p-8 border-t border-white/10 mt-12">
            <p className="text-sm text-gray-500 leading-relaxed italic">
              Bu metin, MED Growth Partners tarafından web sitesi kullanıcılarını bilgilendirmek amacıyla hazırlanmıştır. Detaylı bilgi ve başvurularınız için bizimle her zaman iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default KVKKPage;
