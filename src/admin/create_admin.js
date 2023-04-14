import React, {useState} from 'react';
import Admin_nav from './Admin_nav';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Loading from'../component/Loading';
import { useNavigate } from 'react-router-dom';
import '../CSS/CreateCourse.css';

const inputfields = [
    { id: 'adminID', label: 'Admin ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirm_password', label: 'Confirm Password', type: 'password' }
];

function CreateAdmin() {
    const [loading, setLoading] = useState(false);
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
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
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
                setLoading(true);
                const response = await fetch('http://localhost:8080/admin/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.status === 200) {
                    alert('Admin created successfully');
                    setLoading(false);
                    navigate('/create_admin');
                } else {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        const errorData = await response.json();
                        alert(errorData.message);
                        setLoading(false);
                        console.error('Error:', errorData);
                    } else {
                        setLoading(false);
                        alert('Error: Non-JSON response');
                        console.error('Error: Non-JSON response');
                    }
                }
            } catch (error) {
                setLoading(false);
                console.error('Error:', error);
            }
        }
    }
    return (
        <div > 
            {loading && <Loading />}
            <Admin_nav />
            <Box sx={{
                width: 400,
                maxHeight: 800,
                minHeight: 400,
                backgroundColor: '#d7cdc3',
                borderRadius: '20px',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            >
                <form onSubmit={handleCreate} className='create-course-form'>
                    <h2>CREATE ADMIN</h2>
                    <Box sx={{ width: '100%', display: 'inline-block', padding: 2 }}>
                    {inputfields.map((inputfield) => (
                        <TextField
                            key={inputfield.id}
                            id={inputfield.id}
                            name={inputfield.id}
                            label={inputfield.label}
                            type={inputfield.type}
                            color='warning'
                            size='small'
                            variant="outlined"
                            margin="dense"
                            value={formData[inputfield.id]}
                            onChange={handleChange}
                            error={formData.errors[inputfield.id] ? true : false}
                            helperText={formData.errors[inputfield.id]}
                            sx={{ width: '100%' }}
                        />
                    ))}
                    </Box>
                    <button type="submit" className='create-course-btn'>Create Admin</button>
                </form>
            </Box>
        </div>
    );
}

export default CreateAdmin;
