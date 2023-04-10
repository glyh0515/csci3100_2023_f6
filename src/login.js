import React, { useState } from 'react';
import './CSS/Login_SignUp.css';
import { useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    function handlelogin(e) {
        e.preventDefault();
    // Check if email and password are valid
        const alert_msg = document.getElementById('alert_msg');
        
        if(email === "1155167890@link.cuhk.edu.hk" && password === "12345678"){     // compare the value with the sever
                setIsValid(true);   // Do something if login is successful
                navigate('/profile'); // direct to profile
        }else{
            setIsValid(false);  // Do something if login is unsuccessful
            alert_msg.style.visibility = 'visible';               
        }           
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
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
              borderRadius: '30px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            >
            <form class="center">
            <h2>Login</h2>
                
               <TextField  id="outlined-basic" label="Email" type='email' variant="outlined" placeholder='SID@link.cuhk.edu.hk' value={email}
                            pattern="1155[\d]{6}@link.cuhk.edu.hk" margin="dense" onChange={handleEmailChange} />
               <TextField  id="outlined-basic" label="Password" type='password' value={password} variant="outlined" margin="dense" onChange={handlePasswordChange} />
               <div id='alert_msg' className='alert_msg'>{isValid ? <p>Login Successful</p> : <p>incorrect username or password</p>}</div>
               <Button type="submit" onClick={handlelogin} variant="contained" endIcon={<AiOutlineSend />}
                style={{backgroundColor:'#c7b9b4', color:'black', width:'50%', height:'50px', marginTop:'10px', borderRadius:'10px', marginBottom:'10px'
                }}>
               Login
               </Button>
               <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
            </Box>
        </div>
    );
}

export default Login;
