import React, { useState } from 'react';

const CTA = ({ heading, text, buttonText, imageSrc, inputPlaceholder }) => {
  const [location, setLocation] = useState('');
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Location: ${location}, Skill: ${skill}`);
  };

  return (

    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-heading">{heading}</h2>
        <p className="cta-text">{text}</p>

        <form onSubmit={handleSubmit} className="cta-form">
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter the skill you want to learn"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
          <button type="submit" className="cta-submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
      <div className="cta-image">
        <img src={imageSrc} alt="Call to action visual" />
      </div>
    </div>
 
  );
};

export default CTA;