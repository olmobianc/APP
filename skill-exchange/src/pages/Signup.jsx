import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Signup = () => {
  const navigate = useNavigate(); // Initialize history for navigation

  const handleContinueClick = () => {
    navigate('/next-step'); // Navigate to the NextStep page
  };

  return (
    <div className="signup-page">
      <div className="progress-bar">
        <div className="progress" style={{ width: '25%' }}></div> {/* Adjust width as needed */}
      </div>
      <div className="icon-container">
        <div className="icon-circle">
          <span role="img" aria-label="light bulb">💡</span> {/* Replace with your desired icon */}
        </div>
        <h2>Let's build a learning path just for you.</h2>
      </div>
      <button className="continue-button" onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default Signup; 