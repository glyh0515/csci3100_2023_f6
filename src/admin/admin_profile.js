import * as React from 'react';
import Admin_nav from './Admin_nav';
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

const AdminProfilePage = () => {
    const [adminprofile, setAdminProfile] = React.useState({
        name: 'Admin',
        email: 'Admin@link.cuhk.edu.hk',
        sid: '12345678'
});

    return(
    <div>
      <Admin_nav />
      <Box className="profile-page" sx={{ display: 'flex', margin: '1rem' }}>
        <Card className="left-column" sx={{ marginRight: '1rem' ,backgroundColor: '#d7cdc3', maxWidth:400,minWidth:350 }}>
          <CardContent>
            <Typography className='profile-header'  sx={{fontSize: 24}} >Profile</Typography>
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
                <ListItemText className='personal-info-item' primary={`Name: ${adminprofile.name}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Email: ${adminprofile.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Admin ID: ${adminprofile.sid}`} />
              </ListItem>
            </List>
          </CardContent>
        </Card> 
      </Box>
      
    </div>
    );
};

export default AdminProfilePage;

