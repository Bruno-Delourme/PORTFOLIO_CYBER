import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Hand, Download, Eye } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Bruno_Delourme_Cyber_QRCODE.pdf';
    link.download = 'CV_Bruno_Delourme_Cyber_QRCODE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="container">
        <div className="hero-content">
          {/* Left Column - Text Content */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="greeting">
              <Hand className="greeting-icon" />
              <span>Hello,  je m'appelle Bruno Delourme</span>
            </div>
            
            <h1 className="hero-title">
              Renforcer la cybersécurité & défendre les infrastructures
            </h1>
            
            <p className="hero-description">
              Étudiant en 3e année en cybersécurité, 
              j'analyse, sécurise et optimise les infrastructures IT en mettant l'accent 
              sur la protection des données et la prévention des menaces. 
              Actuellement en recherche d'alternance.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-outline" onClick={scrollToProjects}>
                <Eye className="btn-icon" />
                Voir mon travail
              </button>
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download className="btn-icon" />
                Afficher mon CV
              </button>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div 
            className="hero-illustration"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="illustration-container">
              {/* Surrounding Icons */}
              <div className="icon linux-icon"></div>
              <div className="icon dragon-icon"></div>
              <div className="icon nmap-icon"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 