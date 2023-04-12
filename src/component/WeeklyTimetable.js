import React from 'react';
import '../CSS/Timetable.css';
import User_nav from '../user/User_nav'; // import the User_nav component
//import selected_course from 'path/to/selected_course/database'; // import the selected_course database

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const courseSchedule = {
  Monday: [
    { courseCode: 'MATH101', courseName: 'Calculus I', classroom: 'Room 101', span: 2 },
    null,
    null,
    { courseCode: 'PHYS101', courseName: 'Introduction to Physics', classroom: 'Room 102', span: 1 },
    { courseCode: 'CHEM101', courseName: 'General Chemistry', classroom: 'Room 103', span: 1 },
    null,
  ],
  Tuesday: [
    { courseCode: 'ENGL101', courseName: 'Composition I', classroom: 'Room 201', span: 2 },
    { courseCode: 'MATH101', courseName: 'Calculus I', classroom: 'Room 101', span: 1 },
    null,
    { courseCode: 'PHYS101', courseName: 'Introduction to Physics', classroom: 'Room 102', span: 1 },
    { courseCode: 'CHEM101', courseName: 'General Chemistry', classroom: 'Room 103', span: 1 },
    null,
  ],
  Wednesday: [
    { courseCode: 'MATH101', courseName: 'Calculus I', classroom: 'Room 101', span: 2 },
    { courseCode: 'ENGL101', courseName: 'Composition I', classroom: 'Room 201', span: 1 },
    { courseCode: 'PHYS101', courseName: 'Introduction to Physics', classroom: 'Room 102', span: 1 },
    null,
    { courseCode: 'CHEM101', courseName: 'General Chemistry', classroom: 'Room 103', span: 1 },
    null,
  ],
  Thursday: [
    null,
    { courseCode: 'MATH101', courseName: 'Calculus I', classroom: 'Room 101', span: 2 },
    { courseCode: 'PHYS101', courseName: 'Introduction to Physics', classroom: 'Room 102', span: 1 },
    { courseCode: 'CHEM101', courseName: 'General Chemistry', classroom: 'Room 103', span: 1 },
    null,
    null,
  ],
  Friday: [
    null,
    { courseCode: 'ENGL101', courseName: 'Composition I', classroom: 'Room 201', span: 1 },
    null,
    { courseCode: 'PHYS101', courseName: 'Introduction to Physics', classroom: 'Room 102', span: 1 },
    { courseCode: 'CHEM101', courseName: 'General Chemistry', classroom: 'Room 103', span: 1 },
    null,
  ],
  Saturday: [
    null,
    null,
    null,
    null,
    null,
    null,
  ],
};

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
              {days.map((day, dayIndex) => {
                const course = courseSchedule[day]?.[hour];
                return (
                  <td key={dayIndex} className="timetable-cell">
                    {course && (
                      <>
                        <div>{course.courseCode}</div>
                        <div>{course.courseName}</div>
                        <div>{course.classroom}</div>
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTimetable;
