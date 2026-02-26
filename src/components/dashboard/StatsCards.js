'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy } from 'lucide-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden card-mesh flex flex-col justify-center min-h-[160px] md:min-h-[200px]"
      >
        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Credit Available</span>
        <div className="flex items-center gap-3 md:gap-4 my-3 md:my-4">
          <span className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none">156</span>
          <span className="bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center">
             <Sparkles size={10} className="mr-1 md:mr-1.5" />
             Standard
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 border-t border-slate-50 pt-4 mt-2">
           <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-slate-400">Plan</span>
              <span className="text-[11px] font-bold text-slate-700">Business v3</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-slate-400">Start</span>
              <span className="text-[11px] font-bold text-slate-700">05/02/26</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-slate-400">Expiry</span>
              <span className="text-[11px] font-bold text-brand-red">04/08/26</span>
           </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="mt-6 self-start px-4 py-2 bg-brand-blue text-white rounded-xl font-bold text-xs shadow-md shadow-brand-blue/20 hover:brightness-110 transition-all uppercase"
        >
          Renew Plan
        </motion.button>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden card-mesh flex flex-col justify-center min-h-[160px] md:min-h-[200px]"
      >
        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Bonus Credits</span>
        <div className="flex items-center gap-3 md:gap-4 my-3 md:my-4">
          <span className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none">1</span>
          <span className="bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center">
             <Trophy size={10} className="mr-1 md:mr-1.5" />
             Active
          </span>
        </div>
      </motion.div>
    </div>
  );
}
