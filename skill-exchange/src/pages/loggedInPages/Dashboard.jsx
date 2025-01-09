import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Calendar from '../../components/Calendar.jsx';
import Map from '../../components/Map.jsx';
import Card from '../../components/Card.jsx';

// Mock city data for autocomplete
const cities = [
  { name: 'Sydney, Australia', latitude: -33.8688, longitude: 151.2093 },
  { name: 'Bondi, Australia', latitude: -33.8908, longitude: 151.2743 },
  { name: 'Melbourne, Australia', latitude: -37.8136, longitude: 144.9631 },
  { name: 'Brisbane, Australia', latitude: -27.4698, longitude: 153.0251 },
  { name: 'Perth, Australia', latitude: -31.9505, longitude: 115.8605 },
  { name: 'Adelaide, Australia', latitude: -34.9285, longitude: 138.6007 },
  { name: 'Canberra, Australia', latitude: -35.2809, longitude: 149.1300 },
  { name: 'Gold Coast, Australia', latitude: -28.0167, longitude: 153.4000 },
  { name: 'Newcastle, Australia', latitude: -32.9283, longitude: 151.7817 },
  { name: 'Wollongong, Australia', latitude: -34.4331, longitude: 150.8831 },
  { name: 'Hobart, Australia', latitude: -42.8821, longitude: 147.3272 },
];

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const address = useLocation();
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        console.log('User logged out');
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleLocationChange = (value) => {
        setLocation(value);

        if (value) {
            const filteredCities = cities.filter((city) =>
                city.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredCities);
        } else {
            setSuggestions([]);
        }
    };

    const handleLocationSelect = (city) => {
        setLocation(city.name);
        setSelectedCity(city);
        setSuggestions([]);
    };

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
                        <Link to="/subscribe" className="premium-link">Go Premium</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={icons.bars} className="input-icon" />
                    </div>
                </div>
            </header>

            <div className="filters">
                <div className="filter-buttons">
                    <div className="filter-buttons--searches-fields">
                        <div className="autocomplete">
                            <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Try 'Sydney' or 'Bondi'"
                                value={location}
                                onChange={(e) => handleLocationChange(e.target.value)}
                                required
                            />
                            {suggestions.length > 0 && (
                                <ul className="suggestions-list">
                                    {suggestions.map((city, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleLocationSelect(city)}
                                        >
                                            <FontAwesomeIcon icon={icons.location} className="location-icon" />
                                            {city.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        
                        <div>
                            <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="What Skill are you looking for"
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
                        <h3>4 results</h3>
                        <div className='card-container'>
                            <Card
                                imageSrc="/DSC_1153.JPG"
                                name="Sol"
                                age={25}
                                location="Sydney, Australia"
                                offerSkills={["Baking", "Gardering"]}
                                receiveSkills={["Chess", "Pilates"]}
                            />
                            <Card
                                imageSrc="/DSC_1169.JPG"
                                name="Olmo"
                                age={29}
                                location="Sydney, Australia"
                                offerSkills={["Tennis", "Surfing", "Italian"]}
                                receiveSkills={["Golf", "Pottery"]}
                            />
                            <Card
                                imageSrc="/DSC_0114 1.JPG"
                                name="Marco"
                                age={29}
                                location="Edinburgh, Scotland"
                                offerSkills={["Coding", "Italian"]}
                                receiveSkills={["Cooking", "Japanese"]}
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
                    
                    <Map selectedCity={selectedCity || { latitude: -33.8688, longitude: 151.2093 }} />

                </div>
            </main>

            {modalOpen && (
                <div className="modal">
                    <button onClick={toggleModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;