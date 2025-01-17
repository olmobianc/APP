import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import level images
import beginnerImg from '../../utils/svgs/signup/beginner.png';
import noviceImg from '../../utils/svgs/signup/novice.png';
import intermediateImg from '../../utils/svgs/signup/intermediate.png';
import advancedImg from '../../utils/svgs/signup/advance.png';

const levelDescriptions = {
  Languages: {
    title: "What's your languages comfort level?",
    levels: [
      {
        name: "Beginner",
        description: "You're just starting out and eager to learn the basics.",
        image: beginnerImg
      },
      {
        name: "Novice",
        description: "You can handle basic conversations and understand simple contexts.",
        image: noviceImg
      },
      {
        name: "Intermediate",
        description: "You can express yourself well and understand most conversations.",
        image: intermediateImg
      },
      {
        name: "Advanced",
        description: "You're fluent and can handle complex conversations with ease.",
        image: advancedImg
      }
    ]
  },
  "Arts and Crafts": {
    title: "What's your artistic comfort level?",
    levels: [
      {
        name: "Beginner",
        description: "You're excited to start and learn the fundamentals.",
        image: beginnerImg
      },
      {
        name: "Novice",
        description: "You understand basic techniques and can create simple projects.",
        image: noviceImg
      },
      {
        name: "Intermediate",
        description: "You can handle various techniques and create more complex pieces.",
        image: intermediateImg
      },
      {
        name: "Advanced",
        description: "You're skilled in multiple techniques and can create advanced works.",
        image: advancedImg
      }
    ]
  },
  // Add more categories as needed
};

const SecondStep = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    try {
      // Get the selected skill from localStorage
      const selectedSkill = JSON.parse(localStorage.getItem('selectedSkill'));
      
      // If it's "Something Else" or doesn't exist, skip this step
      if (!selectedSkill || selectedSkill.name === 'Something Else') {
        navigate('/third-step');
        return;
      }

      // Get the appropriate category data
      const data = levelDescriptions[selectedSkill.name];
      if (data) {
        setCategoryData({
          ...data,
          title: `What's your ${selectedSkill.name.toLowerCase()} comfort level?`
        });
      } else {
        // If no specific data for this category, use a generic template
        setCategoryData({
          title: `What's your ${selectedSkill.name.toLowerCase()} comfort level?`,
          levels: [
            {
              name: "Beginner",
              description: "You're just starting out and eager to learn the basics.",
              image: beginnerImg
            },
            {
              name: "Novice",
              description: "You understand the basics and are ready to learn more.",
              image: noviceImg
            },
            {
              name: "Intermediate",
              description: "You have good experience and want to improve further.",
              image: intermediateImg
            },
            {
              name: "Advanced",
              description: "You're highly skilled and looking for new challenges.",
              image: advancedImg
            }
          ]
        });
      }
    } catch (error) {
      console.error('Error accessing selected skill:', error);
      navigate('/first-step');
    }
  }, [navigate]);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleContinueClick = () => {
    if (selectedLevel) {
      localStorage.setItem('learningLevel', JSON.stringify(selectedLevel));
      navigate('/third-step');
    }
  };

  if (!categoryData) return null;

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
        <div className="progress" style={{ width: '42.8571%' }}></div>
      </div>
      <div className="icon-container">
        <h2>{categoryData.title}</h2>
      </div>
      <div className="levels-container">
        {categoryData.levels.map((level, index) => (
          <button
            key={index}
            className={`level-card ${selectedLevel?.name === level.name ? 'selected' : ''}`}
            onClick={() => handleLevelSelect(level)}
          >
            <img src={level.image} alt={level.name} className="level-image" />
            <h3>{level.name}</h3>
            <p>{level.description}</p>
          </button>
        ))}
      </div>
      <button 
        className={`continue-button ${!selectedLevel ? 'disabled' : ''}`}
        onClick={handleContinueClick}
        disabled={!selectedLevel}
      >
        Continue
      </button>
    </div>
  );
};

export default SecondStep; 