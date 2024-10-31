import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change this value as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'shrink' : ''}`}>
      <div className="container">
        <div className="left-section">
          <a href="/mission" className="mission-link">Our Mission</a>
        </div>
          <Link to="/" className="logo">
            <span>marcopolo</span>
          </Link>
        <div className="nav-buttons">
          <Link 
            to="/login" 
            className="login-btn"
          >
            Login
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
