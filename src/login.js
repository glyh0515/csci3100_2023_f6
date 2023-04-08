import React from 'react';
import './CSS/Login_SignUp.css';
import { useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';

function Login() {
    const navigate = useNavigate();

    const handlelogin = () => {
        //perform login logic here

        navigate('/profile');
    }

    return (
        <div style={{textAlign:'left'}}>                    
            <h3>
                CUSUCS
            </h3>
            <Box sx={{ 
              width: 400,
              height: 400,
              backgroundColor: '#d7cdc3',
              borderRadius: '20px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            />
            <form class="center">
            <h2>Login</h2>
               <TextField  id="outlined-basic" label="Email" variant="outlined" margin="dense" />
               <TextField  id="outlined-basic" label="Password" variant="outlined" margin="dense" />
               <Button type="submit" onClick={handlelogin} variant="contained" endIcon={<AiOutlineSend />}
                style={{backgroundColor:'#c7b9b4', color:'black', width:'50%', height:'50px', marginTop:'10px', borderRadius:'10px', marginBottom:'10px'
                }}>
               Login</Button>
               <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
}

export default Login;
