import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
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
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 