import React, { useState, useEffect } from 'react';
import User_nav from './User_nav'; // import the User_nav component
import '../CSS/ProfilePage.css';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:8080/user/1155100001')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.log(error));
  }, []);

  const [courses, setCourses] = useState([
    { code: 'CSCI3100', name: 'Software Engineering' },
    { code: 'CS102', name: 'Data Structures' },
    { code: 'CS103', name: 'Algorithms' },
  ]);

  const handleDropCourse = (courseIndex) => {
    setCourses(courses.filter((_, index) => index !== courseIndex));
  };

    return (
    <div>
      <User_nav />
      <Box className="profile-page" sx={{ display: 'flex', margin: '1rem' }}>
        <Card className="left-column" sx={{ marginRight: '1rem' ,backgroundColor: '#d7cdc3', maxWidth:400,minWidth:350 }}>
          <CardContent>
            <Typography className='profile-header' sx={{fontSize: 24}}>Profile</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <Avatar
                className="profile-picture"
                src="https://via.placeholder.com/150"
                alt="Profile"
                sx={{ width: '150px', height: '150px' }}
              />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              
              <List className="personal-info">
                <ListItem>
                  <ListItemText className='personal-info-item' primary={`Name: ${profile.Name}`} />
                </ListItem>
                <ListItem>
                  <ListItemText className='personal-info-item' primary={`Email: ${profile.Email}`} />
                </ListItem>
                <ListItem>
                  <ListItemText className='personal-info-item' primary={`Student ID: ${profile.StudentID}`} />
                </ListItem>
                <ListItem>
                  <ListItemText className='personal-info-item' primary={`Major: ${profile.Major}`} />
                </ListItem>
                <ListItem>
                  <ListItemText className='personal-info-item' primary={`Year: ${profile.Year}`} />
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
        <Box className="main-content" sx={{ flex: 2 }}>
          <Typography className='header' sx={{fontSize: 24}} >Enrolled Courses</Typography>
          <List className="course-list">
            {courses.map((course, index) => (
              <ListItem key={course.code} className="course-item">
                <ListItemText
                  primary={course.code}
                  secondary={course.name}
                  sx={{ marginRight: '1rem' }}
                />
                <button
                  className='drop-course-btn'
                  onClick={() => handleDropCourse(index)}
                >
                  Drop
                </button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
};
  
export default ProfilePage;
