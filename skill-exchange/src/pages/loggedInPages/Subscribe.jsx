import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

const Subscribe = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const address = useLocation(); // Access the current URL
    const [location, setLocation] = useState('');
    const [skill, setSkill] = useState('');
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleLogout = () => {
        console.log('User logged out');
    };
    
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    


  return (
    <div className="home logged-in subscribe-page">
        <header className="header">
            <div className='left'>
                <div className="logo">Marcopolo</div>
                <nav className="nav">
                    <FontAwesomeIcon icon={icons.house} className="input-icon" />
                    <Link 
                        to="/home" 
                        className={`nav-link ${address.pathname === '/home' ? 'nav-link--active' : ''}`}
                    >
                        Home
                    </Link>
                    <FontAwesomeIcon icon={icons.compass} className="input-icon" />
                    <Link 
                        to="/categories" 
                        className={`nav-link ${address.pathname === '/categories' ? 'nav-link--active' : ''}`}
                    >
                        Categories
                    </Link>
                </nav>
            </div>
                
            <div className='right'>
                <div className="premium">
                    <Link to="/subscribe" className="premium-link">Go Premium</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={icons.bars} className="input-icon" />
                </div>
            </div>
        </header>

        <div className="subscribe-container">
          <h1 className="subscribe-heading">Unlock Your Potential with Brilliant</h1>
          <p className="subscribe-description">
            Access over 60 interactive courses and personalized learning paths today!
          </p>

          <div className="subscription-plans">
            <div className="plan">
              <h2>Monthly</h2>
              <p className="price">$15/month</p>
              <button className="subscribe-btn">Start Free Trial</button>
            </div>
            <div className="plan">
              <h2>Yearly</h2>
              <p className="price">$150/year</p>
              <button className="subscribe-btn">Start Free Trial</button>
            </div>
          </div>

          <div className="features">
            <h3>What You Get</h3>
            <ul>
              <li>Access to over 60 interactive courses</li>
              <li>Guided learning paths</li>
              <li>Real-time feedback and analytics</li>
              <li>No ads or interruptions</li>
              <li>Accessible on desktop and mobile</li>
            </ul>
          </div>

          <div className="cta">
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
    </div>

  );
};

export default Subscribe;
