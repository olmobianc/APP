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

    const [activePlan, setActivePlan] = useState('Yearly');

    const handlePlanClick = (plan) => {
      setActivePlan(plan);
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
          <FontAwesomeIcon icon={icons.key} className="subscribe-icon" />
          <h1 className="subscribe-heading">Unlock Your Potential with Marcopolo Pro</h1>
          <p className="subscribe-description">
            Premium gives you full access to every course - and more.
          </p>

          <div className="subscription-plans">
          <div
            className={`plan ${activePlan === 'Yearly' ? 'active' : ''}`}
            onClick={() => handlePlanClick('Yearly')}
          >
            <h2>Yearly</h2>
            <p className="price">AUD 9.99/month</p>
          </div>
          <div
            className={`plan ${activePlan === 'Monthly' ? 'active' : ''}`}
            onClick={() => handlePlanClick('Monthly')}
          >
            <h2>Monthly</h2>
            <p className="price">AUD 14.99/month</p>
          </div>
        </div>

          <div className="cta">
            <button className="get-started-btn">Subscribe now</button>
          </div>

          <div className="disclaimer-price">
            *Billed as one payment. Renews annually, cancel anytime. You can turn off auto-renew from your settings.
          </div>

          <div className="features">
            <h2>No commitment, cancel anytime</h2>
            <div className="comparison-table">
                <h4>Unlock it all with Premium</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Free</th>
                      <th>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ad-free experience</td>
                      <td>❌</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>Unlimited skips</td>
                      <td>❌</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>Offline access</td>
                      <td>❌</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>High-quality audio</td>
                      <td>❌</td>
                      <td>✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

        </div>
    </div>

  );
};

export default Subscribe;
