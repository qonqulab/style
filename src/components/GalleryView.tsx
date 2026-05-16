'use client';

import React, { useState, useEffect } from 'react';
import { stylesData } from '@/data/styles';

export default function GalleryView({ 
  onSelect, 
  compareIds, 
  onToggleCompare 
}: { 
  onSelect: (id: string) => void,
  compareIds: string[],
  onToggleCompare: (id: string) => void
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Modern', 'Minimalist', 'Retro', 'Artistic', 'Luxury', 'Playful', 'Soft'];

  const filteredStyles = stylesData.filter(style => {
    const matchesSearch = style.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          style.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || style.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Performance: Animate items on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gallery-item-wrapper').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [filteredStyles]); // Re-run when filters change

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>QONQU Style Library</h1>
        <p>A sovereign collection of design systems for the QONQU Media Empire.</p>
        
        <div className="gallery-controls">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search styles (e.g. glass, dark, retro)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search design styles"
            />
            <span className="search-icon" aria-hidden="true">🔍</span>
          </div>
          
          <div className="category-pills" role="tablist" aria-label="Style Categories">
            {categories.map(cat => (
              <button 
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-label={`Filter by ${cat} category`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {compareIds.length > 0 && (
          <div className="compare-bar">
            <span>Selected for comparison: {compareIds.length}/2</span>
            {compareIds.length === 2 && (
              <button 
                className="compare-now-btn"
                onClick={() => onSelect('comparison')}
              >
                Compare Now
              </button>
            )}
          </div>
        )}
      </header>

      <div className="gallery-grid">
        {filteredStyles.length > 0 ? (
          filteredStyles.map((style, index) => {
            const isSelected = compareIds.includes(style.id);
            return (
              <div 
                key={`${style.id}-${activeCategory}-${searchQuery}`} 
                className="gallery-item-wrapper"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div 
                  className={`gallery-item ${isSelected ? 'selected' : ''}`}
                >
                  <div className="item-preview" onClick={() => onSelect(style.id)} style={{ background: style.background }}>
                      <button 
                          className={`compare-toggle-overlay ${isSelected ? 'active' : ''}`}
                          onClick={(e) => {
                              e.stopPropagation();
                              onToggleCompare(style.id);
                          }}
                          title={isSelected ? 'Remove from comparison' : 'Add to comparison'}
                      >
                          {isSelected ? '✓' : '+'}
                      </button>
                      <div className={`mini-card style-${style.id}`}>
                          <div className="mini-dot"></div>
                          <div className="mini-text"></div>
                      </div>
                  </div>
                  <div className="item-info" onClick={() => onSelect(style.id)}>
                    <div className="info-header">
                        <span className="style-category">{style.category}</span>
                        <h3>{style.name}</h3>
                    </div>
                    <p>{style.pros[0]}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <h3>No styles found matching "{searchQuery}"</h3>
            <p>Try searching for something else or browse categories.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>Clear All Filters</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-container {
          padding: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-item-wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item-wrapper.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 5rem 2rem;
          background: hsl(var(--bg-secondary));
          border-radius: var(--radius);
          border: 1px dashed hsl(var(--border));
        }

        .no-results h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .no-results button {
          margin-top: 1.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 100px;
          border: none;
          background: hsl(var(--accent));
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .gallery-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .gallery-header h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .gallery-controls {
          margin: 3rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          max-width: 800px;
        }

        .search-box {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .search-box input {
          width: 100%;
          padding: 1rem 1.5rem 1rem 3.5rem;
          border-radius: 100px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--bg-secondary));
          color: hsl(var(--fg-primary));
          font-size: 1rem;
          transition: all 0.2s;
        }

        .search-box input:focus {
          outline: none;
          border-color: hsl(var(--accent));
          box-shadow: 0 0 0 4px hsl(var(--accent) / 10%);
          background: hsl(var(--bg-primary));
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          opacity: 0.5;
        }

        .category-pills {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pill {
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--bg-secondary));
          color: hsl(var(--fg-secondary));
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .pill:hover {
          background: hsl(var(--border));
          color: hsl(var(--fg-primary));
        }

        .pill.active {
          background: hsl(var(--fg-primary));
          color: hsl(var(--bg-primary));
          border-color: hsl(var(--fg-primary));
        }

        .compare-bar {
          margin-top: 1rem;
          background: hsl(var(--accent) / 10%);
          padding: 1rem 2rem;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          border: 1px solid hsl(var(--accent) / 20%);
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .compare-now-btn {
          background: hsl(var(--accent));
          color: #fff;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .compare-now-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px hsl(var(--accent) / 40%);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .gallery-item {
          background: hsl(var(--bg-secondary));
          border-radius: var(--radius);
          border: 1px solid hsl(var(--border));
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .gallery-item.selected {
          border-color: hsl(var(--accent));
          background: hsl(var(--accent) / 2%);
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .item-preview {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .compare-toggle-overlay {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #fff;
            background: rgba(0,0,0,0.2);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 10;
            transition: all 0.2s;
            backdrop-filter: blur(4px);
        }

        .compare-toggle-overlay:hover {
            transform: scale(1.1);
            background: rgba(0,0,0,0.4);
        }

        .compare-toggle-overlay.active {
            background: hsl(var(--accent));
            border-color: hsl(var(--accent));
        }

        .item-info {
          padding: 1.5rem;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .style-category {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--fg-secondary));
          font-weight: 800;
          margin-bottom: 0.4rem;
          display: block;
        }

        .info-header h3 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
          color: hsl(var(--fg-primary));
        }

        .item-info p {
          font-size: 0.85rem;
          color: hsl(var(--fg-secondary));
          margin: 0;
        }

        /* --- MINI CARD STYLES --- */
        .mini-card { width: 80px; height: 50px; position: relative; padding: 5px; transition: all 0.3s; }
        .mini-dot { width: 6px; height: 6px; border-radius: 50%; margin-bottom: 4px; }
        .mini-text { width: 70%; height: 4px; border-radius: 2px; background: currentColor; opacity: 0.2; margin-bottom: 3px; }

        .mini-card.style-glassmorphism { background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; }
        .mini-card.style-neumorphism { background: #e0e5ec; border-radius: 12px; box-shadow: 4px 4px 8px #bec3c9, -4px -4px 8px #fff; border: none; }
        .mini-card.style-claymorphism { background: #fff; border-radius: 15px; box-shadow: 5px 5px 10px #d1d9e6, inset -2px -2px 4px rgba(0,0,0,0.05); border: none; }
        .mini-card.style-neo-brutalism { background: #fff; border: 2px solid #000; box-shadow: 3px 3px 0 #000; border-radius: 0; }
        .mini-card.style-pink-pastel { background: #fff; border: 1px solid #ffdeeb; border-radius: 10px; box-shadow: 0 4px 8px rgba(255,182,193,0.1); }
        .mini-card.style-minimalist { background: #fff; border: 1px solid #eaeaea; border-radius: 2px; }
        .mini-card.style-dark-futuristic { background: #0f172a; border: 1px solid #1e293b; border-radius: 4px; box-shadow: 0 0 5px rgba(34,211,238,0.2); }
        .mini-card.style-aurora-ui { background: rgba(255,255,255,0.5); backdrop-filter: blur(8px); border-radius: 10px; border: 1px solid #fff; }
        .mini-card.style-retro-vaporwave { background: #2d1b4e; border: 1px solid #ff71ce; box-shadow: 3px 3px 0 #b967ff; border-radius: 0; }
        .mini-card.style-skeuomorphism { background: linear-gradient(180deg, #444, #222); border-radius: 6px; border-top: 1px solid #666; }
        .mini-card.style-swiss-editorial { background: #fff; border-left: 4px solid #000; border-radius: 0; }
        .mini-card.style-organic-earth { background: #fdfaf0; border-radius: 15px 5px 20px 8px; border: 1px solid #e9e2d0; }
        .mini-card.style-bauhaus { background: #fff; border: 2px solid #000; border-radius: 0; }
        .mini-card.style-fluid-liquid { background: #000; border-radius: 12px; border: 1px solid #333; }
        .mini-card.style-flat-design { background: #f8fafc; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .mini-card.style-glass-dark { background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; }
        .mini-card.style-90s-web { background: #c0c0c0; border: 1px solid; border-color: #fff #808080 #808080 #fff; border-radius: 0; }
        .mini-card.style-terminal { background: #000; border: 1px solid #333; border-radius: 0; }
        .mini-card.style-modern-luxury { background: #1a1a1a; border: 1px solid #333; border-radius: 0; }

        .mini-card.style-brutalism-classic { background: #808080; border: 2px solid #000; border-radius: 0; }
        .mini-card.style-brutalism-classic .mini-dot { background: #fff; border-radius: 0; }

        .mini-card.style-y2k-futuristic { background: #e2e2ff; border: 1px solid #fff; border-radius: 8px; }
        .mini-card.style-y2k-futuristic .mini-dot { background: #ff00ff; }
        
        .mini-card.style-cyber-noir { background: #000; border-left: 2px solid #ff0000; border-radius: 0; }
        .mini-card.style-cyber-noir .mini-dot { background: #333; }

        .mini-card.style-memphis-pop { background: #fff; border: 1px solid #000; box-shadow: 2px 2px 0 #3b82f6; border-radius: 0; }
        .mini-card.style-memphis-pop .mini-dot { background: #ec4899; }

        .mini-card.style-art-deco { background: #1a1a1a; border: 1px solid #c5a059; border-radius: 0; }
        .mini-card.style-art-deco .mini-dot { background: #c5a059; }

        .mini-card.style-soft-pop { background: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(100,120,255,0.1); border: none; }
        .mini-card.style-soft-pop .mini-dot { background: #6366f1; }

        .mini-card.style-holographic-glow { background: linear-gradient(135deg, #fff, #c8ffff, #ffc8ff); border-radius: 6px; border: 1px solid #fff; }
        .mini-card.style-holographic-glow .mini-dot { background: #fff; }

        .mini-card.style-wabi-sabi { background: #fff; border-radius: 4px 10px 4px 8px; border: 1px solid #e0dbd1; }
        .mini-card.style-wabi-sabi .mini-dot { background: #d9d2c5; }

        .mini-card.style-industrial-grit { background: #333; border: 1px solid #444; border-radius: 0; }
        .mini-card.style-industrial-grit .mini-dot { background: #ff6b00; }

        .mini-card.style-data-hud { background: rgba(0,53,102,0.2); border: 1px solid #00bbf9; border-radius: 0; }
        .mini-card.style-data-hud .mini-dot { background: #00bbf9; }

        .mini-card.style-papercraft { background: #fff; border-radius: 2px; box-shadow: 2px 2px 0 rgba(0,0,0,0.05); border: none; }
        .mini-card.style-papercraft .mini-dot { background: #f0f0f0; }

        .mini-card.style-victorian-gothic { background: #000; border: 1px solid #d4af37; border-radius: 0; }
        .mini-card.style-victorian-gothic .mini-dot { background: #d4af37; }

        .mini-card.style-retro-mac { background: #fff; border: 1px solid #000; box-shadow: 2px 2px 0 #000; border-radius: 0; }
        .mini-card.style-retro-mac .mini-dot { background: #000; }

        .mini-card.style-material-you { background: #f2f0e4; border-radius: 10px; border: none; }
        .mini-card.style-material-you .mini-dot { background: #7d775b; }

        .mini-card.style-abstract-fluid { background: rgba(255,255,255,0.1); border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); }
        .mini-card.style-abstract-fluid .mini-dot { background: #ff0080; }

        .mini-card.style-neon-tokyo { background: #000; border: 1px solid #00ffff; box-shadow: 0 0 5px #ff00ff; border-radius: 0; }
        .mini-card.style-neon-tokyo .mini-dot { background: #ff00ff; }

        .mini-card.style-minimalist-dark { background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 0; }
        .mini-card.style-minimalist-dark .mini-dot { background: #333; }

        .mini-card.style-swiss-grid { background: #fff; border: 1px solid #000; border-radius: 0; }
        .mini-card.style-swiss-grid .mini-dot { background: #ff0000; }

        .mini-card.style-synthwave-retro { background: #240b36; border: 1px solid #ed1e79; box-shadow: 0 0 5px #ed1e79; border-radius: 0; }
        .mini-card.style-synthwave-retro .mini-dot { background: #00ffff; }

        .mini-card.style-monochrome-modern { background: #1a1a1a; border: 1px solid #333; border-radius: 0; }
        .mini-card.style-monochrome-modern .mini-dot { background: #fff; }

        .mini-card.style-y2k-chrome { background: linear-gradient(135deg, #e0e0e0, #fff, #8e8e8e); border: 1px solid #fff; border-radius: 6px; }
        .mini-card.style-y2k-pink { background: #ff80bf; border: 1px solid #fff; border-radius: 6px; }
        .mini-card.style-y2k-pink .mini-dot { background: #fff; }
        .mini-card.style-y2k-glass { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%; }
        .mini-card.style-hyper-maximalism { background: #ffff00; border: 2px solid #000; box-shadow: 2px 2px 0 #00ffcc; border-radius: 0; }
        .mini-card.style-organic-mesh { background: rgba(255,255,255,0.1); border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); }
        .mini-card.style-pixel-retro { background: #444; border: 1px solid #fff; border-radius: 0; }
        .mini-card.style-pixel-retro .mini-dot { background: #00ff00; border-radius: 0; }
        .mini-card.style-vogue-editorial { background: #fff; border-top: 1px solid #000; border-bottom: 1px solid #000; border-radius: 0; }
        .mini-card.style-glitch-aesthetics { background: #111; border: 1px solid #333; border-radius: 0; box-shadow: 1px 0 #ff00ff; }
        .mini-card.style-clay-dark { background: #24283b; border-radius: 10px; box-shadow: 3px 3px 6px #16161e; border: none; }
        .mini-card.style-soft-brutalism { background: #fff; border: 1px solid #000; border-radius: 6px; box-shadow: 2px 2px 0 #000; }

        .mini-card.style-kinetic-type { background: #000; border: 1px solid #333; border-radius: 0; }
        .mini-card.style-kinetic-type .mini-dot { background: #fff; border-radius: 0; }
        .mini-card.style-brutalist-elite { background: #f4f4f4; border: 1px solid #000; border-radius: 0; }
        .mini-card.style-liquid-warp { background: #000814; border: 1px solid #ffc300; border-radius: 50% 30% 70% 40%; }
        .mini-card.style-asymmetric-vibe { background: #1a1a1a; box-shadow: 2px 2px 0 #e0e0e0; border-radius: 0; }
        .mini-card.style-grainy-analog { background: #fdfaf0; border: 1px solid #ddd; border-radius: 2px; }
        .mini-card.style-elegant-serif { background: #fff; border-bottom: 2px solid #000; border-radius: 0; }
        .mini-card.style-horizontal-flow { background: #111; border: 1px solid #333; border-radius: 0; }
        .mini-card.style-split-dynamic { background: linear-gradient(90deg, #000 50%, #fff 50%); border-radius: 0; }
        .mini-card.style-mask-reveal { background: #000; border: 1px solid #333; overflow: hidden; }
        .mini-card.style-3d-float { background: #fff; border-radius: 8px; box-shadow: 5px 5px 10px rgba(0,0,0,0.1); }
        .mini-card.style-parallax-layers { background: #0a0e14; border: 1px solid #222; border-radius: 0; }
        .mini-card.style-technical-mono { background: #000; border: 1px solid #00ff00; border-radius: 0; }
        .mini-card.style-neon-noir { background: #050505; border: 1px solid #ff0055; box-shadow: 0 0 5px #ff0055; }
        .mini-card.style-mesh-soft { background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
        .mini-card.style-pop-brutalist { background: #ffff00; border: 2px solid #000; box-shadow: 2px 2px 0 #ff0055; border-radius: 0; }
        .mini-card.style-modern-bauhaus { background: #fff; border: 1px solid #000; border-radius: 0; }
        .mini-card.style-modern-bauhaus::before { content: ''; position: absolute; top: -2px; right: -2px; width: 10px; height: 10px; background: #ff0000; border-radius: 50%; }
        .mini-card.style-experimental-chaos { background: #000; color: #fff; transform: skew(5deg); border-radius: 0; }
        .mini-card.style-narrative-flow { background: #fff; border-left: 3px solid #333; border-radius: 0; }
        .mini-card.style-reactive-minimal { background: #fff; border: 1px solid #eee; border-radius: 4px; transition: border 0.3s; }
        .mini-card.style-reactive-minimal:hover { border-color: #000; }
        .mini-card.style-classic-revival { background: #fff; border: 1px solid #d4af37; border-radius: 0; }

        .mini-card.style-isometric-grid { background: #f0f4f8; transform: rotateX(20deg) rotateZ(-10deg); border-radius: 4px; }
        .mini-card.style-holographic-foil { background: linear-gradient(135deg, #ff00ff, #00ffff); border-radius: 8px; opacity: 0.8; }
        .mini-card.style-cyber-renaissance { background: #1a1a1a; border: 1px solid #d4af37; border-radius: 0; }
        .mini-card.style-liquid-gold { background: #d4af37; border-radius: 50% 20% 50% 20%; border: none; }
        .mini-card.style-brutalist-sketch { background: #fdfaf0; border: 1.5px solid #000; border-radius: 12px 2px 12px 2px; }
        .mini-card.style-deep-glass-dark { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; }
        .mini-card.style-ascii-art { background: #000; border: 1px solid #0f0; border-radius: 0; }
        .mini-card.style-organic-shadows { background: #fff; box-shadow: 2px 2px 5px rgba(100,120,255,0.2); border: none; border-radius: 12px; }
        .mini-card.style-glass-distortion { background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); border-radius: 50px; border: 1px solid #333; }
        .mini-card.style-hyper-pop { background: #00ffff; border: 2px solid #000; box-shadow: 2px 2px 0 #ffff00; border-radius: 0; }
        .mini-card.style-monotype-technical-white { background: #fff; border: 0.5px solid #000; border-radius: 0; }
        .mini-card.style-vaporwave-sunset { background: linear-gradient(0deg, #ff71ce, #01cdfe); border-radius: 0; }
        .mini-card.style-ultra-fine-minimalism { background: #fff; border: 0.2px solid #000; border-radius: 0; }
        .mini-card.style-abstract-geometry { background: #0f172a; border-radius: 0; }
        .mini-card.style-abstract-geometry::before { content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 50%; background: #3b82f6; }
        .mini-card.style-cyber-organic { background: #000; border: 1px solid #00ffcc; border-radius: 15px 4px 15px 4px; }
        .mini-card.style-infinite-scroll-vibe { background: #fff; border: 1px solid #eee; border-radius: 0; }
        .mini-card.style-maximalist-editorial { background: #ff0000; transform: scale(1.1); border-radius: 0; }
        .mini-card.style-bauhaus-dark { background: #1a1a1a; border-left: 3px solid #ff0000; border-radius: 0; }
        .mini-card.style-clay-vivid { background: #fff; border-radius: 15px; box-shadow: 4px 4px 0 #ec4899; }
        .mini-card.style-minimal-glass-light { background: rgba(255,255,255,0.5); border: 1px solid #fff; border-radius: 8px; }

        .mini-card.style-aurora-borealis { background: #010b13; border: 1px solid #00ffcc; border-radius: 12px; }
        .mini-card.style-liquid-mercury { background: linear-gradient(135deg, #fff, #888); border-radius: 50%; border: none; }
        .mini-card.style-neon-circuitry { background: #050505; border: 1px solid #00ff00; border-radius: 0; }
        .mini-card.style-luxury-gold-minimal { background: #fff; border-left: 3px solid #d4af37; border-radius: 0; }
        .mini-card.style-experimental-warp { background: #000; border: 1px solid #fff; transform: skewY(-10deg); border-radius: 0; }
        .mini-card.style-renaissance-glitch { background: #fff; border: 1px solid #d4af37; box-shadow: 3px 3px 0 rgba(212,175,55,0.2); border-radius: 0; }
        .mini-card.style-ultra-bold-minimal { background: #000; border: none; border-radius: 0; }
        .mini-card.style-tinted-glassmorphism { background: rgba(59,130,246,0.2); backdrop-filter: blur(5px); border: 1px solid #3b82f6; border-radius: 8px; }
        .mini-card.style-bauhaus-clean-white { background: #fff; border: 1px solid #000; border-radius: 0; }
        .mini-card.style-bauhaus-clean-white::after { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 5px; background: #ff0000; }
        .mini-card.style-cyber-punk-active { background: #111; border: 1px solid #ff00ff; box-shadow: 2px 0 #00ffff; border-radius: 0; }
        .mini-card.style-pixel-art-modern { background: #333; border: 2px solid #fff; border-radius: 0; }
        .mini-card.style-clay-dark-vivid { background: #1e293b; border-radius: 12px; box-shadow: 3px 3px 10px rgba(0,0,0,0.3); }
        .mini-card.style-monochrome-brutalism { background: #fff; border: 3px solid #000; box-shadow: 5px 5px 0 #000; border-radius: 0; }
        .mini-card.style-noise-mesh-gradient { background: linear-gradient(45deg, #ff0055, #3b82f6); border-radius: 12px; border: none; }
        .mini-card.style-brutalist-interactive-pop { background: #fff; border: 2px solid #000; border-radius: 0; }
        .mini-card.style-the-final-signature { background: #fff; border: 1.5px solid #d4af37; box-shadow: 0 10px 20px rgba(0,0,0,0.3); border-radius: 0; }
        .mini-card.style-abstract-blobs { background: #fff; border-radius: 40% 60% 30% 70%; box-shadow: 0 5px 10px rgba(0,0,0,0.05); }
        .mini-card.style-minimal-grid-thin { background: #fff; border: 0.5px solid #000; border-radius: 0; background-image: linear-gradient(#eee 0.5px, transparent 0.5px); background-size: 10px 10px; }
        .mini-card.style-maximalist-pattern { background: #000; border: 4px solid #fff; border-radius: 0; background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,0,85,0.2) 5px); }
        .mini-card.style-soft-grain-gradient { background: linear-gradient(120deg, #fccb90, #d57eeb); border-radius: 12px; border: none; }

        @media (max-width: 768px) {
          .gallery-container { padding: 1.5rem; }
          .gallery-header h1 { font-size: 2.5rem; }
          .gallery-controls { margin: 2rem auto; }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .gallery-item { border-radius: 12px; }
          .info-header h3 { font-size: 1rem; }
          .item-info { padding: 1rem; min-height: 80px; }
          .item-preview { height: 120px; }
          .compare-toggle-overlay { width: 28px; height: 28px; font-size: 1rem; top: 5px; right: 5px; }
          .search-box input { padding: 0.8rem 1rem 0.8rem 3rem; font-size: 0.9rem; }
          .search-icon { left: 1rem; font-size: 1rem; }
          .pill { padding: 0.5rem 1rem; font-size: 0.75rem; }
        }
      `}</style>

    </div>
  );
}
