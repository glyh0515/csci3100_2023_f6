import React, { useState } from 'react';
import Admin_nav from './Admin_nav';
import '../CSS/CreateCourse.css';

function Create_Course() {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [department, setDepartment] = useState('');
  const [instructor, setInstructor] = useState('');
  const [vacancy, setVacancy] = useState('');

  const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the course information, like send it to a server
    console.log({ courseId, courseName, time, venue, department, instructor, vacancy });
    // Reset the form
    setCourseId('');
    setCourseName('');
    setTime('');
    setVenue('');
    setDepartment('');
    setInstructor('');
    setVacancy('');
  };

  return (
  <div className='create_course_container'>
    <Admin_nav />
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="courseId" className='create_course_header'>Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="courseName" className='create_course_header'>Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time" className='create_course_header'>Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="venue" className='create_course_header'>Venue:</label>
        <input
          type="text"
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="department" className='create_course_header'>Department:</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="instructor" className='create_course_header'>Instructor:</label>
        <input
          type="text"
          id="instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="vacancy" className='create_course_header'>Vacancy:</label>
        <input
          type="number"
          id="vacancy"
          value={vacancy}
          onChange={(e) => setVacancy(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='create_course_header'>Create Course</button>
    </form>
  </div>
    
  );
};

export default Create_Course;
