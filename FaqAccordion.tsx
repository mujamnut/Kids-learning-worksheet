import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Adakah ini produk fizikal?',
      answer: 'Tidak. Ini adalah produk digital 100% dalam format PDF HD. Tiada sebarang barangan atau buku fizikal yang akan dipos ke alamat anda. Anda mendapat pautan Google Drive dan bebas mencetaknya sendiri.'
    },
    {
      id: 'faq-2',
      question: 'Bagaimana saya menerima fail selepas membeli?',
      answer: 'Sebaik sahaja pembelian selesai (biasanya mengambil masa kurang daripada 1 minit), sistem kami akan menghantar e-mel pengesahan yang mengandungi pautan Google Drive rasmi terus ke alamat e-mel yang anda isi semasa pembayaran.'
    },
    {
      id: 'faq-3',
      question: 'Bolehkah saya print lembaran kerja ini banyak kali?',
      answer: 'Ya, boleh! Tiada sebarang had cetakan dikenakan. Anda boleh mencetak lembaran kerja yang sama berulang kali untuk kegunaan peribadi, adik-beradik yang lain, atau untuk seluruh bilik darjah anda.'
    },
    {
      id: 'faq-4',
      question: 'Lembaran kerja ini sesuai untuk kanak-kanak berumur berapa tahun?',
      answer: 'Koleksi mega ini sangat sesuai untuk kanak-kanak berusia 3 hingga 8 tahun. Silabus kami merangkumi perkembangan motor halus (3 tahun), pengenalan abjad & nombor harian (4-5 tahun), membaca & mengeja (6 tahun), sehingga latihan persediaan melangkah ke Tahun 1 (7-8 tahun).'
    },
    {
      id: 'faq-5',
      question: 'Adakah saya memerlukan sambungan internet untuk menggunakan fail ini?',
      answer: 'Anda hanya memerlukan talian internet semasa proses memuat turun (download) fail daripada Google Drive. Selepas fail disimpan dengan selamat di dalam peranti anda (laptop, komputer, telefon pintar, atau tablet), anda boleh membukanya dan mencetak pada bila-bila masa secara offline.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Grid/Dots */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-pink-200">
            <HelpCircle className="w-3.5 h-3.5 text-pink-600" /> JAWAPAN SOALAN LAZIM
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Soalan Yang <span className="text-indigo-600">Sering Ditanya (FAQ)</span>
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Ada kemusykilan? Kami sediakan jawapan pantas untuk memudahkan keputusan pembelian anda demi perkembangan si manja.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 hover:bg-slate-100/70 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all duration-200 overflow-hidden"
              >
                {/* Trigger button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold text-slate-800 font-heading leading-tight flex items-center gap-2">
                    <span className="text-indigo-500 text-xl">❓</span> {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white text-slate-500 border border-slate-200 shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600 border-indigo-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 font-sans text-xs md:text-sm leading-relaxed border-t border-slate-200/40 pt-4 bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
