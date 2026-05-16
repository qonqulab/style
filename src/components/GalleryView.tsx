'use client';

import React, { useState } from 'react';
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
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="category-pills">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
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
          animation: slideUpFade 0.5s ease forwards;
        }

        @keyframes slideUpFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
