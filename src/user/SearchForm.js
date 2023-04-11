import React, { useState } from "react";
import '../CSS/Search_form.css';
import {AiOutlineSearch} from 'react-icons/ai';
import TextField from '@mui/material/TextField';

function SearchForm() {
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
    { name: "4-6", checked: true },
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

  return (
  <div className="searchform">
    
    <form id="search" action="">
      <p>Search</p>
        <div style={{columnCount: 2}}>
        <TextField        
            size="small"
            className="SearchText"
            type="text" variant="outlined"
            id="outlined-basic" label="Course Code / Course Name"
            name="search" 
            value={searchValue}
            onChange={handleSearchValueChange}
          />
        <button type="submit" className="search-button">
          <AiOutlineSearch />
        </button>
      </div>
      
      <p onClick={() => toggleDropdown("ClassStatus")}>Class Status</p>      
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
      <p onClick={() => toggleDropdown("ClassDay")}>Class Day</p>      
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
      <p onClick={() => toggleDropdown("Unit")}>Units</p>
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
