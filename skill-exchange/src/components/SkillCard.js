import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
      {/* Add more details or actions here */}
    </div>
  );
};

export default SkillCard;