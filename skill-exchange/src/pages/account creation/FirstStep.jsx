import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

const skills = [
  { name: 'Languages', icon: icons.language },
  { name: 'Arts and Crafts', icon: icons.paintBrush },
  { name: 'Music', icon: icons.guitar },
  { name: 'Cooking and Baking', icon: icons.utensils },
  { name: 'Sports and Fitness', icon: icons.basketball },
  { name: 'Coding', icon: icons.laptopCode },
];

const FirstStep = () => {

  const navigate = useNavigate(); // Initialize history for navigation

  const handleContinueClick = () => {
    navigate('/second-step'); // Navigate to the NextStep page
  };

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div> {/* Adjust width as needed */}
          </div>
          <div className="icon-container">
            <div className="icon-circle">
              <span role="img" aria-label="light bulb">💡</span> {/* Replace with your desired icon */}
            </div>
            <h2>What skills you want to learn the most?</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <button key={index} className="skills-list--btn">
                <FontAwesomeIcon icon={skill.icon} className="category-icon" />
                <h3>{skill.name}</h3>
              </button>
            ))}
          </div>
          <button className="continue-button" onClick={handleContinueClick}>Continue</button>
      </div>
  );
};

export default FirstStep; 