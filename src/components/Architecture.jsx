import React from 'react';
import { Database, Monitor, Cpu } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="section container" style={{ background: "radial-gradient(circle at 100% 50%, rgba(192, 132, 252, 0.05) 0%, transparent 60%)" }}>
      <h2 className="section-title">Technical <span className="text-gradient">Architecture</span></h2>
      <p className="section-subtitle">Fully realizable within the Adobe Express add-on SDK dual-runtime constraint.</p>

      <div className="grid-2">
        <div className="card glass">
          <Monitor className="card-icon" />
          <h3>Iframe Runtime</h3>
          <p className="text-muted" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Handles all cognitive intelligence processing. Receives design state, calls external AI models via fetch(), renders heatmap overlays using React + Canvas SVG, and manages the agentic variant optimization engine.
          </p>
          <div className="badge">React + Canvas</div>
        </div>

        <div className="card glass">
          <Database className="card-icon" style={{ background: 'rgba(251, 113, 133, 0.1)', color: 'var(--accent-red)' }} />
          <h3>Document Sandbox</h3>
          <p className="text-muted" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Reads complete design state via Document API (element positions, fonts, images). Receives optimization instructions from iframe and mutates the canvas via addPage(), RectangleNode, and TextNode.
          </p>
          <div className="badge">Express SDK</div>
        </div>

        <div className="card glass" style={{ gridColumn: '1 / -1' }}>
          <Cpu className="card-icon" style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-cyan)' }} />
          <h3>AI Pipeline Orchestration</h3>
          <p className="text-muted" style={{ marginTop: '1rem' }}>
            Multi-model architecture combining open-source saliency networks (DeepGaze) for attention mapping and LLaMA-3.3-70B for modular element-level emotion extraction. Drives Firefly credit consumption automatically by generating modified replacement background images and AI assets during auto-optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
