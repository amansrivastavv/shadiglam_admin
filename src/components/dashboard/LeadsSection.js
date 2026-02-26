'use client';

import { useState, useMemo } from 'react';
import { LEADS_DATA } from '@/constants';
import LeadCard from './LeadCard';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadsSection() {
  const [activeTab, setActiveTab] = useState('new');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Logic for pagination
  const totalItems = LEADS_DATA.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const currentLeads = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return LEADS_DATA.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, itemsPerPage]);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-md overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl relative">
      <div className="bg-slate-50/50 p-3 md:p-4 flex flex-col lg:flex-row gap-4 border-b border-slate-100 items-start lg:items-center px-4 md:px-6">
        <div className="shrink-0 flex bg-white shadow-sm rounded-xl md:rounded-2xl p-1 border border-slate-200 w-fit lg:w-auto overflow-x-auto no-scrollbar transition-all">
           {[
             { id: 'new', label: 'New Leads' },
             { id: 'unlocked', label: 'Unlocked Leads' }
           ].map((tab) => (
             <button
               key={tab.id}
               onClick={() => { setActiveTab(tab.id); setCurrentPage(1); }}
               className={`relative flex-none px-6 md:px-10 py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center shrink-0 min-w-max ${
                 activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-800'
               }`}
             >
               {activeTab === tab.id && (
                 <motion.div 
                   layoutId="tab-pill"
                   className="absolute inset-0 bg-brand-blue rounded-lg md:rounded-xl z-0 shadow-lg shadow-brand-blue/20"
                   transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                 />
               )}
               <span className="relative z-10">{tab.label}</span>
             </button>
           ))}
        </div>
        
        <div className="w-full lg:w-auto lg:ml-auto flex items-center justify-between lg:justify-end gap-3 md:gap-6">
           <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400">
             Show 
             <select 
               className="bg-white border border-slate-200 rounded-lg px-1.5 md:px-2 py-1 text-slate-700 outline-none"
               value={itemsPerPage}
               onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
             >
               <option value={6}>6</option>
               <option value={12}>12</option>
               <option value={18}>18</option>
             </select>
           </div>

           <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[10px] md:text-xs text-slate-400 font-bold">
                {currentPage}/{totalPages}
              </span>
              <div className="flex border border-slate-200 rounded-lg md:rounded-xl overflow-hidden bg-white shadow-sm">
                 <button 
                  disabled={currentPage === 1}
                  onClick={goToPrevPage}
                  className="p-2 md:p-2.5 hover:bg-slate-50 disabled:opacity-20 text-slate-600 border-r border-slate-100"
                 >
                   <ChevronLeft size={18} />
                 </button>
                 <button 
                  disabled={currentPage === totalPages}
                  onClick={goToNextPage}
                  className="p-2 md:p-2.5 hover:bg-slate-50 disabled:opacity-20 text-slate-600"
                 >
                   <ChevronRight size={18} />
                 </button>
              </div>
           </div>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-3 md:gap-4 items-center bg-white border-b border-slate-50">
        <div className="relative flex-1 group w-full">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
          <input 
            type="text" 
            placeholder="Search leads..." 
            className="w-full pl-10 pr-4 py-2.5 md:py-3.5 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl text-xs md:text-sm outline-none focus:bg-white focus:border-brand-blue transition-all font-medium"
          />
        </div>
        
        <button className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3.5 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95 w-full sm:w-auto justify-center">
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>
      </div>

      <div className="p-4 md:p-6 min-h-[400px] md:min-h-[600px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div 
            key={currentPage + activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {currentLeads.map((lead, index) => (
              <LeadCard 
                key={currentPage + index} 
                lead={lead} 
                index={index} 
                onViewDetails={() => setSelectedLead(lead)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {currentLeads.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Search size={48} className="mb-4 opacity-20" />
            <p className="font-bold">No leads found</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{selectedLead.name}</h3>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-tighter mt-1">Lead Details Card</p>
                </div>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="p-3 bg-white hover:bg-slate-100 rounded-2xl shadow-sm border border-slate-200 transition-all active:scale-95"
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <DetailItem label="Budget Range" value={selectedLead.budget} icon={<IndianRupee size={16}/>} />
                   <DetailItem label="Event Date" value={selectedLead.eventDate} icon={<Calendar size={16}/>} />
                   <DetailItem label="Location" value={selectedLead.location} icon={<MapPin size={16}/>} />
                   <DetailItem label="Requirements" value={selectedLead.requirement} icon={<Search size={16}/>} />
                </div>
                <div className="p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                   <p className="text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Message from Customer</p>
                   <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                     &ldquo;Looking for a premium venue with catering for 200+ guests. Interested in Shadi Glam&apos;s exclusive wedding packages.&rdquo;
                   </p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4">
                 <button className="flex-1 py-4 bg-brand-blue text-white rounded-2xl font-black uppercase text-sm shadow-xl shadow-brand-blue/20 hover:brightness-110 transition-all active:scale-95">
                   Unlock Full Contact
                 </button>
                 <button 
                   onClick={() => setSelectedLead(null)}
                   className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black uppercase text-sm hover:bg-slate-50 transition-all active:scale-95"
                 >
                   Discard
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailItem({ label, value, icon }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-slate-400">
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
          {icon}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-sm font-bold text-slate-800 ml-10">{value}</p>
    </div>
  );
}

import { X, IndianRupee, Calendar, MapPin } from 'lucide-react';
