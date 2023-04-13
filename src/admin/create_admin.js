import React from 'react';
import Admin_nav from './Admin_nav';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const inputfields = [
    { id: 'adminID', label: 'Admin ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirm_password', label: 'Confirm Password', type: 'password' }
];

function CreateAdmin() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        adminID: '',
        name: '',
        email: '',
        password: '',
        confirm_password: '',
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
        if (!formData.adminID.trim()) {
            errors.adminID = 'Admin ID is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        if (!formData.confirm_password.trim()) {
            errors.confirm_password = 'Confirm Password is required';
        } else if (formData.password !== formData.confirm_password) {
            errors.confirm_password = 'Passwords do not match';
        }
        return errors;
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormData({
                ...formData,
                errors: errors
            });
        }
        else {
            try {
                const response = await fetch('http://localhost:8080/admin/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.status === 200) {
                    alert('Admin created successfully');
                    navigate('/create_admin');
                } else {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        const errorData = await response.json();
                        alert(errorData.message);
                        console.error('Error:', errorData);
                    } else {
                        alert('Error: Non-JSON response');
                        console.error('Error: Non-JSON response');
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
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
                        name={inputfield.id}
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
                <Button type="submit" endIcon={<AiOutlineSend />} variant="contained"
                    style={{
                        fontSize: '12px', backgroundColor: '#c7b9b4', color: 'black', width: '150px', height: '40px', borderRadius: '10px', marginBottom: '10px'
                    }}
                >Create</Button>
            </form>
        </div>
    );
}

export default CreateAdmin;
