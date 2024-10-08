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

const All_user = () => { 
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/all-user')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error(error));
      setLoading(false);
  }, []);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Msg = (message,status) => {         // call message
    setMessage(message);                    // Example: Message("Success to registered","success")
    setSeverity(status);                   // Example: Message("Fail to login","error")
    setOpen(true);
  };

  const handleDeleteStudent = async (studentIndex, studentID) => {
    const confirmed = window.confirm('Confirm Delete ?The Delete Action cannot be reversed');
    if (confirmed) { 
      setLoading(true);
      try {
        await fetch(`http://localhost:8080/user/${studentID}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ index: studentIndex })
        });
        
        setStudents(students.filter((_, index) => index !== studentIndex));
        setLoading(false);
        Msg("Successfully Delete Student","success");
        console.log('Delete', studentIndex);
      } catch (error) {
        setLoading(false);
        Msg("Fail to Delete Student","error");
        console.error(error);
      }
    }  
  };

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/all-admin')
      .then(response => response.json())
      .then(data => setAdmins(data))
      .catch(error => console.error(error));
      setLoading(false);
  }, []);

  const handleDeleteAdmin = async (adminIndex, adminID) => {
    const confirmed = window.confirm('Confirm Delete ?The Delete Action cannot be reversed');
    if (confirmed) { 
      setLoading(true);
      try {
        await fetch(`http://localhost:8080/admin/${adminID}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ index: adminIndex })
        });
        
        setAdmins(admins.filter((_, index) => index !== adminIndex));
        setLoading(false);
        Msg("Successfully Delete Admin","success");
        console.log('Delete', adminIndex);
      } catch (error) {
        setLoading(false);
        Msg("Fail to Delete Admin","error");
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Message open={open} message={message} severity={severity} handleClose={handleClose} />
      {loading && <Loading />}
      <Box className="main-content" sx={{ width:'100%',padding:'20px' }}>
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
                className='drop-course-btn'
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
                className='drop-course-btn'
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
