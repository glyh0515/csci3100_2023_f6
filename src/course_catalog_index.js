import React from 'react';
import Course_Catalog_table from './course_catalog_table';
import User_nav from './User_nav';
import Search_form from './SearchForm';
import TermSelect from './component/TermSelectButton';

function Course_Catalog_Index() {
    return (
      <div >
        <User_nav />
        
        
        <div className='course-catalog'>
          <Search_form />
          <div>
            <div className='header'>
              <TermSelect />
            </div>
            <h1>RECENTLY VIEWED</h1>
            <Course_Catalog_table />
          </div>
            
        </div>
      </div>
    );
}

export default Course_Catalog_Index;
