'use client';

import React, { useState, useEffect } from 'react';
import { DesignStyle } from '@/data/styles';

export default function StyleShowcase({ style }: { style: DesignStyle }) {
  const [customText, setCustomText] = useState('');
  const [customBgColor, setCustomBgColor] = useState('');
  const [showCode, setShowCode] = useState(false);

  // Reset custom values when style changes
  useEffect(() => {
    setCustomText('');
    setCustomBgColor(style.background);
    setShowCode(false);
  }, [style.id, style.background]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(style.cssCode);
    alert('CSS copied to clipboard!');
  };

  // Combine suggested colors with black and white, and remove duplicates
  const presetColors = Array.from(new Set([...style.suggestedColors, '#ffffff', '#000000']));

  return (
    <div className="showcase">
      <header className="showcase-header">
        <div className="header-flex">
          <h1>{style.name}</h1>
          <button 
            className={`code-toggle ${showCode ? 'active' : ''}`}
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide Code' : 'View CSS'}
          </button>
        </div>
        
        <div className="controls">
          <div className="control-item">
            <label>Custom Card Text</label>
            <input 
              type="text" 
              placeholder="Type something..." 
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
          </div>
          <div className="control-item">
            <label>Background Presets</label>
            <div className="color-swatches">
              {presetColors.map((color) => (
                <button
                  key={color}
                  className={`swatch ${customBgColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setCustomBgColor(color)}
                  title={color}
                />
              ))}
              <div className="custom-color-input">
                <input 
                  type="color" 
                  value={customBgColor.startsWith('#') ? customBgColor : '#ffffff'}
                  onChange={(e) => setCustomBgColor(e.target.value)}
                  title="Choose custom color"
                />
                <input 
                  type="text" 
                  placeholder="#HEX"
                  value={customBgColor}
                  onChange={(e) => setCustomBgColor(e.target.value)}
                  className="hex-text"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="description">{style.description}</p>
      </header>


      {showCode && (
        <div className="code-snippet">
          <div className="code-header">
            <span>CSS Snippet</span>
            <button onClick={copyToClipboard}>Copy Code</button>
          </div>
          <pre><code>{style.cssCode}</code></pre>
        </div>
      )}



      <section className="preview-area" style={{ background: customBgColor || style.background }}>
        <div className={`preview-card style-${style.id}`}>
          <div className="card-header">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="card-content">
            <h3>{customText || `${style.name} Preview`}</h3>
            <p>
              {customText 
                ? `Exploring how "${customText}" looks in the ${style.name} design system.`
                : `This is how a card looks in this style. Notice the shadows, borders, and depth.`
              }
            </p>
            <button className="preview-button">Action Button</button>
          </div>
        </div>
      </section>


      <div className="info-grid">
        <div className="info-section pros">
          <h3>Pros</h3>
          <ul>
            {style.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="info-section cons">
          <h3>Cons</h3>
          <ul>
            {style.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .showcase {
          flex: 1;
          padding: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .showcase-header {
          margin-bottom: 3rem;
        }

        .showcase-header h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg-primary));
        }

        .showcase-header .description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: hsl(var(--fg-secondary));
          max-width: 800px;
        }

        .preview-area {
          height: 500px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4rem;
          border: 1px solid hsl(var(--border));
          overflow: hidden;
          position: relative;
        }

        .preview-card {
          width: 380px;
          padding: 2rem;
          transition: transform var(--transition-slow);
        }

        .preview-card:hover {
          transform: translateY(-10px);
        }

        .card-header {
          display: flex;
          gap: 6px;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0,0,0,0.1);
        }

        .card-content h3 {
          margin-bottom: 1rem;
        }

        .card-content p {
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .preview-button {
          padding: 0.8rem 1.5rem;
          border-radius: 0.6rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        /* --- GLASSMORPHISM --- */
        .style-glassmorphism {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          color: #fff;
        }
        .style-glassmorphism .dot { background: rgba(255, 255, 255, 0.4); }
        .style-glassmorphism p { color: rgba(255, 255, 255, 0.8); }
        .style-glassmorphism .preview-button {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .style-glassmorphism .preview-button:hover { background: rgba(255, 255, 255, 0.4); }

        /* --- NEUMORPHISM --- */
        .style-neumorphism {
          background: #e0e5ec;
          border-radius: 40px;
          box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
          border: none;
          color: #444;
        }
        .style-neumorphism .preview-button {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px #bec3c9, -6px -6px 12px #ffffff;
          color: #444;
        }
        .style-neumorphism .preview-button:active {
          box-shadow: inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff;
        }

        /* --- CLAYMORPHISM --- */
        .style-claymorphism {
          background: #ffffff;
          border-radius: 48px;
          box-shadow: 
            35px 35px 70px #d1d9e6,
            inset -10px -10px 20px rgba(0,0,0,0.05),
            inset 10px 10px 20px rgba(255,255,255,0.8);
          color: #2d3436;
          border: none;
        }
        .style-claymorphism .preview-button {
          background: #6c5ce7;
          border-radius: 20px;
          color: white;
          box-shadow: 
            0 10px 20px rgba(108, 92, 231, 0.3),
            inset -4px -4px 8px rgba(0,0,0,0.2),
            inset 4px 4px 8px rgba(255,255,255,0.3);
        }

        /* --- NEO-BRUTALISM --- */
        .style-neo-brutalism {
          background: #A3E635; /* Lime green */
          border: 4px solid #000;
          box-shadow: 10px 10px 0px #000;
          border-radius: 0;
          color: #000;
        }
        .style-neo-brutalism .dot { background: #000; border-radius: 0; }
        .style-neo-brutalism .preview-button {
          background: #fff;
          border: 3px solid #000;
          box-shadow: 4px 4px 0px #000;
          color: #000;
          border-radius: 0;
        }
        .style-neo-brutalism .preview-button:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000;
        }

        /* --- PINK PASTEL --- */
        .style-pink-pastel {
          background: white;
          border-radius: 32px;
          border: 2px solid #ffdeeb;
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
          color: #d63384;
        }
        .style-pink-pastel .dot { background: #ffdeeb; }
        .style-pink-pastel .preview-button {
          background: #ff85a2;
          color: white;
          border-radius: 50px;
          box-shadow: 0 8px 15px rgba(255, 133, 162, 0.3);
        }

        /* --- MINIMALIST --- */
        .style-minimalist {
          background: white;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          color: #000;
        }
        .style-minimalist .dot { background: #eee; }
        .style-minimalist .preview-button {
          background: #000;
          color: #fff;
          border-radius: 2px;
        }

        /* --- DARK FUTURISTIC --- */
        .style-dark-futuristic {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 12px;
          color: #94a3b8;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
        }
        .style-dark-futuristic h3 { color: #22d3ee; text-shadow: 0 0 8px rgba(34, 211, 238, 0.5); }
        .style-dark-futuristic .preview-button {
          background: transparent;
          border: 1px solid #22d3ee;
          color: #22d3ee;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
        }
        .style-dark-futuristic .preview-button:hover {
          background: #22d3ee;
          color: #0f172a;
        }

        /* --- AURORA UI --- */
        .style-aurora-ui {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #333;
        }
        .style-aurora-ui .preview-button {
          background: linear-gradient(90deg, #ff9a9e 0%, #fecfef 100%);
          color: #fff;
          border: none;
          box-shadow: 0 10px 20px rgba(254, 207, 239, 0.4);
        }

        /* --- RETRO VAPORWAVE --- */
        .style-retro-vaporwave {
          background: #2d1b4e;
          border: 2px solid #ff71ce;
          border-radius: 0;
          color: #01cdfe;
          box-shadow: 8px 8px 0px #b967ff;
        }
        .style-retro-vaporwave .dot { background: #ff71ce; }
        .style-retro-vaporwave h3 { font-style: italic; color: #fff; text-shadow: 2px 2px #ff71ce; }
        .style-retro-vaporwave .preview-button {
          background: #05ffa1;
          color: #2d1b4e;
          border-radius: 0;
          border: none;
          font-family: monospace;
          box-shadow: 4px 4px 0px #ff71ce;
        }

        /* --- SKEUOMORPHISM --- */
        .style-skeuomorphism {
          background: linear-gradient(180deg, #444 0%, #222 100%);
          border-radius: 20px;
          border-top: 1px solid #666;
          border-bottom: 2px solid #000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
          color: #ddd;
        }
        .style-skeuomorphism h3 { color: #fff; }
        .style-skeuomorphism .preview-button {
          background: linear-gradient(180deg, #555 0%, #333 100%);
          border: 1px solid #111;
          border-radius: 8px;
          color: #fff;
          box-shadow: 0 4px 0 #111, inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .style-skeuomorphism .preview-button:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0 #111;
        }

        /* --- SWISS EDITORIAL --- */
        .style-swiss-editorial {
          background: #fff;
          border-left: 12px solid #000;
          padding-left: 2.5rem;
          color: #000;
          border-radius: 0;
        }
        .style-swiss-editorial h3 { font-size: 2rem; text-transform: uppercase; letter-spacing: -1px; }
        .style-swiss-editorial .preview-button {
          background: #000;
          color: #fff;
          border-radius: 0;
          padding: 1rem 2rem;
          font-weight: 800;
        }

        /* --- ORGANIC EARTH --- */
        .style-organic-earth {
          background: #fdfaf0;
          border-radius: 60px 20px 80px 30px;
          border: 1px solid #e9e2d0;
          color: #5d5c4b;
        }
        .style-organic-earth .dot { background: #dcd7c9; }
        .style-organic-earth .preview-button {
          background: #8b8a73;
          color: #fff;
          border-radius: 40px 10px;
          border: none;
        }

        /* --- BAUHAUS --- */
        .style-bauhaus {
          background: #fff;
          border: 4px solid #000;
          border-radius: 0;
          color: #000;
          position: relative;
        }
        .style-bauhaus::before {
          content: '';
          position: absolute;
          top: 0; right: 0; width: 40px; height: 40px;
          background: #ff3e00;
        }
        .style-bauhaus .dot { background: #000; border-radius: 0; }
        .style-bauhaus .preview-button {
          background: #0055ff;
          color: #fff;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #000;
        }


        .code-toggle {
          padding: 0.8rem 1.5rem;
          border-radius: 0.6rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--bg-secondary));
          color: hsl(var(--fg-primary));
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          align-self: flex-end;
        }

        .code-toggle:hover {

          background: hsl(var(--border));
        }

        .code-toggle.active {
          background: hsl(var(--fg-primary));
          color: hsl(var(--bg-primary));
        }

        .code-snippet {
          background: #1e1e1e;
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          color: #d4d4d4;
          font-family: monospace;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #333;
        }

        .code-header span {
          color: #9cdcfe;
          font-weight: 600;
        }

        .code-header button {
          background: #333;
          color: #fff;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .code-header button:hover {
          background: #444;
        }

        .code-snippet pre {
          overflow-x: auto;
          white-space: pre-wrap;
        }


        /* --- FLUID LIQUID --- */
        .style-fluid-liquid {
          background: #000;
          border-radius: 40px;
          border: 1px solid #333;
          color: #fff;
          box-shadow: 0 0 40px rgba(0, 100, 255, 0.2);
        }
        .style-fluid-liquid .preview-button {
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: #fff;
          border-radius: 30px;
          animation: liquid 4s infinite alternate;
        }
        @keyframes liquid {
          0% { border-radius: 30px 60px 30px 60px; }
          100% { border-radius: 60px 30px 60px 30px; }
        }

        /* --- FLAT DESIGN 2.0 --- */
        .style-flat-design {
          background: #f8fafc;
          border-radius: 12px;
          border: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          color: #1e293b;
        }
        .style-flat-design .preview-button {
          background: #3b82f6;
          color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
        }
        .style-flat-design .preview-button:hover {
          background: #2563eb;
        }

        /* --- GLASS DARK --- */
        .style-glass-dark {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          color: #fff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .style-glass-dark .preview-button {
          background: #fff;
          color: #000;
        }

        /* --- 90s WEB --- */
        .style-90s-web {
          background: #c0c0c0;
          border: 2px solid;
          border-color: #fff #808080 #808080 #fff;
          border-radius: 0;
          color: #000;
          font-family: "Times New Roman", Times, serif;
        }
        .style-90s-web .card-header { background: #000080; padding: 4px; margin-bottom: 1rem; }
        .style-90s-web .dot { background: #fff; border-radius: 0; }
        .style-90s-web .preview-button {
          background: #c0c0c0;
          border: 2px solid;
          border-color: #fff #808080 #808080 #fff;
          color: #000;
          padding: 2px 10px;
        }

        /* --- TERMINAL --- */
        .style-terminal {
          background: #000;
          border: 1px solid #333;
          border-radius: 0;
          color: #0f0;
          font-family: monospace;
        }
        .style-terminal .dot { background: #333; }
        .style-terminal .preview-button {
          background: #0f0;
          color: #000;
          border-radius: 0;
          border: none;
        }

        /* --- MODERN LUXURY --- */
        .style-modern-luxury {
          background: #1a1a1a;
          border-radius: 0;
          border: 1px solid #333;
          color: #d4af37; /* Gold */
          font-family: serif;
          text-align: center;
        }
        .style-modern-luxury h3 { font-size: 2.5rem; letter-spacing: 4px; text-transform: uppercase; }
        .style-modern-luxury .preview-button {
          background: transparent;
          border: 1px solid #d4af37;
          color: #d4af37;
          border-radius: 0;
          padding: 1rem 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* --- BRUTALISM CLASSIC --- */
        .style-brutalism-classic {
          background: #808080;
          border: 10px solid #555;
          border-radius: 0;
          color: #fff;
          font-family: sans-serif;
          font-weight: 900;
        }
        .style-brutalism-classic .preview-button {
          background: #000;
          color: #fff;
          border: none;
          padding: 2rem;
          width: 100%;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .showcase-header h1 {
          font-size: 3rem;
          margin: 0;
        }

        .controls {
          display: flex;
          gap: 2rem;
          background: hsl(var(--bg-secondary));
          padding: 1.5rem;
          border-radius: var(--radius);
          border: 1px solid hsl(var(--border));
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .control-item {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          min-width: 200px;
        }

        .color-swatches {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .control-item label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: hsl(var(--fg-secondary));
        }

        .control-item input[type="text"] {
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--bg-primary));
          color: hsl(var(--fg-primary));
          font-size: 0.9rem;
          width: 100%;
        }

        .swatch {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: transform 0.2s, border-color 0.2s;
          padding: 0;
        }

        .swatch:hover {
          transform: scale(1.1);
        }

        .swatch.active {
          border-color: hsl(var(--fg-primary));
          transform: scale(1.1);
        }

        .custom-color-input {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-left: 0.75rem;
          border-left: 1px solid hsl(var(--border));
          margin-left: 0.25rem;
        }

        .custom-color-input input[type="color"] {
          width: 24px;
          height: 24px;
          border: none;
          padding: 0;
          background: none;
          cursor: pointer;
          border-radius: 4px;
        }

        .hex-text {
          width: 80px !important;
          padding: 0.3rem 0.5rem !important;
          font-size: 0.75rem !important;
          font-family: monospace;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 4rem;
        }

        .info-section h3 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .info-section ul {
          list-style: none;
        }

        .info-section li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.5;
        }

        .pros li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .cons li::before {
          content: '✕';
          position: absolute;
          left: 0;
          color: #ef4444;
          font-weight: bold;
        }


        @media (max-width: 768px) {
          .showcase { padding: 1.5rem; }
          .header-flex { 
            flex-direction: row; 
            align-items: center;
            justify-content: space-between;
          }
          .showcase-header h1 { font-size: 2rem; }
          .code-toggle { padding: 0.6rem 1rem; font-size: 0.8rem; }
          .controls { 
            flex-direction: column; 
            gap: 1.5rem; 
            padding: 1rem;
          }
          .control-item { min-width: 100%; }
          .custom-color-input { 
            border-left: none; 
            border-top: 1px solid hsl(var(--border)); 
            padding-left: 0; 
            padding-top: 0.75rem; 
            margin-left: 0; 
            width: 100%;
          }
          .hex-text { flex: 1; }
          .preview-area { 
            height: auto; 
            min-height: 450px; 
            margin-top: 1rem; 
            padding: 4rem 1.5rem; /* Extra breathing room for mobile */
          }
          .preview-card { 
            width: 90%; /* Don't touch the edges */
            max-width: 400px;
            margin: 0 auto;
          }
          .info-grid { grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
        }




      `}</style>
    </div>
  );
}

