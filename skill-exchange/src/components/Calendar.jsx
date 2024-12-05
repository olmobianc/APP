import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [stickyOffset, setStickyOffset] = useState(0);

  // Define multiple active days (indices for Sunday-Saturday)
  const activeDays = [3, 6]; // Wednesday (3) and Saturday (6)

  useEffect(() => {
    const header = document.querySelector('.header');
    setStickyOffset(header ? header.offsetHeight : 0);
  }, []);

  return (
    <aside className="calendar" style={{ top: `${stickyOffset}px` }}>
      <div className="calendar-days">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
          const isActive = activeDays.includes(index);
          const isDisabled = !isActive;
          
          return (
            <div
              key={day}
              className={`calendar-day ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
            >
              {day}
            </div>
          );
        })}
      </div>
      <p className="calendar-description">
      </p>
    </aside>
  );
};

export default Calendar;
