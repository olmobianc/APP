import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import level images
import beginnerImg from '../../utils/svgs/signup/beginner.png';
import noviceImg from '../../utils/svgs/signup/novice.png';
import intermediateImg from '../../utils/svgs/signup/intermediate.png';
import advancedImg from '../../utils/svgs/signup/advance.png';

const levelDescriptions = {
  Languages: {
    title: "What's your teaching comfort level?",
    levels: [
      {
        name: "Beginner",
        description: "You can teach basic concepts and help others get started.",
        image: beginnerImg
      },
      {
        name: "Novice",
        description: "You can guide others through fundamental lessons and exercises.",
        image: noviceImg
      },
      {
        name: "Intermediate",
        description: "You can teach complex topics and provide detailed feedback.",
        image: intermediateImg
      },
      {
        name: "Advanced",
        description: "You can mentor others at any level and share expert knowledge.",
        image: advancedImg
      }
    ]
  },
  "Arts and Crafts": {
    title: "What's your teaching comfort level?",
    levels: [
      {
        name: "Beginner",
        description: "You can teach basic techniques and help others start their journey.",
        image: beginnerImg
      },
      {
        name: "Novice",
        description: "You can guide others through basic projects and provide tips.",
        image: noviceImg
      },
      {
        name: "Intermediate",
        description: "You can teach various techniques and help improve skills.",
        image: intermediateImg
      },
      {
        name: "Advanced",
        description: "You can mentor others in complex projects and advanced techniques.",
        image: advancedImg
      }
    ]
  }
};

const FourthStep = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    try {
      // Get the selected teaching skill from localStorage
      const teachingSkill = JSON.parse(localStorage.getItem('teachingSkill'));

      // Check if teachingSkill exists and has a name property
      if (!teachingSkill || !teachingSkill.name) {
        // If no teaching skill is found, redirect back to third step
        navigate('/third-step');
        return;
      }

      // Get the appropriate category data
      const data = levelDescriptions[teachingSkill.name];
      if (data) {
        setCategoryData({
          ...data,
          title: `What's your ${teachingSkill.name.toLowerCase()} teaching comfort level?`
        });
      } else {
        // If no specific data for this category, use a generic template
        setCategoryData({
          title: `What's your ${teachingSkill.name.toLowerCase()} teaching comfort level?`,
          levels: [
            {
              name: "Beginner",
              description: "You can teach basic concepts and help others get started.",
              image: beginnerImg
            },
            {
              name: "Novice",
              description: "You can guide others through fundamental lessons and exercises.",
              image: noviceImg
            },
            {
              name: "Intermediate",
              description: "You can teach various techniques and provide detailed guidance.",
              image: intermediateImg
            },
            {
              name: "Advanced",
              description: "You can mentor others at any level and share expert knowledge.",
              image: advancedImg
            }
          ]
        });
      }
    } catch (error) {
      console.error('Error accessing teaching skill:', error);
      navigate('/third-step');
    }
  }, [navigate]);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleContinueClick = () => {
    if (selectedLevel) {
      localStorage.setItem('teachingLevel', JSON.stringify(selectedLevel));
      navigate('/fifth-step');
    }
  };

  if (!categoryData) return null;

  return (
    <div className="signup-page first-step">
      <div className="progress-bar">
        <div className="progress" style={{ width: '71.4285%' }}></div>
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

export default FourthStep; 