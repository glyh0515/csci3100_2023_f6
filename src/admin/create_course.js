import React, {useState} from 'react';
import Admin_nav from './Admin_nav';
import '../CSS/CreateCourse.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Loading from'../component/Loading';
import Message from '../component/Message';

const inputFields = [
  { id: 'courseID', label: 'Course ID', type: 'text' },
  { id: 'courseName', label: 'Course Name', type: 'text' },
  { id: 'timeslot', label: 'Time', type: 'text' },
  { id: 'venue', label: 'Venue', type: 'text' },
  { id: 'instructor', label: 'Instructor', type: 'text' },
  { id: 'department', label: 'Department', type: 'text' },
  { id: 'units', label: 'Units', type: 'text' },
  { id: 'vacancy', label: 'Vacancy', type: 'text' }
];

function Create_Course() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [formData, setFormData] = React.useState({
    courseID: '',
    courseName: '',
    timeslot: '',
    venue: '',
    instructor: '',
    department: '',
    units: '',
    vacancy: '',
    errors: {}
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Msg = (message,status) => {         // call message
    setMessage(message);                    
    setSeverity(status);                   
    setOpen(true);
  };

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
    if (!formData.courseName.trim()) {
      errors.courseName = 'Course name is required';
    }
    if (!formData.timeslot.trim()) {
      errors.timeslot = 'Timeslot is required';
    }
    if (!formData.venue.trim()) {
      errors.venue = 'Venue is required';
    }
    if (!formData.instructor.trim()) {
      errors.instructor = 'Instructor is required';
    } 
    if (!formData.department.trim()) {
      errors.department = 'Department is required';
    }
    if (!formData.units.trim()) {
      errors.units = 'Units is required';
    }
    if (!formData.vacancy.trim()) {
      errors.vacancy = 'Vacancy is required';
    }
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormData({
        ...formData,
        errors: errors
      });
    } else {
        try {
          setLoading(true);
            const response = await fetch('http://localhost:8080/course/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                setLoading(false);
                alert(result.message);
                Msg("Successfully Create course","success");
                navigate('/admin_profile');
            } else {
                const result = await response.json();
                setLoading(false);
                Msg("Fail to Create Course","error");
                alert(result.message);
            }
        } catch (error) {
            console.log('Error:', error);
            setLoading(false);
            Msg("Fail to Create Course","error");
            alert('Error register the course');
        }
    }
  };

  return (
    <div >
      <Message open={open} 
            message={message} 
            severity={severity} 
            handleClose={handleClose} />
      {loading && <Loading />}
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
          <h2 >Create Course</h2>
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
