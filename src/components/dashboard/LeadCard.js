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
      className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg flex flex-col gap-4 group relative ${isPrime ? 'ring-1 ring-amber-400/30' : ''}`}
    >
      <div className="flex justify-between items-center">
        <h4 className={`text-base font-bold transition-colors truncate ${isPrime ? 'text-amber-600' : 'text-slate-800'} group-hover:text-brand-blue`}>
          {lead.name}
        </h4>
        {isPrime ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[9px] font-black uppercase tracking-wider border border-amber-100 shadow-sm">
            <Crown size={10} fill="currentColor" />
            Prime
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2 py-0.5 border border-brand-blue/20 bg-brand-blue/5 text-brand-blue rounded text-[10px] font-black uppercase">
            New
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
        {[
          { icon: <IndianRupee size={13}/>, label: 'Budget', value: lead.budget },
          { icon: <Calendar size={13}/>, label: 'Event', value: lead.eventDate },
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
        <button className={`flex-[1.5] py-2 rounded-lg text-[11px] font-bold transition-all shadow-sm active:scale-95 uppercase flex items-center justify-center gap-1.5 ${isPrime ? 'bg-amber-500 hover:bg-amber-600' : 'bg-brand-blue hover:brightness-110'} text-white`}>
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
