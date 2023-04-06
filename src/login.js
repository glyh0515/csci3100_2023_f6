import React from 'react';
import './CSS/Login_SignUp.css';
import { useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
              width: 300,
              height: 300,
              backgroundColor: 'primary.main',
            }}
            />
            <form>
            <h2>Login</h2>
               <div style={{height:'10px'}}></div>
               <TextField  id="outlined-basic" label="Email" variant="outlined" />
               <div style={{height:'10px'}}></div>
               <TextField  id="outlined-basic" label="Password" variant="outlined" />
               <button type="submit" onClick={handlelogin}>Login</button>
               <p>Don't have an account?<a href="/register">Click here</a>
               </p>
            </form>
        </div>
    );
}

export default Login;
