import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
