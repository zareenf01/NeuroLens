import React from 'react';
import { Eye, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">
          <Sparkles size={16} className="mr-2" style={{ marginRight: '8px' }} />
          Adobe Express Add-on | Confidential v1.0
        </div>
        
        <h1>
          The Cognitive Design <br />
          <span className="text-gradient">Intelligence Engine</span>
        </h1>
        
        <p>
          Predict how humans will perceive, feel about, and engage with your design before a single person sees it. Then optimize it in one click.
        </p>
        
        <div className="metrics-bar">
          <div className="metric">
            <div className="metric-value">96%</div>
            <div className="metric-label">Attention Accuracy</div>
          </div>
          <div className="metric">
            <div className="metric-value">89.8%</div>
            <div className="metric-label">Virality Prediction</div>
          </div>
          <div className="metric text-gradient">
            <div className="metric-value">0</div>
            <div className="metric-label">Competitors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
