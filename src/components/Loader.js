import React, { useState, useEffect, useRef } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Démarrer la vidéo
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Timer pour le fade-out à 2.5 secondes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Timer pour masquer complètement le loader
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2800); // 2.5s + 0.3s pour le fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`loader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* 
        🎬 Loading Sequence
        Cette vidéo dure exactement 2.5 secondes.
        Pas de skip possible, désolé !
      */}
      <div className="loader-container">
        <video
          ref={videoRef}
          className="loader-video"
          muted
          playsInline
          autoPlay
        >
          <source src="/IA_3D.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default Loader;
