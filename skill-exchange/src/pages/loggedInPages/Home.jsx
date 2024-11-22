import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
    };

    return (
        <div className="home">
            <header className="header">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/categories" className="nav-link">Categories</Link>
                </nav>
                <div className="premium">
                    <Link to="/premium" className="premium-link">Go Premium</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
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
                {/* Add more content here */}
            </main>
        </div>
    );
};

export default Home; 