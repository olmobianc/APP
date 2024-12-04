import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Calendar from '../../components/Calendar.jsx';
import Map from '../../components/Map.jsx';
import Card from '../../components/Card.jsx';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const address = useLocation(); // Access the current URL
    const [location, setLocation] = useState('');
    const [skill, setSkill] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        console.log('User logged out');
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleLocationSubmit = (e) => {
        console.log(`Location: ${location}`);
      };

      const handleSkillSubmit = (e) => {
        console.log(`Skill: ${skill}`);
      };  

    const searchIcon = icons.search 

    const filters = [
        { icon: icons.water, label: 'On the Water' },
        { icon: icons.indoor, label: 'Indoor' },
        { icon: icons.outdoor, label: 'Outdoor' },
        { icon: icons.city, label: 'Urban Settings' },
        { icon: icons.nature, label: 'Natural Settings' },
        { icon: icons.solo, label: 'Solo Activities' },
        { icon: icons.group, label: 'Group Activities' },
        { icon: icons.family, label: 'Family-Friendly' },
        { icon: icons.beginner, label: 'Beginner-Friendly' },
        { icon: icons.intermediate, label: 'Intermediate' },
        { icon: icons.expert, label: 'Expert' },
        { icon: icons.quick, label: 'Quick Activities' },
        { icon: icons.moderate, label: 'Moderate Time' },
        { icon: icons.longTerm, label: 'Long-Term Projects' },
        { icon: icons.creative, label: 'Creative' },
        { icon: icons.physical, label: 'Physical' },
        { icon: icons.relaxing, label: 'Relaxing' },
        { icon: icons.skillDevelopment, label: 'Skill Development' },
        { icon: icons.make, label: 'Make Something' },
        { icon: icons.learn, label: 'Learn Something' },
        { icon: icons.active, label: 'Stay Active' },
    ];

    return (
        <div className="home logged-in">
            <header className="header">
                <div className='left'>
                    <div className="logo">Marcopolo</div>
                    <nav className="nav">
                        <FontAwesomeIcon icon={icons.house} className="input-icon" />
                        <Link 
                            to="/home" 
                            className={`nav-link ${address.pathname === '/home' ? 'nav-link--active' : ''}`}
                        >
                            Home
                        </Link>
                        <FontAwesomeIcon icon={icons.compass} className="input-icon" />
                        <Link 
                            to="/categories" 
                            className={`nav-link ${address.pathname === '/categories' ? 'nav-link--active' : ''}`}
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

            <div className="filters">
                <div className="filter-buttons">
                    <div className="filter-buttons--searches-fields">
                        <div>
                            <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Sydney, New South Wales"
                                value={location}
                                onChange={(e) => handleLocationSubmit(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                        <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="What Skill are you looking for"
                                value={skill}
                                onChange={(e) => handleSkillSubmit(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {filters.map((filter, index) => (
                        <button key={index} className="filter-button">
                            <FontAwesomeIcon icon={filter.icon} />
                            <div>{filter.label}</div>
                        </button>
                    ))}

                    <button className="view-all-button" onClick={toggleModal}>
                        All Filters
                    </button>

                </div>

            </div>


            {menuOpen && (
                <div className="dropdown-menu">
                    <Link to="/account" className="dropdown-item">Account</Link>
                    <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
                </div>
            )}

            <main className="main-content">
                <div className='main-content--box'>
                    <div style={{width:"100%"}}>
                        <h3>2 results</h3>
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
                        </div>
                    </div>
                    
                    <Map />

                </div>
            </main>

            {modalOpen && (
                <div className="modal">
                    {/* Modal content for all filters */}
                    <button onClick={toggleModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard; 