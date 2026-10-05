import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, AlertTriangle, Frown } from 'lucide-react';
import { ProblemItem } from '../types';

export const ProblemSection: React.FC = () => {
  const problems: ProblemItem[] = [
    {
      id: 'prob-1',
      emoji: '😩',
      text: 'Anak cepat bosan belajar',
      description: 'Latihan buku biasa yang statik dan membosankan membuatkan anak hilang fokus dalam masa 5 minit sahaja.'
    },
    {
      id: 'prob-2',
      emoji: '😩',
      text: 'Sukar cari worksheet berkualiti',
      description: 'Bahan percuma di internet kebanyakannya kabur, berselerak, pecah-pecah apabila diprint, dan tidak tersusun.'
    },
    {
      id: 'prob-3',
      emoji: '😩',
      text: 'Banyak masa habis mencari bahan',
      description: 'Ibu bapa terpaksa menghabiskan berjam-jam setiap minggu melayari pelbagai website untuk mencari latihan sesuai.'
    },
    {
      id: 'prob-4',
      emoji: '😩',
      text: 'Kos membeli worksheet terlalu mahal',
      description: 'Membeli buku latihan fizikal satu persatu secara kerap menelan belanja ratusan ringgit setahun tanpa disedari.'
    },
    {
      id: 'prob-5',
      emoji: '😩',
      text: 'Anak lebih banyak bermain gadget',
      description: 'Tanpa aktiviti fizikal yang menarik seperti menulis dan mewarna, anak akan lebih tertarik menghadap skrin telefon.'
    },
    {
      id: 'prob-6',
      emoji: '😩',
      text: 'Tidak tahu aktiviti sesuai mengikut umur',
      description: 'Keliru memilih latihan yang bersesuaian dengan tahap perkembangan otak dan kemahiran motor halus anak.'
    }
  ];

  return (
    <section id="masalah" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-50 rounded-full blur-2xl opacity-65 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-200">
            <Frown className="w-3.5 h-3.5" /> CABARAN IBU BAPA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Adakah Anda Mengalami <span className="text-[#FF6B6B]">Situasi Ini?</span>
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Mendidik anak kecil di rumah bukan perkara yang mudah. Sering kali kita berdepan dengan pelbagai rungutan dan halangan.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.id}
              className="bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Emoji Accent Icon */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {problem.emoji}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-500 transition-colors">
                  {problem.text}
                </h3>
                
                <p className="text-slate-500 text-sm font-sans leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Little warning icon ornament */}
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <AlertTriangle className="w-4 h-4 text-red-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block bg-indigo-50 border-2 border-indigo-100 rounded-2xl px-8 py-6 max-w-3xl shadow-sm">
            <p className="text-lg md:text-xl font-bold text-indigo-900 leading-relaxed font-heading">
              ✨ Semua masalah ini boleh diselesaikan dengan <span className="text-indigo-600 underline decoration-indigo-400 decoration-wavy underline-offset-4">satu koleksi worksheet lengkap</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
