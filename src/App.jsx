import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import homeBg from './assets/home background.jpeg';
import logoImg from './assets/e3di-logo.png';
import ctaBg from './assets/footer.jpeg';
import smartpoleImg from './assets/smartpole-v3.png';
import tatamotorsLogo from './assets/tatamotors.jpg';
import starbucksLogo from './assets/startbucks.jpg';
import tataLogo from './assets/tata logo.jpg';
import oneplusLogo from './assets/oneplus.jpg';
import bridgeImg from './assets/bridge.png';
import mgRoadImg from './assets/MG road.jpeg';
import eluruRoadImg from './assets/elluru road.jpeg';
import pvpMallImg from './assets/pvp mall.jpeg';
import e3diImg from './assets/e3di.jpeg';
import benzCircleImg from './assets/benz center.jpeg';
import ScreensPage from './ScreensPage';
import PricingPage from './PricingPage';

function App() {
  const dummyImages = [
    ctaBg,
    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800"
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % dummyImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRefReviews = useRef(null);
  const [isHoveredReviews, setIsHoveredReviews] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHoveredReviews) return;
    const interval = setInterval(() => {
      if (scrollRefReviews.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRefReviews.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRefReviews.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRefReviews.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isHoveredReviews]);

  const scrollLeftBtnReviews = () => {
    if (scrollRefReviews.current) {
      scrollRefReviews.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRightBtnReviews = () => {
    if (scrollRefReviews.current) {
      scrollRefReviews.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (activeLink === 'screens') {
    return <ScreensPage activeLink={activeLink} setActiveLink={setActiveLink} />;
  }

  if (activeLink === 'pricing') {
    return <PricingPage activeLink={activeLink} setActiveLink={setActiveLink} />;
  }

  return (
    <div className="page-wrapper">
      {/* --- HERO SECTION --- */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url("${homeBg}")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <header className="navbar" style={{ padding: '2rem 4rem' }}>
            <div className="logo-container">
              <a href="/">
                <img src={logoImg} alt="E3Di Logo" className="logo-img" style={{ cursor: 'pointer' }} />
              </a>
            </div>

            <nav className="nav-links">
              <a href="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</a>
              <a href="#screens" className={activeLink === 'screens' ? 'active' : ''} onClick={() => setActiveLink('screens')}>Screens</a>
              <a href="#pricing" className={activeLink === 'pricing' ? 'active' : ''} onClick={() => setActiveLink('pricing')}>Pricing</a>
              <a href="#partners" className={activeLink === 'partners' ? 'active' : ''} onClick={() => setActiveLink('partners')}>Partners With Us</a>
              <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact</a>
            </nav>

            <div className="auth-buttons">
              <button className="icon-btn" title="Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </button>
              <button className="icon-btn" title="Notifications">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
              </button>
            </div>
          </header>

          <main className="hero-main" style={{ padding: '0 4rem' }}>
            <div className="hero-left">
              <p className="hero-subtitle">VIJAYAWADA'S SMART SCREENS</p>
              <h1 className="hero-title">Your Brand<br />In Real Life</h1>
              <p className="hero-description">High-visibility LED screens across Vijayawada.<br />Reach people where life happens.</p>

              <div className="hero-actions">
                <button className="btn-explore">Explore Screens <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                <button className="btn-campaign">Book a Campaign</button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  <span className="stat-desc">High<br />Footfall Zones</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="stat-desc">Prime<br />City Locations</span>
                </div>
                <div className="stat-item">
                  <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                  <span className="stat-desc">Real<br />Audience Impact</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="right-text" style={{ textAlign: 'right', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 600, transform: 'translateY(-3rem)' }}>
                PEOPLE<br />PLACES<br />POSSIBILITIES
              </div>
            </div>
          </main>

          <footer className="hero-footer-area" style={{ padding: '0 4rem 2rem 4rem' }}>
            <div className="scroll-indicator" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', letterSpacing: '1px' }}>
              <div style={{ width: '1px', height: '24px', background: '#fff' }}></div>
              <span>SCROLL TO EXPLORE</span>
            </div>

            <div className="hero-footer-right">
              <div className="location-info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="loc-title" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>PRAKASAM BARRAGE</span>
                  <span className="loc-title" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>VIJAYAWADA</span>
                </div>
              </div>

            </div>
          </footer>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="about-section" style={{ backgroundColor: '#ffffff', color: '#172033', padding: '6rem 0' }}>
        <div className="container about-grid" style={{ maxWidth: '95%', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          <div className="about-content" style={{ paddingRight: '3rem' }}>
            <div className="section-label" style={{ color: '#f97316', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>
              ABOUT E3DI
            </div>
            <h2 className="section-title" style={{ fontSize: '3.8rem', fontWeight: 800, lineHeight: 1.15, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>
              Digital advertising, built for the real world.
            </h2>
            <p className="section-desc" style={{ fontSize: '1.3rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '100%' }}>
              E3DI connects brands with premium digital screens across high-visibility locations in Vijayawada, helping you reach people where they live, move and engage.
            </p>
            <a href="#" className="btn-dark" style={{ textDecoration: 'none' }}>
              Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className="about-image" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '480px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            {dummyImages.map((img, index) => (
              <div
                key={index}
                className="about-img-placeholder"
                style={{
                  backgroundImage: `url("${img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: index === currentImg ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              ></div>
            ))}

            {/* Pagination Dots */}
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '0.8rem', zIndex: 10 }}>
              {dummyImages.map((_, idx) => (
                <div
                  key={idx}
                  className={idx === currentImg ? "dot-active" : ""}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onClick={() => setCurrentImg(idx)}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- LOCATIONS SECTION --- */}
      <section className="locations-section" style={{ backgroundColor: '#091221', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '95%', padding: '0 2rem', margin: '0 auto' }}>
          <div className="section-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div className="section-label" style={{ color: '#f97316', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>
                OUR LOCATIONS
              </div>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.15, color: '#ffffff', margin: 0, letterSpacing: '-1px' }}>
                Iconic Screens<br />Across Vijayawada
              </h2>
            </div>
            <a href="#" className="text-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              View All Screens <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <button onClick={scrollLeftBtn} style={{ position: 'absolute', left: '-3rem', flexShrink: 0, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', zIndex: 2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div
              ref={scrollRef}
              style={{ display: 'flex', gap: '1.5rem', flex: 1, overflowX: 'auto', scrollbarWidth: 'none', padding: '1rem 0' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hide-scrollbar"
            >
              {[
                {
                  name: 'MG Road',
                  desc: 'Vijayawada\'s busiest commercial hub with high footfall and retail activity.',
                  img: mgRoadImg
                },
                {
                  name: 'Benz Circle',
                  desc: 'A major intersection connecting key highways, ensuring maximum visibility.',
                  img: benzCircleImg
                },
                {
                  name: 'Eluru Road',
                  desc: 'Connecting traditional markets and modern retail spaces.',
                  img: eluruRoadImg
                },
                {
                  name: 'E3Di',
                  desc: 'Industrial and commercial zone with dense daily commuter traffic.',
                  img: e3diImg
                },
                {
                  name: 'PVP Square',
                  desc: 'Premium lifestyle destination drawing high-intent shoppers daily.',
                  img: pvpMallImg
                },
                {
                  name: 'Bandar Road',
                  desc: 'A major arterial road with continuous high-volume traffic.',
                  img: mgRoadImg
                }
              ].map((loc, i) => (
                <div key={i} className="location-card" style={{ flex: '0 0 calc(25% - 1.125rem)', minWidth: '220px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                  <div className="loc-card-img" style={{ backgroundImage: `url("${loc.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', height: '180px', position: 'relative' }}>
                  </div>

                  {/* Card Content */}
                  <div className="loc-card-info" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.2rem', fontWeight: 800 }}>{loc.name}</h4>
                    <p style={{ margin: '0 0 1.2rem 0', color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>{loc.desc}</p>

                    {/* Button */}
                    <button className="btn-view-details" style={{ marginTop: 'auto' }}>
                      View Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={scrollRightBtn} style={{ position: 'absolute', right: '-3rem', flexShrink: 0, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', zIndex: 2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="reviews-section" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '95%', padding: '0 2rem', margin: '0 auto' }}>
          <div className="section-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div className="section-label" style={{ color: '#f97316', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                REVIEWS
              </div>
              <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.15, color: '#0f172a', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                <div>Loved by Brands<br />Across Vijayawada.</div>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#fbd38d', marginBottom: '0.8rem' }}></div>
              </h2>
            </div>
            <div className="reviews-header-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <p style={{ margin: 0, color: '#64748b', fontSize: '1rem', lineHeight: 1.5, textAlign: 'left' }}>Real brands. Real campaigns.<br />Real impact on the streets of Vijayawada.</p>
              <button className="btn-dark" style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All Reviews <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <button onClick={scrollLeftBtnReviews} style={{ position: 'absolute', left: '-3rem', flexShrink: 0, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', zIndex: 2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div
              ref={scrollRefReviews}
              className="hide-scrollbar"
              style={{ display: 'flex', gap: '1.5rem', flex: 1, overflowX: 'auto', scrollbarWidth: 'none', padding: '1rem 0' }}
              onMouseEnter={() => setIsHoveredReviews(true)}
              onMouseLeave={() => setIsHoveredReviews(false)}
            >
              {[
                {
                  text: 'Great visibility and strong audience response across key locations in Vijayawada. The team was professional and easy to work with.',
                  brand: 'TATA',
                  team: 'Brand Team',
                  logo: tataLogo
                },
                {
                  text: 'Smooth execution and premium locations helped us reach the right audience. E3Di made our city campaign a success.',
                  brand: 'OnePlus',
                  team: 'Marketing Team',
                  logo: oneplusLogo
                },
                {
                  text: 'The screens are in the best spots, and we saw a clear uplift in brand visibility during our campaign.',
                  brand: 'Starbucks',
                  team: 'Local Partner',
                  logo: starbucksLogo
                },
                {
                  text: 'A reliable partner for high-impact outdoor campaigns. Professional team and seamless execution.',
                  brand: 'TATA MOTORS',
                  team: 'Marketing Team',
                  logo: tatamotorsLogo
                },
                {
                  text: 'Great visibility and strong audience response across key locations in Vijayawada. The team was professional and easy to work with.',
                  brand: 'TATA',
                  team: 'Brand Team',
                  logo: tataLogo
                },
                {
                  text: 'Smooth execution and premium locations helped us reach the right audience. E3Di made our city campaign a success.',
                  brand: 'OnePlus',
                  team: 'Marketing Team',
                  logo: oneplusLogo
                },
                {
                  text: 'The screens are in the best spots, and we saw a clear uplift in brand visibility during our campaign.',
                  brand: 'Starbucks',
                  team: 'Local Partner',
                  logo: starbucksLogo
                },
                {
                  text: 'A reliable partner for high-impact outdoor campaigns. Professional team and seamless execution.',
                  brand: 'TATA MOTORS',
                  team: 'Marketing Team',
                  logo: tatamotorsLogo
                }
              ].map((rev, i) => (
                <div key={i} className="review-card" style={{ flex: '0 0 calc(25% - 1.125rem)', minWidth: '220px', backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                  <div className="quote-icon" style={{ color: '#f97316', fontSize: '3rem', lineHeight: 0.5, fontFamily: 'serif', fontWeight: 900, marginBottom: '1.5rem', textAlign: 'left' }}>“</div>
                  <p className="review-text" style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem', minHeight: '80px' }}>{rev.text}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="stars" style={{ color: '#f59e0b', letterSpacing: '2px', fontSize: '1.1rem' }}>★★★★★</div>

                    <div className="review-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div className="author-logo-img" style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px'
                      }}>
                        <img src={rev.logo} alt={rev.brand} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 0.2rem 0', color: '#ffffff', fontSize: '0.95rem', fontWeight: 800 }}>{rev.brand}</h4>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>{rev.team}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={scrollRightBtnReviews} style={{ position: 'absolute', right: '-3rem', flexShrink: 0, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', zIndex: 2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BRANDS --- */}
      <section className="brands-section" style={{ padding: '2rem 0', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '150px', height: '2px', backgroundColor: '#f97316' }}></div>
            <div className="brands-label" style={{ margin: 0, letterSpacing: '4px', color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>TRUSTED BY LEADING BRANDS</div>
            <div style={{ width: '150px', height: '2px', backgroundColor: '#f97316' }}></div>
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="brands-list-group">
              <span>ONEPLUS</span>
              <span>TATA MOTORS</span>
              <span>RELIANCE DIGITAL</span>
              <span>WAVEMAKER</span>
              <span>AIRTEL</span>
              <span>MARUTI SUZUKI</span>
              <span>SAMSUNG</span>
              <span>PEPSICO</span>
            </div>
            <div className="brands-list-group">
              <span>ONEPLUS</span>
              <span>TATA MOTORS</span>
              <span>RELIANCE DIGITAL</span>
              <span>WAVEMAKER</span>
              <span>AIRTEL</span>
              <span>MARUTI SUZUKI</span>
              <span>SAMSUNG</span>
              <span>PEPSICO</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section" style={{ backgroundImage: `url("${ctaBg}")` }}>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="cta-title">Let's Make<br />Vijayawada Look at Your Brand</h2>
          <p className="cta-subtitle">Be part of Vijayawada's premium digital screen network.</p>
          <div className="cta-actions">
            <button className="btn-explore">Book a Campaign <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <button className="btn-campaign">Explore Screens</button>
          </div>
        </div>
      </section>

      <footer className="main-footer" style={{ backgroundColor: '#ffffff', color: '#0f172a', paddingTop: '4rem', paddingBottom: '2rem', position: 'relative', borderTop: '1px solid #f1f5f9', overflow: 'hidden' }}>

        {/* Background Bridge Image */}
        <div className="bridge-bg" style={{ position: 'absolute', bottom: '-2.5rem', right: 0, width: '100%', pointerEvents: 'none', zIndex: 1, paddingLeft: '15%', display: 'flex', alignItems: 'flex-end' }}>
          <img src={bridgeImg} alt="Vijayawada Bridge Line Art" style={{ width: '100%', height: 'auto', opacity: 0.25 }} />
        </div>

        <div className="container" style={{ maxWidth: '95%', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '8rem', marginBottom: '4rem' }}>
            {/* Left Column */}
            <div style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column' }}>
              <a href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                <img src={logoImg} alt="E3Di Logo" style={{ height: '65px', objectFit: 'contain', objectPosition: 'left center', cursor: 'pointer' }} />
              </a>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                Vijayawada's digital screen network<br />for a brighter tomorrow.
              </p>
              <div style={{ display: 'flex', gap: '1rem', color: '#334155', marginBottom: 'auto' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></svg>
              </div>
            </div>

            {/* Links Columns Container */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', gap: '6rem' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginLeft: '4rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 800 }}>Company</h4>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>About Us</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Contact Us</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Careers</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginLeft: '3rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 800 }}>Campaigns</h4>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Book a Campaign</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>View Pricing</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Partner With Us</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginLeft: '4rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 800 }}>Resources</h4>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Help Center</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Terms of Service</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Privacy Policy</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', minWidth: '240px', marginLeft: '6rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 800 }}>Stay In Touch</h4>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '30px', padding: '0.4rem 0.6rem 0.4rem 1.2rem', marginBottom: '1.5rem', backgroundColor: '#fff' }}>
                  <input type="email" placeholder="Enter your email" style={{ border: 'none', outline: 'none', flex: 1, fontSize: '0.85rem', color: '#64748b', minWidth: '0' }} />
                  <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="footer-signature" style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: '#475569',
                  fontSize: '1.6rem',
                  transform: 'rotate(-10deg)',
                  marginTop: '-1.5rem',
                  lineHeight: 1.2
                }}>
                  Vijayawada<br /><span style={{ paddingLeft: '2.5rem' }}>Always A Step Ahead</span>
                </div>
              </div>

            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '2rem', position: 'relative' }}>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem', zIndex: 3 }}>© 2026 E3Di. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
