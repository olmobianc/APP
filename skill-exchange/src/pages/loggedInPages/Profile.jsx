import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

const Profile = () => {

  const location = useLocation();
  const address = useLocation(); // Access the current URL
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  const {
    name = 'N/A',
    age = 'N/A',
    location: userLocation = 'N/A',
    offerSkills = [],
    receiveSkills = [],
    imageSrc = '',
  } = location.state || {}; // Use fallback for `location.state` if undefined

  return (
        <div className="logged-in">
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
                        <Link to="/premium" className="premium-link">Go Premium</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={icons.bars} className="input-icon" />
                    </div>
                </div>
            </header>

        <div className="profile">
        <div className="profile__header">
            <img src={imageSrc} alt={`${name}'s profile`} className="profile__image" />
            <div className="profile__info">
            <h1 className="profile__name">{name}</h1>
            <p className="profile__location">{userLocation}</p>
            <p className="profile__age">{age} years old</p>
            </div>
        </div>

        <div className="profile__skills">
            <section>
            <h2>Skills to Offer</h2>
            {offerSkills.length > 0 ? (
                <ul>
                {offerSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            ) : (
                <p>No skills to offer</p>
            )}
            </section>
            <section>
            <h2>Skills to Receive</h2>
            {receiveSkills.length > 0 ? (
                <ul>
                {receiveSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            ) : (
                <p>No skills to receive</p>
            )}
            </section>
        </div>
        </div>
    </div>
  );
};

export default Profile;
