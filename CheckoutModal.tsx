import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CreditCard, ShieldCheck, Mail, User, Phone, CheckCircle, 
  ArrowRight, DownloadCloud, FileDown, Check, Sparkles, Loader2, Award
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'tng'
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Nama penuh diperlukan';
      isValid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mel tidak sah';
      isValid = false;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      newErrors.phone = 'Nombor telefon tidak sah';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleReset = () => {
    setStep('form');
    setFormData({ name: '', email: '', phone: '', paymentMethod: 'tng' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white flex items-center justify-between relative">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-200 bg-indigo-900/40 px-2.5 py-1 rounded-full">
                  BORANG PEMBELIAN SECARA AMAN
                </span>
                <h3 className="text-xl font-bold font-heading mt-1 text-white">Sahkan Tempahan Anda</h3>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-indigo-900/30 text-indigo-100 flex items-center justify-center hover:bg-indigo-900/50 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              
              {/* STEP 1: Form Filling */}
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Summary Box */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex justify-between items-center text-left">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-tight">500,000+ Kids Learning Worksheets</h4>
                      <p className="text-xs text-indigo-600 font-bold mt-1">Edisi Khas Keluarga & Tadika</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through">RM199.00</span>
                      <p className="text-lg font-black text-indigo-900 font-heading">RM29.00</p>
                    </div>
                  </div>

                  {/* Personal details fields */}
                  <div className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 font-sans">Nama Penuh</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama penuh anda"
                          className={`w-full bg-slate-50 text-slate-800 pl-11 pr-4 py-3 rounded-xl text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                            errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 font-sans">Alamat E-mel</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="pautan_gdrive@gmail.com"
                          className={`w-full bg-slate-50 text-slate-800 pl-11 pr-4 py-3 rounded-xl text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'
                          }`}
                        />
                      </div>
                      <p className="text-slate-400 text-[10px] font-sans mt-1 leading-snug">
                        *Sangat penting! Pautan download Google Drive akan dikirim terus ke e-mel ini.
                      </p>
                      {errors.email && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 font-sans">Nombor Telefon (WhatsApp)</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Contoh: 0123456789"
                          className={`w-full bg-slate-50 text-slate-800 pl-11 pr-4 py-3 rounded-xl text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                            errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2 font-sans">Kaedah Pembayaran</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`border-2 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                        formData.paymentMethod === 'tng' 
                          ? 'border-indigo-600 bg-indigo-50/50' 
                          : 'border-slate-100 bg-white hover:bg-slate-50'
                      }`}>
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="tng" 
                          checked={formData.paymentMethod === 'tng'}
                          onChange={() => setFormData(prev => ({...prev, paymentMethod: 'tng'}))}
                          className="sr-only"
                        />
                        <span className="text-lg">👛</span>
                        <span className="text-xs font-bold text-slate-800">Touch 'n Go eWallet</span>
                      </label>

                      <label className={`border-2 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                        formData.paymentMethod === 'fpx' 
                          ? 'border-indigo-600 bg-indigo-50/50' 
                          : 'border-slate-100 bg-white hover:bg-slate-50'
                      }`}>
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="fpx" 
                          checked={formData.paymentMethod === 'fpx'}
                          onChange={() => setFormData(prev => ({...prev, paymentMethod: 'fpx'}))}
                          className="sr-only"
                        />
                        <span className="text-lg">🏦</span>
                        <span className="text-xs font-bold text-slate-800">FPX Online Banking</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#00C896] hover:bg-[#00b084] text-white py-4 rounded-2xl font-sans font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Sahkan & Bayar RM29 <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Pembayaran selamat disulitkan SSL 256-bit</span>
                  </div>
                </form>
              )}

              {/* STEP 2: Processing Payment */}
              {step === 'processing' && (
                <div className="py-16 flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                  <h4 className="text-lg font-bold text-slate-800 font-heading">Sistem Sedang Menghubungkan...</h4>
                  <p className="text-slate-500 font-sans text-xs max-w-xs text-center">
                    Harap bersabar. Kami sedang mengesahkan transaksi selamat anda ke gerbang pembayaran.
                  </p>
                </div>
              )}

              {/* STEP 3: Payment Success / Downloads hub */}
              {step === 'success' && (
                <div className="space-y-6 text-center py-4">
                  
                  {/* Confetti Simulated Background Ornaments */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: ['#4F46E5', '#FFB703', '#00C896', '#FF6B6B'][i % 4],
                          left: `${Math.random() * 100}%`,
                          top: `-10px`
                        }}
                        animate={{
                          y: ['0vh', '80vh'],
                          x: ['0px', `${(Math.random() - 0.5) * 150}px`],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </div>

                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-10 h-10 stroke-[3px]" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3 text-yellow-600 animate-pulse" /> PENGHANTARAN BERJAYA
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 font-heading leading-tight">Terima Kasih, {formData.name || 'Pelanggan'}!</h4>
                    <p className="text-slate-500 font-sans text-xs md:text-sm mt-1">
                      Bayaran RM29 telah diterima sepenuhnya. Fail juga telah dikirim ke e-mel anda <strong className="text-indigo-600">{formData.email || 'anda@gmail.com'}</strong>.
                    </p>
                  </div>

                  {/* DOWNLOAD HUB */}
                  <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 text-left space-y-4">
                    <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wide block">
                      📥 HUB MUAT TURUN SEGERA (E-DRIVE):
                    </span>
                    
                    <div className="space-y-2.5">
                      <a 
                        href="https://drive.google.com/drive/folders/mock_kids_bundle_abjad" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 bg-white border border-slate-100 rounded-2xl hover:bg-indigo-50/30 hover:border-indigo-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🔤</span>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Folder 1: Abjad & Mewarna</span>
                            <span className="text-[10px] text-slate-400 block font-sans">~240,000 File PDF</span>
                          </div>
                        </div>
                        <DownloadCloud className="w-4.5 h-4.5 text-indigo-500 group-hover:translate-y-0.5 transition-transform" />
                      </a>

                      <a 
                        href="https://drive.google.com/drive/folders/mock_kids_bundle_math" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 bg-white border border-slate-100 rounded-2xl hover:bg-emerald-50/30 hover:border-emerald-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🔢</span>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Folder 2: Matematik & Logik</span>
                            <span className="text-[10px] text-slate-400 block font-sans">~160,000 File PDF</span>
                          </div>
                        </div>
                        <DownloadCloud className="w-4.5 h-4.5 text-emerald-500 group-hover:translate-y-0.5 transition-transform" />
                      </a>

                      <a 
                        href="https://drive.google.com/drive/folders/mock_kids_bundle_interactive" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 bg-white border border-slate-100 rounded-2xl hover:bg-pink-50/30 hover:border-pink-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🎨</span>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Folder 3: Busy Books & Flashcards</span>
                            <span className="text-[10px] text-slate-400 block font-sans">~100,000 File PDF</span>
                          </div>
                        </div>
                        <DownloadCloud className="w-4.5 h-4.5 text-pink-500 group-hover:translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Print Receipt Button & Next */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => alert('Resit rasmi telah di-download ke sistem anda.')}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-2xl font-sans font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileDown className="w-4 h-4" /> Cetak Resit
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-sans font-bold text-xs transition-all cursor-pointer shadow-md shadow-indigo-600/10"
                    >
                      Tutup & Selesai
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 font-sans italic">
                    Sila semak folder spam / inbox e-mel anda sekiranya pautan digital tidak masuk dalam 5 minit.
                  </p>

                </div>
              )}

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
