import React, { useState } from 'react';
import logoImg from './assets/e3di-logo.png';
import './index.css';

export default function PricingPage({ activeLink, setActiveLink }) {
  const [billingCycle, setBillingCycle] = useState('Weekly');

  const standardFeatures = [
    '1 Premium Screen in Vijayawada',
    'Advertisement display (7 days)',
    'Dedicated daily play time',
    'High-quality video / image display',
    'Campaign performance report'
  ];

  const goldFeatures = [
    '2 Premium Screens in Key Locations',
    'Advertisement display (7 days)',
    'Dedicated daily play time (more slots)',
    'Priority placement & scheduling',
    'Campaign performance report'
  ];

  const eliteFeatures = [
    '4 Premium Screens Across Vijayawada',
    'Advertisement display (7 days)',
    'Custom scheduling & time slots',
    'Premium placement (high-traffic zones)',
    'Detailed performance analytics'
  ];

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', fontFamily: "'Inter', sans-serif", paddingBottom: '4rem', paddingTop: 'env(safe-area-inset-top)' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 4rem', backgroundColor: '#fff', borderBottom: '1px solid #eaeaea' }}>
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); setActiveLink('home'); }}>
            <img src={logoImg} alt="E3Di Logo" style={{ height: '40px', objectFit: 'contain', cursor: 'pointer', filter: 'brightness(0)' }} />
          </a>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#333', marginTop: '0.2rem' }}>City Screens. Real Impact.</span>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
          <a href="#" style={{ fontWeight: activeLink === 'home' ? 700 : 500, color: activeLink === 'home' ? '#000' : '#888', textDecoration: 'none', borderBottom: activeLink === 'home' ? '2px solid #000' : 'none', paddingBottom: '0.2rem' }} onClick={(e) => { e.preventDefault(); setActiveLink('home'); }}>Home</a>
          <a href="#" style={{ fontWeight: activeLink === 'screens' ? 700 : 500, color: activeLink === 'screens' ? '#000' : '#888', textDecoration: 'none', borderBottom: activeLink === 'screens' ? '2px solid #000' : 'none', paddingBottom: '0.2rem' }} onClick={(e) => { e.preventDefault(); setActiveLink('screens'); }}>Screens</a>
          <a href="#" style={{ fontWeight: activeLink === 'pricing' ? 700 : 500, color: activeLink === 'pricing' ? '#000' : '#888', textDecoration: 'none', borderBottom: activeLink === 'pricing' ? '2px solid #000' : 'none', paddingBottom: '0.2rem' }} onClick={(e) => { e.preventDefault(); setActiveLink('pricing'); }}>Pricing</a>
          <a href="#" style={{ fontWeight: activeLink === 'partners' ? 700 : 500, color: activeLink === 'partners' ? '#000' : '#888', textDecoration: 'none', borderBottom: activeLink === 'partners' ? '2px solid #000' : 'none', paddingBottom: '0.2rem' }} onClick={(e) => { e.preventDefault(); setActiveLink('partners'); }}>Partners With Us</a>
          <a href="#" style={{ fontWeight: activeLink === 'contact' ? 700 : 500, color: activeLink === 'contact' ? '#000' : '#888', textDecoration: 'none', borderBottom: activeLink === 'contact' ? '2px solid #000' : 'none', paddingBottom: '0.2rem' }} onClick={(e) => { e.preventDefault(); setActiveLink('contact'); }}>Contact</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button style={{ backgroundColor: '#0f172a', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: '4px', border: 'none', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            BOOK CAMPAIGN <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#f97316', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Pricing Packages</p>
          <h1 style={{ fontSize: '3rem', fontWeight: 500, color: '#111', marginBottom: '1rem', letterSpacing: '-1px' }}>
            Choose a Plan That Fits <span style={{ fontWeight: 800 }}>Your Goals.</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', fontWeight: 400 }}>
            Simple pricing for premium LED screens in Vijayawada.
          </p>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', background: '#fff', borderRadius: '30px', padding: '4px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setBillingCycle('Weekly')}
              style={{
                backgroundColor: billingCycle === 'Weekly' ? '#0f172a' : 'transparent',
                color: billingCycle === 'Weekly' ? '#fff' : '#64748b',
                border: 'none',
                padding: '0.6rem 2rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Weekly
            </button>
            <button
              onClick={() => setBillingCycle('Monthly')}
              style={{
                backgroundColor: billingCycle === 'Monthly' ? '#0f172a' : 'transparent',
                color: billingCycle === 'Monthly' ? '#fff' : '#64748b',
                border: 'none',
                padding: '0.6rem 2rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'center' }}>
          
          {/* Standard Card */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', backgroundColor: '#eff6ff', color: '#3b82f6', fontSize: '0.7rem', fontWeight: 700, padding: '0.4rem 0.8rem', borderRadius: '20px' }}>
              START SMALL
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>Standard</h3>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '3rem' }}>
              Perfect for small businesses<br/>and local promotions.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-2px' }}>₹9,999</span>
              <span style={{ color: '#64748b', fontSize: '1rem', fontWeight: 600 }}>/ WEEK</span>
            </div>
            
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {standardFeatures.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
            
            <button style={{ width: '100%', backgroundColor: '#fff', color: '#0f172a', border: '1px solid #0f172a', borderRadius: '8px', padding: '1rem', fontSize: '1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              Choose Standard <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Gold Card */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '3rem 2rem', border: '3px solid #d4af37', boxShadow: '0 20px 25px -5px rgba(212, 175, 55, 0.2), 0 8px 10px -6px rgba(212, 175, 55, 0.1)', position: 'relative', transform: 'scale(1.03)', zIndex: 10 }}>
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', backgroundColor: '#d4af37', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.4rem 0.8rem', borderRadius: '20px' }}>
              MOST POPULAR
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#fef3c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>Gold</h3>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '3rem' }}>
              Perfect for growing brands<br/>with higher visibility.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-2px' }}>₹19,999</span>
              <span style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: 700 }}>/ WEEK</span>
            </div>
            
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {goldFeatures.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
            
            <button style={{ width: '100%', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #0f172a', borderRadius: '8px', padding: '1rem', fontSize: '1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              Choose Gold <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Elite Card */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem 2rem', border: '1px solid #94a3b8', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', backgroundColor: '#eff6ff', color: '#3b82f6', fontSize: '0.7rem', fontWeight: 700, padding: '0.4rem 0.8rem', borderRadius: '20px' }}>
              MAXIMUM REACH
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>Elite</h3>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '3rem' }}>
              Maximum reach for<br/>high-impact campaigns.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-2px' }}>₹29,999</span>
              <span style={{ color: '#64748b', fontSize: '1rem', fontWeight: 600 }}>/ WEEK</span>
            </div>
            
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {eliteFeatures.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
            
            <button style={{ width: '100%', backgroundColor: '#fff', color: '#0f172a', border: '1px solid #0f172a', borderRadius: '8px', padding: '1rem', fontSize: '1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              Choose Elite <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
