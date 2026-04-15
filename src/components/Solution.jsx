import React, { useState } from 'react';
import { Target, Heart, Users, LineChart, Wand2 } from 'lucide-react';

const layers = [
  {
    id: 1,
    icon: Target,
    title: 'Attention Mapping',
    desc: 'Live heatmap showing where viewers\' eyes travel in 3 seconds. Scores element visibility and flags contrast or positioning issues.'
  },
  {
    id: 2,
    icon: Heart,
    title: 'Emotional Resonance',
    desc: 'Models the emotional response (trust, urgency, warmth). Identifies which design choices drive signals and catches intent misalignment.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Audience Persona Simulation',
    desc: 'Simulates a specific demographic\'s cognitive journey (e.g. Gen Z on TikTok). This is focus group testing without the focus group.'
  },
  {
    id: 4,
    icon: LineChart,
    title: 'Engagement Prediction',
    desc: 'Scores predicted performance on IG, LinkedIn, TikTok. Analyzes aspect ratios, complexity, and format optimization data.'
  },
  {
    id: 5,
    icon: Wand2,
    title: 'Prescriptive Auto-Optimization',
    desc: 'One click generates 3-5 variants tuned for persona/platform, with every change and predicted impact metric explained in detail.'
  }
];

const Solution = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section container">
      <h2 className="section-title">The Solution: <span className="text-gradient">Five Layers</span> of Cognitive Intelligence</h2>
      <p className="section-subtitle">A revolutionary real-time intelligence loop operating entirely within the Adobe Express canvas.</p>
      
      <div className="tabs-container">
        <div className="tabs-nav">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <button 
                key={layer.id} 
                className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon size={16} /> 0{layer.id}
              </button>
            )
          })}
        </div>

        <div className="tab-content glass">
          <div style={{ flex: 1, paddingRight: '2rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {React.createElement(layers[activeTab].icon, { size: 32, className: 'text-gradient' })}
              {layers[activeTab].title}
            </h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              {layers[activeTab].desc}
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Visual Placeholder for layer */}
            <div style={{ 
              width: '100%', height: '250px', 
              background: `linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(192, 132, 252, 0.1))`,
              borderRadius: '1rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
               <span style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.2)', fontSize: '4rem' }}>
                 LAYER {layers[activeTab].id}
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
