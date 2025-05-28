// filepath: c:\react\reactjs\src\App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SideNav from './components/SideNav';
import Careys from './pages/Careys';
import BDL from './pages/BDL';
import GlowButton from './components/GlowButton';

function App() {
  const homeButtons = [
    { title: 'Careys', path: '/careys' },
    { title: 'BDL', path: '/bdl' },
    { title: 'Plant & Fleet', path: '/plant-and-fleet' },
    { title: 'Finance', path: '/finance' },
    { title: 'People', path: '/people' },
    { title: 'Sustainability', path: '/sustainability' },
    { title: 'L&D', path: '/learning-development' }
  ];

  return (
    <Router>
      <div className="app">
        <SideNav />
        <Routes>
          <Route path="/" element={
            <div className="content">
              <h1>Welcome to Careys Group</h1>
              <GlowButton />
              <div className="button-grid">
                {homeButtons.map((button, index) => (
                  <Link key={index} to={button.path} className="home-button-link">
                    <button className="home-button">
                      {button.title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          } />
          <Route path="/careys" element={<Careys />} />
          <Route path="/BDL" element={<BDL/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;