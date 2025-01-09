import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import Calendar from '../../components/Calendar.jsx';
import Map from '../../components/Map.jsx';
import Card from '../../components/Card.jsx';

// Replace the cities array with this more organized structure
const locations = {
  cities: [
    { name: 'Sydney, Australia', latitude: -33.8688, longitude: 151.2093 },
    { name: 'Melbourne, Australia', latitude: -37.8136, longitude: 144.9631 },
    { name: 'Brisbane, Australia', latitude: -27.4698, longitude: 153.0251 },
    { name: 'Perth, Australia', latitude: -31.9505, longitude: 115.8605 },
    { name: 'Adelaide, Australia', latitude: -34.9285, longitude: 138.6007 },
    { name: 'Canberra, Australia', latitude: -35.2809, longitude: 149.1300 },
  ],
  neighborhoods: {
    'Sydney, Australia': [
      { name: 'Bondi', latitude: -33.8908, longitude: 151.2743 },
      { name: 'Manly', latitude: -33.7969, longitude: 151.2855 },
      { name: 'Surry Hills', latitude: -33.8858, longitude: 151.2111 },
      { name: 'Newtown', latitude: -33.8960, longitude: 151.1797 },
    ],
    'Melbourne, Australia': [
      { name: 'St Kilda', latitude: -37.8683, longitude: 144.9803 },
      { name: 'Brunswick', latitude: -37.7667, longitude: 144.9667 },
    ],
  }
};

const allSkills = {
    "Sports and Fitness": ["Tennis", "Golf", "Basketball"],
    "Languages": ["English", "Spanish", "French"],
    "Arts and Crafts": ["Painting", "Sculpting", "Knitting"],
    "Music": ["Guitar", "Piano", "Singing"],
    "Cooking and Baking": ["Baking Cakes", "Cooking Pasta", "Decorating"],
    "Coding": ["JavaScript", "Python", "React"],
    "On the Table": ["Chess", "Board Games", "Card Games"],
    "Let's Talk": ["Public Speaking", "Debating", "Storytelling"],
};

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const address = useLocation();
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState({ cities: [], neighborhoods: [] });
    const [selectedCity, setSelectedCity] = useState(null);
    const [skill, setSkill] = useState('');
    const [skillSuggestions, setSkillSuggestions] = useState([]);

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
            const lowercaseValue = value.toLowerCase();
            
            // Search cities
            const matchingCities = locations.cities.filter((city) =>
                city.name.toLowerCase().includes(lowercaseValue)
            );

            // Search neighborhoods and include neighborhoods of matching cities
            const matchingNeighborhoods = [];
            Object.entries(locations.neighborhoods).forEach(([city, neighborhoods]) => {
                // Include neighborhoods if either:
                // 1. The neighborhood name matches the search
                // 2. The parent city name matches the search
                const shouldIncludeAll = city.toLowerCase().includes(lowercaseValue);
                const cityMatches = neighborhoods.filter((neighborhood) =>
                    shouldIncludeAll || neighborhood.name.toLowerCase().includes(lowercaseValue)
                ).map(neighborhood => ({
                    ...neighborhood,
                    name: `${neighborhood.name}, ${city.split(',')[0]}`,
                    parentCity: city
                }));
                matchingNeighborhoods.push(...cityMatches);
            });

            // Combine results
            setSuggestions({
                cities: matchingCities,
                neighborhoods: matchingNeighborhoods
            });
        } else {
            setSuggestions({ cities: [], neighborhoods: [] });
        }
    };

    const handleLocationSelect = (city) => {
        setLocation(city.name);
        setSelectedCity(city);
        setSuggestions({ cities: [], neighborhoods: [] });
    };

    const handleSkillChange = (value) => {
        setSkill(value);

        if (value) {
            // Create array of all skills from all categories
            const allSkillsList = Object.values(allSkills).flat();
            
            // Filter skills that match the search term
            const filteredSkills = allSkillsList.filter((skill) =>
                skill.toLowerCase().includes(value.toLowerCase())
            );
            setSkillSuggestions(filteredSkills);
        } else {
            setSkillSuggestions([]);
        }
    };

    const handleSkillSelect = (selectedSkill) => {
        setSkill(selectedSkill);
        setSkillSuggestions([]);
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

                        {/* locations search */}
                        <div className="autocomplete">
                            <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Try 'Sydney' or 'Bondi'"
                                value={location}
                                onChange={(e) => handleLocationChange(e.target.value)}
                                required
                            />
                            {(suggestions.cities.length > 0 || suggestions.neighborhoods.length > 0) && (
                                <ul className="autocomplete-list">
                                    {suggestions.cities.length > 0 && (
                                        <>
                                            <span className="autocomplete-title">Cities</span>
                                            {suggestions.cities.map((city, index) => (
                                                <li
                                                    key={`city-${index}`}
                                                    onClick={() => handleLocationSelect(city)}
                                                >
                                                    <FontAwesomeIcon icon={icons.location} className="location-icon" />
                                                    {city.name}
                                                </li>
                                            ))}
                                        </>
                                    )}
                                    
                                    {suggestions.neighborhoods.length > 0 && (
                                        <>
                                            <span className="autocomplete-title">Neighborhoods</span>
                                            {suggestions.neighborhoods.map((neighborhood, index) => (
                                                <li
                                                    key={`neighborhood-${index}`}
                                                    onClick={() => handleLocationSelect(neighborhood)}
                                                >
                                                    <FontAwesomeIcon icon={icons.location} className="location-icon" />
                                                    {neighborhood.name}
                                                </li>
                                            ))}
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                        
                        {/* Skills search */}
                        <div className="autocomplete">
                            <FontAwesomeIcon icon={icons.search} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Try 'Tennis' or 'Spanish'"
                                value={skill}
                                onChange={(e) => handleSkillChange(e.target.value)}
                            />
                            {skillSuggestions.length > 0 && (
                                <ul className="autocomplete-list skills-list">
                                    {Object.entries(allSkills).map(([category, items], categoryIndex) => {
                                        // Filter items in this category that match the search
                                        const matchingItems = items.filter(item => 
                                            skillSuggestions.includes(item)
                                        );
                                        
                                        // Only render category if it has matching items
                                        if (matchingItems.length > 0) {
                                            return (
                                                <li key={categoryIndex} className="category-item" style={{padding:0}}>
                                                    <span className="autocomplete-title">{category}</span>
                                                    <ul className="subcategory-list" style={{padding:0}}>
                                                        {matchingItems.map((item, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => handleSkillSelect(item)}
                                                            >
                                                                <FontAwesomeIcon icon={icons.dumbbell} className="location-icon" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            )}
                        </div>



                    </div>

                    <div className='filter-buttons--filter-fields'>
                        {filters.map((filter, index) => (
                            <button key={index} className="filter-button">
                                <FontAwesomeIcon icon={filter.icon} />
                                <div>{filter.label}</div>
                            </button>
                        ))}
                    </div>
                    

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