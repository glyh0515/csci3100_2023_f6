import React, { useState, useEffect } from 'react';
import '../CSS/ProfilePage.css';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const All_user = () => { 

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/all-user')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error(error));
  }, []);
  
  const handleDeleteStudent = async (studentIndex, studentID) => {
    try {
      await fetch(`http://localhost:8080/user/${studentID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: studentIndex })
      });
      
      setStudents(students.filter((_, index) => index !== studentIndex));
      console.log('Delete', studentIndex);
    } catch (error) {
      console.error(error);
    }
  };

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/all-admin')
      .then(response => response.json())
      .then(data => setAdmins(data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteAdmin = async (adminIndex, adminID) => {
    try {
      await fetch(`http://localhost:8080/admin/${adminID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: adminIndex })
      });
      
      setAdmins(admins.filter((_, index) => index !== adminIndex));
      console.log('Delete', adminIndex);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Box className="main-content" sx={{ width:'100%' }}>
        <Typography className='header' sx={{fontSize: 24}} >Student Database</Typography>
        <List className="student-list">
          {students.map((student, index) => (
            <ListItem key={index} className="student-item">
              <ListItemText
                primary={student.StudentID}
                secondary={student.Name}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-student-btn'
                onClick={() => handleDeleteStudent(index, student.StudentID)}
              >
                Delete Student
              </button>
            </ListItem>
          ))}
        </List>
        <Typography className='header' sx={{fontSize: 24}} >Admin Database</Typography>
        <List className="admin-list">
          {admins.map((admin, index) => (
            <ListItem key={index} className="admin-item">
              <ListItemText
                primary={admin.AdminID}
                secondary={admin.Name}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-admin-btn'
                onClick={() => handleDeleteAdmin(index, admin.AdminID)}
              >
                Delete Admin
              </button>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
    
  );
};

export default All_user;