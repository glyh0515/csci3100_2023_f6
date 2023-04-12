import React from 'react';
import Course_Catalog_table from '../component/course_catalog_table';
import User_nav from './User_nav';
import Search_form from './SearchForm';
import '../CSS/Course_catalog.css';

function Course_Catalog() {
    return (
      <div style={{height:'100%'}}>
        <User_nav />                
        <div >
          <Search_form />
          <div className='course-catalog'>
            <p className='header'>Recently Viewed</p>            
            <Course_Catalog_table />
          </div>            
        </div>
      </div>
    );
}

export default Course_Catalog;
