import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [stickyOffset, setStickyOffset] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.header');
    setStickyOffset(header ? header.offsetHeight : 0);
  }, []);

  return (
    <aside className="calendar" style={{ top: `${stickyOffset}px` }}>
      <div className="calendar-days">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
      <p className="calendar-description">
        Stay on track with your week—plan ahead using our simple calendar!
      </p>
    </aside>
  );
};

export default Calendar;
