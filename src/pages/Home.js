import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="sakura-decoration">
          <div className="sakura-petal sakura-1"></div>
          <div className="sakura-petal sakura-2"></div>
          <div className="sakura-petal sakura-3"></div>
          <div className="sakura-petal sakura-4"></div>
          <div className="sakura-petal sakura-5"></div>
          <div className="sakura-petal sakura-6"></div>
          <div className="sakura-petal sakura-7"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My World</h1>
          <p className="hero-subtitle">
            A space where creativity meets innovation in beautiful harmony
          </p>
          <div className="hero-description">
            <p>
              Hello! I'm Ivory, and this is my personal corner of the internet.
              Here you'll discover my projects, thoughts, passions, and the journey that defines who I am.
              Welcome to a world where ideas come to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
