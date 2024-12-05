import React, { useState } from "react";

const ScheduleMeetingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetingChoice, setMeetingChoice] = useState("yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
  };

  return (
    <form className="schedule-meeting-form" onSubmit={handleSubmit}>


      {meetingChoice === "yes" && (
        <div className="form-scheduling">
          <label htmlFor="meeting-date">Select a date and time for your skill exchange:</label>
          <input 
            type="date" 
            id="meeting-date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required
          />

          <input 
            type="time" 
            id="meeting-time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required
          />
        </div>
      )}

      <div className="form-submit">
        <button type="submit" className="btn-primary">Book it</button>
      </div>
    </form>
  );
};

export default ScheduleMeetingForm;
