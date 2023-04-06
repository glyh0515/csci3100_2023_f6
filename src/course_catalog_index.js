import React from 'react';
import DropButton from './DropButton';
import Course_Catalog_table from './course_catalog_table';
import './CSS/Course_Catalog_Button.css';
import User_nav from './User_nav';

function Course_Catalog_Index() {
    return (
      <div>
        <User_nav />
        <div className='course-catalog'>
          <div className='header'>
            <DropButton />
          </div>
          <h1>RECENTLY VIEWED</h1>
          <Course_Catalog_table />
        </div>
      </div>
    );
}

export default Course_Catalog_Index;
