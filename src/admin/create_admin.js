import React from 'react';
import Admin_nav from './Admin_nav';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AiOutlineSend} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

const inputfields = [
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirm_password', label: 'Confirm Password', type: 'password' }
];

function CreateAdmin() {
const navigate = useNavigate();
const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    errors: {}
});

const handleChange =(e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    });
}

const validate = () => {
    let errors = {};
    if(!formData.email.trim()){
        errors.email = 'Email is required';
    }
    if(!formData.password.trim()){
        errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    if(!formData.confirm_password.trim()){
        errors.confirm_password = 'Confirm Password is required';
    } else if (formData.password !== formData.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
    }
    return errors;
}

const handleCreate = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
        //perform create admin
        navigate('/admin_profile');
    } else {
        setFormData({
            ...formData,
            errors: errors
        });
    }
}
  return (
    <div>
      <Admin_nav />
      <form onSubmit={handleCreate}>
        <h4>CREATE ADMIN</h4>
        {inputfields.map((inputfield) => (
            <TextField
                key={inputfield.id}
                id={inputfield.id}
                label={inputfield.label}
                type={inputfield.type}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={formData[inputfield.id]}
                onChange={handleChange}
                error={formData.errors[inputfield.id] ? true : false}
                helperText={formData.errors[inputfield.id]}
            />
        ))}
        <button type="submit" endIcon={<AiOutlineSend />} variant="contained" 
            style={{ fontSize:'12px' , backgroundColor:'#c7b9b4', color:'black', width:'150px', height:'40px', borderRadius:'10px', marginBottom:'10px'
          }}
        >Create</button>
      </form>
    </div>
  );
}

export default CreateAdmin;
