import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="sakura-decoration">
          <div className="sakura-petal sakura-1"></div>
          <div className="sakura-petal sakura-2"></div>
          <div className="sakura-petal sakura-3"></div>
          <div className="sakura-petal sakura-4"></div>
          <div className="sakura-petal sakura-5"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My World</h1>
          <p className="hero-subtitle">
            A space where creativity blooms like sakura in spring
          </p>
          <div className="hero-description">
            <p>
              Hello! I'm Ivory, and this is my personal corner of the internet.
              Here you'll find my projects, thoughts, passions, and a little bit about who I am.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
