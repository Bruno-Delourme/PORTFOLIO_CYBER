import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <button 
              className="logo-text"
              onClick={() => scrollToSection('hero')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}
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
            <button className="btn btn-primary">Voir Portfolio Dev</button>
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
  );
};

export default Header; 