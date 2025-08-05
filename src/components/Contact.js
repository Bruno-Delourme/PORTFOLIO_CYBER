import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "delourmebruno@gmail.com",
      link: "https://www.linkedin.com/in/bruno-delourme-52394a164/"
    },
    {
      icon: <Phone />,
      label: "Téléphone",
      value: "+33 6 XX XX XX XX",
      link: "tel:+336XXXXXXXX"
    },
    {
      icon: <MapPin />,
      label: "Localisation",
      value: "France",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bruno-delourme-52394a164/"
    },
    {
      icon: <Github />,
      label: "GitHub",
      url: "https://github.com/Bruno-Delourme?tab=repositories"
    },
    {
      icon: <Twitter />,
      label: "Twitter",
      url: "https://x.com/eldjebena"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Intéressé par mes compétences ? Contactez-moi pour discuter de vos projets
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Informations de contact</h3>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <a href={info.link} className="contact-value">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Suivez-moi</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <h3>Envoyez-moi un message</h3>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              <Send size={16} />
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 