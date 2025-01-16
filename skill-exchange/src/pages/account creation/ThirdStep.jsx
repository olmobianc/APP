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
  { name: 'Hmm, not sure..', icon: icons.moderate },
];

const ThirdStep = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleContinueClick = () => {
    if (selectedSkill) {
      // If user is not sure, skip the fourth step
      if (selectedSkill.name === 'Hmm, not sure..') {
        navigate('/fifth-step');
        return;
      }

      // Store the teaching skill before navigating
      localStorage.setItem('teachingSkill', JSON.stringify(selectedSkill));
      navigate('/fourth-step');
    }
  };

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
        <div className="progress" style={{ width: '57.1428%' }}></div>
      </div>
      <div className="icon-container">
        <h2>What skills can you teach in return?</h2>
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

export default ThirdStep;