import React, { useState, useEffect } from 'react';
import '../CSS/ProfilePage.css';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const CourseTable = () => { 

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/all-course')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteCourse = async (courseIndex, courseID) => {
    try {
      await fetch(`http://localhost:8080/course/${courseID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: courseIndex })
      });
      
      setCourses(courses.filter((_, index) => index !== courseIndex));
      console.log('Delete', courseIndex);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <Box className="main-content" sx={{ flex: 2 }}>
        <Typography className='header' sx={{fontSize: 24}} >Courses Database</Typography>
        <List className="course-list">
          {courses.map((course, index) => (
            <ListItem key={course.CourseID} className="course-item">
              <ListItemText
                primary={course.CourseID}
                secondary={course.CourseName}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-course-btn'
                onClick={() => handleDeleteCourse(index, course.CourseID)}
              >
                Delete
              </button>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
    
  );
};

export default CourseTable;

