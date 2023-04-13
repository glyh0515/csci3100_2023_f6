import React, { useState, useEffect } from 'react';
import Admin_nav from './Admin_nav';
import '../CSS/ProfilePage.css';
import { NavLink } from 'react-router-dom';
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
import { AiOutlineSolution,AiOutlineUserAdd,      // icon for sidenav
    AiOutlineHdd,AiOutlineReconciliation
     } from 'react-icons/ai';

const AdminProfilePage = () => {
  const [adminprofile, setAdminProfile] = useState({});

  const adminID = localStorage.getItem('adminID');
  useEffect(() => {
    fetch(`http://localhost:8080/admin/${adminID}`)
      .then(response => response.json())
      .then(data => setAdminProfile(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Admin_nav />
      <Box className="profile-page" sx={{ display: 'flex', margin: '1rem' }}>
        <Card className="left-column" sx={{ marginRight: '1rem', backgroundColor: '#d7cdc3', maxWidth: 400, minWidth: 350 }}>
          <CardContent>
            <Typography className='profile-header' sx={{ fontSize: 24 }} >Profile</Typography>
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
                <ListItemText className='personal-info-item' primary={`Name: ${adminprofile.Name}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Email: ${adminprofile.Email}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Admin ID: ${adminprofile.AdminID}`} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Box sx={{ display: 'grid',
                   fontSize: 24,
                   gridTemplateColumns: 'repeat(2, 1fr)',
                   width:'100%',
                   
                  }}>
            <NavLink to="/create_admin" >
              <Card className="left-column" sx={{ margin:'40px', backgroundColor: '#d7cdc3',  minWidth: 300, height:200, float: 'right' }}>
                <CardContent sx={{textAlign:'center',color:'#77320a'}}>
                  <AiOutlineUserAdd size="5em" />
                  <p>Create Admin</p>
                </CardContent>
              </Card> 
            </NavLink>
            <NavLink to="/all_user" >
              <Card className="left-column" sx={{ margin:'40px', backgroundColor: '#d7cdc3',  minWidth: 300, height:200 }}>
                <CardContent sx={{textAlign:'center',color:'#77320a'}}>
                  <AiOutlineSolution size="5em"/>
                  <p>View All Users</p>
                </CardContent>
              </Card> 
            </NavLink>
            <NavLink to="/all_course" >
              <Card className="left-column" sx={{ margin:'40px', backgroundColor: '#d7cdc3',  minWidth: 300, height:200, float: 'right'}}>
                <CardContent sx={{textAlign:'center',color:'#77320a'}}>
                  <AiOutlineHdd size="5em"/>
                  <p>View All Courses</p>
                </CardContent>
              </Card> 
                
            </NavLink>
                      
            <NavLink to="/create_course" >
              <Card className="left-column" sx={{ margin:'40px', backgroundColor: '#d7cdc3',  minWidth: 300, height:200 }}>
                <CardContent sx={{textAlign:'center',color:'#77320a'}}>
                  <AiOutlineReconciliation size="5em"/>
                  <p>Create Course Record</p>
                </CardContent>
              </Card> 
                
            </NavLink>     
        </Box>    
      </Box>
      

    </div>
  );
};

export default AdminProfilePage;

