import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a debounce approach to limit the frequency of state updates
      const scrollY = window.scrollY;
      if (scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]); // Add isScrolled as a dependency

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
          <Link to="/login" className="login-btn">Login</Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;