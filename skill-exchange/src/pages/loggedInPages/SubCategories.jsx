import { React, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Card from '../../components/Card.jsx';

import Map from '../../components/Map.jsx';

const SubCategories = () => {
  const location = useLocation();
  const { categoryName = '', colorClass = '' } = location.state || {};
  const [menuOpen, setMenuOpen] = useState(false);

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


      <div className='sub-categories-landing'>
        <div style={{width:"100%"}}>
            <div className={`sub-categories-landing--banner color-${colorClass}`}>
                <h1>{categoryName
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                </h1>
                <h3 className='sub-categories-landing--banner__heading'>Learn from people like you, <br></br> near you.</h3>
            </div>

            <div className='sub-categories-landing--main'>
                <div className="breadcrumbs">
                 <Link to="/categories" className="breadcrumbs__item">
                    Categories
                  </Link>
                  <span className="breadcrumbs__separator">
                    <FontAwesomeIcon icon={icons.arrowRight} className="input-icon" />
                  </span>
                  <Link 
                        to={{
                            pathname: `/categories/${categoryName?.replace(/\s+/g, '-').toLowerCase()}`,
                            state: { categoryName: categoryName, colorClass: colorClass },
                          }}
                        className="breadcrumbs__item"
                      >
                        {categoryName
                              .split('-')
                              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(' ')}
                      </Link>
                </div>


                <h3>32 Skill Buddies Nearby</h3>

                <Map />


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
      </div>
  
    </div>
  );
};

export default SubCategories;