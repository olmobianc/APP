import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/first-step');
  };

  return (
    <div className="signup-page">
      <div className="progress-bar">
        <div className="progress" style={{ width: '14.2857%' }}></div>
      </div>
      <div className="icon-container">
        <div className="icon-circle">
          <img src='/signup-space-img.png' className='signup-img'></img>
        </div>
        <h2>Let's build a learning path just for you.</h2>
      </div>
      <button className="continue-button" onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default Signup; 