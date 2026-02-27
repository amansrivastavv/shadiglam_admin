'use client';

import { motion } from 'framer-motion';
import { Tag, Calendar, MapPin, IndianRupee, Clock, Unlock, Crown } from 'lucide-react';

export default function LeadCard({ lead, index, onViewDetails }) {
  const isPrime = lead.type === 'prime';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className={`p-5 rounded-2xl border ${isPrime ? 'border-amber-200/50 bg-linear-to-br from-amber-50/50 to-orange-50/30' : 'border-slate-200 bg-linear-to-br from-white to-slate-50'} shadow-sm transition-all hover:shadow-lg flex flex-col gap-4 group relative ${isPrime ? 'ring-1 ring-amber-400/30' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col min-w-0 pr-2">
          <h4 className={`text-base font-bold transition-colors truncate ${isPrime ? 'text-amber-600' : 'text-slate-800'} group-hover:text-brand-primary`}>
            {lead.name}
          </h4>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold mt-1 tracking-wider uppercase">
            <Clock size={10} />
            <span>Uploaded: <span className="text-slate-600">{lead.uploadedOn}</span></span>
          </div>
        </div>
        {isPrime ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[9px] font-black uppercase tracking-wider border border-amber-100 shadow-sm shrink-0">
            <Crown size={10} fill="currentColor" />
            Prime
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2 py-0.5 border border-brand-primary/20 bg-brand-primary/5 text-brand-primary rounded text-[10px] font-black uppercase shrink-0">
            New
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center p-3 rounded-xl bg-linear-to-r from-brand-primary/15 to-rose-500/10 border border-brand-primary/20">
           <div className="flex items-center gap-2">
             <div className="p-1.5 brand-gradient rounded-md shadow-sm text-white">
               <IndianRupee size={14} />
             </div>
             <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">Budget</span>
           </div>
           <span className="text-sm font-black text-slate-800">{lead.budget}</span>
        </div>
        
        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-100 border border-slate-200">
           <div className="flex items-center gap-2">
             <div className="p-1.5 bg-white rounded-md shadow-sm text-slate-600">
               <Calendar size={14} />
             </div>
             <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Event</span>
           </div>
           <span className="text-sm font-black text-slate-800">{lead.eventDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
        {[
          { icon: <MapPin size={13}/>, label: 'Location', value: lead.location },
          { icon: <Clock size={13}/>, label: 'Needs', value: lead.requirement },
        ].map((item, i) => (
          <div key={i} className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 text-slate-400 mb-0.5">
              {item.icon}
              <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
            </div>
            <span className="text-[11px] font-bold text-slate-700 truncate">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button className={`flex-[1.5] py-2 rounded-lg text-[11px] font-bold transition-all shadow-sm active:scale-95 uppercase flex items-center justify-center gap-1.5 text-white ${isPrime ? 'bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/30' : 'brand-gradient hover:opacity-90 shadow-brand-primary/30'}`}>
           <Unlock size={12} />
           {isPrime ? 'Unlock Prime' : 'Unlock'}
        </button>
        <button 
          onClick={onViewDetails}
          className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-[11px] font-bold hover:bg-slate-100 transition-all active:scale-95 uppercase"
        >
          Details
        </button>
      </div>
    </motion.div>
  );
}
