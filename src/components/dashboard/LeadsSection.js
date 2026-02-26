'use client';

import React, { useState } from 'react';
import { LEADS_DATA } from '@/constants';
import LeadCard from './LeadCard';

export default function LeadsSection() {
  const [activeLeadTab, setActiveLeadTab] = useState('new');

  return (
    <div className="leads-tabs-container">
      <div className="tabs-header">
        <button 
          className={`tab-btn ${activeLeadTab === 'new' ? 'active' : ''}`}
          onClick={() => setActiveLeadTab('new')}
        >
          New Leads
        </button>
        <button 
          className={`tab-btn ${activeLeadTab === 'unlock' ? 'active' : ''}`}
          onClick={() => setActiveLeadTab('unlock')}
        >
          Unlock Leads
        </button>
      </div>

      <div className="filter-bar">
        <div className="filter-left">
          Show 
          <select className="filter-select">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries
        </div>
        <div className="filter-right">
          Search:
          <input type="text" className="filter-input" />
        </div>
      </div>

      <div className="leads-grid">
        {LEADS_DATA.map((lead, index) => (
          <LeadCard key={index} lead={lead} />
        ))}
      </div>
    </div>
  );
}
