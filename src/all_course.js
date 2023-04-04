import React, { useState } from 'react';
import CourseTable from './CourseTable';

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
    <div className="App">
      <h1>Course List</h1>
      <CourseTable courses={courses} onDelete={handleDelete} />
    </div>
  );
};

export default All_Course;

