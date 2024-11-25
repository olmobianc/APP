import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Calendar from '../../components/Calendar.jsx';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
    };

    return (
        <div className="home logged-in">
            <header className="header">
                <div className='left'>
                    <div className="logo">Marcopolo</div>
                    <nav className="nav">
                        <FontAwesomeIcon icon={icons.house} className="input-icon" />
                        <Link to="/home" className="nav-link">Home</Link>
                        <FontAwesomeIcon icon={icons.compass} className="input-icon" />
                        <Link to="/categories" className="nav-link">Categories</Link>
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

            {menuOpen && (
                <div className="dropdown-menu">
                    <Link to="/account" className="dropdown-item">Account</Link>
                    <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
                </div>
            )}

            <main className="main-content">
                <h1>Welcome to Your Home Page!</h1>
                <h3>Welcome, Olmo</h3>
                <Calendar />
            </main>
        </div>
    );
};

export default Dashboard; 