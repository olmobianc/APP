import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Macrocategory from '../../components/MacroCategory.jsx';

const Categories = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Access the current URL

    const sportsCategories = [
        { name: "Tennis", icon: <FontAwesomeIcon icon={icons.tennis} /> },
        { name: "Basketball", icon: <FontAwesomeIcon icon={icons.basketball} /> },
        { name: "Soccer", icon: <FontAwesomeIcon icon={icons.soccer} /> },
        { name: "Surf", icon: <FontAwesomeIcon icon={icons.water} /> },
        { name: "Golf", icon: <FontAwesomeIcon icon={icons.golf} /> },
      ];

      // Languages Categories
      const languageCategories = [
        { name: "Spanish", icon: <FontAwesomeIcon icon={icons.language} /> },
        { name: "French", icon: <FontAwesomeIcon icon={icons.language} /> },
        { name: "German", icon: <FontAwesomeIcon icon={icons.language} /> },
        { name: "Mandarin", icon: <FontAwesomeIcon icon={icons.language} /> },
        { name: "Japanese", icon: <FontAwesomeIcon icon={icons.language} /> },
      ];

      // Arts and Crafts Categories
      const artsCategories = [
        { name: "Painting", icon: <FontAwesomeIcon icon={icons.paintBrush} /> },
        { name: "Sculpture", icon: <FontAwesomeIcon icon={icons.hammer} /> },
        { name: "Knitting", icon: <FontAwesomeIcon icon={icons.leaf} /> },
        { name: "Pottery", icon: <FontAwesomeIcon icon={icons.palette} /> },
        { name: "Photography", icon: <FontAwesomeIcon icon={icons.camera} /> },
      ];

      // Music Categories
      const musicCategories = [
        { name: "Guitar", icon: <FontAwesomeIcon icon={icons.guitar} /> },
        { name: "Piano", icon: <FontAwesomeIcon icon={icons.chevronRight} /> },
        { name: "Drums", icon: <FontAwesomeIcon icon={icons.chevronRight} /> },
        { name: "Violin", icon: <FontAwesomeIcon icon={icons.chevronRight} /> },
        { name: "Flute", icon: <FontAwesomeIcon icon={icons.chevronRight} /> },
      ];

      // Cooking and Baking Categories
      const cookingCategories = [
        { name: "Baking", icon: <FontAwesomeIcon icon={icons.utensils} /> },
        { name: "Cooking", icon: <FontAwesomeIcon icon={icons.utensils} /> },
        { name: "Grilling", icon: <FontAwesomeIcon icon={icons.hiking} /> },
        { name: "Vegetarian", icon: <FontAwesomeIcon icon={icons.leaf} /> },
        { name: "Vegan", icon: <FontAwesomeIcon icon={icons.leaf} /> },
      ];

      // Coding Categories
      const codingCategories = [
        { name: "HTML and CSS", icon: <FontAwesomeIcon icon={icons.laptopCode} /> },
        { name: "JavaScript", icon: <FontAwesomeIcon icon={icons.laptopCode} /> },
        { name: "Python", icon: <FontAwesomeIcon icon={icons.python} /> },
        { name: "Java", icon: <FontAwesomeIcon icon={icons.brain} /> },
        { name: "C++", icon: <FontAwesomeIcon icon={icons.brain} /> },
      ];

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

            <main className="main-content categories">
                <Macrocategory 
                    title="Sports and Fitness" 
                    icon={icons.dumbbell} 
                    categories={sportsCategories} 
                    description="Stay active and explore various sports and fitness activities." 
                />
                <Macrocategory 
                    title="Languages" 
                    icon={icons.language} 
                    categories={languageCategories} 
                    description="Learn new languages and expand your communication skills." 
                />

                <Macrocategory 
                    title="Arts and Crafts" 
                    icon={icons.paintBrush} 
                    categories={artsCategories} 
                    description="Unleash your creativity with arts and crafts activities." 
                />

                <Macrocategory 
                    title="Music" 
                    icon={icons.guitar} 
                    categories={musicCategories} 
                    description="Dive into the world of music and discover your inner musician." 
                />

                <Macrocategory 
                    title="Cooking and Baking" 
                    icon={icons.utensils} 
                    categories={cookingCategories} 
                    description="Master the art of cooking and baking with these activities." 
                />

                <Macrocategory 
                    title="Coding" 
                    icon={icons.laptopCode} 
                    categories={codingCategories} 
                    description="Explore coding languages and improve your programming skills." 
                />
            </main>
        </div>
    );
};

export default Categories; 