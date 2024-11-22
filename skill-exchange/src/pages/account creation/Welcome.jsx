import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { SVGSignup } from './../../utils/svgs/SVGSignup'

const Welcome = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Show additional fields when email is entered
    if (name === 'email' && value) {
      setShowAdditionalFields(true);
    }
  };

  const navigate = useNavigate(); // Initialize history for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
    navigate('/home');
  };

  return (
    <div className={`welcome ${showAdditionalFields ? 'reduced-padding' : ''}`}>
      <div className="welcome__image">
        <SVGSignup />
      </div>
      
      <div className="welcome__content">
        <h1 className="welcome__heading">Your learning path is ready. 
          Create a free account to start building connections.
        </h1>

        <div className="social-login-buttons">
          <button className="login-button google-button">
            <FontAwesomeIcon icon={faGoogle} className="input-icon" />
            Login with Google
          </button>
          <button className="login-button facebook-button">
            <FontAwesomeIcon icon={faFacebook} className="input-icon" />
            Login with Facebook
          </button>
        </div>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {showAdditionalFields && (
            <>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group half-width">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="form-options">
            <p>By clicking Sign up, I agree to Marcopolo's Terms and Privacy Policy</p>
          </div>

          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>

        <div className="signup-prompt">
          <p>Existing user?</p>
          <Link to="/signup" className="signup-link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

