import React from 'react';
import { Brain, HeartPulse, Share2 } from 'lucide-react';

const Science = () => {
  return (
    <section className="section container" style={{ background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.05) 0%, transparent 70%)" }}>
      <h2 className="section-title">The Science</h2>
      <p className="section-subtitle">Converging breakthroughs in AI research, reaching production maturity in 2026.</p>

      <div className="grid-3">
        <div className="card">
          <div className="card-icon" style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-cyan)' }}>
            <Brain size={24} />
          </div>
          <h3>Predictive Attention</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Attention models trained on 300,000+ participants across 20 years of eye-tracking studies. Forecasts where eyes will travel with 95%+ accuracy.
          </p>
        </div>

        <div className="card">
          <div className="card-icon" style={{ background: 'rgba(192, 132, 252, 0.1)', color: 'var(--accent-purple)' }}>
            <HeartPulse size={24} />
          </div>
          <h3>Emotion AI</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Element-level emotion detection via LLaMA-70B multi-agent architecture. Identifies which specific design choices trigger specific feelings (trust, urgency, warmth).
          </p>
        </div>

        <div className="card">
          <div className="card-icon" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8' }}>
            <Share2 size={24} />
          </div>
          <h3>Virality & Memorability</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Neural networks measuring image memorability and semantic distinctiveness. Identifies content that will outperform before it is published.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Science;
