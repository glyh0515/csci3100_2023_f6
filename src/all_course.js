import React, { useState } from 'react';
import CourseTable from './CourseTable';
import Admin_nav from './Admin_nav';

const All_Course = () => {
  const [courses, setCourses] = useState([
    { code: 'CSCI3100', name: 'Software Engineering' },
    { code: 'CS102', name: 'Data Structures and Algorithms' },
    { code: 'CS103', name: 'Operating Systems' },
    // Add more courses here
  ]);

  const handleDelete = (courseCode) => {
    setCourses(courses.filter((course) => course.code !== courseCode));
  };

  return (
    <div>
      <Admin_nav />
      <div className="App">
        <h1>Course List</h1>
        <CourseTable courses={courses} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default All_Course;

