import * as React from 'react';
import Admin_nav from './Admin_nav';
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
      <Card className="left-column" sx={{ marginRight: '1rem' ,backgroundColor: 'blanchedalmond' }}>
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
                <ListItemText className='personal-info-item' primary={`Name: ${adminprofile.name}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Email: ${adminprofile.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText className='personal-info-item' primary={`Student ID: ${adminprofile.sid}`} />
              </ListItem>
            </List>
          </CardContent>
        </Card> 
    </div>
    );
};

export default AdminProfilePage;

