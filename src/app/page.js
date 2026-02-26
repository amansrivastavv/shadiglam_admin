'use client';

import React, { useState } from 'react';

// Layout Components
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

// Dashboard Components
import StatsCards from '@/components/dashboard/StatsCards';
import PromotionBanner from '@/components/dashboard/PromotionBanner';
import LeadsSection from '@/components/dashboard/LeadsSection';
import WhatsAppFloat from '@/components/dashboard/WhatsAppFloat';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-900 relative">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={(tab) => { setActiveTab(tab); setIsSidebarOpen(false); }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header 
          activeTab={activeTab} 
          onMenuClick={() => setIsSidebarOpen(true)} 
        />

        <section className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto no-scrollbar pb-24">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            {/* Credit Summary Cards */}
            <StatsCards />

            {/* Featured Artist / Promotion Spot (Dismissible) */}
            <AnimatePresence>
              {showBanner && (
                <PromotionBanner onClose={() => setShowBanner(false)} />
              )}
            </AnimatePresence>

            {/* Leads Management Section */}
            <LeadsSection />
          </div>
        </section>

        {/* Floating Contact Utility */}
        <WhatsAppFloat />
      </main>
    </div>
  );
}
