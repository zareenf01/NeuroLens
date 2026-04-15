import React from 'react';

const Business = () => {
  return (
    <section className="section container">
      <h2 className="section-title">The <span className="text-gradient">Moat</span> & Model</h2>
      <p className="section-subtitle">A paradigm shift driving user retention and Firefly API usage.</p>

      <div className="grid-3">
        <div className="card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Free Tier</h3>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '1rem' }}>$0<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span></div>
          <ul style={{ listStyle: 'none', gap: '0.75rem', display: 'flex', flexDirection: 'column', color: 'var(--text-muted)' }}>
            <li>10 Analyses / month</li>
            <li>Attention Heatmaps</li>
            <li>2 Basic Personas</li>
            <li>Text-based suggestions</li>
          </ul>
        </div>

        <div className="card glass" style={{ transform: 'scale(1.05)', borderColor: 'var(--border-glow)', boxShadow: '0 0 30px rgba(34, 211, 238, 0.1)' }}>
          <div className="badge" style={{ position: 'absolute', top: '-12px', right: '1rem', background: 'var(--bg-color)' }}>Most Popular</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Pro Tier</h3>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '1rem' }}>$15<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span></div>
          <ul style={{ listStyle: 'none', gap: '0.75rem', display: 'flex', flexDirection: 'column', color: 'var(--text-muted)' }}>
            <li style={{ color: 'var(--text-main)' }}>Unlimited Analyses</li>
            <li>Full Emotion Scoring</li>
            <li>15+ Audience Personas</li>
            <li style={{ color: 'var(--text-main)' }}>One-click auto-optimization</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Team Tier</h3>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: '700', marginBottom: '1rem' }}>$35<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/seat</span></div>
          <ul style={{ listStyle: 'none', gap: '0.75rem', display: 'flex', flexDirection: 'column', color: 'var(--text-muted)' }}>
            <li>Custom Personas</li>
            <li>A/B Variant History</li>
            <li>Exportable Cognitive Reports</li>
            <li>Priority Processing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Business;
