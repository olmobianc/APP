import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';
import { useParams } from 'react-router-dom';
import { ReactComponent as Stuff } from '../../utils/svgs/violoncello.svg'; // Import Stuff SVG component

const SubCategory = () => {

  const imagesMap = {
    'violoncello': Stuff, // Map the string to the actual React component
    // Add other mappings if needed
  };

  const location = useLocation();
  const { image } = location.state || {};
  const [menuOpen, setMenuOpen] = useState(false);
  const { title, subcategory } = useParams();
  const [SvgIcon, setSvgIcon] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };
  
  console.log("image", {image})

  // Dynamically load SVG based on subcategory
  // useEffect(() => {
  //   const loadSvgIcon = async () => {
  //     try {
  //       const sanitizedTitle = title?.toLowerCase().replace(/\s+/g, '-');
  //       const sanitizedSubcategory = subcategory?.toLowerCase().replace(/\s+/g, '-');
  //       const svgPath = `../../utils/svgs/${sanitizedTitle}/${sanitizedSubcategory}.svg`;

  //       console.log('Attempting to load SVG from path:', svgPath);

  //       // Use dynamic import with ReactComponent
  //       const { ReactComponent: Icon } = await import(`../../utils/svgs/${sanitizedTitle}/${sanitizedSubcategory}.svg`);

  //       console.log('Icon loaded successfully:', Icon);
  //       setSvgIcon(() => Icon);
  //     } catch (error) {
  //       console.error('Error loading SVG:', error);
  //       setSvgIcon(null);
  //     }
  //   };

  //   if (subcategory && title) {
  //     loadSvgIcon();
  //   }
  // }, [subcategory, title]);

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

      <div className="subcategory-icon-container">
        {image ? (
          React.createElement(imagesMap[image])
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