import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <button 
                className="logo-text"
                onClick={() => scrollToSection('hero')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', fontWeight: '700', color: '#ffffff' }}
              >
                &lt;Bruno Delourme/&gt;
              </button>
            </div>

            {/* Navigation Desktop */}
            <nav className="nav-desktop">
              <ul className="nav-list">
                <li><button className="nav-link" onClick={() => scrollToSection('hero')}>Accueil</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Compétences</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('a-propos')}>À propos</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('projets')}>Projets</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header-cta">
              <button className="btn btn-primary" onClick={togglePopup}>Voir Portfolio Dev</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="nav-mobile">
              <ul className="nav-list-mobile">
                <li><button className="nav-link" onClick={() => scrollToSection('hero')}>Accueil</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Compétences</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('a-propos')}>À propos</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('projets')}>Projets</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={togglePopup}>
              <X size={24} />
            </button>
            <div className="popup-header">
              <h3>Incoming.</h3>
            </div>
            <div className="popup-body">
              <p>Cette section est toujours en phase de <strong>pentest</strong> depuis le 06/08/25.</p>
              <p>Revenez après la validation du SOC.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 