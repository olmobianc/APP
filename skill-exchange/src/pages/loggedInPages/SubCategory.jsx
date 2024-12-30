import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Card from '../../components/Card.jsx';

const SubCategory = () => {
  const location = useLocation();
  console.log("location", location)
  const { skill = '', category = '', colorClass = '' } = location.state || {};
  const [imageSrc, setImageSrc] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      if (skill) {
        try {
          // Dynamically import the image based on the name
          const img = await import(`../../utils/svgs/${category}/${skill}.svg`);
          setImageSrc(img.default); // Set the imported image source
        } catch (error) {
          console.error('Error loading image:', error);
          setImageSrc(null); // Handle error
        }
      }
    };

    loadImage();
  }, [skill]); // Use image as a dependency

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
            {imageSrc ? <img src={imageSrc} alt={skill} /> : <p>Loading image...</p>}
          </div>

          <div className='subCategory-landing--heading'>
              <div className="breadcrumbs">
              <Link to="/categories" className="breadcrumbs__item">
                Categories
              </Link>
              <span className="breadcrumbs__separator">
                <FontAwesomeIcon icon={icons.arrowRight} className="input-icon" />
              </span>
              <Link 
                to={`/categories/${category?.replace(/\s+/g, '-').toLowerCase()}`} 
                state={{ categoryName: category, colorClass }}
                className="breadcrumbs__item"
              >
                {category
                  ? category
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')
                  : 'Unknown Category'}
              </Link>
              <span className="breadcrumbs__separator">
                <FontAwesomeIcon icon={icons.arrowRight} className="input-icon" />
              </span>
              <Link 
                to={`/categories/${category}/${skill?.replace(/\s+/g, '-').toLowerCase()}`} 
                state={{ category, skill, colorClass }}
                className={`breadcrumbs__item breadcrumbs__item--${colorClass}`}
              >
                {skill
                  ? skill
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')
                  : 'Unknown Skill'}
              </Link>
            </div>

            <h1 className='subCategory-landing--heading__title'>Connect with <span className={`subCategory-landing--heading__skill color-${colorClass}`}>{skill}</span> enthusiasts in your area.</h1>
            <p className='subCategory-landing--heading__text'>
            There are 15 skilled individuals near you who can teach you {skill}. Start learning today!
            </p>

      </div>

      </div>
      

      
      <div className='subCategory-landing--listing'>

          <h3 className='subCategory-landing--listing__location-header'>32 Skill Buddies Nearby</h3>
          
          <div className='card-container'>
              <Card
                  imageSrc="/DSC_0114 1.JPG"
                  name="Marco"
                  age={29}
                  location="Edinburgh, Scotland"
                  offerSkills={["Coding", "Italian Language"]}
                  receiveSkills={["Cooking", "Japanese Language"]}
              />
              <Card
                  imageSrc="/DSC_0177.JPG"
                  name="Gianluca"
                  age={28}
                  location="Milan, Italy"
                  offerSkills={["Guitar"]}
                  receiveSkills={["Yoga", "Pilates"]}
              />
              <Card
                  imageSrc="/DSC_0114 1.JPG"
                  name="Marco"
                  age={29}
                  location="Edinburgh, Scotland"
                  offerSkills={["Coding", "Italian Language"]}
                  receiveSkills={["Cooking", "Japanese Language"]}
              />
              <Card
                  imageSrc="/DSC_0177.JPG"
                  name="Gianluca"
                  age={28}
                  location="Milan, Italy"
                  offerSkills={["Guitar"]}
                  receiveSkills={["Yoga", "Pilates"]}
              />
              <Card
                  imageSrc="/DSC_0114 1.JPG"
                  name="Marco"
                  age={29}
                  location="Edinburgh, Scotland"
                  offerSkills={["Coding", "Italian Language"]}
                  receiveSkills={["Cooking", "Japanese Language"]}
              />
              <Card
                  imageSrc="/DSC_0177.JPG"
                  name="Gianluca"
                  age={28}
                  location="Milan, Italy"
                  offerSkills={["Guitar"]}
                  receiveSkills={["Yoga", "Pilates"]}
              />
          </div>

        </div>

      </div>
  
  );
};

export default SubCategory;