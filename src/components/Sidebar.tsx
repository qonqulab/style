import React from 'react';
import { stylesData } from '@/data/styles';

export default function Sidebar({ activeId, setActiveId }: { activeId: string, setActiveId: (id: string) => void }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a href="https://qonqu.com/" target="_blank" rel="noopener noreferrer" className="sidebar-header-link">
          <div className="sidebar-header">
            <h2>QONQU StyleLib</h2>
            <p>Design Style Showcase</p>
          </div>
        </a>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <button
          onClick={() => setActiveId('gallery')}
          className={`nav-item gallery-btn ${activeId === 'gallery' ? 'active' : ''}`}
        >
          Overview Gallery
        </button>
        <div className="divider"></div>
        {stylesData.map((style) => (
          <button
            key={style.id}
            onClick={() => setActiveId(style.id)}
            className={`nav-item ${activeId === style.id ? 'active' : ''}`}
          >
            {style.name}
          </button>
        ))}
        <div className="mobile-scroll-indicator">Swipe →</div>
      </nav>


      <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          border-right: 1px solid hsl(var(--border));
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          background: hsl(var(--bg-secondary));
          overflow-y: auto;
          flex-shrink: 0;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .sidebar-header-link {
          text-decoration: none;
          color: inherit;
          display: block;
          transition: opacity 0.2s;
        }

        .sidebar-header-link:hover {
          opacity: 0.8;
        }

        .sidebar-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        .theme-toggle {
          background: hsl(var(--bg-primary));
          border: 1px solid hsl(var(--border));
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s;
        }

        .theme-toggle:hover {
          transform: rotate(15deg) scale(1.1);
          background: hsl(var(--border));
        }


        .sidebar-header {
          margin-bottom: 0;
        }


        .sidebar-header h2 {
          font-size: 1.5rem;
          color: hsl(var(--fg-primary));
        }

        .sidebar-header p {
          font-size: 0.8rem;
          margin-top: 0.2rem;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          text-align: left;
          padding: 0.8rem 1rem;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          font-weight: 500;
          color: hsl(var(--fg-secondary));
          transition: all var(--transition-fast);
        }

        .nav-item:hover {
          background: hsl(var(--border));
          color: hsl(var(--fg-primary));
        }

        .nav-item.active {
          background: hsl(var(--fg-primary));
          color: hsl(var(--bg-primary));
        }

        .divider {
          height: 1px;
          background: hsl(var(--border));
          margin: 1rem 0;
        }

        .gallery-btn {
          background: hsl(var(--accent) / 10%) !important;
          color: hsl(var(--accent)) !important;
          border: 1px solid hsl(var(--accent) / 20%) !important;
        }

        .gallery-btn.active {
          background: hsl(var(--accent)) !important;
          color: #fff !important;
        }

        .mobile-scroll-indicator {
          display: none;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            min-height: 100px;
            border-right: none;
            border-bottom: 1px solid hsl(var(--border));
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            position: relative;
          }

          .sidebar::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 50px;
            background: linear-gradient(to left, hsl(var(--bg-secondary)), transparent);
            pointer-events: none;
            z-index: 5;
          }

          .sidebar-header {
            margin-bottom: 0 !important;
          }

          .sidebar-nav {
            flex-direction: row !important;
            overflow-x: auto;
            padding-bottom: 1rem;
            width: 100%;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .sidebar-nav::-webkit-scrollbar {
            display: none;
          }

          .nav-item {
            white-space: nowrap;
          }

          .mobile-scroll-indicator {
            display: block;
            position: absolute;
            right: 1rem;
            bottom: 0.5rem;
            font-size: 0.65rem;
            background: hsl(var(--accent));
            color: #fff;
            padding: 2px 8px;
            border-radius: 10px;
            z-index: 10;
            animation: pulse 2s infinite;
          }
        }

        @keyframes pulse {
          0% { opacity: 0.6; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(5px); }
          100% { opacity: 0.6; transform: translateX(0); }
        }
      `}</style>
    </aside>
  );
}
