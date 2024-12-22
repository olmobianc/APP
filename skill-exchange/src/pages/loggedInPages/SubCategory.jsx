import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';
import { useParams } from 'react-router-dom';

import { ReactComponent as TennisIcon } from '../../utils/svgs/sports-and-fitness/golf.svg';

const SubCategory = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { title, subcategory } = useParams();
  const [SvgIcon, setSvgIcon] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  // Dynamically load SVG based on subcategory
  useEffect(() => {
    const loadSvgIcon = async () => {
      try {
        // Adjust the path to match your folder structure
        const svgPath = `../../utils/svgs/${title.toLowerCase().replace(/\s+/g, '-')}/${subcategory}.svg`;
        console.log('Attempting to load SVG from path:', svgPath); // Log the full path
        const Icon = (await import(`${svgPath}`)).default;
        console.log("Icon", Icon)
        setSvgIcon(() => Icon);
      } catch (error) {
        console.error('Error loading SVG:', error);
        setSvgIcon(null); // Fallback to null if SVG fails to load
      }
    };

    if (subcategory) {
      loadSvgIcon();
    }
  }, [subcategory, title]); // Only runs when subcategory or title changes

  return (
    <div className="home logged-in categories-page">
      <header className="header">
        <div className="left">
          <div className="logo">Marcopolo</div>
          <nav className="nav">
            <FontAwesomeIcon icon={icons.house} className="input-icon" />
            <Link
              to="/home"
              className={`nav-link ${location.pathname === '/home' ? 'nav-link--active' : ''}`}
            >
              Home
            </Link>
            <FontAwesomeIcon icon={icons.compass} className="input-icon" />
            <Link
              to="/categories"
              className={`nav-link ${location.pathname === '/categories' ? 'nav-link--active' : ''}`}
            >
              Categories
            </Link>
          </nav>
        </div>

        <div className="right">
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

      <TennisIcon />

      <div className="subcategory-icon-container">
        {SvgIcon ? (
          <SvgIcon />
        ) : (
          <p>Loading icon...</p>  // Show this until the SVG is loaded
        )}
      </div>
      <h1>Category: {title.replace(/-/g, ' ')}</h1>
      <h2>Subcategory: {subcategory.replace(/-/g, ' ')}</h2>
      <p>This is the landing page for the {subcategory} subcategory of {title}.</p>
    </div>
  );
};

export default SubCategory;