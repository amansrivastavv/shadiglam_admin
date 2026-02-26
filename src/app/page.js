'use client';

import React, { useState } from 'react';

// Layout Components
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

// Dashboard Components
import StatsCards from '@/components/dashboard/StatsCards';
import LeadsSection from '@/components/dashboard/LeadsSection';
import WhatsAppFloat from '@/components/dashboard/WhatsAppFloat';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <main className="main-content">
        <Header activeTab={activeTab} />

        <section className="dashboard-content">
          {/* Credit Summary Cards */}
          <StatsCards />

          {/* Leads Management Section */}
          <LeadsSection />
        </section>

        {/* Floating Contact Utility */}
        <WhatsAppFloat />
      </main>
    </div>
  );
}
