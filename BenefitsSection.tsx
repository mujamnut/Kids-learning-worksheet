import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, CheckCircle2 } from 'lucide-react';
import { BenefitItem } from '../types';

export const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 'ben-1',
      title: 'Mengenal Huruf',
      description: 'Latihan visual mengecam rupa abjad besar & kecil serta mengaitkannya dengan bunyi fonik asal.',
      emoji: '🔤',
      badgeColor: 'bg-rose-100 text-rose-700'
    },
    {
      id: 'ben-2',
      title: 'Mengenal Nombor',
      description: 'Membantu anak memahami nilai kuantiti nombor melalui pembilangan objek interaktif berpandukan gambar.',
      emoji: '🔢',
      badgeColor: 'bg-indigo-100 text-indigo-700'
    },
    {
      id: 'ben-3',
      title: 'Asas Matematik',
      description: 'Pendedahan awal operasi tambah, tolak, perbandingan saiz, ukuran dan pembahagian asas dengan seronok.',
      emoji: '➕',
      badgeColor: 'bg-amber-100 text-amber-700'
    },
    {
      id: 'ben-4',
      title: 'Membaca Awal',
      description: 'Melatih sebutan suku kata, padanan perkataan harian, dan pembacaan ayat cerita pendek bersiri.',
      emoji: '📚',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'ben-5',
      title: 'Menulis Dengan Kemas',
      description: 'Menyediakan garis panduan khas untuk membantu anak menulis abjad dan perkataan pada kedudukan & saiz betul.',
      emoji: '✍️',
      badgeColor: 'bg-violet-100 text-violet-700'
    },
    {
      id: 'ben-6',
      title: 'Fokus',
      description: 'Membina ketahanan mental anak untuk duduk menyiapkan tugasan pendek tanpa cepat berasa jemu.',
      emoji: '🎯',
      badgeColor: 'bg-sky-100 text-sky-700'
    },
    {
      id: 'ben-7',
      title: 'Kreativiti',
      description: 'Aktiviti mewarna, menyusun warna bertema, dan melukis bebas bagi mengekspresikan bakat seni anak.',
      emoji: '🎨',
      badgeColor: 'bg-pink-100 text-pink-700'
    },
    {
      id: 'ben-8',
      title: 'Motor Halus',
      description: 'Latihan kritikal memotong, menampal, menyurih garisan berombak, melatih otot tangan memegang pensel.',
      emoji: '✂️',
      badgeColor: 'bg-orange-100 text-orange-700'
    },
    {
      id: 'ben-9',
      title: 'Penyelesaian Masalah',
      description: 'Labirin (mazes), kuiz logik padanan, teka-teki visual yang merangsang keupayaan berfikir di luar kotak.',
      emoji: '🧠',
      badgeColor: 'bg-teal-100 text-teal-700'
    },
    {
      id: 'ben-10',
      title: 'Keyakinan Diri',
      description: 'Setiap kali anak berjaya melengkapkan latihan, rasa kepuasan akan membina keyakinan diri yang tinggi.',
      emoji: '🌟',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <section id="manfaat" className="py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-amber-50/30 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 animate-bounce">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> PERKEMBANGAN MINDA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Apa Yang Anak <span className="text-indigo-600">Akan Pelajari?</span>
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Setiap lembaran kerja dirancang khusus untuk memaksimumkan potensi intelek, emosi, dan fizikal si manja anda mengikut peringkat perkembangan mereka.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Emoji Display badge */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${benefit.badgeColor} shadow-inner`}>
                  {benefit.emoji}
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {benefit.title}
                </h3>
              </div>
              
              <p className="text-slate-500 font-sans text-xs leading-relaxed mt-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic callout inside benefits */}
        <div className="mt-12 text-center bg-white border border-dashed border-amber-300 rounded-3xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="text-3xl">🎯</span>
            <div>
              <p className="text-slate-900 font-bold text-sm md:text-base leading-snug">
                Silabus yang seimbang untuk melatih minda kiri & kanan
              </p>
              <p className="text-slate-500 font-sans text-xs">
                Mengintegrasikan latihan kognitif analitikal dan ekspresi seni kreatif secara serentak.
              </p>
            </div>
          </div>
          <span className="text-xs font-black bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100 uppercase tracking-wide">
            Khas untuk umur 3-8 tahun
          </span>
        </div>

      </div>
    </section>
  );
};
