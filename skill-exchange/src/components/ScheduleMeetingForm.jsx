import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import icons from '../utils/icons.js';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const ScheduleMeetingForm = ({ formData, setFormData, name, skillsToOffer, skillsToReceive }) => {
  console.log(skillsToOffer)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1); // Track the current step in the process
  
  const [openSkillToLearn, setOpenSkillToLearn] = React.useState(false);
  const [openSkillToReceive, setOpenSkillToReceive] = React.useState(false);

  const handleSkillToLearnChange = (e) => {
    setFormData({
      ...formData,
      skillToLearnSelected: e.target.value
    });
  };

  const handleSkillToReceiveChange = (e) => {
    setFormData({
      ...formData,
      skillToReceiveSelected: e.target.value
    });
  };

  const handleCloseSkillToLearn = () => setOpenSkillToLearn(false);
  const handleOpenSkillToLearn = () => setOpenSkillToLearn(true);
  
  const handleCloseSkillToReceive = () => setOpenSkillToReceive(false);
  const handleOpenSkillToReceive = () => setOpenSkillToReceive(true);

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
          
          {step === 1 && (
            <div className="form-scheduling">
              <h3>Select a Skill to Learn and to Give in Exchange</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="skill-to-learn-label">choose a Skill to Learn</InputLabel>
                <Select
                  labelId="skill-to-learn-label"
                  id="skill-to-learn"
                  value={formData.skillToLearnSelected || ""}
                  onChange={handleSkillToLearnChange}
                  onOpen={handleOpenSkillToLearn}
                  onClose={handleCloseSkillToLearn}
                  label="Select a Skill to Learn"
                  required
                >
                  {skillsToOffer.map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="skill-to-receive-label">choose a Skill to Teach</InputLabel>
                <Select
                  labelId="skill-to-receive-label"
                  id="skill-to-receive"
                  value={formData.skillToReceiveSelected || ""}
                  onChange={handleSkillToReceiveChange}
                  onOpen={handleOpenSkillToReceive}
                  onClose={handleCloseSkillToReceive}
                  label="Select a Skill to Give Back"
                  required
                >
                  {skillsToReceive.map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}

          {/* Step 2: Select date and time */}
          {step === 2 && (
            <div className="form-scheduling">
              <h3>Select a Date & Time</h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Schedule"
                  value={formData.dateTime ? dayjs(formData.dateTime) : null}
                  onChange={(newValue) => {
                    setFormData({
                      ...formData,
                      dateTime: newValue ? newValue.toISOString() : null,
                    });
                  }}
                />
              </LocalizationProvider>
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
                    type="text"
                    name="card-number"
                    placeholder="Card Number"
                    value=""
                    required
                  />
                  <input
                    type="text"
                    name="expiration-date"
                    placeholder="MM/YY"
                    value=""
                    required
                  />
                  <input
                    type="text"
                    name="security-code"
                    placeholder="CVC"
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
          <p>In the meantime why not keep exploring. Check your homepage for more skill exchanges!</p>
          <div className="btn-submitted-container">
          <Link 
            to="/home"
            className="btn-submitted"
          >
              <span className="btn-submitted-text">Back to Home</span>
              <FontAwesomeIcon icon={icons.check} className="input-icon" />
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleMeetingForm;
