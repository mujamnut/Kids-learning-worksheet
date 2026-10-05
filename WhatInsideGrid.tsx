import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Type, PenTool, FileText, Hash, Calculator, BookOpen, 
  MessageSquare, Palette, Layers, Grid, Triangle, RefreshCw, 
  Scissors, Smile, HelpCircle, Activity, Trophy, CheckSquare, 
  Home, Sparkles, GraduationCap, Plus, Heart, Compass
} from 'lucide-react';

interface WorksheetCategory {
  title: string;
  group: 'bahasa' | 'matematik' | 'aktiviti' | 'homeschool' | 'lain';
  color: string; // Tailwind bg color class
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  sheetsCount: string;
}

export const WhatInsideGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'semua' | 'bahasa' | 'matematik' | 'aktiviti' | 'homeschool'>('semua');

  const categories: WorksheetCategory[] = [
    {
      title: 'Alphabet Worksheets',
      group: 'bahasa',
      color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      textColor: 'text-rose-600',
      icon: Type,
      description: 'Latihan pengenalan huruf A-Z dengan ilustrasi kartun comel yang menarik.',
      sheetsCount: '25,000+ fail'
    },
    {
      title: 'Letter Tracing',
      group: 'bahasa',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      textColor: 'text-purple-600',
      icon: PenTool,
      description: 'Melatih koordinasi tangan untuk menyurih garisan abjad besar & kecil.',
      sheetsCount: '30,000+ fail'
    },
    {
      title: 'Handwriting',
      group: 'bahasa',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      textColor: 'text-indigo-600',
      icon: FileText,
      description: 'Latihan menulis perkataan lengkap & ayat pendek untuk kekemasan.',
      sheetsCount: '15,000+ fail'
    },
    {
      title: 'Math Worksheets',
      group: 'matematik',
      color: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      textColor: 'text-amber-600',
      icon: Calculator,
      description: 'Lembaran kerja matematik awal, tambah & tolak mudah dengan bantuan visual.',
      sheetsCount: '40,000+ fail'
    },
    {
      title: 'Numbers',
      group: 'matematik',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      textColor: 'text-yellow-600',
      icon: Hash,
      description: 'Latihan mengecam, menulis & membilang nombor 1 hingga 100 secara menyeronokkan.',
      sheetsCount: '35,000+ fail'
    },
    {
      title: 'Reading Practice',
      group: 'bahasa',
      color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      textColor: 'text-emerald-600',
      icon: BookOpen,
      description: 'Bahan bacaan suku kata mudah & cerita pendek berilustrasi bagi melatih kefahaman.',
      sheetsCount: '28,000+ fail'
    },
    {
      title: 'Sight Words',
      group: 'bahasa',
      color: 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      textColor: 'text-sky-600',
      icon: MessageSquare,
      description: 'Koleksi perkataan lazim (sight words) untuk mempercepat kebolehan membaca anak.',
      sheetsCount: '20,000+ fail'
    },
    {
      title: 'Coloring Pages',
      group: 'aktiviti',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      textColor: 'text-pink-600',
      icon: Palette,
      description: 'Melatih kreativiti dengan gambar haiwan, kenderaan, buah-buahan yang comel.',
      sheetsCount: '50,000+ fail'
    },
    {
      title: 'Busy Books',
      group: 'aktiviti',
      color: 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      textColor: 'text-violet-600',
      icon: Layers,
      description: 'Buku aktiviti interaktif buatan sendiri (DIY binder) yang boleh ditampal & disesuaikan.',
      sheetsCount: '12,000+ fail'
    },
    {
      title: 'Flashcards',
      group: 'aktiviti',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      textColor: 'text-teal-600',
      icon: Grid,
      description: 'Kad imbasan abjad, nombor, perkataan, dan warna untuk pembelajaran pantas.',
      sheetsCount: '45,000+ fail'
    },
    {
      title: 'Shapes',
      group: 'matematik',
      color: 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      textColor: 'text-lime-600',
      icon: Triangle,
      description: 'Aktiviti mengenal bentuk asas seperti bulat, segi tiga, segi empat dan bentuk 3D.',
      sheetsCount: '18,000+ fail'
    },
    {
      title: 'Matching Games',
      group: 'aktiviti',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      textColor: 'text-orange-600',
      icon: RefreshCw,
      description: 'Permainan padankan gambar, bayang-bayang, dan perkataan yang melatih kognitif.',
      sheetsCount: '25,000+ fail'
    },
    {
      title: 'Cut & Paste',
      group: 'aktiviti',
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      textColor: 'text-red-600',
      icon: Scissors,
      description: 'Latihan memotong dan menampal untuk meningkatkan kemahiran mengawal gunting.',
      sheetsCount: '22,000+ fail'
    },
    {
      title: 'Fine Motor Skills',
      group: 'aktiviti',
      color: 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      textColor: 'text-fuchsia-600',
      icon: Smile,
      description: 'Latihan menggunakan garisan berliku, melukis bulatan, dan mengawal jari-jemari.',
      sheetsCount: '30,000+ fail'
    },
    {
      title: 'Mazes',
      group: 'aktiviti',
      color: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      textColor: 'text-cyan-600',
      icon: HelpCircle,
      description: 'Permainan mencari jalan keluar labirin yang merangsang kebolehan berfikir kritikal.',
      sheetsCount: '15,000+ fail'
    },
    {
      title: 'Logic Games',
      group: 'matematik',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      textColor: 'text-indigo-600',
      icon: Compass,
      description: 'Teka-teki visual, klasifikasi objek, dan aktiviti diskriminasi saiz/warna.',
      sheetsCount: '16,000+ fail'
    },
    {
      title: 'Science Activities',
      group: 'homeschool',
      color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      textColor: 'text-emerald-600',
      icon: Sparkles,
      description: 'Eksperimen sains mudah di rumah, kitaran hidup rama-rama, sistem solar asas, dll.',
      sheetsCount: '14,000+ fail'
    },
    {
      title: 'Patterns',
      group: 'matematik',
      color: 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      textColor: 'text-sky-600',
      icon: Activity,
      description: 'Latihan melengkapkan turutan corak warna, gambar dan susunan geometri.',
      sheetsCount: '12,000+ fail'
    },
    {
      title: 'Printable Games',
      group: 'aktiviti',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      textColor: 'text-purple-600',
      icon: Layers,
      description: 'Board games bertema kanak-kanak, bingo, kad padanan memori yang sedia di-print.',
      sheetsCount: '25,000+ fail'
    },
    {
      title: 'Reward Charts',
      group: 'homeschool',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      textColor: 'text-yellow-600',
      icon: Trophy,
      description: 'Carta ganjaran harian untuk memotivasikan solat, menggosok gigi, dan membaca.',
      sheetsCount: '8,000+ fail'
    },
    {
      title: 'Life Skills',
      group: 'homeschool',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      textColor: 'text-teal-600',
      icon: CheckSquare,
      description: 'Aktiviti mengurus diri, berpakaian harian, adab sopan, dan pengurusan masa.',
      sheetsCount: '10,000+ fail'
    },
    {
      title: 'Homeschool Resources',
      group: 'homeschool',
      color: 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      textColor: 'text-slate-600',
      icon: Home,
      description: 'Jadual pembelajaran harian, planner homeschool, dan panduan membina rutin.',
      sheetsCount: '35,000+ fail'
    },
    {
      title: 'Preschool Activities',
      group: 'homeschool',
      color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      textColor: 'text-rose-600',
      icon: Sparkles,
      description: 'Aktiviti bertema prasekolah seperti cuaca, emosi diri, haiwan ternakan, dll.',
      sheetsCount: '40,000+ fail'
    },
    {
      title: 'Kindergarten Worksheets',
      group: 'homeschool',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      textColor: 'text-orange-600',
      icon: GraduationCap,
      description: 'Latihan persediaan menduduki Tahun 1 merangkumi pelbagai subjek penting.',
      sheetsCount: '45,000+ fail'
    },
    {
      title: 'And Much More...',
      group: 'lain',
      color: 'bg-pink-100 border-pink-300 hover:bg-pink-200',
      textColor: 'text-pink-700',
      icon: Heart,
      description: 'Beribu-ribu lagi lembaran kerja unik yang akan sentiasa ditambah dari semasa ke semasa.',
      sheetsCount: 'Akses Sepanjang Hayat'
    }
  ];

  const filteredCategories = useMemo(() => {
    return categories.filter(category => {
      const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            category.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'semua' || category.group === activeTab || category.group === 'lain';
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <section id="kandungan" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars / shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-70" />
      <div className="absolute bottom-12 right-12 w-48 h-48 bg-emerald-50 rounded-full blur-2xl opacity-60" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-200">
            <Layers className="w-3.5 h-3.5 text-yellow-600" /> APA DI DALAM BUNDLE?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kandungan Mega Yang <span className="text-[#00C896]">Lengkap & Tersusun</span>
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-base md:text-lg">
            Satu-satunya pelaburan yang anda perlukan untuk menyediakan aktiviti bertaraf tadika swasta di rumah! Semua fail disusun kemas dalam folder Google Drive.
          </p>
        </div>

        {/* Filter and Search Bar Container */}
        <div className="bg-slate-50 p-4 md:p-6 rounded-3xl border border-slate-100 shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {[
              { id: 'semua', label: 'Semua Kandungan' },
              { id: 'bahasa', label: 'Abjad & Bacaan' },
              { id: 'matematik', label: 'Matematik & Nombor' },
              { id: 'aktiviti', label: 'Permainan & Motor' },
              { id: 'homeschool', label: 'Homeschool & Prasekolah' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Cari worksheet... (Cth: Math)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm font-sans border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

        </div>

        {/* Grid Container */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className={`border-2 rounded-3xl p-5 shadow-sm transition-all duration-300 relative group flex flex-col justify-between ${cat.color}`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-2xl bg-white border border-slate-100 ${cat.textColor} shadow-sm group-hover:rotate-12 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black tracking-wider text-slate-400 font-mono bg-white/70 px-2.5 py-1 rounded-full border border-slate-50 uppercase">
                        {cat.sheetsCount}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">
                      {cat.title}
                    </h3>
                    
                    <p className="text-slate-500 font-sans text-xs md:text-xs leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-dashed border-slate-200/50 flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span>E-Drive PDF</span>
                    <span className="text-emerald-500 flex items-center gap-0.5">
                      <Plus className="w-3 h-3" /> Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state search result */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">Tiada lembaran kerja ditemui untuk carian "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveTab('semua'); }} 
              className="mt-4 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 cursor-pointer"
            >
              Set Semula Carian
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
