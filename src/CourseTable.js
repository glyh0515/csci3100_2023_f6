import React from 'react';

const CourseTable = ({ courses, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.code}</td>
            <td>{course.name}</td>
            <td>
              <button onClick={() => onDelete(course.code)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;

