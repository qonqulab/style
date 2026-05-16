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

  const getDynamicCSS = () => {
    return style.cssCode.replace(/\[BG_COLOR\]/g, customBgColor || style.background);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getDynamicCSS());
    alert('Full Component CSS copied to clipboard!');
  };

  // Combine suggested colors with black and white, and remove duplicates
  const presetColors = Array.from(new Set([...style.suggestedColors, '#ffffff', '#000000']));

  return (
    <div className="showcase">
      <header className="showcase-header">
        <div className="header-flex">
          <h1>{style.name}</h1>
          <div className="header-actions">
            <button className="pdf-btn" onClick={() => window.print()}>
              <span>📄</span> Export PDF
            </button>
            <button 
              className={`code-toggle ${showCode ? 'active' : ''}`}
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide CSS' : 'View CSS'}
            </button>
          </div>
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
            <span>Dynamic Component CSS</span>
            <button onClick={copyToClipboard}>Copy Full Code</button>
          </div>
          <pre><code>{getDynamicCSS()}</code></pre>
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

      <section className="info-grid">
        <div className="info-card pros">
          <h3>Advantages</h3>
          <ul>
            {style.pros.map((pro, i) => <li key={i}>{pro}</li>)}
          </ul>
        </div>
        <div className="info-card cons">
          <h3>Considerations</h3>
          <ul>
            {style.cons.map((con, i) => <li key={i}>{con}</li>)}
          </ul>
        </div>
      </section>






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
          border: 10px solid #000;
          border-radius: 0;
          color: #fff;
          font-family: sans-serif;
          font-weight: 900;
        }
        .style-brutalism-classic .dot { background: #fff; border-radius: 0; }
        .style-brutalism-classic h3 { text-transform: uppercase; font-size: 2.5rem; border-bottom: 4px solid #fff; padding-bottom: 1rem; }
        .style-brutalism-classic .preview-button {
          background: #000;
          color: #fff;
          border: none;
          padding: 2rem;
          width: 100%;
          border-radius: 0;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 1.5rem;
        }

        /* --- Y2K FUTURISTIC --- */
        .style-y2k-futuristic {
          background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(200,200,255,0.4));
          border: 3px solid #fff;
          border-radius: 50px;
          padding: 2.5rem;
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.8), inset 0 0 20px rgba(255,255,255,0.5);
          color: #4b0082;
          backdrop-filter: blur(10px);
        }
        .style-y2k-futuristic .dot { background: #ff00ff; box-shadow: 0 0 10px #ff00ff; }
        .style-y2k-futuristic h3 { font-family: sans-serif; font-weight: 900; font-style: italic; letter-spacing: -1px; }
        .style-y2k-futuristic .preview-button {
          background: #ff00ff;
          color: #fff;
          border: 4px solid #fff;
          border-radius: 100px;
          font-weight: 900;
          box-shadow: 0 5px 15px rgba(255, 0, 255, 0.4);
          text-transform: uppercase;
        }

        /* --- CYBER NOIR --- */
        .style-cyber-noir {
          background: #000;
          border-left: 8px solid #ff0000;
          padding: 3rem;
          color: #fff;
          box-shadow: 0 0 50px rgba(0,0,0,1);
          border-radius: 0;
        }
        .style-cyber-noir .dot { background: #333; border-radius: 0; }
        .style-cyber-noir h3 { text-transform: uppercase; letter-spacing: 5px; font-weight: 900; border-bottom: 1px solid #333; padding-bottom: 1rem; }
        .style-cyber-noir .preview-button {
          background: #fff;
          color: #000;
          border: none;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 900;
          border-radius: 0;
        }

        /* --- MEMPHIS POP --- */
        .style-memphis-pop {
          background: #fff;
          border: 4px solid #000;
          position: relative;
          box-shadow: 15px 15px 0px #3b82f6;
          color: #000;
          border-radius: 0;
        }
        .style-memphis-pop .dot { background: #ec4899; width: 15px; height: 15px; border: 2px solid #000; }
        .style-memphis-pop h3 { font-weight: 900; text-decoration: underline wavy #fbbf24; }
        .style-memphis-pop .preview-button {
          background: #fbbf24;
          color: #000;
          border: 3px solid #000;
          border-radius: 0;
          font-weight: 900;
          box-shadow: 4px 4px 0px #000;
        }

        /* --- ART DECO --- */
        .style-art-deco {
          background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
          border: 2px solid #c5a059;
          color: #c5a059;
          text-align: center;
          border-radius: 0;
        }
        .style-art-deco .dot { background: #c5a059; width: 6px; border-radius: 0; }
        .style-art-deco h3 { font-family: serif; letter-spacing: 8px; text-transform: uppercase; font-weight: 200; }
        .style-art-deco .preview-button {
          background: transparent;
          border: 1px solid #c5a059;
          color: #c5a059;
          letter-spacing: 3px;
          border-radius: 0;
          text-transform: uppercase;
        }

        /* --- SOFT POP --- */
        .style-soft-pop {
          background: #fff;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(100, 120, 255, 0.1);
          color: #333;
          border: none;
        }
        .style-soft-pop .dot { background: #dee2ff; }
        .style-soft-pop h3 { color: #6366f1; font-weight: 800; }
        .style-soft-pop .preview-button {
          background: #6366f1;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
          border: none;
          color: #fff;
          font-weight: 700;
        }

        /* --- HOLOGRAPHIC --- */
        .style-holographic-glow {
          background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(200,255,255,0.7) 50%, rgba(255,200,255,0.7) 100%);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.5);
          color: #444;
        }
        .style-holographic-glow .dot { background: #fff; box-shadow: 0 0 15px rgba(0, 255, 255, 0.5); }
        .style-holographic-glow .preview-button {
          background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% auto;
          animation: holo 3s linear infinite;
          border: none;
          color: #fff;
          font-weight: 800;
          border-radius: 10px;
        }

        /* --- WABI SABI --- */
        .style-wabi-sabi {
          background: #fff;
          border-radius: 12px 40px 15px 35px;
          border: 1px solid #e0dbd1;
          color: #5c5852;
        }
        .style-wabi-sabi .dot { background: #d9d2c5; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        .style-wabi-sabi h3 { font-style: italic; font-weight: 400; opacity: 0.8; }
        .style-wabi-sabi .preview-button {
          background: #8c8273;
          border-radius: 5px 15px 5px 12px;
          color: #fff;
          border: none;
        }

        /* --- INDUSTRIAL --- */
        .style-industrial-grit {
          background: #333;
          border: 4px solid #444;
          color: #ff6b00;
          border-radius: 0;
        }
        .style-industrial-grit .dot { background: #555; border: 1px solid #000; }
        .style-industrial-grit h3 { font-family: Impact, sans-serif; text-transform: uppercase; letter-spacing: 2px; }
        .style-industrial-grit .preview-button {
          background: #ff6b00;
          color: #000;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
          border-radius: 0;
          font-weight: 900;
          border: none;
        }

        /* --- DATA HUD --- */
        .style-data-hud {
          background: rgba(0, 53, 102, 0.1);
          border: 1px solid rgba(0, 187, 249, 0.5);
          color: #00bbf9;
          font-family: monospace;
          border-radius: 0;
          box-shadow: inset 0 0 20px rgba(0, 187, 249, 0.1);
        }
        .style-data-hud .dot { background: #00bbf9; box-shadow: 0 0 10px #00bbf9; border-radius: 0; }
        .style-data-hud h3 { letter-spacing: 2px; border-bottom: 1px dashed rgba(0, 187, 249, 0.3); }
        .style-data-hud .preview-button {
          background: transparent;
          border: 1px solid #ffc300;
          color: #ffc300;
          border-radius: 0;
          font-family: inherit;
          text-transform: uppercase;
        }

        /* --- PAPERCRAFT --- */
        .style-papercraft {
          background: #fff;
          border-radius: 4px;
          box-shadow: 8px 8px 0px rgba(0,0,0,0.05), 16px 16px 0px rgba(0,0,0,0.05);
          color: #333;
          border: none;
        }
        .style-papercraft .dot { background: #f0f0f0; border: 1px solid #e0e0e0; }
        .style-papercraft .preview-button {
          background: #3b82f6;
          box-shadow: 4px 4px 0px #1d4ed8;
          border-radius: 0;
          border: none;
          color: #fff;
          font-weight: 700;
        }

        /* --- VICTORIAN --- */
        .style-victorian-gothic {
          background: #000;
          border: 2px solid #d4af37;
          color: #fff;
          font-family: 'Times New Roman', serif;
          border-radius: 0;
        }
        .style-victorian-gothic .dot { background: #d4af37; box-shadow: 0 0 10px #d4af37; }
        .style-victorian-gothic h3 { font-variant: small-caps; letter-spacing: 4px; }
        .style-victorian-gothic .preview-button {
          background: #d4af37;
          color: #000;
          font-variant: small-caps;
          border: none;
          font-weight: 900;
        }

        /* --- RETRO MAC --- */
        .style-retro-mac {
          background: #fff;
          border: 2px solid #000;
          box-shadow: 4px 4px 0px #000;
          font-family: 'Courier New', monospace;
          border-radius: 0;
        }
        .style-retro-mac .dot { background: #000; border-radius: 0; }
        .style-retro-mac .preview-button {
          background: #fff;
          border: 1px solid #000;
          box-shadow: inset -1px -1px #000, inset 1px 1px #fff;
          border-radius: 0;
          color: #000;
          font-weight: bold;
        }

        /* --- MATERIAL YOU --- */
        .style-material-you {
          background: #f2f0e4;
          border-radius: 28px;
          color: #1c1c16;
          border: none;
        }
        .style-material-you .dot { background: #7d775b; }
        .style-material-you h3 { font-weight: 500; }
        .style-material-you .preview-button {
          background: #dce3f9;
          color: #151b2c;
          border-radius: 20px;
          border: none;
          font-weight: 500;
        }

        /* --- ABSTRACT FLUID --- */
        .style-abstract-fluid {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border-radius: 40px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .style-abstract-fluid .dot { background: #ff0080; box-shadow: 0 0 20px #ff0080; }
        .style-abstract-fluid .preview-button {
          background: linear-gradient(45deg, #ff0080, #7928ca);
          border-radius: 100px;
          color: #fff;
          border: none;
          font-weight: 600;
        }

        /* --- NEON TOKYO --- */
        .style-neon-tokyo {
          background: #000;
          border: 2px solid #00ffff;
          box-shadow: 0 0 15px #00ffff, inset 0 0 10px #ff00ff;
          color: #fff;
          border-radius: 0;
        }
        .style-neon-tokyo .dot { background: #ff00ff; box-shadow: 0 0 10px #ff00ff; }
        .style-neon-tokyo h3 { font-weight: 900; font-style: italic; color: #00ffff; }
        .style-neon-tokyo .preview-button {
          background: transparent;
          border: 2px solid #ff00ff;
          color: #ff00ff;
          box-shadow: 0 0 10px #ff00ff;
          border-radius: 0;
          font-weight: 900;
        }

        /* --- MINIMALIST DARK --- */
        .style-minimalist-dark {
          background: #0a0a0a;
          color: #888;
          border: 1px solid #1a1a1a;
          border-radius: 0;
        }
        .style-minimalist-dark .dot { background: #333; }
        .style-minimalist-dark .preview-button {
          background: #1a1a1a;
          color: #fff;
          border: none;
          border-radius: 0;
          font-size: 0.8rem;
        }

        /* --- SWISS GRID --- */
        .style-swiss-grid {
          background: #fff;
          border: 1px solid #000;
          color: #000;
          border-radius: 0;
          padding: 0;
        }
        .style-swiss-grid .card-header { border-bottom: 1px solid #000; padding: 1rem; width: 100%; }
        .style-swiss-grid .dot { background: #ff0000; border-radius: 0; }
        .style-swiss-grid h3 { text-transform: uppercase; font-weight: 900; font-size: 1.5rem; }
        .style-swiss-grid .preview-button {
          background: #000;
          border-radius: 0;
          color: #fff;
          font-weight: 900;
          width: 100%;
          border: none;
        }

        /* --- SYNTHWAVE --- */
        .style-synthwave-retro {
          background: linear-gradient(180deg, #240b36 0%, #0b001e 100%);
          border: 2px solid #ed1e79;
          color: #00ffff;
          box-shadow: 0 0 20px #ed1e79, inset 0 0 10px #ed1e79;
          border-radius: 0;
        }
        .style-synthwave-retro .dot { background: #00ffff; box-shadow: 0 0 10px #00ffff; }
        .style-synthwave-retro h3 { font-family: 'Courier New', monospace; font-style: italic; color: #fff; text-shadow: 2px 2px #ed1e79; }
        .style-synthwave-retro .preview-button {
          background: linear-gradient(180deg, #ed1e79 0%, #7209b7 100%);
          box-shadow: 0 5px 15px rgba(237, 30, 121, 0.4);
          color: #fff;
          border: none;
          font-weight: bold;
        }

        /* --- MONOCHROME --- */
        .style-monochrome-modern {
          background: #1a1a1a;
          color: #fff;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          border: none;
          border-radius: 2px;
        }
        .style-monochrome-modern .dot { background: #444; }
        .style-monochrome-modern .preview-button {
          background: #fff;
          color: #000;
          border-radius: 0;
          border: none;
          font-weight: bold;
        }

        /* --- Y2K CHROME --- */
        .style-y2k-chrome {
          background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 25%, #8e8e8e 50%, #ffffff 75%, #e0e0e0 100%);
          background-size: 400% 400%;
          animation: shine 10s linear infinite;
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 40px;
          color: #000;
          box-shadow: 0 0 30px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.5);
          backdrop-filter: brightness(1.2);
        }
        @keyframes shine { 0% { background-position: 0% 50%; } 100% { background-position: 400% 50%; } }
        .style-y2k-chrome .dot { background: #fff; box-shadow: 0 0 10px #fff; }
        .style-y2k-chrome .preview-button {
          background: #000;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 100px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 0 15px rgba(255,255,255,0.4);
        }

        /* --- Y2K PINK --- */
        .style-y2k-pink {
          background: linear-gradient(135deg, #ff80bf, #ffb3d9);
          border: 4px solid #fff;
          border-radius: 30px;
          color: #fff;
          box-shadow: 0 15px 30px rgba(255, 128, 191, 0.4), inset 0 0 15px rgba(255,255,255,0.5);
        }
        .style-y2k-pink .dot { background: #fff; border: 2px solid #ff4da6; }
        .style-y2k-pink h3 { text-shadow: 2px 2px 0px rgba(0,0,0,0.1); font-weight: 900; }
        .style-y2k-pink .preview-button {
          background: #fff;
          color: #ff4da6;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          box-shadow: 0 5px 0px #ffb3d9;
        }

        /* --- Y2K GLASS --- */
        .style-y2k-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px) saturate(200%);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
          color: #1e3a8a;
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        .style-y2k-glass .dot { background: rgba(30, 58, 138, 0.2); }
        .style-y2k-glass .preview-button {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 100px;
          color: #1e3a8a;
          font-weight: 700;
        }

        /* --- HYPER MAXIMALISM --- */
        .style-hyper-maximalism {
          background: #ffff00;
          border: 10px solid #000;
          color: #000;
          transform: rotate(-1deg);
          box-shadow: 15px 15px 0px #00ffcc, -15px -15px 0px #ff0055;
          border-radius: 0;
        }
        .style-hyper-maximalism .dot { background: #ff0055; border: 3px solid #000; border-radius: 0; transform: rotate(45deg); }
        .style-hyper-maximalism h3 { font-weight: 900; text-transform: uppercase; letter-spacing: -2px; line-height: 0.8; }
        .style-hyper-maximalism .preview-button {
          background: #000;
          color: #fff;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          font-weight: 900;
          text-transform: uppercase;
          transform: rotate(2deg);
          box-shadow: 5px 5px 0px #ff0055;
          border-radius: 0;
        }

        /* --- ORGANIC MESH --- */
        .style-organic-mesh {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(40px);
          border-radius: 40px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }
        .style-organic-mesh .dot { background: rgba(255,255,255,0.3); }
        .style-organic-mesh .preview-button {
          background: #fff;
          color: #000;
          border: none;
          border-radius: 100px;
          font-weight: 600;
        }

        /* --- PIXEL RETRO --- */
        .style-pixel-retro {
          background: #444;
          border: 4px solid #fff;
          box-shadow: 6px 0 0 -2px #fff, -6px 0 0 -2px #fff, 0 6px 0 -2px #fff, 0 -6px 0 -2px #fff;
          color: #00ff00;
          font-family: monospace;
          border-radius: 0;
        }
        .style-pixel-retro .dot { background: #00ff00; border-radius: 0; width: 8px; height: 8px; }
        .style-pixel-retro h3 { text-transform: uppercase; }
        .style-pixel-retro .preview-button {
          background: #00ff00;
          color: #000;
          border: none;
          box-shadow: 4px 4px 0px #000;
          font-weight: 900;
          border-radius: 0;
        }

        /* --- VOGUE EDITORIAL --- */
        .style-vogue-editorial {
          background: #fff;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          color: #000;
          text-align: center;
          border-radius: 0;
        }
        .style-vogue-editorial .dot { background: #000; width: 4px; border-radius: 0; }
        .style-vogue-editorial h3 { font-family: serif; text-transform: uppercase; letter-spacing: 10px; font-weight: 300; }
        .style-vogue-editorial .preview-button {
          background: #000;
          color: #fff;
          border: none;
          font-family: serif;
          text-transform: uppercase;
          letter-spacing: 5px;
          border-radius: 0;
        }

        /* --- GLITCH --- */
        .style-glitch-aesthetics {
          background: #111;
          border: 1px solid #333;
          color: #fff;
          position: relative;
        }
        .style-glitch-aesthetics .dot { background: #ff00ff; box-shadow: 2px 0 #00ffff; border-radius: 0; }
        .style-glitch-aesthetics .preview-button {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 0;
        }

        /* --- CLAY DARK --- */
        .style-clay-dark {
          background: #24283b;
          border-radius: 40px;
          color: #a9b1d6;
          box-shadow: 25px 25px 50px #16161e, inset -5px -5px 15px rgba(0,0,0,0.3), inset 5px 5px 15px rgba(255,255,255,0.05);
          border: none;
        }
        .style-clay-dark .dot { background: #7aa2f7; opacity: 0.5; }
        .style-clay-dark .preview-button {
          background: #7aa2f7;
          color: #1a1b26;
          border: none;
          border-radius: 20px;
          font-weight: 700;
          box-shadow: 5px 5px 10px #16161e;
        }

        /* --- SOFT BRUTALISM --- */
        .style-soft-brutalism {
          background: #fff;
          border: 2px solid #000;
          border-radius: 20px;
          color: #000;
          box-shadow: 8px 8px 0px #000;
        }
        .style-soft-brutalism .dot { background: #fee2e2; border: 2px solid #000; }
        .style-soft-brutalism .preview-button {
          background: #fee2e2;
          color: #000;
          border: 2px solid #000;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 4px 4px 0px #000;
        }

        /* --- KINETIC TYPE --- */
        .style-kinetic-type {
          background: #000;
          color: #fff;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 0;
        }
        .style-kinetic-type h3 { font-size: 5rem; font-weight: 900; text-transform: uppercase; letter-spacing: -5px; line-height: 0.8; }
        .style-kinetic-type .preview-button {
          background: #fff;
          color: #000;
          border: none;
          font-size: 1.5rem;
          font-weight: 900;
          padding: 2rem 4rem;
          transform: rotate(-2deg);
        }

        /* --- BRUTALIST ELITE --- */
        .style-brutalist-elite {
          background: #f4f4f4;
          border: 1px solid #000;
          padding: 4rem;
          color: #000;
          border-radius: 0;
        }
        .style-brutalist-elite .dot { background: #000; width: 40px; height: 40px; border-radius: 0; }
        .style-brutalist-elite h3 { font-family: serif; font-style: italic; font-size: 3rem; border-bottom: 2px solid #000; }
        .style-brutalist-elite .preview-button {
          background: #000;
          color: #fff;
          font-family: serif;
          font-size: 1.2rem;
          border-radius: 0;
        }

        /* --- LIQUID WARP --- */
        .style-liquid-warp {
          background: #000814;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: warp 8s ease-in-out infinite alternate;
          color: #ffc300;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(20px);
        }
        @keyframes warp { from { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } to { border-radius: 40% 60% 70% 30% / 30% 70% 40% 60%; } }
        .style-liquid-warp .dot { background: #ffc300; box-shadow: 0 0 20px #ffc300; }
        .style-liquid-warp .preview-button { background: #ffc300; color: #000; border-radius: 100px; border: none; font-weight: 900; }

        /* --- ASYMMETRIC --- */
        .style-asymmetric-vibe {
          background: #1a1a1a;
          color: #fff;
          transform: translateX(-20px);
          box-shadow: 20px 20px 0px #e0e0e0;
          border-radius: 0;
        }
        .style-asymmetric-vibe .dot { background: #e0e0e0; border-radius: 0; }
        .style-asymmetric-vibe .preview-button {
          background: #fff;
          color: #000;
          border: none;
          transform: translate(20px, 20px);
          border-radius: 0;
        }

        /* --- GRAINY ANALOG --- */
        .style-grainy-analog {
          background: #fdfaf0;
          color: #000;
          position: relative;
          border-radius: 4px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .style-grainy-analog::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.1; pointer-events: none;
        }
        .style-grainy-analog .dot { background: #000; width: 5px; height: 5px; }
        .style-grainy-analog .preview-button { background: #000; color: #fdfaf0; border: none; border-radius: 2px; }

        /* --- ELEGANT SERIF --- */
        .style-elegant-serif {
          background: #fff;
          color: #000;
          text-align: center;
          padding: 5rem 2rem;
          border-radius: 0;
        }
        .style-elegant-serif .dot { background: #000; width: 2px; }
        .style-elegant-serif h3 { font-family: serif; font-weight: 300; font-size: 3rem; font-style: italic; letter-spacing: 2px; }
        .style-elegant-serif .preview-button {
          background: transparent;
          color: #000;
          border-bottom: 1px solid #000;
          font-family: serif;
          border-radius: 0;
          padding: 0.5rem 2rem;
        }

        /* --- HORIZONTAL --- */
        .style-horizontal-flow {
          background: #111;
          border: 1px solid #333;
          color: #fff;
          display: flex; gap: 2rem;
          border-radius: 0;
        }
        .style-horizontal-flow .dot { background: #fff; border-radius: 0; }
        .style-horizontal-flow h3 { writing-mode: vertical-rl; text-transform: uppercase; font-size: 3rem; }
        .style-horizontal-flow .preview-button { background: #fff; color: #000; border-radius: 0; font-weight: 900; }

        /* --- SPLIT --- */
        .style-split-dynamic {
          background: linear-gradient(90deg, #000 50%, #fff 50%);
          color: #fff;
          border-radius: 0;
        }
        .style-split-dynamic h3 { mix-blend-mode: difference; font-size: 4rem; }
        .style-split-dynamic .preview-button {
          background: #ff0000;
          color: #fff;
          transform: rotate(-5deg);
          box-shadow: 5px 5px 0 #000;
          border-radius: 0;
        }

        /* --- MASK --- */
        .style-mask-reveal {
          background: #111;
          color: #fff;
          border: 1px solid #333;
          position: relative;
        }
        .style-mask-reveal::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, transparent 20%, #000 80%);
          pointer-events: none;
        }
        .style-mask-reveal .preview-button { background: #fff; color: #000; border-radius: 100px; z-index: 2; position: relative; }

        /* --- 3D FLOAT --- */
        .style-3d-float {
          background: #fff;
          border-radius: 20px;
          transform: rotateX(10deg) rotateY(-10deg);
          box-shadow: 40px 40px 80px rgba(0,0,0,0.1), -10px -10px 40px rgba(255,255,255,0.8);
          color: #334155;
          border: none;
        }
        .style-3d-float .dot { background: #3b82f6; box-shadow: 0 5px 15px rgba(59,130,246,0.4); }
        .style-3d-float .preview-button { background: #3b82f6; color: #fff; border-radius: 12px; box-shadow: 0 10px 20px rgba(59,130,246,0.3); }

        /* --- PARALLAX --- */
        .style-parallax-layers {
          background: #0a0e14;
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          border-radius: 0;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
        }
        .style-parallax-layers h3 { font-size: 4rem; opacity: 0.1; position: absolute; top: 0; }
        .style-parallax-layers .preview-button { background: transparent; color: #fff; border: 1px solid #fff; letter-spacing: 5px; border-radius: 0; }

        /* --- TECH MONO --- */
        .style-technical-mono {
          background: #000;
          background-image: radial-gradient(#333 1px, transparent 1px);
          background-size: 20px 20px;
          color: #00ff00;
          font-family: monospace;
          border: 1px solid #333;
          border-radius: 0;
        }
        .style-technical-mono .dot { background: #00ff00; border-radius: 0; }
        .style-technical-mono h3 { font-family: monospace; letter-spacing: -1px; border-bottom: 1px solid #00ff00; }
        .style-technical-mono .preview-button { background: #00ff00; color: #000; font-family: monospace; border-radius: 0; }

        /* --- NEON NOIR --- */
        .style-neon-noir {
          background: #050505;
          border: 1px solid #ff0055;
          box-shadow: 0 0 15px #ff0055, inset 0 0 5px #ff0055;
          color: #fff;
          border-radius: 4px;
        }
        .style-neon-noir .dot { background: #00ffcc; box-shadow: 0 0 10px #00ffcc; }
        .style-neon-noir .preview-button { background: transparent; color: #00ffcc; border: 2px solid #00ffcc; box-shadow: 0 0 10px #00ffcc; border-radius: 0; }

        /* --- MESH SOFT --- */
        .style-mesh-soft {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          color: #334155;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .style-mesh-soft .dot { background: linear-gradient(45deg, #a1c4fd, #c2e9fb); }
        .style-mesh-soft .preview-button { background: #fff; color: #334155; border-radius: 100px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }

        /* --- POP BRUTALIST --- */
        .style-pop-brutalist {
          background: #ffff00;
          border: 5px solid #000;
          color: #000;
          box-shadow: 12px 12px 0 #ff0055;
          border-radius: 0;
        }
        .style-pop-brutalist .dot { background: #3b82f6; border: 3px solid #000; border-radius: 0; }
        .style-pop-brutalist h3 { text-transform: uppercase; font-weight: 900; -webkit-text-stroke: 1px #000; color: #fff; }
        .style-pop-brutalist .preview-button { background: #000; color: #fff; border-radius: 0; font-weight: 900; }

        /* --- MODERN BAUHAUS --- */
        .style-modern-bauhaus {
          background: #fff;
          border: 2px solid #000;
          color: #000;
          border-radius: 0;
        }
        .style-modern-bauhaus::before { content: ''; position: absolute; top: -10px; right: -10px; width: 40px; height: 40px; background: #ff0000; border-radius: 50%; }
        .style-modern-bauhaus .dot { background: #ffff00; border: 2px solid #000; border-radius: 0; }
        .style-modern-bauhaus h3 { font-weight: 900; text-transform: uppercase; }
        .style-modern-bauhaus .preview-button { background: #0000ff; color: #fff; border-radius: 0; }

        /* --- EXPERIMENTAL --- */
        .style-experimental-chaos {
          background: #fff;
          color: #000;
          transform: skew(10deg) rotate(-5deg);
          mix-blend-mode: difference;
          border-radius: 0;
        }
        .style-experimental-chaos h3 { font-size: 6rem; opacity: 0.5; }
        .style-experimental-chaos .preview-button { background: #ff0055; color: #fff; border-radius: 0; transform: rotate(15deg); }

        /* --- NARRATIVE --- */
        .style-narrative-flow {
          background: #fff;
          color: #333;
          border-left: 5px solid #333;
          border-radius: 0;
          text-align: left;
        }
        .style-narrative-flow .dot { background: #333; width: 100%; height: 2px; }
        .style-narrative-flow h3 { font-weight: 300; line-height: 1.5; }
        .style-narrative-flow .preview-button { background: #333; color: #fff; border-radius: 0; letter-spacing: 2px; }

        /* --- REACTIVE --- */
        .style-reactive-minimal {
          background: #fff;
          border: 1px solid #eee;
          color: #000;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .style-reactive-minimal:hover { border-color: #000; transform: scale(1.02); }
        .style-reactive-minimal .dot { background: #eee; }
        .style-reactive-minimal .preview-button { background: transparent; color: #000; border: 1px solid #000; border-radius: 0; }

        /* --- CLASSIC REVIVAL --- */
        .style-classic-revival {
          background: #fff;
          border: 1px solid #d4af37;
          color: #1a1a1a;
          border-radius: 0;
        }
        .style-classic-revival::before { content: 'EST. 2026'; position: absolute; top: 10px; right: 10px; font-size: 0.6rem; letter-spacing: 2px; }
        .style-classic-revival .dot { background: #d4af37; width: 30px; height: 1px; border-radius: 0; }
        .style-classic-revival h3 { font-family: serif; letter-spacing: 5px; }
        .style-classic-revival .preview-button { background: #d4af37; color: #fff; border-radius: 0; font-family: serif; }

        /* --- ISOMETRIC --- */
        .style-isometric-grid {
          background: #f0f4f8;
          perspective: 1000px;
          border-radius: 0;
        }
        .style-isometric-grid .card-content {
          transform: rotateX(45deg) rotateZ(-45deg);
          background: #fff;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .style-isometric-grid .preview-button { background: #3b82f6; color: #fff; border-radius: 8px; }

        /* --- HOLO --- */
        .style-holographic-foil {
          background: #000;
          overflow: hidden;
        }
        .style-holographic-foil .card-content {
          background: linear-gradient(135deg, #ff00ff, #00ffff, #ff00ff, #00ffff);
          background-size: 400% 400%;
          animation: holo 5s linear infinite;
          border-radius: 24px;
          padding: 3rem;
          mix-blend-mode: screen;
        }
        .style-holographic-foil .preview-button { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); color: #fff; border: 1px solid #fff; }

        /* --- CYBER RENAISSANCE --- */
        .style-cyber-renaissance {
          background: #1a1a1a;
          color: #000;
        }
        .style-cyber-renaissance .card-content {
          background: #fff;
          border: 4px solid #d4af37;
          padding: 3rem;
          position: relative;
        }
        .style-cyber-renaissance .card-content::after { content: ''; position: absolute; top: 10px; left: 10px; width: 100%; height: 100%; border: 2px solid #ff0055; z-index: -1; }
        .style-cyber-renaissance .preview-button { background: #000; color: #d4af37; letter-spacing: 5px; }

        /* --- LIQUID GOLD --- */
        .style-liquid-gold {
          background: #0a0a0a;
        }
        .style-liquid-gold .card-content {
          background: linear-gradient(135deg, #d4af37 0%, #f7e1ad 25%, #d4af37 50%, #f7e1ad 75%, #d4af37 100%);
          background-size: 400% 400%;
          animation: flowing 12s ease infinite;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%;
          padding: 4rem;
        }
        .style-liquid-gold .preview-button { background: #000; color: #d4af37; border-radius: 0; }

        /* --- SKETCH --- */
        .style-brutalist-sketch {
          background: #fdfaf0;
        }
        .style-brutalist-sketch .card-content {
          background: #fff;
          border: 3px solid #000;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          padding: 3rem;
        }
        .style-brutalist-sketch .preview-button { border: 2px solid #000; border-radius: 100px 50px 100px 40px / 40px 100px 50px 100px; }

        /* --- DEEP GLASS --- */
        .style-deep-glass-dark {
          background: #020617;
        }
        .style-deep-glass-dark .card-content {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 32px;
          padding: 3rem;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }
        .style-deep-glass-dark .preview-button { background: rgba(255,255,255,0.1); border-radius: 16px; }

        /* --- ASCII --- */
        .style-ascii-art {
          background: #000;
          color: #0f0;
          font-family: monospace;
        }
        .style-ascii-art .card-content { border: 1px solid #0f0; padding: 2rem; }
        .style-ascii-art .preview-button { background: #0f0; color: #000; font-family: monospace; border-radius: 0; }

        /* --- ORGANIC SHADOWS --- */
        .style-organic-shadows {
          background: #ffffff;
        }
        .style-organic-shadows .card-content {
          background: #fff;
          border-radius: 50px;
          padding: 3.5rem;
          box-shadow: 20px 20px 60px rgba(100,120,255,0.1), -20px -20px 60px rgba(255,100,150,0.05);
          border: none;
        }
        .style-organic-shadows .preview-button { color: #6366f1; border-radius: 100px; box-shadow: 5px 5px 15px rgba(99,102,241,0.15); }

        /* --- DISTORTION --- */
        .style-glass-distortion {
          background: #000;
        }
        .style-glass-distortion .card-content {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px) contrast(200%) brightness(1.5);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 4rem;
          transform: rotate(-5deg);
        }
        .style-glass-distortion .preview-button { border-radius: 100px; }

        /* --- HYPER POP --- */
        .style-hyper-pop {
          background: #ff00ff;
        }
        .style-hyper-pop .card-content {
          background: #00ffff;
          border: 10px solid #000;
          padding: 2rem;
          transform: scale(1.1) rotate(2deg);
          box-shadow: 15px 15px 0px #ffff00;
        }
        .style-hyper-pop .preview-button { background: #000; color: #ff00ff; font-weight: 900; }

        /* --- TECH WHITE --- */
        .style-monotype-technical-white {
          background: #ffffff;
          font-family: monospace;
        }
        .style-monotype-technical-white .card-content {
          border: 0.5px solid #000;
          padding: 3rem;
          box-shadow: 0 0 0 5px #fff, 0 0 0 6px #000;
        }
        .style-monotype-technical-white .preview-button { background: #000; color: #fff; border-radius: 0; }

        /* --- VAPORWAVE --- */
        .style-vaporwave-sunset {
          background: linear-gradient(0deg, #ff71ce 0%, #01cdfe 100%);
        }
        .style-vaporwave-sunset .card-content {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          border: 1px solid #fff;
          padding: 3rem;
          text-shadow: 2px 2px #ff71ce;
        }
        .style-vaporwave-sunset .preview-button { background: #fff; color: #ff71ce; box-shadow: 5px 5px 0px #01cdfe; border-radius: 0; }

        /* --- FINE MINIMALISM --- */
        .style-ultra-fine-minimalism {
          background: #ffffff;
        }
        .style-ultra-fine-minimalism .card-content {
          border: 0.2px solid #000;
          padding: 6rem 3rem;
          text-align: center;
        }
        .style-ultra-fine-minimalism .preview-button { background: transparent; border: 0.2px solid #000; letter-spacing: 5px; font-size: 0.7rem; border-radius: 0; }

        /* --- GEOMETRY --- */
        .style-abstract-geometry {
          background: #f1f5f9;
        }
        .style-abstract-geometry .card-content {
          background: #0f172a;
          padding: 3rem;
          border-radius: 0;
          position: relative;
          overflow: hidden;
        }
        .style-abstract-geometry .card-content::before { content: ''; position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: #3b82f6; transform: rotate(45deg); }
        .style-abstract-geometry .preview-button { background: #3b82f6; border-radius: 0; }

        /* --- CYBER ORGANIC --- */
        .style-cyber-organic {
          background: #000;
        }
        .style-cyber-organic .card-content {
          background: rgba(0, 255, 204, 0.05);
          border: 1px solid #00ffcc;
          border-radius: 100px 20px 100px 20px;
          padding: 3.5rem;
          box-shadow: 0 0 20px rgba(0,255,204,0.2);
        }
        .style-cyber-organic .preview-button { background: #00ffcc; color: #000; border-radius: 0 20px 0 20px; }

        /* --- INFINITE FLOW --- */
        .style-infinite-scroll-vibe {
          background: #fafafa;
        }
        .style-infinite-scroll-vibe .card-content {
          background: #fff;
          padding: 4rem;
          border: 1px solid #eee;
          box-shadow: 0 50px 100px rgba(0,0,0,0.02);
        }
        .style-infinite-scroll-vibe .preview-button { background: #000; border-radius: 100px; }

        /* --- MAXIMALIST --- */
        .style-maximalist-editorial {
          background: #000;
        }
        .style-maximalist-editorial .card-content {
          background: #ff0000;
          padding: 2rem;
          transform: scale(1.2);
        }
        .style-maximalist-editorial .preview-button { background: #000; color: #fff; font-size: 2rem; font-weight: 900; }

        /* --- BAUHAUS DARK --- */
        .style-bauhaus-dark {
          background: #0a0a0a;
        }
        .style-bauhaus-dark .card-content {
          background: #1a1a1a;
          border: 2px solid #333;
          padding: 3rem;
          position: relative;
        }
        .style-bauhaus-dark .card-content::before { content: ''; position: absolute; bottom: 0; left: 0; width: 10px; height: 100%; background: #ff0000; }
        .style-bauhaus-dark .preview-button { background: #ffff00; color: #000; border-radius: 0; }

        /* --- CLAY VIVID --- */
        .style-clay-vivid {
          background: #6366f1;
        }
        .style-clay-vivid .card-content {
          background: #fff;
          border-radius: 40px;
          padding: 3rem;
          box-shadow: 20px 20px 40px rgba(0,0,0,0.2);
        }
        .style-clay-vivid .preview-button { background: #ec4899; border-radius: 20px; box-shadow: 0 10px 0px #be185d; }

        /* --- LIGHT GLASS --- */
        .style-minimal-glass-light {
          background: #f1f5f9;
        }
        .style-minimal-glass-light .card-content {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 3rem;
        }
        .style-minimal-glass-light .preview-button { background: #fff; border-radius: 10px; }

        .style-minimal-glass-light .preview-button { background: #fff; border-radius: 10px; }

        /* --- AURORA --- */
        .style-aurora-borealis {
          background: #010b13;
          position: relative;
          overflow: hidden;
        }
        .style-aurora-borealis::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, #00ffcc 0%, transparent 40%), radial-gradient(circle at 20% 30%, #ff00ff 0%, transparent 40%);
          filter: blur(80px);
          animation: aurora 20s linear infinite;
          opacity: 0.3;
        }
        .style-aurora-borealis .card-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 40px;
          padding: 3rem;
        }
        .style-aurora-borealis .preview-button { background: #00ffcc; color: #010b13; border-radius: 100px; }

        /* --- MERCURY --- */
        .style-liquid-mercury {
          background: #000;
        }
        .style-liquid-mercury .card-content {
          background: linear-gradient(135deg, #fff 0%, #888 50%, #fff 100%);
          background-size: 400% 400%;
          animation: liquid 8s ease-in-out infinite;
          border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%;
          padding: 4rem;
          color: #000;
        }
        .style-liquid-mercury .preview-button { background: #000; color: #fff; border-radius: 0; }

        /* --- CIRCUIT --- */
        .style-neon-circuitry {
          background: #050505;
          background-image: linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px), linear-gradient(rgba(0,255,0,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .style-neon-circuitry .card-content {
          background: #111;
          border: 1px solid #00ff00;
          padding: 3rem;
          box-shadow: 0 0 20px rgba(0,255,0,0.1);
        }
        .style-neon-circuitry .preview-button { background: transparent; color: #00ff00; border: 1px solid #00ff00; }

        /* --- LUXURY GOLD MINIMAL --- */
        .style-luxury-gold-minimal {
          background: #ffffff;
        }
        .style-luxury-gold-minimal .card-content {
          background: #fff;
          padding: 5rem 3rem;
          border-left: 2px solid #d4af37;
        }
        .style-luxury-gold-minimal .preview-button { background: #d4af37; color: #fff; border-radius: 0; letter-spacing: 3px; font-family: serif; }

        /* --- TYPE WARP --- */
        .style-experimental-warp {
          background: #000;
          overflow: hidden;
        }
        .style-experimental-warp .card-content {
          background: transparent;
          padding: 2rem;
          transform: skewY(-10deg);
        }
        .style-experimental-warp .preview-button { background: #fff; color: #000; font-size: 2.5rem; font-weight: 900; letter-spacing: -3px; }

        /* --- RENAISSANCE GLITCH --- */
        .style-renaissance-glitch {
          background: #1a110a;
        }
        .style-renaissance-glitch .card-content {
          background: #fff;
          border: 1px solid #d4af37;
          padding: 3rem;
          position: relative;
        }
        .style-renaissance-glitch .card-content::before { content: ''; position: absolute; top: -10px; left: -10px; width: 100%; height: 100%; border: 1px solid #000; z-index: -1; opacity: 0.5; }
        .style-renaissance-glitch .preview-button { background: #000; color: #fff; font-family: serif; border-radius: 0; }

        /* --- BOLD MINIMAL --- */
        .style-ultra-bold-minimal {
          background: #ffffff;
        }
        .style-ultra-bold-minimal .card-content {
          background: #000;
          padding: 4rem;
          color: #fff;
        }
        .style-ultra-bold-minimal .preview-button { background: #fff; color: #000; font-size: 2rem; font-weight: 900; border-radius: 0; }

        /* --- TINTED GLASS --- */
        .style-tinted-glassmorphism {
          background: #0f172a;
        }
        .style-tinted-glassmorphism .card-content {
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 30px;
          padding: 3rem;
        }
        .style-tinted-glassmorphism .preview-button { background: #3b82f6; color: #fff; border-radius: 12px; }

        /* --- BAUHAUS WHITE --- */
        .style-bauhaus-clean-white {
          background: #ffffff;
        }
        .style-bauhaus-clean-white .card-content {
          background: #fff;
          border: 1px solid #000;
          padding: 3rem;
          position: relative;
        }
        .style-bauhaus-clean-white .card-content::before { content: ''; position: absolute; top: 0; left: 0; width: 10px; height: 10px; background: #ff0000; }
        .style-bauhaus-clean-white .preview-button { background: #000; border-radius: 0; }

        /* --- ACTIVE GLITCH --- */
        .style-cyber-punk-active {
          background: #000;
        }
        .style-cyber-punk-active .card-content {
          background: #111;
          border: 2px solid #ff00ff;
          padding: 3rem;
          box-shadow: 5px 0 #00ffff, -5px 0 #ff00ff;
          animation: jitter 0.1s infinite;
        }
        .style-cyber-punk-active .preview-button { background: #ff00ff; color: #fff; border-radius: 0; }

        /* --- PIXEL --- */
        .style-pixel-art-modern {
          background: #1a1a1a;
        }
        .style-pixel-art-modern .card-content {
          background: #333;
          border: 4px solid #fff;
          padding: 2rem;
          box-shadow: 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff;
        }
        .style-pixel-art-modern .preview-button { background: #00ff00; color: #000; border-radius: 0; font-weight: 900; }

        /* --- DARK CLAY --- */
        .style-clay-dark-vivid {
          background: #0f172a;
        }
        .style-clay-dark-vivid .card-content {
          background: #1e293b;
          border-radius: 50px;
          padding: 3rem;
          box-shadow: 20px 20px 40px rgba(0,0,0,0.4), inset -5px -5px 15px rgba(255,255,255,0.05);
        }
        .style-clay-dark-vivid .preview-button { background: #3b82f6; border-radius: 20px; }

        /* --- MONO BRUTALISM --- */
        .style-monochrome-brutalism {
          background: #ffffff;
        }
        .style-monochrome-brutalism .card-content {
          background: #fff;
          border: 5px solid #000;
          padding: 3rem;
          box-shadow: 15px 15px 0 #000;
        }
        .style-monochrome-brutalism .preview-button { background: #000; color: #fff; border-radius: 0; }

        /* --- NOISE MESH --- */
        .style-noise-mesh-gradient {
          background: linear-gradient(45deg, #ff0055, #3b82f6);
          position: relative;
        }
        .style-noise-mesh-gradient::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.2; pointer-events: none;
        }
        .style-noise-mesh-gradient .card-content {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border-radius: 40px;
          padding: 3rem;
        }
        .style-noise-mesh-gradient .preview-button { background: #fff; color: #000; border-radius: 100px; }

        /* --- INTERACTIVE POP --- */
        .style-brutalist-interactive-pop {
          background: #ffff00;
        }
        .style-brutalist-interactive-pop .card-content {
          background: #fff;
          border: 4px solid #000;
          padding: 3rem;
          transition: all 0.2s;
        }
        .style-brutalist-interactive-pop .card-content:hover { transform: translate(-5px, -5px); box-shadow: 10px 10px 0 #000; }
        .style-brutalist-interactive-pop .preview-button { background: #ff00ff; border-radius: 0; }

        /* --- THE FINAL SIGNATURE --- */
        .style-the-final-signature {
          background: radial-gradient(circle at center, #111, #000);
        }
        .style-the-final-signature .card-content {
          background: #fff;
          border: 1px solid #d4af37;
          padding: 4rem;
          box-shadow: 0 50px 100px rgba(0,0,0,1);
          position: relative;
        }
        .style-the-final-signature .card-content::before {
          content: 'QONQU';
          position: absolute;
          top: -20px; left: -20px; font-size: 5rem; font-weight: 900; color: rgba(212,175,55,0.1);
        }
        .style-the-final-signature .preview-button { background: #d4af37; border-radius: 0; letter-spacing: 5px; font-weight: 900; }

        /* --- BLOBS --- */
        .style-abstract-blobs {
          background: #f8fafc;
        }
        .style-abstract-blobs .card-content {
          background: #fff;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          padding: 4rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .style-abstract-blobs .preview-button { background: #3b82f6; border-radius: 100px; }

        /* --- THIN GRID --- */
        .style-minimal-grid-thin {
          background: #ffffff;
          background-image: linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .style-minimal-grid-thin .card-content {
          background: #fff;
          border: 0.5px solid #000;
          padding: 3rem;
        }
        .style-minimal-grid-thin .preview-button { background: #000; border-radius: 0; }

        /* --- MAXIMALIST PATTERN --- */
        .style-maximalist-pattern {
          background: #ff0055;
          background-image: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px);
        }
        .style-maximalist-pattern .card-content {
          background: #000;
          padding: 3rem;
          color: #fff;
          border: 10px solid #fff;
        }
        .style-maximalist-pattern .preview-button { background: #fff; color: #000; border-radius: 0; }

        /* --- GRAIN --- */
        .style-soft-grain-gradient {
          background: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
          position: relative;
        }
        .style-soft-grain-gradient::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.1; pointer-events: none;
        }
        .style-soft-grain-gradient .card-content {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          padding: 3rem;
        }
        .style-soft-grain-gradient .preview-button { background: #fff; color: #334155; border-radius: 100px; }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .pdf-btn {
          padding: 0.8rem 1.2rem;
          border-radius: 0.6rem;
          border: 1px solid hsl(var(--border));
          background: #fff;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .pdf-btn:hover {
          background: #f4f4f4;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .sidebar, .controls, .header-actions, .code-toggle, .code-snippet, .theme-toggle {
            display: none !important;
          }
          .showcase {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            background: white !important;
          }
          .preview-area {
            height: 550px !important;
            border: none !important;
            break-inside: avoid;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .preview-card {
            transform: scale(1.2) !important;
          }
          .info-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
            margin-top: 2rem !important;
          }
          .showcase-header h1 {
            font-size: 3.5rem !important;
            color: #000 !important;
            margin-bottom: 1rem !important;
          }
          .description {
            font-size: 1.2rem !important;
            color: #333 !important;
            max-width: 100% !important;
          }
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
          gap: 2rem;
          margin-top: 3rem;
        }

        .info-card {
          background: hsl(var(--bg-secondary));
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid hsl(var(--border));
        }

        .info-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg-primary));
        }

        .info-card ul {
          list-style: none;
          padding: 0;
        }

        .info-card li {
          margin-bottom: 0.75rem;
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

