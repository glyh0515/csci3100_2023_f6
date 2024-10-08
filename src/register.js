import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';
import Loading from'./component/Loading';
import Message from './component/Message';

const inputFields = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'sid', label: 'SID', type: 'text' },
  { id: 'year', label: 'Year', type: 'text' },
  { id: 'major', label: 'Major', type: 'text' },
  { id: 'password', label: 'Password', type: 'password' },
  { id: 'confirmPassword', label: 'Confirm Password', type: 'password' }
];

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    sid: '',
    year: '',
    major: '',
    password: '',
    confirmPassword: '',
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
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^1155\d{6}@link\.cuhk\.edu\.hk$/.test(formData.email)) {
      errors.email = 'Must be SID@link.cuhk.edu.hk';
    }
    if (!formData.sid.trim()) {
      errors.sid = 'SID is required';
    } else if (!/^1155\d{6}$/.test(formData.sid)) {
      errors.sid = 'SID must start with \'1155\'';
    }
    if (!formData.year.trim()) {
      errors.year = 'Year is required';
    }
    if (!formData.major.trim()) {
      errors.major = 'Major is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormData({
        ...formData,
        errors: errors
      });
    } else {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });


        if (response.status === 200) {
          setLoading(false);
          alert('Register successfully!');
          Msg("Successfully Registered","success");
          navigate('/login');
        } else {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            setLoading(false);
            alert(errorData.message);
            Msg("Fail to Register ","error");
            console.error('Error:', errorData);
          } else {
            setLoading(false);
            alert('Error: Non-JSON response');
            Msg("Fail to Register","error");
            console.error('Error: Non-JSON response');
          }
        }
      } catch (error) {
        setLoading(false);
        Msg("Fail to Register","error");
        console.error('Error:', error);
      }
    }
  };

  return (
    <div style={{ textAlign: 'left' }}>
      {loading && <Loading />}
      <Message open={open} 
            message={message} 
            severity={severity} 
            handleClose={handleClose} />
      <h3>CUSUCS</h3>
      <Box sx={{
        width: 600,
        maxHeight: 500,
        minHeight: 400,
        backgroundColor: '#d7cdc3',
        borderRadius: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      >
        <form class="center" onSubmit={handleRegister}>
          <h2>Register</h2>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>

            <Box sx={{ width: '50%', display: 'inline-block', padding: 2 }}>
              {inputFields.slice(0, 4).map((field) => (
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
            <Box sx={{ width: '50%', display: 'inline-block', padding: 2 }}>
              {inputFields.slice(4).map((field) => (
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
          </Box>
          <Button className='login_button' type="submit" variant="contained" endIcon={<AiOutlineSend />}
            style={{
              fontSize: '12px', backgroundColor: '#c7b9b4', color: 'black', width: '150px', height: '40px', borderRadius: '10px', marginBottom: '10px'
            }}
            >
            Register</Button>
          <p style={{ fontSize: '12px' }}>Back to Login page? <a href="/login">Click here</a></p>
        </form>
      </Box>
    </div>
  );
}

export default Register;
