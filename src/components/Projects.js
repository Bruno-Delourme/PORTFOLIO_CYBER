import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Shield, Network, Code, X } from 'lucide-react';

// Composant séparé pour chaque project card
const ProjectCard = ({ project, index, isMobile, hoveredProject, setHoveredProject, togglePopup, visibleProjects, setVisibleProjects }) => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { 
    once: false, 
    threshold: isMobile ? 0.3 : 0.5, // Plus sensible sur mobile
    margin: isMobile ? "-10% 0px -10% 0px" : "-20% 0px -20% 0px"
  });

  // Mettre à jour l'état des projets visibles
  useEffect(() => {
    console.log(`👁️ DEBUG: Project ${project.id} - isInView: ${isInView}, isMobile: ${isMobile}`);
    
    if (isInView && isMobile) {
      console.log('✅ DEBUG: Project', project.id, 'is now visible on mobile');
      setVisibleProjects(prev => {
        const newSet = new Set([...prev, project.id]);
        console.log('📋 DEBUG: Visible projects:', Array.from(newSet));
        return newSet;
      });
    } else if (!isInView && isMobile) {
      console.log('❌ DEBUG: Project', project.id, 'is no longer visible on mobile');
      setVisibleProjects(prev => {
        const newSet = new Set(prev);
        newSet.delete(project.id);
        console.log('📋 DEBUG: Visible projects:', Array.from(newSet));
        return newSet;
      });
    }
  }, [isInView, isMobile, project.id, setVisibleProjects]);

  return (
    <motion.div
      ref={projectRef}
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default'
      }}
      onHoverStart={() => {
        console.log(`Hover start on project ${project.id}`);
        setHoveredProject(project.id);
      }}
      onHoverEnd={() => {
        console.log(`Hover end on project ${project.id}`);
        setHoveredProject(null);
      }}
    >
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadStart={() => console.log(`🎥 DEBUG: Video ${project.id} loading started`)}
        onCanPlay={() => console.log(`🎥 DEBUG: Video ${project.id} can play`)}
        onError={(e) => console.log(`❌ DEBUG: Video ${project.id} error:`, e)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: (() => {
            let opacity;
            if (isMobile) {
              // Sur mobile : visible au centre
              opacity = (visibleProjects.has(project.id)) ? 0.4 : 0.05;
            } else {
              // Sur desktop : hover uniquement
              opacity = (hoveredProject === project.id) ? 0.3 : 0.1;
            }
            console.log(`🎬 DEBUG: Project ${project.id} - isMobile: ${isMobile}, hovered: ${hoveredProject === project.id}, visible: ${visibleProjects.has(project.id)}, opacity: ${opacity}`);
            return opacity;
          })(),
          transition: 'opacity 0.5s ease'
        }}
      >
        <source src={project.video} type="video/mp4" />
      </video>

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
        <button className="project-link" onClick={togglePopup}>
          <ExternalLink size={16} />
          Voir le projet
        </button>
        <button className="project-link" onClick={togglePopup}>
          <Github size={16} />
          Code source
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  useEffect(() => {
    // Détecter si c'est un appareil mobile de manière plus robuste
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
      console.log('🔍 DEBUG: Screen width:', window.innerWidth, 'Is mobile:', isMobileDevice);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    
    // Écouter les changements de media query
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (e) => {
      console.log('🔄 DEBUG: Media query changed:', e.matches);
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const projects = [
    {
      id: 1,
      title: "Audit de Sécurité Réseau",
      description: "Analyse complète de la sécurité d'un réseau d'entreprise avec identification des vulnérabilités et recommandations.",
      technologies: ["Nmap", "Wireshark", "Nessus", "Metasploit"],
      category: "Sécurité Réseau",
      icon: <Network />,
      link: "#",
      video: "/malware_video.mp4"
    },
    {
      id: 2,
      title: "Test d'Intrusion Web",
      description: "Évaluation de la sécurité d'applications web avec tests d'injection et de cross-site scripting.",
      technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "Python"],
      category: "Sécurité Web",
      icon: <Shield />,
      link: "#",
      video: "/bury.mp4"
    },
    {
      id: 3,
      title: "Script d'Automatisation",
      description: "Développement d'outils de sécurité automatisés pour la détection de vulnérabilités.",
      technologies: ["Python", "Bash", "Docker", "Git"],
      category: "Développement",
      icon: <Code />,
      link: "#",
      video: "/digital_eye.mp4"
    },
    {
      id: 4,
      title: "Analyse de Malware",
      description: "Analyse statique et dynamique de logiciels malveillants pour comprendre leur comportement.",
      technologies: ["Cuckoo Sandbox", "IDA Pro", "Wireshark", "Volatility"],
      category: "Malware Analysis",
      icon: <Shield />,
      link: "#",
      video: "/malware_video.mp4"
    }
  ];

  return (
    <>
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
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isMobile={isMobile}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
                togglePopup={togglePopup}
                visibleProjects={visibleProjects}
                setVisibleProjects={setVisibleProjects}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={togglePopup}>
              <X size={24} />
            </button>
            <div className="popup-header">
              <h3>Incoming</h3>
            </div>
            <div className="popup-body">
              <p>Cette section est en cours de déploiement.</p>
              <p>Site actif depuis le 06/08/2025.</p>
              <p>Les liens projets arrivent bientôt.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects; 