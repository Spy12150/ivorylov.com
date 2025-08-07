import React, { useEffect } from 'react';
import './Passions.css';

const Passions = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="page-container passions-page">
      <div className="page-header">
        <h1 className="page-title">Passions</h1>
        <p className="page-subtitle">What drives and inspires me</p>
      </div>
      <div className="content-section">
        <p>Coming soon! This is where I'll share the things I'm passionate about.</p>
      </div>
    </div>
  );
};

export default Passions;
