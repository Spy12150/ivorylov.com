import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="page-container about-page">
      <div className="about-header">
        <img src="/Headshot.webp" alt="Headshot" className="headshot-image" />
      </div>
      <div className="content-section">
        <p className="welcome-text">Welcome, my name is Max Wang</p>
        
        <p className="intro-text">Here's a little about me:</p>
        
        <ul className="about-list">
          <li>I'm a junior at Boston University, majoring in Computer Science with a specialization in Machine Learning.</li>
          <li>I was born and grew up in Shanghai, China but moved to the Boston when I was 8, and I've been living in the east coast since.</li>
          <li>I enjoy playing poker, chess, and go. I strive to use my programming skills to make up for my poor skills in these games.</li>
          <li>I also enjoy a variety of video games. I have reached Challenger in LOL and top 100 in SC2 and HOTS. I also love trading skins in CS.</li>
          <li>I have always loved visual art, but since I can't draw I picked up graphic design quite early. I like to make logos and other things I need for my websites in Illustrator and Photoshop.</li>
          <li>I love watching TV shows and movies. My top 3 dramas are When Life Gives You Tangerines, Peaky Blinders, and My Mister.</li>
          <li>I listen to a lot of music with over 120,000 minutes on spotify in 2024. My top 3 artists are IU, Kendrick Lamar, and DPR IAN.</li>
        </ul>

        <div className="contact-section">
          <p className="contact-title">Contact:</p>
          <p>ivorylov@bu.edu</p>
          <div className="social-icons">
            <a href="https://github.com/spy12150" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ivorylov" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
