import React, { useState } from 'react';
import User_nav from './User_nav';

const Swap = () => {
  const [enrolledCourse, setEnrolledCourse] = useState('');
  const [swapCourse, setSwapCourse] = useState('');

  const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., make an API call to swap the courses
    console.log('Swapping', enrolledCourse, 'with', swapCourse);
  };

  return (
    <div>
      <User_nav />
      <form onSubmit={handleSubmit}>
        <label htmlFor="enrolledCourse">Enrolled Course:</label>
        <select
          id="enrolledCourse"
          value={enrolledCourse}
          onChange={(e) => setEnrolledCourse(e.target.value)}
        >
          <option value="">Select Enrolled Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>

        <label htmlFor="swapCourse">Swap With:</label>
        <select
          id="swapCourse"
          value={swapCourse}
          onChange={(e) => setSwapCourse(e.target.value)}
        >
          <option value="">Select Course to Swap</option>
          {courses
            .filter((course) => course.id !== parseInt(enrolledCourse))
            .map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
        </select>

        <button type="submit" disabled={!enrolledCourse || !swapCourse}>
          Swap Courses
        </button>
      </form>
    </div>
  );
};

export default Swap;

