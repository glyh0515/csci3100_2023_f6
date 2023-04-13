import React, { useState } from 'react';
import User_nav from './User_nav';
import EnrolledCourse from './Swap_EnrolledCourse';
import Swap_SearchResult from './Swap_SearchResult';
import SearchForm from './SearchForm';
import '../CSS/Swap.css';

const Swap = () => {
  const [enrolledCourse, setEnrolledCourse] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., make an API call to swap the courses
    console.log('Swapping', enrolledCourse, 'with', searchResults);
  };

    const handleSearchResults = (results) => {
        console.log("Settingg search results", results);
        setSearchResults(results);
    };

  return (
    <div >
      <User_nav />
      <div className='swap-container'>        
        <SearchForm onSearchResults={handleSearchResults}/>
        <form onSubmit={handleSubmit} className='swap-form'>
          <EnrolledCourse/>
          <Swap_SearchResult searchResults={searchResults}/>                    
          <button className='swap-btn' type="submit" disabled={!enrolledCourse || !searchResults}>
          Swap Courses
          </button>
          
        </form>
      </div>
      
    </div>
  );
};

export default Swap;

