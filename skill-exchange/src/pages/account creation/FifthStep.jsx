import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookSvg from '../../utils/svgs/book.svg';
import friendsSvg from '../../utils/svgs/signup/friends.svg';
import bothSvg from '../../utils/svgs/signup/both.svg';
import somethingElseSvg from '../../utils/svgs/signup/eyes.svg';

const FifthStep = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    if (selectedOption) {
      const learningSkill = JSON.parse(localStorage.getItem('selectedSkill'));
      localStorage.setItem('userPreferences', JSON.stringify({
        skill: learningSkill,
        focus: selectedOption
      }));
      navigate('/final-step');
    }
  };

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
        <div className="progress" style={{ width: '85.7142%' }}></div>
      </div>
      <div className="icon-container">
        <h2>Lastly, what do you really want to focus on?</h2>
      </div>
      <div className="skills-list">
        <button 
          className={`skills-list--btn ${selectedOption === 'learning' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('learning')}
        >
          <span className="option-icon">
            <img src={bookSvg} alt="Learning icon" />
          </span>
          <h3>Learning specific skills</h3>
        </button>
        <button 
          className={`skills-list--btn ${selectedOption === 'social' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('social')}
        >
          <span className="option-icon">
            <img src={friendsSvg} alt="Friends icon" />
          </span>
          <h3>Making new friends</h3>
        </button>
        <button 
          className={`skills-list--btn ${selectedOption === 'both' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('both')}
        >
          <span className="option-icon">
            <img src={bothSvg} alt="Both icon" />
          </span>
          <h3>A little bit of both</h3>
        </button>
        <button 
          className={`skills-list--btn ${selectedOption === 'other' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('other')}
        >
          <span className="option-icon">
            <img src={somethingElseSvg} alt="Other icon" />
          </span>
          <h3>Something else</h3>
        </button>
      </div>
      <button 
        className={`continue-button ${!selectedOption ? 'disabled' : ''}`}
        onClick={handleContinueClick}
        disabled={!selectedOption}
      >
        Continue
      </button>
    </div>
  );
};

export default FifthStep; 