import React, { useState } from 'react';
import CourseTable from './CourseTable';
import Admin_nav from './Admin_nav';
import '../CSS/Search_form.css';
import {AiOutlineSearch} from 'react-icons/ai';
import TextField from '@mui/material/TextField';

const All_Course = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <Admin_nav />
      <form id="admin_search" className="admin-search" action="">         
            Search:
            <div className="admin-searchbar">
            <TextField                   
                id="admin_search_text" 
                color='warning'
                size="small"
                className="admin-SearchText"
                type="text"            
                label="Course Code / Course Name"
                name="search" 
                value={searchValue}
                onChange={handleSearchValueChange}
              />
            <button type="submit" className="admin-search-button">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      <div style={{width:'100%',marginTop:'125px'}} >            
        <CourseTable />
      </div>      
      
    </div>
  );
};

export default All_Course;

