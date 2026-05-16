'use client';

import React from 'react';
import { stylesData, DesignStyle } from '@/data/styles';

export default function ComparisonView({ 
  styleIds, 
  onBack 
}: { 
  styleIds: string[], 
  onBack: () => void 
}) {
  const style1 = stylesData.find(s => s.id === styleIds[0]);
  const style2 = stylesData.find(s => s.id === styleIds[1]);

  if (!style1 || !style2) return null;

  return (
    <div className="comparison-container">
      <header className="comparison-header">
        <button className="back-btn" onClick={onBack}>← Back to Gallery</button>
        <h1>QONQU Comparison</h1>
        <p>Comparing <strong>{style1.name}</strong> vs <strong>{style2.name}</strong></p>
      </header>


      <div className="comparison-split">
        <div className="compare-pane">
          <div className="pane-header">
            <h2>{style1.name}</h2>
          </div>
          <div className="pane-preview" style={{ background: style1.background }}>
             <div className={`preview-card style-${style1.id}`}>
                <h3>{style1.name}</h3>
                <p>This is a comparison preview of the {style1.name} design style.</p>
                <button className="preview-button">Action Button</button>
             </div>
          </div>
          <div className="pane-info">
            <h3>Pros</h3>
            <ul>{style1.pros.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>

        <div className="compare-pane">
          <div className="pane-header">
            <h2>{style2.name}</h2>
          </div>
          <div className="pane-preview" style={{ background: style2.background }}>
             <div className={`preview-card style-${style2.id}`}>
                <h3>{style2.name}</h3>
                <p>This is a comparison preview of the {style2.name} design style.</p>
                <button className="preview-button">Action Button</button>
             </div>
          </div>
          <div className="pane-info">
            <h3>Pros</h3>
            <ul>{style2.pros.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: hsl(var(--bg-primary));
        }

        .comparison-header {
          padding: 2rem 4rem;
          border-bottom: 1px solid hsl(var(--border));
          background: hsl(var(--bg-secondary));
        }

        .back-btn {
          background: transparent;
          border: none;
          color: hsl(var(--accent));
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 1rem;
          display: block;
        }

        .comparison-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .comparison-split {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .compare-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-right: 1px solid hsl(var(--border));
          overflow-y: auto;
        }

        .compare-pane:last-child {
          border-right: none;
        }

        .pane-header {
          padding: 1.5rem;
          text-align: center;
          border-bottom: 1px solid hsl(var(--border));
          background: hsl(var(--bg-secondary));
        }

        .pane-preview {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .pane-info {
          padding: 3rem;
        }

        .pane-info h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .pane-info ul {
          list-style: none;
        }

        .pane-info li {
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .pane-info li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: hsl(var(--accent));
        }

        .preview-card {
          width: 100%;
          max-width: 350px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .preview-button {
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        /* Essential Global Card Styles (Simplified) */
        .style-glassmorphism { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; }
        .style-glassmorphism .preview-button { background: #fff; color: #000; border-radius: 12px; }
        
        .style-neumorphism { background: #e0e5ec; border-radius: 40px; box-shadow: 10px 10px 20px #bec3c9, -10px -10px 20px #ffffff; color: #444; }
        .style-neumorphism .preview-button { background: #e0e5ec; border-radius: 20px; box-shadow: 5px 5px 10px #bec3c9, -5px -5px 10px #ffffff; color: #444; }

        .style-neo-brutalism { background: #A3E635; border: 4px solid #000; box-shadow: 10px 10px 0px #000; color: #000; }
        .style-neo-brutalism .preview-button { background: #000; color: #fff; border: 2px solid #000; }

        .style-pink-pastel { background: white; border-radius: 32px; border: 2px solid #ffdeeb; box-shadow: 0 10px 20px rgba(255, 182, 193, 0.2); color: #ff8fab; }
        .style-pink-pastel .preview-button { background: #ffc2d1; color: #fff; border-radius: 15px; }

        .style-minimalist { background: white; border: 1px solid #eaeaea; border-radius: 4px; color: #000; }
        .style-minimalist .preview-button { background: #000; color: #fff; border-radius: 2px; }

        /* Fallback for others */
        [class^="style-"] { background: #fff; border-radius: 12px; border: 1px solid #eee; }
        [class^="style-"] .preview-button { background: #000; color: #fff; border-radius: 8px; }

        @media (max-width: 768px) {
          .comparison-split { flex-direction: column; overflow-y: auto; }
          .compare-pane { flex: none; border-right: none; border-bottom: 1px solid hsl(var(--border)); }
          .comparison-header { padding: 1.5rem 2rem; }
        }
      `}</style>
    </div>
  );
}
