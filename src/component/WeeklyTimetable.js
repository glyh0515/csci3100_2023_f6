import React from 'react';
import '../CSS/Timetable.css';
import User_nav from '../User_nav'; // import the User_nav component
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeeklyTimetable = () => {
  return (
    <div className="timetable-container">
      <User_nav />
      <table className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day, idx) => (
              <th key={idx}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, hour) => (
            <tr key={hour}>
              <td>{`${hour+8}:30`} - {`${hour+9}:15`}</td>
              {Array.from({ length: 6 }, (_, dayIndex) => (
                <td key={dayIndex} className="timetable-cell">{/* Put your content here */}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTimetable;
