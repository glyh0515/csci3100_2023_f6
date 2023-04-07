import React from 'react';
import { useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';

function Register() {
    const navigate = useNavigate();
    
    const handleRegister = () => {
        //perform register logic here

        navigate('/profile');
    }

    return (
        <div style={{textAlign:'left'}}>
        <h3>CUSUCS</h3>
        <Box sx={{
          width: 400,
          height: 700,
          backgroundColor: '#d7cdc3',
          borderRadius: '10%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        />
        <form class="center">
            <h2>Register</h2>
            <p>Please enter your personal information!</p>
            <TextField  id="outlined-basic" label="Name" variant="outlined"  margin="dense" />
            <TextField  id="outlined-basic" label="Email" variant="outlined" margin="dense" />
            <TextField  id="outlined-basic" label="SID" variant="outlined" margin="dense" />
            <TextField  id="outlined-basic" label="Year" variant="outlined" margin="dense" />
            <TextField  id="outlined-basic" label="Major" variant="outlined" margin="dense" />
            <TextField  id="outlined-basic" label="Password" variant="outlined" margin="dense" />
            <TextField  id="outlined-basic" label="Confirm Password" variant="outlined" margin="dense" />
            <Button type="submit" onClick={handleRegister} variant="contained" endIcon={<AiOutlineSend />} 
            style={{backgroundColor:'#c7b9b4', color:'black', width:'50%', height:'50px', marginTop:'10px', borderRadius:'10px', marginBottom:'10px'
            }}>
            Register</Button>
            <p>Back to Login page? <a href="/">Click here</a></p>
        </form>
      </div>
    );
}

export default Register;
