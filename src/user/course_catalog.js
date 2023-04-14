import React, { useState } from 'react';
import Course_Catalog_table from '../component/course_catalog_table';
import User_nav from './User_nav';
import SearchForm from './SearchForm';
import '../CSS/Course_catalog.css';


function Course_Catalog() {
  const [loading, setLoading] = useState(false);  
  const [searchResults, setSearchResults] = useState([]);

    const handleSearchResults = (results) => {
        console.log("Settingg search results", results);
        setSearchResults(results);
    };

    return (
      <div style={{height:'100%'}}>
        <User_nav />                
        <div >
          <SearchForm onSearchResults={handleSearchResults} />
          <div className='course-catalog'>
            <p className='header'>Search Results</p>            
            <Course_Catalog_table searchResults={searchResults} />
          </div>            
        </div>
      </div>
    );
}

export default Course_Catalog;
