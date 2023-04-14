import React, { useState, useEffect } from 'react';
import "../CSS/Swap_EnrolledCourse.css";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Loading from'../component/Loading';

function Swap_EnrolledCourse() {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const studentID = localStorage.getItem('studentID');
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/user/${studentID}/course`)
    .then(response => response.json())
    .then(data => setCourses(data))
    .catch(error => console.log(error));
    setLoading(false);
  }, []);

  //const enrolled_courses = [
    //{ id: 1, name: "Math 101" },
    //{ id: 2, name: "History 201" },
    //{ id: 3, name: "Biology 301" },
  //];
    const [selected, setSelected] = React.useState('none');
  
    const handleChange = (event, nextSelected) => {
      setSelected(nextSelected);
    };

 /* useEffect(() => {
    fetch('/api/enrolled-courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.log(error));
  }, []);*/


  return (
    <div className='Dropdown-Container'> 
      {loading && <Loading />}
      <p className='dropdown-title'>Enrolled Courses:</p>
        <ToggleButtonGroup
            className='dropdown-list'
            orientation="vertical"
            value={selected}
            exclusive
            onChange={handleChange}
            >
            {courses.map((course) => (
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

export default Swap_EnrolledCourse;
