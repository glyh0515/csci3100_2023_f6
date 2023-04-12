import React from 'react';
import DropButton from './DropButton';
import Course_Catalog_table from './component/course_catalog_table';

function Course_Catalog_Search() {
    return (
        <div>
          <DropButton /> 
          <h1>SEARCH RESULTS</h1>
          <h2># course with keyword : 3100</h2>
          <Course_Catalog_table />
        </div>
    );
}

export default Course_Catalog_Search;
