'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, X } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';

export default function Sidebar({ activeTab, onTabChange, isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={false}
        animate={{ x: (isMobile && !isOpen) ? '-100%' : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed inset-y-0 left-0 z-60 w-[280px] sidebar-gradient text-white flex flex-col shadow-2xl lg:static lg:translate-x-0`}
      >
        <div className="p-8 pb-10 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-brand-red">Shadi</span>
            <span>Glam</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={`group flex items-center gap-4 px-8 py-3.5 cursor-pointer transition-all duration-300 relative ${
                  isActive ? 'text-slate-800 font-bold' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-y-1.5 inset-x-3 bg-white/10 rounded-xl z-0 border border-white/5"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 top-3 bottom-3 w-1.5 bg-brand-red rounded-r-full z-10 shadow-[0_0_12px_rgba(229,75,75,0.6)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className={`relative z-10 transition-all duration-300 ${isActive ? 'text-white scale-105' : 'text-white/60 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                <span className={`relative z-10 text-[14px] font-medium tracking-wide transition-all duration-300 ${isActive ? 'text-white translate-x-1' : 'text-white/60 group-hover:text-white group-hover:translate-x-1'}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>

        <div className="p-6 mt-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-4 cursor-pointer group hover:bg-white/15 transition-all"
          >
             <div className="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <LayoutGrid size={20} />
             </div>
             <div className="flex flex-col text-left">
                <p className="text-sm font-bold text-white leading-tight">Go Pro</p>
                <p className="text-[10px] text-white/60 font-medium">Unlock full metrics</p>
             </div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
