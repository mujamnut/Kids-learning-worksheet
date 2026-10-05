import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Sparkles, AlertCircle, BookOpen, Smile, FileDown } from 'lucide-react';
import { SparkleStar, FloatingCloud, FloatingItem, RainbowDecor } from './components/FloatingDecorations';
import { DeviceMockup } from './components/DeviceMockup';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WhatInsideGrid } from './components/WhatInsideGrid';
import { BenefitsSection } from './components/BenefitsSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { WhyChoose } from './components/WhyChoose';
import { MockupShowcase } from './components/MockupShowcase';
import { ProductInfo } from './components/ProductInfo';
import { PriceSection } from './components/PriceSection';
import { FaqAccordion } from './components/FaqAccordion';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const heroBullets = [
    'Belajar sambil bermain',
    'Sesuai umur 3-8 tahun',
    'Mudah dicetak',
    'Aktiviti tanpa had',
    'Download segera'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-gradient-to-br from-[#4F46E5] to-[#7C5CFF] text-white pt-16 pb-24 md:py-28 overflow-hidden">
        
        {/* Floating Playful Shapes / Backdrops */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FloatingCloud className="top-12 left-10 text-white" duration={10} yRange={20} />
          <FloatingCloud className="top-36 right-16 text-white" duration={12} yRange={15} />
          <FloatingCloud className="bottom-12 left-1/3 text-white" duration={14} yRange={25} />
          
          <SparkleStar className="absolute top-16 left-1/4" size={28} delay={0.5} />
          <SparkleStar className="absolute top-44 right-1/4" size={32} delay={1.2} />
          <SparkleStar className="absolute bottom-20 right-10" size={24} delay={0.2} />

          <RainbowDecor className="absolute -bottom-10 -left-10" />

          {/* Abstract circle glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400 rounded-full blur-[140px] opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Headline, Subheadline, Description & Bullets */}
            <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
              
              {/* Cute Badge */}
              <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-slate-900 font-extrabold text-xs px-4 py-2 rounded-full shadow-lg border border-yellow-500 uppercase tracking-wider">
                <Smile className="w-4 h-4 text-slate-900 fill-slate-900 animate-pulse" /> TERBAIK DI MALAYSIA
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                📚 500,000+ Kids Learning Worksheets Bundle
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl font-bold text-yellow-300 font-heading leading-snug">
                Jadikan Pembelajaran Anak Lebih Seronok, Mudah & Berkesan Dari Rumah!
              </p>

              {/* Short Description */}
              <p className="text-indigo-100 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                Kini anda tidak perlu lagi pening mencari aktiviti harian untuk anak. Semua bahan pembelajaran yang diperlukan tersedia dalam SATU bundle lengkap.
              </p>

              {/* 5 Benefit Bullets (NO CTA BUTTONS HERE!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {heroBullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30 shadow-inner">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-slate-100 font-heading">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side: Premium Mockup Graphic */}
            <div className="lg:col-span-5 relative">
              <DeviceMockup interactive={true} />
            </div>

          </div>
        </div>

        {/* Beautiful wavy divider at the bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </header>


      {/* 2. PROBLEM SECTION */}
      <ProblemSection />


      {/* 3. SOLUTION SECTION */}
      <SolutionSection />


      {/* 4. WHAT INSIDE SECTION */}
      <WhatInsideGrid />


      {/* 5. BENEFITS SECTION */}
      <BenefitsSection />


      {/* 6. WHO IS THIS FOR SECTION */}
      <WhoIsThisFor />


      {/* 7. WHY CHOOSE SECTION */}
      <WhyChoose />


      {/* 8. PRODUCT MOCKUP SHOWCASE */}
      <MockupShowcase />


      {/* 9. DIGITAL PRODUCT INFO */}
      <ProductInfo />


      {/* 10. PRICE SECTION */}
      <PriceSection onOpenCheckout={openCheckout} />


      {/* 11. FAQ SECTION */}
      <FaqAccordion />


      {/* 12. FINAL CTA SECTION */}
      <section className="relative bg-gradient-to-br from-[#7C5CFF] to-[#4F46E5] text-white py-24 overflow-hidden">
        
        {/* Floating assets background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FloatingCloud className="top-10 left-10 text-white" duration={9} yRange={15} />
          <FloatingCloud className="bottom-12 right-12 text-white" duration={11} yRange={20} />
          <SparkleStar className="absolute top-1/3 right-12" size={32} delay={0} />
          <SparkleStar className="absolute bottom-1/4 left-12" size={24} delay={1.5} />
          <RainbowDecor className="absolute bottom-[-40px] right-[-20px] opacity-10" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-1 bg-yellow-400 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900" /> PELUANG KEEMASAN
          </div>

          {/* Large Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
            Bantu Anak Belajar Dengan Cara Yang Lebih Menyeronokkan Hari Ini
          </h2>

          {/* Short paragraph */}
          <p className="text-indigo-100 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Jangan lepaskan peluang keemasan ini untuk mendapatkan akses tanpa had kepada ribuan lembaran kerja terbaik. Berikan si manja permulaan yang sempurna sekarang juga!
          </p>

          {/* Simplified premium mockup inside Final CTA */}
          <div className="py-6 max-w-sm mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl border border-white/20 shadow-xl flex items-center justify-around">
              <span className="text-4xl">📚</span>
              <div className="text-left">
                <span className="text-xs font-bold text-yellow-300 block">Google Drive Cloud Link</span>
                <span className="text-sm font-black text-white block">500k+ Lembaran Kerja HD</span>
              </div>
              <span className="text-xs font-bold bg-[#00C896] text-white px-2.5 py-1 rounded-full uppercase">Ready</span>
            </div>
          </div>

          {/* Large CTA Button */}
          <div className="max-w-md mx-auto pt-4">
            <motion.a
              href="https://toyyibpay.com/Marr-Game-Edu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FFB703] hover:bg-[#ffa000] text-slate-950 py-5 rounded-2xl font-sans font-black text-base md:text-lg shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group uppercase tracking-wider border border-yellow-300"
            >
              🎉 YA! SAYA NAK BUNDLE INI RM29
            </motion.a>
          </div>

          {/* Note bottom final CTA */}
          <p className="text-indigo-200 font-sans text-[11px] italic">
            *Akses serta-merta dihantar terus ke e-mel anda sejurus selesai pembelian.
          </p>

        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-xs text-indigo-200 font-sans relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-slate-900 font-black px-2 py-0.5 rounded text-[10px]">✏️ KIDS BUNDLE</span>
            <span>&copy; {new Date().getFullYear()} Kids Learning Worksheets Bundle.</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-white bg-indigo-800/40 px-3 py-1 rounded-full border border-indigo-700/30">Digital Product</span>
          </div>
        </footer>
      </section>

      {/* 13. CHECKOUT MODAL DRAWER */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />

    </div>
  );
}
