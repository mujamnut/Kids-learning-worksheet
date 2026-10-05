import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldAlert, Sparkles, FolderOpen, DownloadCloud } from 'lucide-react';

export const ProductInfo: React.FC = () => {
  const deliverables = [
    {
      title: 'Instant Download',
      description: 'Akses pautan muat turun serta-merta selepas pengesahan bayaran selesai. Fail sedia disimpan ke akaun Google Drive peribadi anda.'
    },
    {
      title: 'High Quality Printable',
      description: 'Format fail PDF berkualiti tinggi (300 DPI) yang memastikan cetakan warna mahupun hitam-putih nampak ultra tajam.'
    },
    {
      title: 'Mudah Dicetak',
      description: 'Fail dioptimumkan untuk saiz kertas harian A4 & Letter. Boleh dicetak terus di rumah atau dibawa ke kedai percetakan.'
    },
    {
      title: 'Unlimited Personal Use',
      description: 'Tiada had kekerapan muat turun mahupun cetakan. Boleh diguna pakai berkali-kali untuk menyokong proses pembesaran semua anak anda.'
    },
    {
      title: 'Fail Digital',
      description: 'Format fail bersturuktur, bebas daripada habuk, kerosakan fizikal, atau kehilangan muka surat kerana ia disimpan selamat di awan.'
    }
  ];

  return (
    <section id="info-produk" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual ornaments */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Container Receipt Card */}
        <motion.div 
          className="bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top visual sticker / ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-bold text-xs px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-indigo-500 uppercase tracking-wider">
            <FolderOpen className="w-3.5 h-3.5" /> MAKLUMAT PENGHANTARAN FAIL
          </div>

          <div className="text-center mb-10 pt-4">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              Anda Akan Terima:
            </h3>
            <p className="text-slate-400 font-sans text-sm mt-2">
              Segala kandungan berkualiti premium ini akan menjadi milik anda selama-lamanya.
            </p>
          </div>

          {/* List Deliverables */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {deliverables.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Check className="w-5 h-5 stroke-[3px]" />
                </div>
                <div className="text-left">
                  <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section (Warning/Alert) */}
          <div className="mt-10 pt-8 border-t border-dashed border-slate-200">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-2xl mx-auto shadow-inner">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-amber-900 font-bold text-sm md:text-base font-heading">
                  NOTA PENTING:
                </p>
                <p className="text-amber-800 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                  Produk ini adalah <span className="font-bold underline uppercase">Digital Download</span>. Tiada sebarang penghantaran fizikal (buku bercetak, kertas latihan fizikal) akan dipos ke rumah anda. Anda perlu memuat turun dan mencetaknya sendiri.
                </p>
              </div>
            </div>
          </div>

          {/* Download stat summary badge */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-1.5 text-indigo-500 font-bold text-xs bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 uppercase tracking-wide">
              <DownloadCloud className="w-3.5 h-3.5" /> Jumlah Saiz Fail: ~1.2 GB (Google Drive HD)
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
