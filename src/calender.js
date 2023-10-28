import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
      const [date, setDate] = useState(new Date());

      const handleDateChange = (newDate) => {
            setDate(newDate);
      };

      const handleDateClick = (clickedDate) => {
            alert(`You clicked on ${clickedDate}`);
      };

      return (
            <div className="calendar-container">
                  <Calendar
                        onChange={handleDateChange}
                        value={date}
                        onClickDay={handleDateClick} // Add this prop to handle date click events
                  />
            </div>
      );
};

export default MyCalendar;
