import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="page-container projects-page">
              <div className="page-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">A collection of my work and creative endeavors. More to come!</p>
        </div>
      <div className="content-section">
        <div className="projects-grid">
          <a 
            href="https://poker.ivorylov.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card"
          >
            <div className="project-image-container">
              <img 
                src="/proj_img/pokerimg.png" 
                alt="Riposte Poker AI" 
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div className="project-title-container">
                <h3 className="project-title">Riposte Poker AI</h3>
                <img 
                  src="/proj_img/poker.png" 
                  alt="Poker Logo" 
                  className="project-logo"
                />
              </div>
                                <p className="project-description">
                    A full-stack poker application featuring sophisticated AI opponents built with React frontend and Flask backend.
                    Includes AIs trained using both Counterfactual Regret Minimization and hard-coded Monte Carlo Method calculations to beat the 95% of human poker players.
                  </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">AI/ML</span>
              </div>
            </div>
          </a>

          <a 
            href="https://monkey.ivorylov.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card"
          >
            <div className="project-image-container">
              <img 
                src="/proj_img/monkey.jpeg" 
                alt="Digital Literature Platform" 
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div className="project-title-container">
                <h3 className="project-title">Journey to the West Exhibition</h3>
              </div>
              <p className="project-description">
                An in-depth literary analysis exploring Sun Wukong's spiritual transformation in Wu Cheng'en's classic novel published in 1592.
                This multimedia piece examines how ambition evolves from destructive chaos to enlightened purpose. 
              </p>
              <div className="project-tech">
                <span className="tech-tag">Research</span>
                <span className="tech-tag">Writing</span>
                <span className="tech-tag">Analysis</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
