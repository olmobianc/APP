import React, { useState } from "react";

const ScheduleMeetingForm = ({ formData, setFormData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for form submission

  const handleDateChange = (e) => {
    setFormData((prevData) => ({ ...prevData, date: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setFormData((prevData) => ({ ...prevData, time: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Switch to the confirmation message
  };

  return (
    <>
      {!isSubmitted ? (
        <form className="schedule-meeting-form" onSubmit={handleFormSubmit}>
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
  
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Confirm Meeting
            </button>
          </div>
        </form>
      ) : (
        <div className="schedule-meeting-form">
          <h3>You are all set now!</h3>
          <p>We have received your proposal and will get back to you shortly.</p>
        </div>
      )}
    </>
  );
};

export default ScheduleMeetingForm;