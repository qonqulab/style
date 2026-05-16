'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import StyleShowcase from '@/components/StyleShowcase';
import GalleryView from '@/components/GalleryView';
import ComparisonView from '@/components/ComparisonView';
import { stylesData } from '@/data/styles';

export default function Home() {
  const [activeId, setActiveId] = useState('gallery');
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const activeStyle = stylesData.find(s => s.id === activeId);

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  return (
    <main className="main-wrapper">
      <Sidebar activeId={activeId} setActiveId={setActiveId} />
      
      <div className="content-area">
        {activeId === 'gallery' ? (
          <GalleryView 
            onSelect={setActiveId} 
            compareIds={compareIds}
            onToggleCompare={toggleCompare}
          />
        ) : activeId === 'comparison' ? (
          <ComparisonView 
            styleIds={compareIds} 
            onBack={() => setActiveId('gallery')} 
          />
        ) : (
          activeStyle && <StyleShowcase style={activeStyle} />
        )}
      </div>

      <style jsx global>{`
        .main-wrapper {
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .content-area {
          flex: 1;
          background: hsl(var(--bg-primary));
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          .main-wrapper {
            flex-direction: column;
          }
          
          .content-area {
            height: calc(100vh - 120px); /* Adjust for mobile menu height */
          }
        }
      `}</style>
    </main>
  );
}
