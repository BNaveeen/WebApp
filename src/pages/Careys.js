import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const Careys = () => {
  // Helper function to check if URL is external
  const isExternalUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const panels = [
    {
      title: 'Commercial',
      buttons: [
        { title: 'Variations', path: '/projects/active' },
        { title: 'Cash Summary', path: '/projects/completed' },
        { title: 'Procurement Approval', path: '/projects/timeline' }
      ]
    },
    {
      title: 'Work Winning',
      buttons: [
        { title: 'Project Hub', path: '/projects/active' },
        { title: 'Work Winning', path: '/projects/completed' },
        { title: 'Candy VDI', path: '/projects/timeline' }
      ]
    },
    {
      title: 'Operational',
      buttons: [
        { title: 'Operational Management', path: '/contracts/current' },
        { title: 'Project Operating Cost', path: '/contracts/templates' },
        { title: 'Acc Binder', path: '/contracts/archive' },
        { title: 'PMIS Document Register', path: '/contracts/archive' }
      ]
    },
    {
      title: 'Project Support',
      buttons: [
        { title: 'Tender', path: '/clients/list' },
        { title: 'Proposal', path: '/clients/portal' },
        { title: 'Golden Hour', path: '/clients/new' },
        { title: 'Chime Timesheet', path: '/clients/new' },
        { title: 'DABS Registration', path: '/clients/new' }
      ]
    }
  ];

  return (
    <div className="page-page">
      <h1>Careys Construction</h1>
      <div className="panel-grid">
        {panels.map((panel, index) => (
          <div key={index} className="panel">
            <h2>{panel.title}</h2>
            <div className="panel-content">
              {panel.buttons.map((button, btnIndex) => (
                isExternalUrl(button.path) ? (
                  <a 
                    key={btnIndex}
                    href={button.path}
                    className="home-button-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="home-button">
                      {button.title}
                    </button>
                  </a>
                ) : (
                  <Link 
                    key={btnIndex} 
                    to={button.path} 
                    className="home-button-link"
                  >
                    <button className="page-button">
                      {button.title}
                    </button>
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careys;