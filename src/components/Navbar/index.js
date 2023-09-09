import React from 'react';
export default function Navbar(props) {
  const {
    currentTab,
    handleTabChange,

  } = props;

  return (

    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // checking if the tab that is current is about then use the active link class from bootstrap
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
          // checking if the tab that is current is portfolio then use the active link class from bootstrap
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // checking if the tab that is current is contact then use the active link class from bootstrap
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // checking if the tab that is current is resume, then use the active link class from bootstrap
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            RESUME
          </a>
        </li>
    </ul>
    </nav>

  );
}