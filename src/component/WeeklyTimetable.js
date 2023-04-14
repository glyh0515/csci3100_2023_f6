import React, { useState, useEffect } from 'react';
import '../CSS/Timetable.css';
import User_nav from '../user/User_nav'; // import the User_nav component
//import selected_course from 'path/to/selected_course/database'; // import the selected_course database
import Loading from'./Loading';
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/* const courseSchedule = {
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
}; */

const WeeklyTimetable = () => {
  const studentID = localStorage.getItem('studentID');
  const [loading, setIsLoading] = useState(false);
  const courseSchedule = {
    Monday: Array(10).fill(null),
    Tuesday: Array(10).fill(null),
    Wednesday: Array(10).fill(null),
    Thursday: Array(10).fill(null),
    Friday: Array(10).fill(null),
    Saturday: Array(10).fill(null),
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/user/${studentID}/course`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })      
      .catch(error => console.error(error));
      setIsLoading(false);
      
  }, []);
  for (const course of data) {
    const timeslotParts = course.Timeslot.split(' ');
    const weekday = timeslotParts[0];
    const startHour = parseInt(timeslotParts[1].substring(0, 2));
    const endHour = parseInt(timeslotParts[1].substring(5, 7));
    const startSlot = startHour - 8;
    const endSlot = endHour - 8;
    const span = endSlot - startSlot;
    const courseData = {
      courseCode: course.CourseID,
      courseName: course.CourseName,
      classroom: course.Venue,
      span: span,
    }
    for (let i = 0; i < span; i++) {
      courseSchedule[weekday][startSlot + i] = courseData;
    }
  }
  return (
    <div >
      
      <User_nav />
      <div className="timetable-container">
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
                <td>{`${hour + 8}:30`} - {`${hour + 9}:15`}</td>
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
    {loading && <Loading />}
    </div>
  );
};

export default WeeklyTimetable;
