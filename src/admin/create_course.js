import React from 'react';
import Admin_nav from './Admin_nav';
import '../CSS/CreateCourse.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const inputFields = [
  { id: 'courseID', label: 'Course ID', type: 'text' },
  { id: 'name', label: 'Course Name', type: 'text' },
  { id: 'time', label: 'Time', type: 'text' },
  { id: 'venue', label: 'Venue', type: 'text' },
  { id: 'Department', label: 'Department', type: 'text' },
  { id: 'instructor', label: 'Instructor', type: 'text' },
  { id: 'vacancy', label: 'Vacancy', type: 'text' }
];

function Create_Course() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    courseID: '',
    name: '',
    time: '',
    venue: '',
    Department: '',
    instructor: '',
    vacancy: '',
    errors: {}
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
  const validate = () => {
    let errors = {};
    if (!formData.courseID.trim()) {
      errors.courseID = 'Course ID is required';
    }
    if (!formData.name.trim()) {
      errors.name = 'Course name is required';
    } 
    if (!formData.time.trim()) {
      errors.time = 'Time is required';
    } 
    if (!formData.venue.trim()) {
      errors.venue = 'Venue is required';
    }
    if (!formData.Department.trim()) {
      errors.Department = 'Department is required';
    }
    if (!formData.instructor.trim()) {
      errors.instructor = 'Instructor is required';
    } 
    if (!formData.vacancy.trim()) {
      errors.vacancy = 'Vacancy is required';
    } 
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormData({
        ...formData,
        errors: errors
      });
    } else {
      
    }
  };


  return (
  <div className='create-course-container'>
    <Admin_nav />
      <Box sx={{
        width: 400,
        maxHeight: 800,
        minHeight: 500,
        backgroundColor: '#d7cdc3',
        borderRadius: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      >
      <form onSubmit={handleSubmit} className='create-course-form'>
      <h2>Create Course</h2>
        <Box sx={{ width: '100%', display: 'inline-block', padding: 2 }}>
          {inputFields.map((field) => (
            <TextField
              color='warning'
              size='small'
              key={field.id}
              id={field.id}
              name={field.id}
              label={field.label}
              type={field.type}
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              error={formData.errors[field.id] ? true : false}
              helperText={formData.errors[field.id]}
              sx={{ width: '100%' }}
            />
          ))}
        </Box>
        <button type="submit" className='create-course-btn'>Create Course</button>
      </form>
    </Box>  
  </div>
    
  );
};

export default Create_Course;
