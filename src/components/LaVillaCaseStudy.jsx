import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Folder, File, FileText, Image as ImageIcon, ChevronRight, Download, FileSpreadsheet, Trophy, CheckSquare, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LaVillaCaseStudy = () => {
  const [manifest, setManifest] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/lavilla-assets/manifest.json')
      .then(res => res.json())
      .then(data => {
        setManifest(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading manifest:', err);
        setLoading(false);
      });
  }, []);

  const getFolderIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('excel') || lowerName.includes('bütçe')) return <FileSpreadsheet size={48} className="text-emerald-400" />;
    if (lowerName.includes('sem') || lowerName.includes('roas')) return <BarChart size={48} className="text-blue-400" />;
    if (lowerName.includes('başarım') || lowerName.includes('seo')) return <Trophy size={48} className="text-amber-400" />;
    if (lowerName.includes('yapılması') || lowerName.includes('process')) return <CheckSquare size={48} className="text-purple-400" />;
    return <Folder size={48} className="text-brand-accent" />;
  };

  const getFolderDisplayName = (name) => {
    if (name === 'Aylık Excel Bütçe Raporları') return 'Excel Bütçe Raporları';
    if (name === 'Aylık Sem Raporları ve ROAS') return 'SEM Raporları';
    if (name === 'SEM SEO ve GEO Geliştirme ve Başarımlar') return 'Başarımlar';
    if (name === 'Yapılması Gerekenler') return 'Process';
    return name;
  };

  const getFileIcon = (name) => {
    const ext = name.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'svg', 'gif'].includes(ext)) return <ImageIcon size={24} className="text-pink-400" />;
    if (['doc', 'docx'].includes(ext)) return <FileText size={24} className="text-blue-400" />;
    if (['xls', 'xlsx'].includes(ext)) return <FileSpreadsheet size={24} className="text-emerald-400" />;
    if (['pdf'].includes(ext)) return <FileText size={24} className="text-red-400" />;
    return <File size={24} className="text-gray-400" />;
  };

  const navigateToFolder = (folder) => {
    setCurrentPath([...currentPath, folder]);
  };

  const navigateUp = (index) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const navigateRoot = () => {
    setCurrentPath([]);
  };

  const currentItems = currentPath.length === 0 
    ? manifest 
    : currentPath[currentPath.length - 1].children || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <Helmet>
        <title>La Villa Spa & Masaj - Başarı Hikayesi | MED Growth Partners</title>
        <meta name="description" content="La Villa Spa & Masaj projesinin veri odaklı analizleri, SEM raporları, bütçe raporları ve başarımları." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/basari-hikayeleri"
            className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 w-fit group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Vaka Analizlerine Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            La Villa <span className="text-gradient">Spa & Masaj</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Zarar eden bir işletmeyi 30 günde kâra geçiren ve ciro rekoru kıran bütüncül büyüme stratejisinin verileri, bütçe analizleri ve performans raporları.
          </p>
        </div>

        {/* File Explorer */}
        <div className="glass rounded-3xl overflow-hidden border border-white/5 flex flex-col h-[70vh] min-h-[600px]">
          {/* Breadcrumb */}
          <div className="bg-white/5 p-4 flex items-center gap-2 border-b border-white/5 overflow-x-auto whitespace-nowrap">
            <button 
              onClick={navigateRoot}
              className={`flex items-center hover:text-white transition-colors ${currentPath.length === 0 ? 'text-white font-semibold' : 'text-gray-400'}`}
            >
              Kök Dizin
            </button>
            {currentPath.map((folder, index) => (
              <React.Fragment key={folder.name}>
                <ChevronRight size={16} className="text-gray-500 flex-shrink-0" />
                <button
                  onClick={() => navigateUp(index)}
                  className={`flex items-center hover:text-white transition-colors ${index === currentPath.length - 1 ? 'text-white font-semibold' : 'text-gray-400'}`}
                >
                  {getFolderDisplayName(folder.name)}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-grow bg-black/20">
            {loading ? (
              <div className="flex justify-center items-center h-full text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-accent mr-3"></div>
                Yükleniyor...
              </div>
            ) : currentItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <Folder size={64} className="mb-4 opacity-20" />
                <p>Bu klasör boş.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <AnimatePresence>
                  {currentItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.type === 'directory' ? (
                        <button
                          onClick={() => navigateToFolder(item)}
                          className="w-full flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group text-center"
                        >
                          <div className="mb-4 transform group-hover:scale-110 transition-transform">
                            {currentPath.length === 0 ? getFolderIcon(item.name) : <Folder size={48} className="text-brand-accent" />}
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white font-medium line-clamp-2">
                            {getFolderDisplayName(item.name)}
                          </span>
                        </button>
                      ) : (
                        <a
                          href={`/lavilla-assets/${item.path}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex flex-col items-center justify-between p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group h-full"
                          title={item.name}
                        >
                          <div className="mb-3 transform group-hover:scale-110 transition-transform mt-2">
                            {getFileIcon(item.name)}
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-white text-center break-words w-full line-clamp-3 mb-2">
                            {item.name}
                          </span>
                          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs text-brand-accent">
                            <Download size={14} className="mr-1" /> İndir / Aç
                          </div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          <div className="bg-white/5 p-4 border-t border-white/5 text-xs text-gray-500 flex items-center justify-between">
            <div>
              Toplam {currentItems.length} öğe
            </div>
            <div className="text-amber-400/80 flex items-center">
              <span className="mr-1">Not:</span> Word dosyalarını tam görüntülemek için PDF'e dönüştürülmesi önerilir.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LaVillaCaseStudy;
