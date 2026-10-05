import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Printer, Download, Sparkles, BookOpen, Clock } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

export const SolutionSection: React.FC = () => {
  return (
    <section id="penyelesaian" className="py-20 bg-gradient-to-b from-sky-50 to-indigo-50 relative overflow-hidden">
      {/* Playful shapes background */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white/50 blur-md pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Mockup / Illustration */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative p-2 md:p-6 bg-white/70 backdrop-blur-sm rounded-3xl border-4 border-dashed border-sky-200 shadow-lg">
              <DeviceMockup interactive={false} />
            </div>
          </div>

          {/* Right Side: Headline & Explanation */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 fill-sky-500 animate-spin" /> JAWAPAN YANG ANDA CARI
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Penyelesaian Lengkap Untuk <span className="text-[#4F46E5]">Pembelajaran Anak</span>
            </h2>

            <div className="space-y-6 font-sans text-slate-600 text-base md:text-lg leading-relaxed">
              <p className="font-medium text-slate-800">
                Lupakan yuran bulanan tadika yang mahal dan pening kepala mencari bahan latihan di internet setiap hari!
              </p>
              
              <div className="bg-white/80 p-6 rounded-2xl border border-sky-100 shadow-sm space-y-4">
                <p className="text-indigo-950 font-semibold text-lg font-heading leading-snug">
                  ✨ <span className="text-indigo-600 font-extrabold">500,000+ Kids Learning Worksheets Bundle</span> membantu ibu bapa menyediakan aktiviti pembelajaran yang menyeronokkan setiap hari tanpa perlu mencari bahan satu persatu.
                </p>
                <p className="text-sm text-slate-500">
                  Koleksi mega ini dihimpunkan khas oleh pakar pendidikan awal kanak-kanak untuk merangsang minda, melatih otot tangan (motor halus), dan memupuk minat membaca, menulis, & mengira dengan gembira.
                </p>
              </div>

              {/* Action features lists with micro icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-slate-800 font-medium">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Printer className="w-4 h-4" />
                  </div>
                  <span>Sedia Di-print Mampu Milik</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </div>
                  <span>Muat Turun Fail Digital</span>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Susunan Mengikut Silibus</span>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Akses Sepanjang Hayat</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
