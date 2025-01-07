import React from 'react';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h1 className="subscribe-heading">Unlock Your Potential with Brilliant</h1>
      <p className="subscribe-description">
        Access over 60 interactive courses and personalized learning paths today!
      </p>

      <div className="subscription-plans">
        <div className="plan">
          <h2>Monthly</h2>
          <p className="price">$15/month</p>
          <button className="subscribe-btn">Start Free Trial</button>
        </div>
        <div className="plan">
          <h2>Yearly</h2>
          <p className="price">$150/year</p>
          <button className="subscribe-btn">Start Free Trial</button>
        </div>
      </div>

      <div className="features">
        <h3>What You Get</h3>
        <ul>
          <li>Access to over 60 interactive courses</li>
          <li>Guided learning paths</li>
          <li>Real-time feedback and analytics</li>
          <li>No ads or interruptions</li>
          <li>Accessible on desktop and mobile</li>
        </ul>
      </div>

      <div className="cta">
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Subscribe;
