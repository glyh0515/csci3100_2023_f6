import React from 'react';
import Admin_nav from './Admin_nav';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const inputFields = [
    { id: 1, type: 'text', name: 'course_code', label: 'Course Code' },
    { id: 2, type: 'text', name: 'course_name', label: 'Course Name' },
    { id: 3, type: 'select', name: 'day', label: 'Day' },
    { id: 4, type: 'timeRange', name: 'time', label: 'Time Range' },
    { id: 5, type: 'text', name: 'location', label: 'Location' },
    { id: 6, type: 'text', name: 'instructor', label: 'Instructor' },
];

const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

function CreateCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    course_code: '',
    course_name: '',
    day: '',
    time: '',
    location: '',
    instructor: '',
    errors: {}
  });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const validate = () => {
  let errors = {};
  if (!formData.course_code.trim()) {
    errors.course_code = 'Course Code is required';
  }
  if (!formData.course_name.trim()) {
    errors.course_name = 'Course Name is required';
  }
  if (!formData.day.trim()) {
    errors.day = 'Day is required';
  }
  if (!formData.time.trim()) {
    errors.time = 'Time is required';
  }
  if (!formData.location.trim()) {
    errors.location = 'Location is required';
  }
  if (!formData.instructor.trim()) {
    errors.instructor = 'Instructor is required';
  }
  return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validate();
  if (Object.keys(errors).length === 0) {
    //perform create course
    console.log('perform create course');
  } else {
    setFormData({
      ...formData,
      errors: errors
    });
  }
};

const handleTimeChange = (name, value) => {
  setFormData({
    ...formData,
    [name]: value
  });
};

  return (
    <div>
    <Admin_nav />
        <form onSubmit={handleSubmit}>
          <h1>Create Course</h1>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              {inputField.type === 'select' ? (
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor={inputField.name}>{inputField.label}</InputLabel>
                  <Select
                    label={inputField.label}
                    name={inputField.name}
                    onChange={handleChange}
                    value={formData[inputField.name]}
                  >
                    {inputField.options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : inputField.type === 'timeRange' ? (
                <>
                <TimePicker
                  label="From"
                  value={formData['fromTime']}
                  onChange={(time) => handleTimeChange('fromTime', time)}
                  inputFormat="HH:mm"
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="To"
                  value={formData['toTime']}
                  onChange={(time) => handleTimeChange('toTime', time)}
                  inputFormat="HH:mm"
                  renderInput={(params) => <TextField {...params} />}
                />
                </>
              ) : (
              <TextField
                fullWidth
                label={inputField.label}
                margin="normal"
                name={inputField.name}
                onChange={handleChange}
                type={inputField.type}
                value={formData[inputField.name]}
                variant="outlined"
              />
              )}
              {formData.errors[inputField.name] && (
                <div className="error">{formData.errors[inputField.name]}</div>
              )}
            </div>
          ))}
          <Button type="submit" onClick={handleSubmit} 
             variant="contained" endIcon={<AiOutlineSend />} 
            style={{ fontSize:'12px' , backgroundColor:'#c7b9b4', color:'black', width:'150px', height:'40px', borderRadius:'10px', marginBottom:'10px'
          }}
          >Submit</Button>
        </form>
    </div>
  );
}

export default CreateCourse;
