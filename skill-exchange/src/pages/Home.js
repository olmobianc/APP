import React from 'react';
import SkillForm from '../components/SkillForm';
import SkillCard from '../components/SkillCard';

const Home = () => {
  const skills = []; // This will be your state or props for skills

  const handleSkillSubmit = (newSkill) => {
    // Handle skill submission logic here
    console.log(newSkill);
  };

  return (
    <div>
      <h1>Welcome to Skill Exchange</h1>
      <SkillForm onSubmit={handleSkillSubmit} />
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

        <div style={{height:"1200px"}}>Lorem Ipsum Lorem</div>

    </div>
  );
};

export default Home;