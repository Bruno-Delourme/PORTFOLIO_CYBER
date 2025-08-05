import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Compétences Techniques</h2>
          <p className="section-description">
            Étudiant passionné par la cybersécurité, je conçois, sécurise et optimise 
            des infrastructures IT tout en identifiant les vulnérabilités et en renforçant 
            la protection des données.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 