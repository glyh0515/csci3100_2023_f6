import React, { useState } from 'react';
import '../CSS/ProfilePage.css';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const CourseTable = () => { 

  const [courses, setCourses] = useState([
    { code: 'CSCI3100', name: 'Software Engineering' },
    { code: 'CS102', name: 'Data Structures' },
    { code: 'CS103', name: 'Algorithms' },
    { code: 'CS106', name: 'Descrete Math' },
  ]);

  const handleDeleteCourse = (courseIndex) => {
    setCourses(courses.filter((_, index) => index !== courseIndex));
    console.log('Delete',courseIndex);
  };
  return (
    <div>
      <Box className="main-content" sx={{ flex: 2 }}>
        <Typography className='header' sx={{fontSize: 24}} >Courses Database</Typography>
        <List className="course-list">
          {courses.map((course, index) => (
            <ListItem key={course.code} className="course-item">
              <ListItemText
                primary={course.code}
                secondary={course.name}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-course-btn'
                onClick={() => handleDeleteCourse(index)}
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

