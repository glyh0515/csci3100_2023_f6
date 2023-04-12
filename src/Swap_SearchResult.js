import React from "react";
import "./CSS/Swap_SearchResults.css";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Swap_SearchResults(/*{ courses ,searchQuery,openClasses, waitlistClasses, classDays, unitRanges }*/) {
  // Filter the courses based on the search query and filters
  const [view, setView] = React.useState('none');
  
    const handleChange = (event, nextView) => {
      setView(nextView);
    };
  let courses = [
    {
      id: 1,
      code: "MATH101",
      name: "Calculus I",
      venue: "Room 101",
      department: "Mathematics",
      instructor: "John Doe",
      units: 4,
      status: "Open",
      vacancy: 10,
      schedule: ["Monday", "Wednesday", "Friday"]
    },
    {
      id: 2,
      code: "PHYS101",
      name: "Physics I",
      venue: "Room 201",
      department: "Physics",
      instructor: "Jane Doe",
      units: 4,
      status: "Waitlist",
      vacancy: 5,
      schedule: ["Tuesday", "Thursday"]
    },
    {
      id: 3,
      code: "ENGL101",
      name: "English Composition",
      venue: "Room 301",
      department: "English",
      instructor: "James Smith",
      units: 3,
      status: "Open",
      vacancy: 20,
      schedule: ["Monday", "Wednesday"]
    }
  ];
  
  let searchQuery = "math";
  
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

  return (
    <div className="search-results">
      <p className="title">Search Results:</p>
      <ToggleButtonGroup
            className='list-item'
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
            >
            {courses.map(course => (
            <ToggleButton 
                        key={course.id} 
                        value={course.id} 
                        aria-label={course.id}>
                <div className="course-code">{course.code}</div>
                <div className="course-name">{course.name}</div>
                <div className="venue">{course.venue}</div>
                <div className="department">{course.department}</div>
                <div className="instructor">{course.instructor}</div>
                <div className="course-units">{course.units} Units</div>
                <div className="course-status">{course.status}</div>            
                <div className="vacancy">{course.vacancy}</div>
            </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </div>
  );
}

export default Swap_SearchResults;