import React, { useState } from 'react';
import CourseTable from './CourseTable';
import Admin_nav from './Admin_nav';
import AdminSearch from './Admin_SearchCourse';

const All_Course = () => {

  return (
    <div>
      <Admin_nav />
      
      <div className="App">
      <CourseTable />
      </div>
    </div>
  );
};

export default All_Course;

