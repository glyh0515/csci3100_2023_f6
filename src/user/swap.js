import React, { useState } from 'react';
import User_nav from './User_nav';
import EnrolledCourse from './Swap_EnrolledCourse';
import Swap_SearchResult from './Swap_SearchResult';
import SearchForm from './SearchForm';
import '../CSS/Swap.css';

const Swap = () => {
  const [enrolledCourse, setEnrolledCourse] = useState(['']);
  const [searchResults, setSearchResults] = useState([]);
  
  const studentID = localStorage.getItem('studentID');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., make an API call to swap the courses
    try {
      const  response = await fetch('http://localhost:8080/swap-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentID: studentID,
          oldCourseID: enrolledCourse.CourseID,
          newCourseID: searchResults.CourseID,
        }),
      });
      if(response.ok) {
        const data = await response.json();
        console.log('Swapping', enrolledCourse, 'with', searchResults);
        console.log('Response:', data.message);
      } else {
        console.log('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }

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
          <p className="title">Search Results:
            <button className='swap-btn' type="submit" disabled={!enrolledCourse || !searchResults}>
            Swap Courses
            </button>
          </p>
          <Swap_SearchResult searchResults={searchResults}/>                    
          
          
        </form>
      </div>
      
    </div>
  );
};

export default Swap;

