import React from 'react';
import { EyeOff, Clock, Activity } from 'lucide-react';

const Problem = () => {
  return (
    <section className="section container">
      <h2 className="section-title">The Problem: <span className="text-gradient">Designing Blind</span></h2>
      <p className="section-subtitle">
        Designers spend hours crafting content, publish it, and then hope it performs. 
        By the time failure is discovered, the campaign window has closed.
      </p>

      <div className="grid-3">
        <div className="card glass">
          <div className="card-icon">
            <Clock size={24} />
          </div>
          <h3>Delayed Feedback Loop</h3>
          <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Users publish and wait days or weeks for performance data. The opportunity cost of a failed design is absolute.
          </p>
        </div>

        <div className="card glass">
          <div className="card-icon">
            <EyeOff size={24} />
          </div>
          <h3>Gut Instinct Decisions</h3>
          <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Critical choices—CTA placement, colors, text density—are made without data, relying entirely on intuition.
          </p>
        </div>

        <div className="card glass">
          <div className="card-icon" style={{ background: 'rgba(251, 113, 133, 0.1)', color: 'var(--accent-red)' }}>
            <Activity size={24} />
          </div>
          <h3>Locked Enterprise Science</h3>
          <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Neuroscience-grade tools exist, but cost $10k+/month and live outside the creative canvas. Everyone else designs blind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
