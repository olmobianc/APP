import React from 'react';
import './Card.scss';

const Card = ({ name, age, location, offerSkills, receiveSkills }) => {
  return (
    <div className="card" tabIndex="0">
      <div className="card__content">
        <div className="card__header">
          <h2 className="card__name">{name}</h2>
          <span className="card__age">{age} years old</span>
        </div>
        <div className="card__location">{location}</div>
        <div className="card__skills">
          <div className="card__skills-section">
            <h3 className="card__skills-title">Skills to Offer</h3>
            <ul className="card__skills-list">
              {offerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card__skills-section">
            <h3 className="card__skills-title">Skills to Receive</h3>
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