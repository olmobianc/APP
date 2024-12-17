import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import icons from '../utils/icons.js';

const ScheduleMeetingForm = ({ formData, setFormData, name, skillsToOffer, skillsToReceive }) => {
  console.log(skillsToOffer)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1); // Track the current step in the process
  
  // Handlers for each step
  const handleSkillToLearnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      skillToLearnSelected: e.target.value,
    }));
  };

  const handleSkillToReceiveChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      skillToReceiveSelected: e.target.value,
    }));
  };

  const handleDateChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      date: e.target.value,
    }));
  };

  const handleTimeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      time: e.target.value,
    }));
  };

  // Method to handle Google Pay button click
  const handleGooglePayClick = () => {
    // Logic to handle Google Pay payment process
    // For example, integrating Google Pay API or triggering a payment flow
    console.log("Google Pay clicked");
    // Implement Google Pay integration here
  };

  // Method to handle the payment method change (Card or PayPal)
  const handlePaymentChange = (event) => {
    // Update the form data with the selected payment method
    const { value } = event.target;
    setFormData({
      ...formData,
      paymentMethod: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1); // Move to the next step
    } else {
      setIsSubmitted(true); // Switch to the confirmation message after final step
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form className="schedule-meeting-form" onSubmit={handleFormSubmit}>
          {/* Step 1: Select skills */}
          {step === 1 && (
            <div className="form-scheduling">
              <label htmlFor="skill-to-learn">Select a Skill to Learn:</label>
              <select
                id="skill-to-learn"
                value={formData.skillToLearnSelected || ""}
                onChange={handleSkillToLearnChange}
                required
              >
                <option value="">Select a skill</option>
                {skillsToOffer.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>

              <label htmlFor="skill-to-receive">Select a Skill to give back:</label>
              <select
                id="skill-to-receive"
                value={formData.skillToReceiveSelected || ""}
                onChange={handleSkillToReceiveChange}
                required
              >
                <option value="">Select a skill</option>
                {skillsToReceive.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Step 2: Select date and time */}
          {step === 2 && (
            <div className="form-scheduling">
              <label htmlFor="meeting-date">Select a date:</label>
              <input
                type="date"
                id="meeting-date"
                value={formData.date}
                onChange={handleDateChange}
                required
              />

              <label htmlFor="meeting-time">Select a time:</label>
              <input
                type="time"
                id="meeting-time"
                value={formData.time}
                onChange={handleTimeChange}
                required
              />
            </div>
          )}

          {/* Step 3: Select payment method */}
          {step === 3 && (
            <div className="form-scheduling">
              <label htmlFor="payment-method">Select a Payment Method:</label>
              {/* Google Pay button */}
              <button
                type="button"
                className="pay-button google-pay-button"
                onClick={handleGooglePayClick}
              >
                <FontAwesomeIcon icon={faGooglePay} className="input-icon google-pay-icon" />
              </button>

              {/* Paypal Pay button */}
              <button
                type="button"
                className="pay-button paypal-pay-button"
                onClick={handlePaymentChange}
              >
                <div className="paypal-pay-button-text-container">
                  <FontAwesomeIcon icon={faPaypal} className="input-icon google-pay-icon" />
                  <span>PayPal</span>
                </div>
              </button>

              {/* "Or" text */}
              <div className="or-divider">
                <span>OR</span>
              </div>

              <form onSubmit={handlePaymentChange} className="credit-card-form">
                <div className="form-group">
                  <input
                    type="number"
                    name="card-number"
                    placeholder="Card Number"
                    value=""
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="expiration-date"
                    placeholder="Expiration Date"
                    value=""
                    required
                  />
                  <input
                    type="text"
                    name="security-code"
                    placeholder="Security Code"
                    value=""
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="dropdown"
                    name="country"
                    placeholder="Country"
                    value=""
                    required
                  />
                </div>
              </form>

              <div className="form-disclaimer">
                <p>
                  Your card is debited only if {name} accepts your request.
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              {
                step === 1 ? "Confirm Skills" : 
                step === 2 ? "Confirm Schedule" : 
                step === 3 ? "Pay" : 
                ""
              }
            </button>
          </div>

        </form>
      ) : (
        <div className="schedule-meeting-form">
          <h3>You are all set now!</h3>
          <p>{name} has received your proposal and will get back to you shortly.</p>
          <div className="btn-submitted-container">
            <button type="submit" className="btn-submitted">
              <span className="btn-submitted-text">Done</span>
              <FontAwesomeIcon icon={icons.check} className="input-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleMeetingForm;
