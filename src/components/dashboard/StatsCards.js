'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy, Palette, Zap } from 'lucide-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden holi-bg-mesh flex flex-col justify-center min-h-[160px] md:min-h-[200px] group"
      >
        {/* Holi Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="holi-dot w-20 h-20 bg-pink-400 left-[-10%] top-[-10%]"></div>
          <div className="holi-dot w-16 h-16 bg-yellow-400 right-[-5%] bottom-[10%]"></div>
        </div>

        {/* Holi Elements Illustration */}
        <motion.img 
          src="/holi_elements.png" 
          alt="Holi Celebration"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: [0, -8, 0]
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-28 sm:w-36 md:w-44 lg:w-48 object-contain pointer-events-none drop-shadow-2xl z-0 select-none group-hover:scale-105 transition-transform duration-500 opacity-30 sm:opacity-100"
        />

        <div className="relative z-10 w-full pr-12 sm:pr-0">
          <div className="flex justify-between items-start">
            <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Credit Available</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-500 rounded-full text-[9px] font-black uppercase tracking-tighter border border-pink-100 animate-pulse">
              <Palette size={10} /> Holi Offer
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 my-3 md:my-4">
            <span className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none">156</span>
            <span className="bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center">
               <Sparkles size={10} className="mr-1 md:mr-1.5" />
               Standard
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 border-t border-pink-50 pt-3 mt-1.5">
             <div className="flex flex-col">
                <span className="text-[8px] md:text-[9px] uppercase font-black text-slate-400 tracking-tighter">Plan</span>
                <span className="text-[10px] md:text-[11px] font-bold text-slate-700 truncate">Business v3</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[8px] md:text-[9px] uppercase font-black text-slate-400 tracking-tighter">Start</span>
                <span className="text-[10px] md:text-[11px] font-bold text-slate-700">05/02/26</span>
             </div>
             <div className="flex flex-col pr-2">
                <span className="text-[8px] md:text-[9px] uppercase font-black text-slate-400 tracking-tighter">Expiry</span>
                <span className="text-[10px] md:text-[11px] font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-orange-500">04/08/26</span>
             </div>
          </div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="mt-6 self-start px-5 py-2.5 bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-xl font-black text-[10px] shadow-lg shadow-pink-500/20 hover:brightness-110 transition-all uppercase tracking-wider"
          >
            Renew Plan 🎨
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[160px] md:min-h-[200px]"
      >
        {/* Holi Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="holi-dot w-24 h-24 bg-purple-400 left-[20%] top-[-10%]"></div>
          <div className="holi-dot w-32 h-32 bg-emerald-400 right-[-10%] bottom-[-10%]"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Bonus Credits</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[9px] font-black uppercase tracking-tighter border border-purple-100 italic">
              <Zap size={10} className="fill-current" /> Gulal Bonus
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 my-3 md:my-4">
            <span className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none">1</span>
            <span className="bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center">
               <Trophy size={10} className="mr-1 md:mr-1.5" />
               Active
            </span>
          </div>

          <div className="p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 mt-2">
             <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">Festive Offer</p>
             <p className="text-xs text-slate-600 font-bold leading-relaxed">
               Celebrate Holi with extra credits and vibrant leads! 🌈
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
