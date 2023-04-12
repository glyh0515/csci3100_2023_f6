import React, { useState, useEffect } from 'react';
import "./CSS/Swap_EnrolledCourse.css";
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Swap_EnrolledCourse() {
  //const [courses, setCourses] = useState([]);
  const enrolled_courses = [
    { id: 1, name: "Math 101" },
    { id: 2, name: "History 201" },
    { id: 3, name: "Biology 301" },
  ];
    const [view, setView] = React.useState('none');
  
    const handleChange = (event, nextView) => {
      setView(nextView);
    };

 /* useEffect(() => {
    fetch('/api/enrolled-courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.log(error));
  }, []);*/


  return (
    <div className='Dropdown-Container'> 
      <p className='dropdown-title'>Enrolled Courses:</p>
        <ToggleButtonGroup
            className='dropdown-list'
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
            >
            {enrolled_courses.map(enrolled_courses => (
            <ToggleButton 
                        key={enrolled_courses.id} 
                        value={enrolled_courses.id} 
                        aria-label={enrolled_courses.id}>
                {enrolled_courses.name}
            </ToggleButton>
            ))}
        </ToggleButtonGroup>

    </div>
  );
}

export default Swap_EnrolledCourse;