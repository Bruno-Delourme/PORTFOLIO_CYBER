import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      id: 1,
      category: "Sécurité Réseau",
      skills: ["Nmap", "Wireshark", "Curl", "Dirb", "Gobuster"]
    },
    {
      id: 2,
      category: "Systèmes",
      skills: ["Linux", "Windows", "Kali Linux", "Ubuntu"]
    },
    {
      id: 3,
      category: "Programmation",
      skills: ["c","Python", "Bash", "PowerShell", "SQL", "JavaScript", "React", "Redux"]
    },
    {
      id: 4,
      category: "Outils",
      skills: ["VMware", "VirtualBox", "Docker", "Git", "Oracle"]
    }
  ];

  return (
    <section className="skills" id="skills" ref={ref}>
      {/* Effet de lumière en arrière-plan */}
      <motion.div
        className="skills-light-effect"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { 
          opacity: [0.6, 1, 0.6], 
          scale: [0.95, 1.05, 0.95],
          x: [-20, 20, -20] /* Animation horizontale */
        } : { opacity: 0, scale: 0.5, x: 0 }}
        transition={{ 
          duration: 4, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">Compétences Techniques</h2>
          <p className="section-description">
            Étudiant passionné par la cybersécurité, je conçois, sécurise et optimise 
            des infrastructures IT tout en identifiant les vulnérabilités et en renforçant 
            la protection des données.
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -90 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + index * 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileHoverEnd={{ 
                scale: 1,
                transition: { duration: 0.1, ease: "easeIn" }
              }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.2 + skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 