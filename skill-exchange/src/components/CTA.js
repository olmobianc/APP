import React from 'react';
import SkillForm from './SkillForm'; // Import SkillForm

const CTA = ({ heading, text, buttonText, imageSrc, onClick }) => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-heading">{heading}</h2>
        <p className="cta-text">{text}</p>
        {/* Include the SkillForm component */}
        <SkillForm onSubmit={(data) => console.log('Submitted Skill:', data)} />
      </div>
      <div className="cta-image">
        <img src={imageSrc} alt="Call to action visual" />
      </div>
    </div>
  );
};

export default CTA;