import React, { useState, useRef } from 'react';
import logoImg from './assets/e3di-logo.png';
import mgRoadImg from './assets/MG road.jpeg';
import benzCircleImg from './assets/benz center.jpeg';
import eluruRoadImg from './assets/elluru road.jpeg';
import e3diImg from './assets/e3di.jpeg';

export default function ScreensPage({ activeLink, setActiveLink }) {
  const [activeFilter, setActiveFilter] = useState('All Locations');
  const [activeMapLocation, setActiveMapLocation] = useState(null);
  const mapRef = useRef(null);

  const handleViewMap = (screenName) => {
    setActiveMapLocation(screenName);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPinStyle = (name) => {
    const isActive = activeMapLocation === name;
    const isDimmed = activeMapLocation && activeMapLocation !== name;
    return {
      transition: 'all 0.4s ease',
      opacity: isDimmed ? 0.3 : 1,
      zIndex: isActive ? 30 : 10,
      transform: `translate(-50%, -100%) scale(${isActive ? 1.3 : 1})`,
      filter: isActive ? 'drop-shadow(0 10px 15px rgba(239, 68, 68, 0.5))' : 'none'
    };
  };

  const screens = [
    {
      name: 'MG Road',
      desc: 'Vijayawada\'s busiest commercial hub with high footfall and retail activity.',
      img: mgRoadImg,
      type: 'Commercial',
      reach: '2.5L+',
      size: '5 × 3 FEET LED'
    },
    {
      name: 'Benz Circle',
      desc: 'Iconic junction connecting major parts of the city.',
      img: benzCircleImg,
      type: 'Landmark',
      reach: '2L+',
      size: '4 × 3 FEET LED'
    },
    {
      name: 'Eluru Road',
      desc: 'High-traffic corridor with continuous vehicle movement.',
      img: eluruRoadImg,
      type: 'Traffic Junction',
      reach: '3L+',
      size: '5 × 3 FEET LED'
    },
    {
      name: 'E3Di',
      desc: 'Industrial and business hub with strong daily traffic.',
      img: e3diImg,
      type: 'Commercial',
      reach: '1.8L+',
      size: '5 × 3 FEET LED'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* Light Navbar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 4rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); setActiveLink('home'); }} style={{ display: 'inline-block' }}>
            <img src={logoImg} alt="E3Di Logo" style={{ height: '35px', objectFit: 'contain' }} />
          </a>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, marginTop: '0.2rem' }}>City Screens. Real Impact.</span>
        </div>

        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); setActiveLink('home'); }} style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}>Home</a>
          <a href="#screens" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none', borderBottom: '2px solid #0f172a', paddingBottom: '4px' }}>Screens</a>
          <a href="#pricing" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}>Pricing</a>
          <a href="#partners" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}>Partners With Us</a>
          <a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}>Contact</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#0f172a', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            BOOK CAMPAIGN <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '4rem 4rem 6rem 4rem', maxWidth: '95%', margin: '0 auto' }}>

        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ color: '#f97316', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
              OUR LOCATIONS
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', margin: '0 0 1rem 0', letterSpacing: '-1.5px' }}>
              Premium Screens<br />Across Vijayawada
            </h1>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Strategically placed at the city's most high-traffic areas to give your brand maximum visibility and real impact.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', backgroundColor: '#f1f5f9', padding: '2rem 3rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>4</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Prime Screens</span>
            </div>
            <div style={{ width: '1px', backgroundColor: '#cbd5e1' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>2M+</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Daily Reach</span>
            </div>
            <div style={{ width: '1px', backgroundColor: '#cbd5e1' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>100%</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>City Coverage</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button onClick={() => setActiveFilter('All Locations')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', backgroundColor: activeFilter === 'All Locations' ? '#0f172a' : '#fff', color: activeFilter === 'All Locations' ? '#fff' : '#64748b', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem', border: activeFilter === 'All Locations' ? 'none' : '1px solid #e2e8f0', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            All Locations
          </button>
          {[
            { name: 'Commercial', icon: <><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M3 9l2.45-5.98A2 2 0 0 1 7.31 2h9.38a2 2 0 0 1 1.86 1.26L21 9" /></> },
            { name: 'Traffic Junctions', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
            { name: 'Landmarks', icon: <><rect x="2" y="20" width="20" height="2" rx="1" /><rect x="4" y="9" width="4" height="9" /><rect x="10" y="9" width="4" height="9" /><rect x="16" y="9" width="4" height="9" /><polygon points="12 2 2 7 22 7" /></> },
            { name: 'Residential', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></> },
            { name: 'High Reach', icon: <><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> }
          ].map(filter => (
            <button key={filter.name} onClick={() => setActiveFilter(filter.name)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', backgroundColor: activeFilter === filter.name ? '#0f172a' : '#fff', color: activeFilter === filter.name ? '#fff' : '#64748b', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem', border: activeFilter === filter.name ? 'none' : '1px solid #e2e8f0', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {filter.icon}
              </svg>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {screens.filter(screen => activeFilter === 'All Locations' || screen.type === activeFilter || screen.type + 's' === activeFilter).map((screen, idx) => (
            <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img src={screen.img} alt={screen.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                {/* Overlay Tags */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: '#fff', padding: '0.3rem 0.8rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {screen.type}
                </div>

                <button style={{ position: 'absolute', top: '1rem', right: '1rem', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: '#fff', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                </button>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{screen.name}</h3>
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>{screen.desc}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    {screen.size}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    {screen.reach} Daily Reach
                  </div>
                </div>

                <button onClick={() => handleViewMap(screen.name)} style={{ width: '100%', padding: '0.8rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#0f172a', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                  Locate on Map <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Map CTA */}
        <div ref={mapRef} style={{ display: 'flex', backgroundColor: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <div style={{ flex: '0 0 40%', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>EXPLORE ON MAP</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, margin: '0 0 1.5rem 0', letterSpacing: '-1px' }}>Find the Right Screen<br />for Your Brand</h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>Explore all E3Di screens across Vijayawada and choose the perfect location for your next campaign.</p>
            <button onClick={() => window.open('https://www.google.com/maps/search/Vijayawada', '_blank')} style={{ alignSelf: 'flex-start', backgroundColor: '#0f172a', color: '#fff', padding: '0.8rem 1.8rem', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              View On Map <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div style={{ flex: 1, position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
            <iframe
              src="https://maps.google.com/maps?q=Vijayawada&t=&z=12&ie=UTF8&iwloc=&output=embed"
              style={{ position: 'absolute', top: '-65px', left: 0, width: 'calc(100% + 65px)', height: 'calc(100% + 65px)', border: 0, pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vijayawada Map"
            ></iframe>

            {/* Custom Screen Pins Overlay */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>

              {/* MG Road */}
              <div style={{ position: 'absolute', top: '48%', left: '38%', display: 'flex', flexDirection: 'column', alignItems: 'center', ...getPinStyle('MG Road') }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', border: '3px solid #ef4444', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 6px 12px rgba(239, 68, 68, 0.4)' }}>
                  <img src={mgRoadImg} alt="MG Road" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef4444', marginTop: '-2px' }}></div>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', background: '#fff', padding: '0.25rem 0.6rem', borderRadius: '6px', marginTop: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', whiteSpace: 'nowrap', border: '1px solid #e2e8f0' }}>MG Road</div>
              </div>

              {/* Benz Circle */}
              <div style={{ position: 'absolute', top: '55%', left: '55%', display: 'flex', flexDirection: 'column', alignItems: 'center', ...getPinStyle('Benz Circle') }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', border: '3px solid #ef4444', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 6px 12px rgba(239, 68, 68, 0.4)' }}>
                  <img src={benzCircleImg} alt="Benz Circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef4444', marginTop: '-2px' }}></div>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', background: '#fff', padding: '0.25rem 0.6rem', borderRadius: '6px', marginTop: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', whiteSpace: 'nowrap', border: '1px solid #e2e8f0' }}>Benz Circle</div>
              </div>

              {/* Eluru Road */}
              <div style={{ position: 'absolute', top: '40%', left: '48%', display: 'flex', flexDirection: 'column', alignItems: 'center', ...getPinStyle('Eluru Road') }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', border: '3px solid #ef4444', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 6px 12px rgba(239, 68, 68, 0.4)' }}>
                  <img src={eluruRoadImg} alt="Eluru Road" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef4444', marginTop: '-2px' }}></div>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', background: '#fff', padding: '0.25rem 0.6rem', borderRadius: '6px', marginTop: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', whiteSpace: 'nowrap', border: '1px solid #e2e8f0' }}>Eluru Road</div>
              </div>

              {/* E3Di */}
              <div style={{ position: 'absolute', top: '58%', left: '72%', display: 'flex', flexDirection: 'column', alignItems: 'center', ...getPinStyle('E3Di') }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', border: '3px solid #ef4444', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 6px 12px rgba(239, 68, 68, 0.4)' }}>
                  <img src={e3diImg} alt="E3Di" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef4444', marginTop: '-2px' }}></div>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', background: '#fff', padding: '0.25rem 0.6rem', borderRadius: '6px', marginTop: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', whiteSpace: 'nowrap', border: '1px solid #e2e8f0' }}>E3Di</div>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
