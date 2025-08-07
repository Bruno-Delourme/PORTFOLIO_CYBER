import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    {
      id: 1,
      number: "1",
      label: "Années d'Expérience",
      description: "d'expérience en cybersécurité"
    },
    {
      id: 2,
      number: "19",
      label: "Technologies Apprises",
      description: "outils et technologies maîtrisés"
    },
    {
      id: 3,
      number: "10",
      label: "Projets Réalisés",
      description: "projets de sécurité complétés"
    },
    {
      id: 4,
      number: "6",
      label: "Projets En Équipe",
      description: "collaborations réussies"
    }
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 