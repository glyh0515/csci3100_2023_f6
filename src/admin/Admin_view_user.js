import React, { useState } from 'react';
import All_user from './All_user';
import Admin_nav from './Admin_nav';
import '../CSS/Search_form.css';
import {AiOutlineSearch} from 'react-icons/ai';
import TextField from '@mui/material/TextField';

const Admin_view_user = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <Admin_nav />
      <div style={{width:'100%'}} >       
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
        <All_user />
      </div>      
      
    </div>
  );
};

export default Admin_view_user;