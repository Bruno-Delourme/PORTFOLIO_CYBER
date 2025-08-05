import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="about" id="a-propos">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">À propos</h2>
          <p className="section-description">
            Découvrez mon parcours en cybersécurité et mes motivations
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Qui suis-je ?</h3>
            <p>
              Passionné par la cybersécurité depuis mon plus jeune âge, je me suis spécialisé 
              dans l'analyse de sécurité et la protection des infrastructures informatiques. 
              Mon approche combine expertise technique et vision stratégique pour identifier 
              et résoudre les vulnérabilités.
            </p>
            
            <h3>Ma mission</h3>
            <p>
              Contribuer à un monde numérique plus sûr en développant des solutions de sécurité 
              innovantes et en partageant mes connaissances avec la communauté cybersécurité.
            </p>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap />
              </div>
              <div className="timeline-content">
                <h4>Formation en Cybersécurité YNOV</h4>
                <p>Étudiant en 3e année spécialisé en sécurité informatique</p>
                <span className="timeline-date">Présent</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <Briefcase />
              </div>
              <div className="timeline-content">
                <h4>Projets de Sécurité TryHackMe</h4>
                <p>Réalisation de tests d'intrusion et audits de sécurité</p>
                <span className="timeline-date">2024 - Présent</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <Award />
              </div>
              <div className="timeline-content">
                <h4>Certifications</h4>
                <p>Certifications en cours d'obtention</p>
                <span className="timeline-date">2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 