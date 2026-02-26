'use client';

import React from 'react';
import { UserRound } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-shadi">Shadi</span>
        <span className="logo-glam">Glam</span>
      </div>

      <div className="sidebar-profile">
        <div className="profile-icon">
          <UserRound size={24} strokeWidth={2} />
        </div>
        <div className="profile-info">
          <div className="profile-name">Aman Srivastav</div>
          <div className="profile-email">Aman@gmail.com</div>
        </div>
      </div>
      <div className="sidebar-divider"></div>

      <nav className="sidebar-nav">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <div className="nav-icon">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
