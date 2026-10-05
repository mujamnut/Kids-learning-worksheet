import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit, Printer, Zap, Clock, Smile, Sparkles, RefreshCw, BookmarkCheck
} from 'lucide-react';
import { WhyChooseItem } from '../types';

export const WhyChoose: React.FC = () => {
  const points: WhyChooseItem[] = [
    {
      id: 'why-1',
      title: '500,000+ Worksheet',
      description: 'Jumlah fail mega yang terlampau banyak! Anak anda tidak akan kehabisan latihan baharu selama bertahun-tahun lamanya.',
      iconName: 'folder',
      colorClass: 'bg-purple-100/60 border-purple-200 text-purple-700'
    },
    {
      id: 'why-2',
      title: 'Mudah Print',
      description: 'Semua fail disimpan dalam format PDF beresolusi tinggi (HD). Cuma buka fail, klik butang cetak, dan sedia digunakan.',
      iconName: 'print',
      colorClass: 'bg-indigo-100/60 border-indigo-200 text-indigo-700'
    },
    {
      id: 'why-3',
      title: 'Download Segera',
      description: 'Selepas bayaran, anda akan mendapat pautan Google Drive dengan serta-merta menerusi e-mel. Tiada masa menunggu.',
      iconName: 'lightning',
      colorClass: 'bg-yellow-100/60 border-yellow-200 text-yellow-800'
    },
    {
      id: 'why-4',
      title: 'Jimat Masa',
      description: 'Jimat berpuluh-puluh jam berharga anda yang biasanya terbuang untuk mencari dan menapis kualiti latihan percuma di internet.',
      iconName: 'clock',
      colorClass: 'bg-emerald-100/60 border-emerald-200 text-emerald-800'
    },
    {
      id: 'why-5',
      title: 'Aktiviti Tidak Membosankan',
      description: 'Kepelbagaian jenis lembaran kerja yang comel dan berwarna-warni sentiasa membuatkan anak teruja menanti hari esok.',
      iconName: 'smile',
      colorClass: 'bg-pink-100/60 border-pink-200 text-pink-700'
    },
    {
      id: 'why-6',
      title: 'Belajar Mengikut Tahap Anak',
      description: 'Anak anda boleh bermula mengikut tahap kemampuan mereka sendiri (bukan umur), tanpa sebarang tekanan akademik luar.',
      iconName: 'sparkles',
      colorClass: 'bg-sky-100/60 border-sky-200 text-sky-700'
    },
    {
      id: 'why-7',
      title: 'Boleh Digunakan Berulang Kali',
      description: 'Cetak seberapa banyak kali yang anda mahu! Boleh digunakan semula untuk adik-adik yang lain tanpa kos tambahan.',
      iconName: 'refresh',
      colorClass: 'bg-teal-100/60 border-teal-200 text-teal-700'
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'folder': return FolderGit;
      case 'print': return Printer;
      case 'lightning': return Zap;
      case 'clock': return Clock;
      case 'smile': return Smile;
      case 'sparkles': return Sparkles;
      case 'refresh': return RefreshCw;
      default: return BookmarkCheck;
    }
  };

  return (
    <section id="kelebihan" className="py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Visual background details to support premium feeling */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-25" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[140px] opacity-20" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
            <BookmarkCheck className="w-3.5 h-3.5 text-purple-400" /> BANYAK KELEBIHAN UNTUK ANDA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Kenapa Bundle Ini <span className="text-yellow-400">Sangat Berbaloi?</span>
          </h2>
          <p className="text-slate-300 font-sans mt-4 text-base md:text-lg">
            Satu pelaburan kecil harian yang memberikan impak pembelajaran yang luar biasa sepanjang pembesaran si manja.
          </p>
        </div>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => {
            const Icon = getIcon(point.iconName);
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`p-8 rounded-3xl border bg-slate-900/60 backdrop-blur-sm border-slate-800 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between ${
                  point.id === 'why-7' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md ${point.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-yellow-300 transition-colors">
                    {point.title}
                  </h3>
                  
                  <p className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-[10px] font-bold text-purple-400 tracking-wider uppercase">
                  <span>🚀 PREMIUM QUALITY</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
