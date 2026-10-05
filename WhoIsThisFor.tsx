import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, School, GraduationCap, Building2, Heart, Home, BookOpen, Users2
} from 'lucide-react';
import { AudienceItem } from '../types';

export const WhoIsThisFor: React.FC = () => {
  const targetAudience: AudienceItem[] = [
    {
      id: 'aud-1',
      title: 'Ibu Bapa',
      emoji: '👨‍👩-👧‍👦',
      description: 'Menyediakan aktiviti berfaedah tanpa skrin gajet untuk merapatkan hubungan kekeluargaan di rumah.',
      colorClass: 'bg-rose-50 hover:bg-rose-100/50 border-rose-100 text-rose-600'
    },
    {
      id: 'aud-2',
      title: 'Guru Tadika',
      emoji: '🏫',
      description: 'Mendapatkan bekalan latihan tambahan berkualiti tinggi sedia diprint untuk semua murid tanpa perlu bersusah-payah.',
      colorClass: 'bg-indigo-50 hover:bg-indigo-100/50 border-indigo-100 text-indigo-600'
    },
    {
      id: 'aud-3',
      title: 'Guru Prasekolah',
      emoji: '🎓',
      description: 'Sebagai bahan sokongan PdP / PdPC bertema mengikut silabus terkini demi meningkatkan minat pelajar.',
      colorClass: 'bg-amber-50 hover:bg-amber-100/50 border-amber-100 text-amber-600'
    },
    {
      id: 'aud-4',
      title: 'Taska',
      emoji: '🧸',
      description: 'Bahan permainan kognitif awal dan melatih kemahiran sosial berkumpulan kanak-kanak.',
      colorClass: 'bg-emerald-50 hover:bg-emerald-100/50 border-emerald-100 text-emerald-600'
    },
    {
      id: 'aud-5',
      title: 'Daycare',
      emoji: '🏡',
      description: 'Pengisian aktiviti petang berfaedah sementara menunggu ibu bapa datang menjemput pulang dari pusat jagaan.',
      colorClass: 'bg-sky-50 hover:bg-sky-100/50 border-sky-100 text-sky-600'
    },
    {
      id: 'aud-6',
      title: 'Homeschool',
      emoji: '📚',
      description: 'Sangat praktikal sebagai kurikulum penuh atau modul tambahan pembelajaran kendiri di rumah.',
      colorClass: 'bg-purple-50 hover:bg-purple-100/50 border-purple-100 text-purple-600'
    },
    {
      id: 'aud-7',
      title: 'Pusat Tuisyen',
      emoji: '✏️',
      description: 'Modul latih-tubi pengukuhan berfokus untuk menyediakan kanak-kanak sebelum menapak ke sekolah rendah.',
      colorClass: 'bg-pink-50 hover:bg-pink-100/50 border-pink-100 text-pink-600'
    }
  ];

  // Helper to map id to Lucide icons
  const getAudienceIcon = (id: string) => {
    switch(id) {
      case 'aud-1': return Users;
      case 'aud-2': return School;
      case 'aud-3': return GraduationCap;
      case 'aud-4': return Heart;
      case 'aud-5': return Building2;
      case 'aud-6': return Home;
      case 'aud-7': return BookOpen;
      default: return Users2;
    }
  };

  return (
    <section id="sasaran" className="py-20 bg-white relative overflow-hidden">
      {/* Visual embellishments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200">
            <Users2 className="w-3.5 h-3.5 text-indigo-600" /> SIAPA YANG PERLUKAN BUNDLE INI?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Sesuai & Amat Membantu <span className="text-[#FFB703]">Pelbagai Golongan</span>
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Sama ada anda bapa yang sibuk bekerja, suri rumah berdedikasi, atau pendidik profesional yang mencari idea mengajar yang berkualiti.
          </p>
        </div>

        {/* Audience Cards list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((aud, i) => {
            const Icon = getAudienceIcon(aud.id);
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between ${aud.colorClass} ${
                  aud.id === 'aud-7' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Visual Emoji decoration */}
                    <span className="text-2xl filter drop-shadow-sm">{aud.emoji.split('-')[0]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading leading-tight">
                    {aud.title}
                  </h3>
                  
                  <p className="text-slate-500 font-sans text-xs md:text-xs leading-relaxed">
                    {aud.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dashed border-slate-200/50 flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  <span>✔ 100% Praktikal</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
