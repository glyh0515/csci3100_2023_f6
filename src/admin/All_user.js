import React, { useState } from 'react';
import '../CSS/ProfilePage.css';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const All_user = () => { 

  const [students, setStudents] = useState([
    { SID: '1234', name: 'Harry' , email:'asdsadsad@asdsadasd.com' },
    { SID: '1222', name: 'fuck me', email:'asdsadsad@asdsadasd.com' },
    { SID: '1111', name: 'fuck you', email:'asdsadsad@asdsadasd.com' },
    { SID: '3333', name: 'Suck my dick', email:'asdsadsad@asdsadasd.com' },
  ]);
  
  const handleDeleteStudent = (studentIndex) => {
    setStudents(students.filter((_, index) => index !== studentIndex));
    console.log('Delete student',studentIndex);
  };

  const [admins, setAdmins] = useState([
    { ID: '4444', name: 'Admin' , email:'asdsadsad@asdsadasd.com' },
    { ID: '5555', name: 'Admin1', email:'asdsadsad@asdsadasd.com' },
    { ID: '6666', name: 'Admin2', email:'asdsadsad@asdsadasd.com' },
    { ID: '7777', name: 'Admin3', email:'asdsadsad@asdsadasd.com' },
  ]);

  const handleDeleteAdmin = (adminIndex) => {
    setAdmins(admins.filter((_, index) => index !== adminIndex));
    console.log('Delete admin',adminIndex);
  };

  return (
    <div>
      <Box className="main-content" sx={{ width:'100%' }}>
        <Typography className='header' sx={{fontSize: 24}} >Student Database</Typography>
        <List className="student-list">
          {students.map((student, index) => (
            <ListItem key={index} className="student-item">
              <ListItemText
                primary={student.SID}
                secondary={student.name}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-student-btn'
                onClick={() => handleDeleteStudent(index)}
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
                primary={admin.ID}
                secondary={admin.name}
                sx={{ marginRight: '1rem' }}
              />
              <button
                className='Delete-admin-btn'
                onClick={() => handleDeleteAdmin(index)}
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