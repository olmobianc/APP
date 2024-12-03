import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Macrocategory from '../../components/MacroCategory.jsx';

const Categories = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Access the current URL

    const sportsCategories = [
        { name: "Tennis", icon: "🎾" },
        { name: "Basketball", icon: "🏀" },
        { name: "Soccer", icon: "⚽" },
        { name: "Swimming", icon: "🏊" },
        { name: "Cycling", icon: "🚴" },
      ];

      // Languages Categories
      const languageCategories = [
        { name: "Spanish", icon: "🇪🇸" },
        { name: "French", icon: "🇫🇷" },
        { name: "German", icon: "🇩🇪" },
        { name: "Mandarin", icon: "🇨🇳" },
        { name: "Japanese", icon: "🇯🇵" },
      ];

      // Arts and Crafts Categories
      const artsCategories = [
        { name: "Painting", icon: "🎨" },
        { name: "Sculpture", icon: "🗿" },
        { name: "Knitting", icon: "🧶" },
        { name: "Pottery", icon: "🍶" },
        { name: "Photography", icon: "📷" },
      ];

      // Music Categories
      const musicCategories = [
        { name: "Guitar", icon: "🎸" },
        { name: "Piano", icon: "🎹" },
        { name: "Drums", icon: "🥁" },
        { name: "Violin", icon: "🎻" },
        { name: "Flute", icon: "🎶" },
      ];

      // Cooking and Baking Categories
      const cookingCategories = [
        { name: "Baking", icon: "🍰" },
        { name: "Cooking", icon: "🍳" },
        { name: "Grilling", icon: "🍖" },
        { name: "Vegetarian", icon: "🥗" },
        { name: "Vegan", icon: "🥑" },
      ];

      // Gardening Categories
      const gardeningCategories = [
        { name: "Indoor Plants", icon: "🌱" },
        { name: "Outdoor Plants", icon: "🌿" },
        { name: "Flowers", icon: "🌸" },
        { name: "Herbs", icon: "🌿" },
        { name: "Succulents", icon: "🌵" },
      ];

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

                <main className="main-content">
                      {/* Sports and Fitness */}
                      <Macrocategory title="Sports and Fitness" categories={sportsCategories} />
      
                      {/* Languages */}
                      <Macrocategory title="Languages" categories={languageCategories} />
      
                      {/* Arts and Crafts */}
                      <Macrocategory title="Arts and Crafts" categories={artsCategories} />
      
                      {/* Music */}
                      <Macrocategory title="Music" categories={musicCategories} />
      
                      {/* Cooking and Baking */}
                      <Macrocategory title="Cooking and Baking" categories={cookingCategories} />
      
                      {/* Gardening */}
                      <Macrocategory title="Gardening" categories={gardeningCategories} />

                </main>
        </div>
    );
};

export default Categories; 