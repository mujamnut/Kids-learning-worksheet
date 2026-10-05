import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FolderHeart, Printer, Laptop, Tablet, Smartphone, Sparkles } from 'lucide-react';
import { SparkleStar } from './FloatingDecorations';

export const MockupShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-white relative overflow-hidden">
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-100 rounded-full blur-[140px] opacity-40" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-100 rounded-full blur-[140px] opacity-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" /> PAPARAN PREMIUM BUNDLE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Lihat Sendiri Keindahan <span className="text-pink-500">Hasil Cetakan</span> Kami
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Semua fail direka dengan teliti menggunakan visual yang jelas, comel, dan kontras warna yang harmoni bagi memudahkan anak melakar, mewarna, dan belajar tanpa jemu.
          </p>
        </div>

        {/* Master Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Grid: Explanations of Mockup elements */}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
            
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-500 flex items-center justify-center shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">E-Library GDrive Tersusun</h4>
                <p className="text-slate-500 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                  Folder diisih mengikut kategori subjek utama (Bahasa, Matematik, Seni & Logik) dan tahap kesukaran. Memudahkan pencarian fail mengikut keperluan harian.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
                <FolderHeart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Sedia Dibuat Binder & Fail Ring</h4>
                <p className="text-slate-500 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                  Bahagian kiri lembaran kerja sengaja dibiarkan beruang kosong yang mencukupi untuk ditebuk lubang (punch hole) atau dimasukkan ke dalam fail ring / binder (Busy Books).
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Resolusi Cetakan 100% Tajam (HD)</h4>
                <p className="text-slate-500 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                  Setiap halaman menggunakan format vektor berkualiti tinggi. Garisan tulisan abjad, gambar ilustrasi dan warna tidak akan pecah mahupun kabur apabila dicetak.
                </p>
              </div>
            </div>

          </div>

          {/* Right Grid: Beautiful visual compositions of Binders and Workbook */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto bg-slate-50 rounded-3xl border-4 border-dashed border-purple-200 p-8 flex flex-col items-center justify-center min-h-[460px] overflow-visible">
              
              {/* 1. Binder mockup representation */}
              <motion.div 
                className="absolute w-[240px] md:w-[280px] bg-white rounded-2xl shadow-xl border-2 border-purple-300 p-4 -rotate-6 z-20 top-6 left-6"
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 40 }}
                transition={{ type: 'spring' }}
              >
                {/* Spiral Ring side binder representation */}
                <div className="absolute left-0 top-6 bottom-6 flex flex-col justify-around gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-3 h-2 bg-slate-300 rounded-full -ml-1 border border-slate-400"></div>
                  ))}
                </div>
                
                {/* Workbook content cover */}
                <div className="pl-4">
                  <div className="bg-purple-500 rounded-xl p-3 text-white text-center min-h-[160px] flex flex-col justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-purple-200 bg-purple-900/40 px-2 py-0.5 rounded-full inline-block self-center">
                      MEGA BUNDLE
                    </span>
                    <div>
                      <h5 className="text-lg font-bold font-heading leading-tight">KOLEKSI BUKU MEWARNA</h5>
                      <span className="text-[10px] text-yellow-300 font-bold block mt-1">🐯 EDISI HAIWAN COMEL</span>
                    </div>
                    <p className="text-[8px] text-purple-200 font-sans">
                      120+ Halaman Mewarna & Aktiviti Padanan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2. Printed Worksheet Mockup representing child writing */}
              <motion.div 
                className="absolute w-[220px] md:w-[260px] bg-white rounded-2xl shadow-lg border-2 border-amber-300 p-4 rotate-12 z-10 bottom-6 right-4"
                whileHover={{ scale: 1.05, rotate: 6, zIndex: 40 }}
                transition={{ type: 'spring' }}
              >
                <div className="bg-slate-50 rounded-xl p-3 border border-dashed border-slate-200 min-h-[150px] flex flex-col justify-between text-slate-800 text-left">
                  <div className="flex justify-between items-center text-[8px] text-slate-400">
                    <span>SIRI MATH RIA</span>
                    <span>NAME: _________________</span>
                  </div>
                  
                  <div className="py-2 text-center">
                    <span className="text-[10px] font-bold block mb-2 text-indigo-700">MARI MENGIRA & TULIS</span>
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-xl">🍓 🍓 🍓</span>
                      <span className="text-sm font-bold text-slate-400">=</span>
                      <div className="w-8 h-8 rounded-lg bg-yellow-100 border-2 border-dashed border-amber-400 flex items-center justify-center font-bold text-amber-700 text-lg font-heading">
                        3
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-1.5 flex justify-between items-center text-[7px] text-slate-400 font-sans">
                    <span>Halaman 14/50</span>
                    <span className="text-emerald-500 font-bold">⭐⭐⭐ BAGUS!</span>
                  </div>
                </div>
              </motion.div>

              {/* Crayons, pencils visual graphics around tabletop */}
              <motion.div 
                className="absolute -left-6 bottom-16 bg-gradient-to-r from-red-400 to-red-500 w-16 h-4 rounded-full shadow border border-red-300 flex items-center justify-center text-white text-[9px] font-black tracking-wider uppercase rotate-[25deg] z-30"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Crayon
              </motion.div>

              <motion.div 
                className="absolute right-12 top-4 bg-gradient-to-r from-teal-400 to-teal-500 w-14 h-4 rounded-full shadow border border-teal-300 flex items-center justify-center text-white text-[9px] font-black tracking-wider uppercase -rotate-[15deg] z-30"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                Pensel
              </motion.div>

              {/* Educational Floating Elements */}
              <SparkleStar className="absolute top-1/2 -left-12 z-40" size={32} delay={0.2} />
              <SparkleStar className="absolute bottom-4 left-1/3 z-40" size={24} delay={1} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
