'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';

export default function Header({ activeTab }) {
  const currentLabel = MENU_ITEMS.find((i) => i.id === activeTab)?.label || 'Dashboard';
  
  return (
    <header className="top-header">
      <div className="breadcrumb">
        Home / {currentLabel}
      </div>
      <button className="logout-btn">
        <div className="logout-icon">
           <LogOut size={20} strokeWidth={2} />
        </div>
        Logout
      </button>
    </header>
  );
}
