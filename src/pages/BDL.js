import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const BDL = () => {
  // Helper function to check if URL is external
  const isExternalUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const panels = [
    {
      title: 'Reports',
      buttons: [
        { title: 'Google', path: 'https://www.google.com' },
        { title: 'Youtube', path: 'https://www.youtube.com' },
        { title: 'Instagram', path: 'https://www.instagram.com' }
      ]
    },
    {
      title: 'Projects',
      buttons: [
        { title: 'Active Projects', path: '/bdl/projects/active' },
        { title: 'Completed Projects', path: '/bdl/projects/completed' },
        { title: 'Project Timeline', path: '/bdl/projects/timeline' }
      ]
    },
    {
      title: 'Contracts',
      buttons: [
        { title: 'Current Contracts', path: '/bdl/contracts/current' },
        { title: 'Contract Templates', path: '/bdl/contracts/templates' },
        { title: 'Archive', path: '/bdl/contracts/archive' }
      ]
    },
    {
      title: 'Clients',
      buttons: [
        { title: 'Client List', path: '/bdl/clients/list' },
        { title: 'Client Portal', path: '/bdl/clients/portal' },
        { title: 'Add New Client', path: '/bdl/clients/new' }
      ]
    }
  ];

  return (
    <div className="page-page">
      <h1>BDL</h1>
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
                    className="button-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="page-button">
                      {button.title}
                    </button>
                  </a>
                ) : (
                  <Link 
                    key={btnIndex} 
                    to={button.path} 
                    className="button-link"
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

export default BDL;