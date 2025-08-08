import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <Loader onComplete={handleLoaderComplete} />
        ) : (
          <div className="main-content">
            <Header />
            <main>
              <Hero />
              <Stats />
              <Skills />
              <About />
              <Projects />
              <Contact />
            </main>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
