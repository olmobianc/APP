import React from 'react';
import CTA from '../components/CTA';

const Home = () => {
  const skills = []; // This will be your state or props for skills

  const handleSkillSubmit = (newSkill) => {
    // Handle skill submission logic here
    console.log(newSkill);
  };

  return (
    <div>
      <h1>Welcome to Skill Exchange</h1>

      <CTA
        heading="Join Us Today!"
        text="Be part of our amazing community and enjoy exclusive benefits."
        imageSrc="https://via.placeholder.com/400"
        onClick={console.log("hello")}
      />

        <div style={{height:"1200px"}}>Lorem Ipsum Lorem</div>

    </div>
  );
};

export default Home;