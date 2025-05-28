import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaBuilding, 
  FaIndustry, 
  FaTruck, 
  FaMoneyBillWave, 
  FaUsers, 
  FaLeaf, 
  FaGraduationCap 
} from 'react-icons/fa';
import './SideNav.css';

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidenavRef = useRef(null);

  const handleNavClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { title: 'Home', path: '/', icon: <FaHome /> },
    { title: 'Careys', path: '/careys', icon: <FaBuilding /> },
    { title: 'BDL', path: '/bdl', icon: <FaIndustry /> },
    { title: 'Plant & Fleet', path: '/plant-and-fleet', icon: <FaTruck /> },
    { title: 'Finance', path: '/finance', icon: <FaMoneyBillWave /> },
    { title: 'People', path: '/people', icon: <FaUsers /> },
    { title: 'Sustainability', path: '/sustainability', icon: <FaLeaf /> },
    { title: 'L&D', path: '/learning-development', icon: <FaGraduationCap /> }
  ];

  return (
    <div ref={sidenavRef} className={`sidenav ${isExpanded ? 'expanded' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        ☰
      </button>
      <nav className="nav-items">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="nav-item"
            data-tooltip={item.title}
            onClick={handleNavClick}
          >
            <span className="icon">{item.icon}</span>
            <span className="title">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;