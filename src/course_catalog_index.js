import React from 'react';
import DropButton from './DropButton';
import Course_Catalog_table from './course_catalog_table';

function Course_Catalog_Index() {
    return (
        <div>
          <DropButton /> 
          <h1>RECENTLY VIEWED</h1>
          <Course_Catalog_table />
        </div>
    );
}

export default Course_Catalog_Index;
