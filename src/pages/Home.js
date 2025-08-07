import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="page-container home-page">
      <div className="image-container">
        <h1 className="image-title">COMM AVE</h1>
        <img src="/123.jpg" alt="Main Image" className="main-image" />
      </div>
    </div>
  );
};

export default Home;
