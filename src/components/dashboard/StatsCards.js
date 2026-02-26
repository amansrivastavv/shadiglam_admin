'use client';

import React from 'react';

export default function StatsCards() {
  return (
    <div className="credits-container">
      <div className="credit-card">
        <div className="credit-card-content">
          <span className="credit-label">Credits Available</span>
          <div className="credit-value-box">0</div>
        </div>
        <div className="reminder-bar">
          <span>Reminder:</span>
          <button className="plan-purchase-btn">New Plan Purchase</button>
        </div>
      </div>
      
      <div className="credit-card">
        <div className="credit-card-content">
          <span className="credit-label">Bonus Credits Available</span>
          <div className="credit-value-box">1</div>
        </div>
      </div>
    </div>
  );
}
