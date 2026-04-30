import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, Zap, CheckCircle2, BarChart3, Database, Mail, ShieldCheck } from 'lucide-react';

const postData = {
  'la-villa-spa-ciro': {
    category: "Vaka Analizi",
    date: "15 Nisan 2024",
    title: "La Villa Spa & Masaj: 250k'dan 600k'ya Ölçeklendirme",
    result: "+140% Gelir Artışı (30 Gün)",
    content: (
      <>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Giriş: Mevcut Durum Analizi</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            İşletme bize ulaştığında, aylık 250.000 ₺ ciro ile başabaş noktasının altında kalıyordu. Ana sorunlar; reklam bütçesinin yanlış hedeflenmesi ve düşük dönüşüm oranlarıydı.
          </p>
        </section>
        <div className="grid sm:grid-cols-2 gap-6 my-12">
          <div className="bg-surface-darker p-8 rounded-[2rem] border border-white/5">
            <Target className="text-red-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Darboğazlar</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Bot trafik çeken reklam setleri</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Mobil uyumsuz randevu sistemi</li>
            </ul>
          </div>
          <div className="bg-surface-darker p-8 rounded-[2rem] border border-brand-accent/20">
            <Zap className="text-brand-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Uygulanan Çözüm</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li className="flex items-start"><span className="text-brand-accent mr-2">•</span> Keskin nişancı Google Ads kurgusu</li>
              <li className="flex items-start"><span className="text-brand-accent mr-2">•</span> n8n ile otomatik lead doğrulama</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  'n8n-b2b-email-otomasyonu': {
    category: "Teknoloji",
    date: "30 Nisan 2024",
    title: "B2B Pazarlamada n8n ile E-posta Otomasyonu: Pipeline Kurulumu ve Verimlilik Artışı",
    result: "Operasyonel Verimlilikte %80 Artış",
    content: (
      <>
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Giriş: B2B'de Neden Geleneksel Mail Yetersiz?</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg mb-6">
            Geleneksel e-posta pazarlama yöntemleri, B2B dünyasının karmaşık satın alma döngüleri ve kişiselleştirme ihtiyaçları karşısında artık yetersiz kalıyor. Toplu gönderilen, hedeflenmemiş e-postalar doğrudan "Spam" klasörüne düşerken, manuel takip süreçleri ekiplerin zamanını eritiyor. 
          </p>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            İşte burada <strong>n8n</strong> gibi "low-code" otomasyon araçları devreye giriyor. n8n, sadece mail göndermekle kalmaz; tüm CRM ve veri kaynaklarınızı birbirine bağlayarak akıllı bir büyüme motoru oluşturmanıza olanak tanır.
          </p>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-bold text-white mb-6">Teknik Pipeline: Akıllı İş Akışının Anatomisi</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg mb-8">
            Modern bir e-posta pipeline'ı, statik bir listeden ibaret değildir. n8n ile kurduğumuz mimari şu 4 temel aşamadan oluşur:
          </p>
          
          <div className="space-y-4">
            {[
              { title: "Veri Çekme", desc: "LinkedIn, Apollo veya web sitesi formlarından gelen ham lead verisinin otomatik yakalanması." },
              { title: "Lead Zenginleştirme", desc: "Clearbit veya benzeri araçlarla şirketin büyüklüğü, sektörü ve teknoloji yığını gibi verilerin eklenmesi." },
              { title: "Akıllı Filtreleme", desc: "Verinin kalitesine göre puanlanması ve sadece 'High-Intent' adayların ayrıştırılması." },
              { title: "Kişiselleştirilmiş Gönderim", desc: "Alıcının LinkedIn'deki son paylaşımına veya şirket haberlerine göre AI destekli metinlerle gönderim yapılması." }
            ].map((step, i) => (
              <div key={i} className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xs">{i+1}</div>
                <div>
                  <h4 className="text-white font-bold text-sm">{step.title}</h4>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 bg-brand-dark/50 border border-brand-accent/20 p-8 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Database size={120} />
          </div>
          <h3 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">Pipeline Görsel Betimleme</h3>
          <p className="text-white text-lg font-medium italic">
            [Burada: n8n düğümlerinden (nodes) oluşan, karmaşık ama düzenli bir veri akışı görseli yer alacak. Görselde; Webhook → Filter → GPT-4 (Personalization) → Gmail/SendGrid akışı şematize edilmektedir.]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Neden n8n Otomasyonu?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 glass rounded-3xl border-white/5">
              <TrendingUp className="text-emerald-400 mb-4" />
              <h4 className="text-white font-bold mb-2 text-sm">Ölçeklenebilirlik</h4>
              <p className="text-gray-500 text-xs">Aynı anda binlerce farklı senaryoyu tek bir sunucu üzerinden yönetin.</p>
            </div>
            <div className="p-6 glass rounded-3xl border-white/5">
              <ShieldCheck className="text-blue-400 mb-4" />
              <h4 className="text-white font-bold mb-2 text-sm">Veri Güvenliği</h4>
              <p className="text-gray-500 text-xs">Self-hosted kurulum imkanıyla KVKK uyumlu veri işleme.</p>
            </div>
            <div className="p-6 glass rounded-3xl border-white/5">
              <Zap className="text-orange-400 mb-4" />
              <h4 className="text-white font-bold mb-2 text-sm">Düşük Maliyet</h4>
              <p className="text-gray-500 text-xs">Pahalı SaaS araçlarına ödenen binlerce doları optimize edin.</p>
            </div>
          </div>
        </section>

        <section className="text-center pt-16 mt-16 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Operasyonlarınızı Otomatize Etmeye Hazır mısınız?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light text-lg">
            Manuel süreçler markanızın büyüme hızını kesiyor. n8n tabanlı e-posta pipeline'ı ile satış ekibinizin sadece 'sıcak' fırsatlara odaklanmasını sağlayın.
          </p>
          <button className="bg-brand-accent hover:bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-accent/20 transition-all">
             Ücretsiz Otomasyon Analizi Başlat
          </button>
        </section>
      </>
    )
  },
  'nesa-insaat-seo': {
    category: "Vaka Analizi",
    date: "20 Nisan 2024",
    title: "NESA İnşaat: SEO ve Lokal Görünürlük Başarısı",
    result: "10x Organik Görünürlük",
    content: (
      <section>
        <div className="aspect-[21/9] overflow-hidden rounded-[2.5rem] mb-12 border border-white/10 glass">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Construction Site"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
            }}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Dijitalde Temel Atmak</h2>
        <p className="text-gray-400 font-light leading-relaxed text-lg">
          İnşaat sektörü gibi geleneksel bir alanda, lokal SEO ve Google Haritalar optimizasyonu ile NESA İnşaat'ın yeni projelerine gelen talepleri otomatize ettik.
        </p>
      </section>
    )
  },
  'gorkem-tattoo-reklam': {
    category: "Vaka Analizi",
    date: "25 Nisan 2024",
    title: "Görkem Tattoo: Kreatif Reklam Stratejisi",
    result: "%95 Randevu Doluluğu",
    content: (
      <section>
        <div className="aspect-[21/9] overflow-hidden rounded-[2.5rem] mb-12 border border-white/10 glass">
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200" 
            alt="Professional Tattoo Studio"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Sanatı Veriyle Birleştirmek</h2>
        <p className="text-gray-400 font-light leading-relaxed text-lg">
          Kreatif içerikleri, doğru hedef kitle kurgusuyla birleştirerek dövme stüdyosu için sürdürülebilir bir randevu akışı oluşturduk.
        </p>
      </section>
    )
  }
};

const BlogPost = ({ postId, onBack }) => {
  const post = postData[postId] || postData['la-villa-spa-ciro'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
          Blog'a Dön
        </button>

        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm font-medium">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 p-6 glass rounded-3xl border-white/5">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
              <TrendingUp className="text-brand-accent" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Hedef / Sonuç</p>
              <p className="text-xl md:text-2xl font-bold text-white">{post.result}</p>
            </div>
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          {post.content}
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;
