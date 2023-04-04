import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@material-ui/core';

// Define custom styles
const useStyles = makeStyles((theme) => ({
  profileContainer: {
    padding: theme.spacing(3),
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  userInfo: {
    textAlign: 'left',
  },
  enrolledCourses: {
    marginTop: theme.spacing(2),
  },
}));

// Define the Profile component
const Profile = () => {
  const classes = useStyles();

  // Replace with your dynamic data
  const userData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  const enrolledCourses = [
    { courseCode: 'CSCI 3100', courseName: 'Software Engineering' },
    { courseCode: 'MATH201', courseName: 'Calculus I' },
    // Add more courses as needed
  ];

  return (
    <Paper className={classes.profileContainer} elevation={3}>
      <Grid container spacing={3}>
        {/* Personal Information */}
        <Grid item xs={12} sm={4} className={classes.personalInfo}>
          <Typography variant="h6" component="h3">Profile</Typography>
          <Avatar className={classes.avatar} src={userData.avatarUrl} alt={userData.name} />
          <div className={classes.userInfo}>
          <Typography variant="h5" component="h2">{userData.name}</Typography>
          <Typography variant="subtitle2">{userData.email}</Typography>
          <Typography variant="subtitle2">SID: 123456789</Typography>
          <Typography variant="subtitle2">Major: Computer Science</Typography>
          <Typography variant="subtitle2">Year: 2</Typography>
          </div>
        </Grid>
        {/* Enrolled Courses */}
        <Grid item xs={12} sm={8} className={classes.enrolledCourses}>
          <Typography variant="h6" component="h3">Enrolled Courses</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course Code</TableCell>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {enrolledCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.courseCode}</TableCell>
                    <TableCell>{course.courseName}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="secondary">
                        Drop
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
