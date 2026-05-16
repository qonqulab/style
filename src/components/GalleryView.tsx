'use client';

import React from 'react';
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
  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>QONQU Style Library</h1>
        <p>A sovereign collection of design systems for the QONQU Media Empire.</p>
        
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
        {stylesData.map((style) => {
          const isSelected = compareIds.includes(style.id);
          return (
            <div 
              key={style.id} 
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
                    <h3>{style.name}</h3>
                </div>
                <p>{style.pros[0]}</p>
              </div>
            </div>

          );
        })}
      </div>


      <style jsx>{`
        .gallery-container {
          padding: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .gallery-header h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .compare-bar {
          margin-top: 2rem;
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

        .item-info {
          padding: 1.5rem;
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
          padding: 1.25rem;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .info-header h3 {
          font-size: 1.1rem;
          margin: 0;
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        @media (max-width: 768px) {
          .gallery-container { padding: 1rem; }
          .gallery-header h1 { font-size: 1.8rem; }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .gallery-item { border-radius: 12px; }
          .info-header h3 { font-size: 0.9rem; }
          .item-info { padding: 0.75rem; min-height: 60px; }
          .item-preview { height: 100px; }
          .mini-card { transform: scale(0.6); }
          .compare-toggle-overlay { width: 28px; height: 28px; font-size: 1rem; top: 5px; right: 5px; }
        }

      `}</style>

    </div>
  );
}
