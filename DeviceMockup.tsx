import React from 'react';
import { motion } from 'motion/react';
import { SparkleStar } from './FloatingDecorations';
import { FileText, Download, Check, Award, BookOpen, Smile, PenTool, Layout, Palette } from 'lucide-react';

export const DeviceMockup: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto h-[480px] md:h-[540px] flex items-center justify-center select-none overflow-visible">
      {/* Background Soft Glow Blobs */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse duration-10000" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-emerald-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20" />

      {/* 1. STACK OF PRINTED WORKSHEETS (Background Left) */}
      <motion.div
        className="absolute -left-4 md:-left-12 bottom-12 w-48 md:w-56 bg-white rounded-xl shadow-xl border-4 border-emerald-400 p-3 rotate-[-12deg] z-10 origin-bottom-left"
        whileHover={interactive ? { scale: 1.05, rotate: -8, zIndex: 40 } : {}}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="absolute -top-3 -right-3 bg-yellow-400 text-slate-900 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full shadow border border-yellow-500 flex items-center gap-0.5">
          <Smile className="w-3 h-3 text-slate-900" /> 3-8 TAHUN
        </div>
        {/* Printable page outline */}
        <div className="bg-slate-50 rounded-lg p-2 border-2 border-dashed border-slate-300 min-h-[220px] flex flex-col justify-between">
          <div className="border-b-2 border-dashed border-slate-300 pb-1.5 mb-2">
            <div className="flex justify-between items-center text-[9px] font-bold text-emerald-600">
              <span>LATIHAN MENULIS</span>
              <span>MARK: ⭐⭐⭐</span>
            </div>
            <div className="h-4 bg-emerald-100 rounded mt-1 flex items-center justify-center text-[10px] font-black text-emerald-800">
              SURUH & TULIS HURUF 'A'
            </div>
          </div>
          {/* Tracing Area */}
          <div className="flex-1 flex flex-col gap-2 justify-center py-2">
            <div className="flex items-center justify-around">
              <span className="text-4xl font-extrabold text-slate-800 font-heading">A</span>
              <div className="flex flex-col gap-1 w-24">
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
              </div>
              <span className="text-4xl font-extrabold text-slate-300 font-heading border-2 border-dashed border-slate-300 rounded px-1.5">A</span>
            </div>
            
            <div className="flex items-center justify-around mt-1">
              <span className="text-4xl font-extrabold text-slate-800 font-heading">B</span>
              <div className="flex flex-col gap-1 w-24">
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
                <div className="h-1 border-t-2 border-dashed border-slate-400"></div>
              </div>
              <span className="text-4xl font-extrabold text-slate-300 font-heading border-2 border-dashed border-slate-300 rounded px-1.5">B</span>
            </div>
          </div>
          
          <div className="text-[8px] text-center text-slate-400 font-sans mt-1 border-t border-slate-200 pt-1">
            Muka Surat 1/24 • Mudah Print PDF
          </div>
        </div>
      </motion.div>

      {/* 2. LAPTOP MOCKUP (Center-Back) */}
      <motion.div
        className="absolute top-8 md:top-12 w-[310px] md:w-[380px] bg-slate-900 rounded-xl p-2 shadow-2xl z-20 border border-slate-800"
        initial={{ y: 20 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={interactive ? { scale: 1.02, zIndex: 35 } : {}}
      >
        {/* Screen Bezel Area */}
        <div className="relative bg-indigo-950 aspect-[16/10] rounded-lg overflow-hidden border border-slate-700 flex flex-col">
          {/* Top Bar */}
          <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between text-[8px] text-slate-400 border-b border-indigo-900">
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="bg-slate-800 px-4 py-0.5 rounded text-indigo-300 font-mono text-[7px] flex items-center gap-1">
              <span>https://kids-learning-bundle.com/dashboard</span>
            </div>
            <div className="w-4"></div>
          </div>
          
          {/* Screen Content */}
          <div className="flex-1 p-2 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col justify-between">
            {/* Nav */}
            <div className="flex justify-between items-center pb-1.5 border-b border-indigo-900/50">
              <div className="flex items-center gap-1">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-black text-[9px] px-1.5 py-0.5 rounded">
                  ✏️ KIDS
                </span>
                <span className="text-[8px] font-bold text-slate-300">WORKSHEETS BUNDLE</span>
              </div>
              <span className="text-[7px] text-emerald-400 font-bold flex items-center gap-0.5 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span> 500k+ Fail Ready
              </span>
            </div>

            {/* Grid of Folders */}
            <div className="grid grid-cols-3 gap-1.5 my-2">
              {[
                { name: 'Abjad & Tracing', count: '120,000 Fail', color: 'from-pink-500 to-rose-500' },
                { name: 'Matematik & Nombor', count: '95,000 Fail', color: 'from-amber-400 to-orange-500' },
                { name: 'Reading & Sight Words', count: '80,000 Fail', color: 'from-emerald-400 to-teal-500' },
                { name: 'Mewarna & Seni', count: '75,000 Fail', color: 'from-purple-500 to-indigo-500' },
                { name: 'Busy Books & Flashcards', count: '65,000 Fail', color: 'from-sky-400 to-blue-500' },
                { name: 'Sains & Logik', count: '65,000 Fail', color: 'from-lime-400 to-green-500' },
              ].map((folder, i) => (
                <div key={i} className="bg-slate-800/80 p-1.5 rounded border border-slate-700/50 flex flex-col justify-between text-left">
                  <div className={`w-4 h-3 rounded-tr-md rounded-tl-sm bg-gradient-to-r ${folder.color} relative mb-1`}>
                    <div className="absolute -top-1 left-0 w-2 h-1 bg-slate-800/90 rounded-sm"></div>
                  </div>
                  <span className="text-[7px] leading-tight font-bold text-white block truncate">{folder.name}</span>
                  <span className="text-[5px] text-slate-400 block">{folder.count}</span>
                </div>
              ))}
            </div>

            {/* Bottom Panel */}
            <div className="bg-slate-800/40 p-1 rounded border border-slate-700/30 flex items-center justify-between">
              <span className="text-[6px] text-indigo-200">Akses Tanpa Had • Format PDF HD</span>
              <span className="text-[6px] font-bold text-yellow-400 bg-yellow-400/10 px-1 py-0.5 rounded flex items-center gap-0.5">
                <Download className="w-1.5 h-1.5 text-yellow-400" /> Muat Turun Segera
              </span>
            </div>
          </div>
        </div>
        {/* Laptop keyboard base base */}
        <div className="h-2 bg-slate-800 rounded-b-lg mt-1 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-950 rounded-b"></div>
        </div>
      </motion.div>

      {/* 3. TABLET MOCKUP (Front Right) */}
      <motion.div
        className="absolute bottom-4 right-2 md:-right-4 w-[180px] md:w-[220px] bg-slate-900 rounded-xl p-1.5 shadow-2xl border-2 border-slate-800 z-30"
        initial={{ y: -10 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        whileHover={interactive ? { scale: 1.05, zIndex: 40 } : {}}
      >
        <div className="bg-slate-950 aspect-[3/4] rounded-lg overflow-hidden border border-slate-700 flex flex-col">
          {/* Top bezel camera */}
          <div className="bg-slate-900 py-1 flex justify-center items-center">
            <span className="w-1 h-1 rounded-full bg-slate-800"></span>
          </div>

          {/* Screen Content */}
          <div className="flex-1 bg-gradient-to-b from-teal-50 to-emerald-50 text-slate-800 p-2 flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-teal-100 pb-1">
              <span className="text-[8px] font-extrabold text-teal-600 font-heading">BUKUTAB PERTAMA SAYA</span>
              <span className="bg-teal-500 text-white font-bold text-[6px] px-1.5 py-0.5 rounded-full">⭐ SELESAI</span>
            </div>

            {/* Interactive worksheet demo */}
            <div className="flex-1 flex flex-col justify-center items-center py-1">
              <span className="text-[8px] text-teal-800 font-bold mb-1">Padankan Nombor Dengan Gambar</span>
              
              <div className="w-full grid grid-cols-2 gap-1 px-1">
                {/* Left col */}
                <div className="flex flex-col gap-1 justify-center">
                  <div className="bg-white p-1 rounded border border-teal-200 flex items-center justify-between text-[7px]">
                    <span>🍎 🍎 🍎</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  </div>
                  <div className="bg-white p-1 rounded border border-teal-200 flex items-center justify-between text-[7px]">
                    <span>🐱 🐱</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  </div>
                </div>

                {/* Right col */}
                <div className="flex flex-col gap-1 justify-center">
                  <div className="bg-white p-1 rounded border border-teal-200 flex items-center gap-1.5 text-[7px] justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span className="font-bold text-teal-600">2</span>
                  </div>
                  <div className="bg-white p-1 rounded border border-teal-200 flex items-center gap-1.5 text-[7px] justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span className="font-bold text-teal-600">3</span>
                  </div>
                </div>
              </div>

              {/* Simulating a connecting line */}
              <div className="absolute top-[48%] left-[28%] w-[44%] h-[2px] bg-amber-400 rotate-[12deg] border border-amber-400 border-dashed z-40 opacity-80" />
              <div className="absolute top-[58%] left-[28%] w-[44%] h-[2px] bg-amber-400 rotate-[-12deg] border border-amber-400 border-dashed z-40 opacity-80" />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-1 border-t border-teal-100 text-[6px] text-slate-400">
              <span>Mudah Print & PDF Digital</span>
              <span className="font-bold text-teal-700">KIDS BUNDLE</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. SMARTPHONE MOCKUP (Front Left) */}
      <motion.div
        className="absolute bottom-8 left-12 w-[110px] md:w-[130px] bg-slate-900 rounded-2xl p-1 shadow-2xl border-2 border-slate-800 z-40"
        initial={{ y: 15 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        whileHover={interactive ? { scale: 1.05, zIndex: 50 } : {}}
      >
        <div className="bg-slate-950 aspect-[9/19] rounded-xl overflow-hidden border border-slate-700 flex flex-col relative">
          {/* Dynamic Island */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-slate-900 rounded-full z-50"></div>

          {/* Screen Content */}
          <div className="flex-1 bg-indigo-900 text-white p-1.5 pt-4 flex flex-col justify-between">
            <div className="text-center">
              <span className="text-[6px] font-bold text-indigo-300 tracking-wider uppercase block">Katalog Mudah</span>
              <span className="text-[8px] font-black text-yellow-300 block leading-tight">Instant Download</span>
            </div>

            {/* List */}
            <div className="my-1 flex flex-col gap-1">
              {[
                { name: 'Kertas Latihan Urus Diri', icon: Award, color: 'text-pink-400' },
                { name: 'Buku Mewarna Haiwan', icon: Palette, color: 'text-amber-400' },
                { name: 'Matematik Ria', icon: Check, color: 'text-emerald-400' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-indigo-950/60 p-1 rounded flex items-center gap-1 border border-indigo-800/30">
                    <Icon className={`w-2.5 h-2.5 ${item.color}`} />
                    <span className="text-[5px] leading-tight truncate text-slate-200">{item.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded p-1 text-center text-[5.5px] font-black uppercase text-white shadow shadow-rose-900/40">
              Download GDrive
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5. FLOATING ELEMENTS & WORKBOOK ACCENTS */}
      {/* Printable page stack background offset */}
      <div className="absolute -left-6 md:-left-14 bottom-14 w-48 md:w-56 h-[220px] bg-yellow-200 rounded-xl border-4 border-yellow-400 -rotate-[16deg] z-0 shadow-lg" />
      
      {/* 3D-Like binder mockup representation */}
      <motion.div 
        className="absolute right-12 top-6 w-32 bg-indigo-100 rounded-lg p-1.5 shadow-md border-2 border-indigo-200 z-10 flex items-center justify-around rotate-[10deg]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BookOpen className="w-5 h-5 text-indigo-500" />
        <div className="flex flex-col">
          <span className="text-[7px] font-bold text-indigo-950">500,000+ Files</span>
          <span className="text-[5px] text-indigo-600">Ready to Print PDF</span>
        </div>
      </motion.div>

      {/* Floating Letters, Stars, and Embellishments */}
      <SparkleStar className="absolute top-1/4 -left-6 z-30" size={32} delay={0} />
      <SparkleStar className="absolute top-2/3 right-1/4 z-40" size={24} delay={1.5} />
      <SparkleStar className="absolute top-12 right-2 z-10" size={28} delay={0.7} />

      <motion.div
        className="absolute top-6 left-8 bg-pink-100 text-pink-600 font-black text-xs px-2 py-1.5 rounded-lg shadow-md border-2 border-pink-300 z-30"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        A B C
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-1/2 bg-yellow-100 text-yellow-600 font-black text-xs px-2 py-1.5 rounded-lg shadow-md border-2 border-yellow-300 z-40"
        animate={{ y: [0, 15, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        1 2 3
      </motion.div>

      <motion.div
        className="absolute -right-4 bottom-1/2 bg-indigo-100 text-indigo-600 font-black text-xs px-2.5 py-1.5 rounded-lg shadow-md border-2 border-indigo-300 z-30"
        animate={{ scale: [1, 1.15, 1], rotate: [12, -12, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        ✏️ LUAR BIASA!
      </motion.div>
    </div>
  );
};
