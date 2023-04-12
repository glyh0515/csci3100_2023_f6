import React, { useState } from 'react';
import User_nav from './User_nav';
import EnrolledCourse from './Swap_EnrolledCourse';
import SearchResult from './Swap_SearchResult';
import SearchForm from './SearchForm';
import './CSS/Swap.css'

const Swap = () => {
  const [enrolledCourse, setEnrolledCourse] = useState('');
  const [swapCourse, setSwapCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., make an API call to swap the courses
    console.log('Swapping', enrolledCourse, 'with', swapCourse);
  };

  return (
    <div>
      <User_nav />
      <div className='swap-container'>
        
        <SearchForm/>
        <form onSubmit={handleSubmit} className='swap-form'>
          <EnrolledCourse/>
          <SearchResult/>          

          <button className='swap-btn' type="submit" disabled={!enrolledCourse || !swapCourse}>
            Swap Courses
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Swap;

