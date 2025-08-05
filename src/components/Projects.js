import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Network, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Audit de Sécurité Réseau",
      description: "Analyse complète de la sécurité d'un réseau d'entreprise avec identification des vulnérabilités et recommandations.",
      technologies: ["Nmap", "Wireshark", "Nessus", "Metasploit"],
      category: "Sécurité Réseau",
      icon: <Network />,
      link: "#"
    },
    {
      id: 2,
      title: "Test d'Intrusion Web",
      description: "Évaluation de la sécurité d'applications web avec tests d'injection et de cross-site scripting.",
      technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "Python"],
      category: "Sécurité Web",
      icon: <Shield />,
      link: "#"
    },
    {
      id: 3,
      title: "Script d'Automatisation",
      description: "Développement d'outils de sécurité automatisés pour la détection de vulnérabilités.",
      technologies: ["Python", "Bash", "Docker", "Git"],
      category: "Développement",
      icon: <Code />,
      link: "#"
    },
    {
      id: 4,
      title: "Analyse de Malware",
      description: "Analyse statique et dynamique de logiciels malveillants pour comprendre leur comportement.",
      technologies: ["Cuckoo Sandbox", "IDA Pro", "Wireshark", "Volatility"],
      category: "Malware Analysis",
      icon: <Shield />,
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projets">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-description">
            Découvrez mes réalisations en cybersécurité et mes contributions à la sécurité informatique
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              
              <div className="project-category">
                {project.category}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.link} className="project-link">
                  <ExternalLink size={16} />
                  Voir le projet
                </a>
                <a href={project.link} className="project-link">
                  <Github size={16} />
                  Code source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 