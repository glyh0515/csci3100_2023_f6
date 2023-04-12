import React, { useState } from 'react';
import User_nav from './User_nav'; // import the User_nav component
import '../CSS/ProfilePage.css';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Chan Tai Man',
    email: 'SID@link.cuhk.edu.hk',
    sid: '123456789',
    major: 'Computer Science',
    year: '3',
  });

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
        <Card className="left-column" sx={{ marginRight: '1rem' ,backgroundColor: 'blanchedalmond', maxWidth:400,minWidth:350 }}>
          <CardContent>
            <Typography className='profile-header' >Profile</Typography>
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
            <Typography className='profile-header'>Personal Information</Typography>
            <List className="personal-info">
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Name: ${profile.name}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Email: ${profile.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Student ID: ${profile.sid}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Major: ${profile.major}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Year: ${profile.year}`} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Box className="main-content" sx={{ flex: 2 }}>
          <Typography className='header' >Enrolled Courses</Typography>
          <List className="course-list">
            {courses.map((course, index) => (
              <ListItem key={course.code} className="course-item">
                <ListItemText
                  primary={course.code}
                  secondary={course.name}
                  sx={{ marginRight: '1rem' }}
                />
                <Button
                  variant="contained"
                  color="error"
                  className='drop-course-btn'
                  onClick={() => handleDropCourse(index)}
                >
                  Drop
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
};
  
export default ProfilePage;
