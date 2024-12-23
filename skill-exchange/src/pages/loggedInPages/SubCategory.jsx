import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

const SubCategory = () => {
  const location = useLocation();
  console.log("location", location)
  const { image, colorClass } = location.state || {}; // Retrieve the image name from state
  const [imageSrc, setImageSrc] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      if (image) {
        try {
          // Dynamically import the image based on the name
          const img = await import(`../../utils/svgs/sports-and-fitness/${image}.svg`);
          setImageSrc(img.default); // Set the imported image source
        } catch (error) {
          console.error('Error loading image:', error);
          setImageSrc(null); // Handle error
        }
      }
    };

    loadImage();
  }, [image]); // Use image as a dependency

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
      // Handle logout logic here
      console.log('User logged out');
  };

  return (

    <div className="home logged-in categories-page">
      <header className="header">
          <div className='left'>
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


      <div className='subCategory-landing'>
        <div className="subCategory-landing--hero-banner">
          {imageSrc ? <img src={imageSrc} alt={image} /> : <p>Loading image...</p>} {/* Render the image */}
        </div>
        <div className='subCategory-landing--heading'>

          <div className='breadcrumbs'>
            <span className='breadcrumbs__item'>sports-and-fitness</span>
            <span className='breadcrumbs__separator'> &gt; </span>
            <span className={`breadcrumbs__item color-${colorClass}`}>{image}</span>
          </div>

          <h1 className='subCategory-landing--heading__title'>Connect with <span className={`subCategory-landing--heading__skill color-${colorClass}`}>{image}</span> 
            Enthusiasts in Your Area</h1>
          <p className='subCategory-landing--heading__text'>
          There are 15 skilled individuals near you who can teach you {image}. Start learning today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;