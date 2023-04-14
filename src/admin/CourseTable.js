import React, { useState, useEffect } from 'react';
import '../CSS/ProfilePage.css';
import Loading from'../component/Loading';
import Message from '../component/Message';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const CourseTable = () => { 
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Msg = (message,status) => {         // call message
    setMessage(message);                    // Example: Msg("Success to registered","success")
    setSeverity(status);                   // Example: Msg("Fail to login","error")
    setOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/all-course')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
      setLoading(false);
  }, []);

  const handleDeleteCourse = async (courseIndex, courseID) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:8080/course/${courseID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: courseIndex })
      });
      
      setCourses(courses.filter((_, index) => index !== courseIndex));
      setLoading(false);
      Msg("Successfully Delete Course","success");
      console.log('Delete', courseIndex);
    } catch (error) {
      setLoading(false);
      Msg("Fail to Delete Admin","error");
      console.error(error);
    }
  };
  
  return (
    <div>
      <Message open={open} message={message} severity={severity} handleClose={handleClose} />
      {loading && <Loading />}
      <Box className="main-content" sx={{ width:'100%' ,padding:'20px'}}>
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
                className='drop-course-btn'
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

