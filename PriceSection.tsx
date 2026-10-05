import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface PriceSectionProps {
  onOpenCheckout: () => void;
}

export const PriceSection: React.FC<PriceSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="harga" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden">
      {/* Decorative premium glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00C896] rounded-full blur-[140px] opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Main Price Card */}
        <motion.div 
          className="bg-slate-900/80 backdrop-blur-md rounded-3xl border-4 border-indigo-500/30 p-8 md:p-14 shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Top Hot Deal Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6B6B] text-white font-black text-xs md:text-sm px-6 py-2 rounded-full shadow-lg border border-red-400 flex items-center gap-1.5 uppercase tracking-widest animate-pulse">
            <Flame className="w-4.5 h-4.5 text-white fill-white" /> PROMOSI TERHAD
          </div>

          <div className="text-center mt-4">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-100">
              Pelaburan Bijak Untuk Masa Depan Anak
            </h3>
            <p className="text-slate-400 font-sans text-xs md:text-sm mt-2 max-w-lg mx-auto">
              Dapatkan akses kepada beribu-ribu lembaran kerja berkualiti tadika swasta dengan kos yang lebih murah daripada makan malam anda hari ini.
            </p>
          </div>

          {/* Pricing figures */}
          <div className="my-10 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-slate-400 text-lg md:text-xl line-through font-medium">RM199</span>
              <span className="bg-red-500/10 text-[#FF6B6B] text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/20">
                JIMAT 85%
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-black text-yellow-400 tracking-tight font-heading">
                RM29
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20 mt-2">
                SAHAJA • SEKALI BAYAR
              </span>
            </div>
          </div>

          {/* Key Deliverables Checkboxes */}
          <div className="bg-slate-950/60 rounded-2xl p-6 md:p-8 max-w-md mx-auto border border-slate-800 space-y-4 mb-10 text-left">
            {[
              'Akses Segera (Terus Ke Google Drive)',
              'Semua Worksheet (500,000+ Fail PDF HD)',
              'Download Bila-bila Masa (Akses Sepanjang Hayat)',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5.5 h-5.5 rounded-full bg-indigo-500/20 text-[#00C896] flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ONE EXCLUSIVE PREMIUM CTA BUTTON */}
          <div className="max-w-md mx-auto">
            <motion.a
              href="https://toyyibpay.com/Marr-Game-Edu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#00C896] to-[#05b88b] text-slate-950 py-4.5 rounded-2xl font-sans font-black text-base md:text-lg shadow-xl shadow-emerald-500/20 hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 group uppercase tracking-wide border border-emerald-400"
            >
              👉 DAPATKAN SEKARANG – RM29
            </motion.a>
            
            <p className="text-slate-500 font-sans text-[11px] mt-4 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" /> Harga promosi RM29 boleh kembali ke asal RM199 pada bila-bila masa sahaja.
            </p>
          </div>

          {/* Secure indicators bottom */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap justify-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Pembayaran 100% Selamat
            </span>
            <span className="flex items-center gap-1">
              ⭐ Penilaian 4.9/5 oleh 12,000+ Ibu Bapa
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
