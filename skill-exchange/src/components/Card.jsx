import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../utils/icons.js'; 

const Card = ({ name, age, location, offerSkills, receiveSkills, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/profile', { state: { name, age, location, offerSkills, receiveSkills, imageSrc } });
  };

  return (
    <div 
      className="card" 
      tabIndex="0" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="card__content">
        <div className='card__image'>
          <img src={imageSrc} alt={`${name}'s profile`} />
        </div>
        <div className="card__header">
          <h2 className="card__name">{name}</h2>
          <span className="card__age">{age} years old</span>
        </div>
        <div className="card__location">
          {location}
          <FontAwesomeIcon 
            icon={icons.chevronRight} 
            className={`card__chevron ${isHovered ? 'visible' : ''}`} 
          />
        </div>
        <div className="card__skills">
          <div className="card__skills-section">
            <h3 className="card__skills-title">Skills to Offer:</h3>
            <ul className="card__skills-list">
              {offerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card__skills-section">
            <h3 className="card__skills-title">In Return For:</h3>
            <ul className="card__skills-list">
              {receiveSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
