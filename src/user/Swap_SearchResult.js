import React from "react";
import "../CSS/Swap_SearchResults.css";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Swap_SearchResults({ searchResults }) {

  // Filter the courses based on the search query and filters
  const [selected, setSelected] = React.useState('none');
  
    const handleChange = (event, nextSelected) => {
      setSelected(nextSelected);
    };
  
  let openClasses = true;
  
  let waitlistClasses = true;
  
  let classDays = [
    { name: "Monday", checked: true },
    { name: "Tuesday", checked: false },
    { name: "Wednesday", checked: true },
    { name: "Thursday", checked: false },
    { name: "Friday", checked: false }
  ];
  
  let unitRanges = [
    { name: "1-3", checked: true },
    { name: "4-6", checked: false },
    { name: "7-9", checked: false }
  ];


  /*const filteredCourses = courses.filter((course) => {
    // Check if the course code or name contains the search query
    if (
      !course.code.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !course.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    // Check if the course is open or waitlisted based on filters
    if ((course.status === "Open" && !openClasses) || (course.status === "Waitlist" && !waitlistClasses)) {
      return false;
    }
    // Check if the course is held on selected days based on filters
    if (!classDays.some((day) => course.schedule.includes(day.name) && day.checked)) {
      return false;
    }
    // Check if the course is in the selected unit range based on filters
    if (!unitRanges.some((range) => course.units >= parseInt(range.name.split("-")[0]) && course.units <= parseInt(range.name.split("-")[1]) && range.checked)) {
      return false;
    }
    return true;
  });*/
    const filteredCourses = ({searchResults}) => {
        console.log("Search Results", searchResults);
    };
    //change courses to searchResults


  return (
    <div className="search-results">
      <ToggleButtonGroup
            className='list-item'
            orientation="vertical"
            value={selected}
            exclusive
            onChange={handleChange}
            >
            {searchResults.map(course => (
            <ToggleButton 
                        key={course._id}
                        value={course._id} 
                        aria-label={course._id}>
                <div className="course-code">{course.CourseID}</div>
                <div className="course-name">{course.CourseName}</div>
                <div className="venue">{course.Venue}</div>
                <div className="time">{course.Timeslot}</div>
                <div className="department">{course.Department}</div>
                <div className="instructor">{course.Instructor}</div>
                <div className="course-units">{course.Units} Units</div>
                <div className="vacancy">{course.Vacancy}</div>
            </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </div>
  );
}

export default Swap_SearchResults;
