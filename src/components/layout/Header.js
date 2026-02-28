import { LogOut, User, Bell, Settings, Search, ChevronDown, Menu } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Header({ activeTab, onMenuClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLabel = MENU_ITEMS.find((i) => i.id === activeTab)?.label || 'Dashboard';
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <header className="h-20 flex justify-between items-center px-6 md:px-10 bg-white/90 backdrop-blur-xl sticky top-0 z-40 border-b border-pink-100 holi-bg-mesh">
      {/* Holi Background Container (with overflow-hidden) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Holi Floating Colors */}
        <div className="absolute inset-0 opacity-40">
          <div className="holi-dot w-32 h-32 bg-pink-400 left-[10%] top-[-20%] animate-subtle" style={{ animationDelay: '0s' }}></div>
          <div className="holi-dot w-24 h-24 bg-purple-400 left-[40%] top-[40%] animate-subtle" style={{ animationDelay: '1s' }}></div>
          <div className="holi-dot w-40 h-40 bg-yellow-400 right-[5%] top-[-10%] animate-subtle" style={{ animationDelay: '2s' }}></div>
          <div className="holi-dot w-20 h-20 bg-emerald-400 right-[30%] bottom-[-10%] animate-subtle" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-all"
        >
          <Menu size={24} />
        </button>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-pink-500 flex items-center gap-1 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
              <span className="animate-pulse">✨</span> Festival of Colors
            </span>
          </div>
          <div className="text-sm font-medium text-slate-400 hidden sm:block mt-0.5">
            Home / <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 font-black">{currentLabel}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6 relative z-10">
        <div className="hidden md:flex items-center px-4 py-1.5 bg-linear-to-r from-pink-500 to-orange-500 rounded-full text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-pink-500/20 active:scale-95 transition-all cursor-default">
           Happy Holi 🎨
        </div>
        <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-50 rounded-full transition-all">
          <Search size={20} />
        </button>
        <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-50 rounded-full transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 md:gap-3 p-1 rounded-full hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all group"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 brand-gradient text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-md group-hover:scale-105 transition-transform">AS</div>
            <span className="text-sm font-bold text-slate-700 hidden xs:block">Aman S.</span>
            <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden z-50"
              >
                <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition-all font-medium">
                  <User size={16} /> My Profile
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition-all font-medium">
                  <Settings size={16} /> Settings
                </button>
                <div className="h-px bg-slate-100 my-2"></div>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-all font-bold">
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
