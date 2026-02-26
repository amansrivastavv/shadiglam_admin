'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Star, X } from 'lucide-react';

export default function PromotionBanner({ onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative overflow-hidden group"
    >
      <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row items-center gap-8 border border-white/10 relative z-10">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded-full transition-all z-20"
        >
          <X size={18} />
        </button>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-brand-blue/30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] -ml-32 -mb-32" />
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 mb-6 group-hover:scale-105 transition-transform duration-500">
            <Sparkles size={14} className="text-amber-400" fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Monthly Spotlight</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
            Elevate Your Brand to <span className="text-brand-red">Prime Status</span>
          </h2>
          
          <p className="text-white/60 text-sm md:text-base mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join the top 5% of wedding artists this season. Get featured on our home page and receive <span className="text-white font-bold italic">3x more high-value enquiries</span> from premium clients.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-brand-red text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-red/20">
              Apply for Spotlight
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 group/btn">
              Explore Benefits
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Visual Element/Featured Artist Concept */}
        <div className="relative w-full lg:w-48 xl:w-64 h-48 lg:h-64 flex flex-col items-center justify-center">
           <div className="absolute inset-0 bg-white/5 rounded-[40px] rotate-6 border border-white/5 -z-10 group-hover:rotate-12 transition-transform duration-700"></div>
           <div className="absolute inset-0 bg-white/5 rounded-[40px] -rotate-3 border border-white/5 -z-10 group-hover:-rotate-6 transition-transform duration-700"></div>
           
           <div className="w-40 h-40 md:w-48 md:h-48 rounded-[32px] bg-linear-to-tr from-slate-800 to-slate-700 border-2 border-white/20 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
              <Award size={48} className="text-amber-400 mb-4" />
              <div className="space-y-1">
                <p className="text-xs font-black text-white uppercase tracking-tighter">Artist of the month</p>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#fbbf24" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-[10px] text-white/40 pt-2 font-medium italic">&quot;Shadi Glam boosted my bookings by 40%&quot;</p>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
