import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
              <Link to="/home" className="nav-logo">
        <img src="/IVLlogo4.svg" alt="Ivory's Logo" className="logo-image" />
        <span className="logo-text">Ivorylov</span>
      </Link>
        <div className="nav-links">
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
