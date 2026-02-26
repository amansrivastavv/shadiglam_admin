'use client';

import React from 'react';
import { Tag } from 'lucide-react';

export default function LeadCard({ lead }) {
  return (
    <div className="lead-card">
       <div className="lead-name">{lead.name}</div>
       <div className="lead-actions">
          <div className="badge badge-newly">
             <Tag size={12} />
             Newly Added
          </div>
          <button className="btn-small">New Plan Purchase</button>
          <button className="btn-small">Unlock</button>
       </div>
       <div className="lead-details">
          <div className="detail-row">
             <span className="detail-label">Budget:</span>
             <span className="detail-value">{lead.budget}</span>
          </div>
          <div className="detail-row">
             <span className="detail-label">Event Date:</span>
             <span className="detail-value">{lead.eventDate}</span>
          </div>
          <div className="detail-row">
             <span className="detail-label">Uploaded On:</span>
             <span className="detail-value">{lead.uploadedOn}</span>
          </div>
          <div className="detail-row">
             <span className="detail-label">Tentative Date:</span>
             <span className="detail-value">{lead.tentativeDate}</span>
          </div>
       </div>
    </div>
  );
}
