import React, { useState } from 'react';
import Course_Catalog_table from '../component/course_catalog_table';
import User_nav from './User_nav';
import SearchForm from './SearchForm';
import '../CSS/Course_catalog.css';


function Course_Catalog() {
  const [loading, setLoading] = useState(false);  
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);

    const handleSearchResults = (results) => {
        console.log("Settingg search results", results);
        setSearchResults(results);
    };

    const handleFiltersChange = (days, ranges) => {
      setSelectedDays(days);
      setSelectedRanges(ranges);
    };

    const filteredResults = searchResults.filter((result) => {
      const dayMatch = selectedDays.some((day) => result.Timeslot.includes(day));
      const units = result.Units;
      const rangeMatch = selectedRanges.some((range) => {
        const [min, max] = range.split('-').map(Number);
        return units >= min && units <= max;
      });
      
      return dayMatch && rangeMatch;
    });

    return (
      <div style={{height:'100%'}}>
        <User_nav />                
        <div >
          <SearchForm onSearchResults={handleSearchResults} onFiltersChange={handleFiltersChange}/>
          <div className='course-catalog'>
            <p className='header'>Search Results</p>            
            <Course_Catalog_table searchResults={filteredResults} />
          </div>            
        </div>
      </div>
    );
}

export default Course_Catalog;
