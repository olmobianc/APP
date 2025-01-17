import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

const skills = [
  { name: 'Languages', icon: icons.language },
  { name: 'Arts and Crafts', icon: icons.paintBrush },
  { name: 'Music', icon: icons.guitar },
  { name: 'Cooking and Baking', icon: icons.utensils },
  { name: 'Sports and Fitness', icon: icons.basketball },
  { name: 'Something Else', icon: icons.beginner },
];

const FirstStep = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    // Here you can also store the skill in your global state management solution
    // For example, if using Redux:
    // dispatch(setUserSkill(skill));
    // Or if using Context:
    // setUserContext({ ...userContext, selectedSkill: skill });
  };

  const handleContinueClick = () => {
    // If it's "Something Else" or doesn't exist, skip this step
    if (!selectedSkill || selectedSkill.name === 'Something Else') {
      navigate('/third-step');
      return;
    }

    if (selectedSkill) {
      // Store the selected skill before navigating
      localStorage.setItem('selectedSkill', JSON.stringify(selectedSkill));
      navigate('/second-step');
    }
    
  };

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
        <div className="progress" style={{ width: '28.5714%' }}></div>
      </div>
      <div className="icon-container">
        <h2>What skills you want to learn the most?</h2>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <button 
            key={index} 
            className={`skills-list--btn ${selectedSkill?.name === skill.name ? 'selected' : ''}`}
            onClick={() => handleSkillSelect(skill)}
          >
            <FontAwesomeIcon icon={skill.icon} className="category-icon" />
            <h3>{skill.name}</h3>
          </button>
        ))}
      </div>
      <button 
        className={`continue-button ${!selectedSkill ? 'disabled' : ''}`}
        onClick={handleContinueClick}
        disabled={!selectedSkill}
      >
        Continue
      </button>
    </div>
  );
};

export default FirstStep; 