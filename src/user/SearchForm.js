import React, { useState } from "react";
import '../CSS/Search_form.css';
import {AiOutlineSearch} from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {AiOutlineCaretDown} from "react-icons/ai";
import Loading from'../component/Loading';

function SearchForm({ onSearchResults }) {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [openClasses, setOpenClasses] = useState(true);
  const [waitlistClasses, setWaitlistClasses] = useState(true);
  
  const [classDays, setClassDays] = useState([
    { name: "Mon", checked: true },
    { name: "Tue", checked: true },
    { name: "Wed", checked: true },
    { name: "Thur", checked: true },
    { name: "Fri", checked: true },
    { name: "Sat", checked: true }
  ]);
  const [unitRanges, setUnitRanges] = useState([
    { name: "1-2", checked: true },
    { name: "3-4", checked: true },
    { name: "5-6", checked: true },
  ]);
    const handleSearchValueChange = (event) => {
      setSearchValue(event.target.value);
    };

    const handleOpenClassesChange = (event) => {
      setOpenClasses(event.target.checked);
    };

    const handleWaitlistClassesChange = (event) => {
      setWaitlistClasses(event.target.checked);
    };

    const handleClassDayChange = (event) => {
      const dayName = event.target.name;
      const isChecked = event.target.checked;
      setClassDays((days) =>
        days.map((day) =>
          day.name === dayName ? { ...day, checked: isChecked } : day
        )
      );
    };

    const handleUnitRangeChange = (event) => {
      const unitRangeName = event.target.name;
      const isChecked = event.target.checked;
      setUnitRanges((ranges) =>
        ranges.map((range) =>
          range.name === unitRangeName ? { ...range, checked: isChecked } : range
        )
      );
    };

    const toggleDropdown = (dropdownId) => {
      const dropdown = document.getElementById(dropdownId);
      dropdown.style.display =
        dropdown.style.display === "none" ? "block" : "none";
        
    };
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
            const response = await axios.get('http://localhost:8080/search' , {
                params: { keyword: searchValue },
            });
            console.log("Search results:", response.data);
            setLoading(false);
            onSearchResults(response.data);
        }catch(error){
            console.error(error);
            setLoading(false);
        }
    };
    

  return (
  <div >
    {loading && <Loading />}
    <form id="search" className="searchform" action="" onSubmit={handleFormSubmit}>
      <p>Search</p>
        <div className="searchbar">
        <TextField                   
            id="SearchText" 
            color='warning'
            size="small"
            className="SearchText"
            type="text"            
            label="Course Code / Course Name"
            name="search" 
            value={searchValue}
            onChange={handleSearchValueChange}
          />
        <button type="submit" className="search-button">
          <AiOutlineSearch />
        </button>
      </div>
      <p onClick={() => toggleDropdown("ClassStatus")} style={{cursor: "pointer"}}  ><AiOutlineCaretDown/>Class Status  </p>      
      <div id="ClassStatus" className="ClassStatus">        
        <label className="option">
            <input
              type="checkbox"
              name="open"
              checked={openClasses}
              onChange={handleOpenClassesChange}
            />{" "}
            Open Classes
          </label>
          <br />
          <label className="option">
            <input
              type="checkbox"
              name="waitlist"
              checked={waitlistClasses}
              onChange={handleWaitlistClassesChange}
            />{" "}
            Waitlist Class
          </label>
      </div>
      <p onClick={() => toggleDropdown("ClassDay")} style={{cursor: "pointer"}}><AiOutlineCaretDown/>Class Day</p>      
      <div id="ClassDay" className="ClassDay">        
        {classDays.map((day) => (
          <p>
            <label className="option" key={day.name}>
              <input
                type="checkbox"
                name={day.name}
                checked={day.checked}
                onChange={handleClassDayChange}
              />{" "}
              {day.name}
            </label>
          </p>
        ))}
      </div>
      <p onClick={() => toggleDropdown("Unit")}style={{cursor: "pointer"}}><AiOutlineCaretDown/>Units</p>
      <div id="Unit" className="Unit">
        {unitRanges.map((range) => (
          <p>
            <label className="option" key={range.name}>
              <input
                type="checkbox"
                name={range.name}
                checked={range.checked}
                onChange={handleUnitRangeChange}
              />{" "}
              {range.name}
            </label>
          </p>
        ))}
      </div>
    </form>
  </div>
  );
}
export default SearchForm;
