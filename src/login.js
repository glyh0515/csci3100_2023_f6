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
    const [errorMessage, setErrorMessage] = useState("");
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
            setErrorMessage("Invalid username or password."); // Set error message
   
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
            <h3 style={{ position: 'fixed',
                        top: '0',
                        width: '100%'}}>
                CUSUCS
            </h3>
            <Box sx={{ 
              width: 350,
              height: 300,
              backgroundColor: '#d7cdc3',
              borderRadius: '20px',
              position: 'fixed',
              top: '250px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            ><h2>Login</h2>
            <form className="center" action="http://localhost:8080/login" method="post">
                           
               <TextField 
                    size='small'
                    id="outlined-basic" label="Email" type='email' variant="outlined" placeholder='SID@link.cuhk.edu.hk' value={email}
                    pattern="1155[\d]{6}@link.cuhk.edu.hk" margin="dense" onChange={handleEmailChange} />
               <TextField size='small'  id="outlined-basic" label="Password" type='password' value={password} variant="outlined" margin="dense" onChange={handlePasswordChange} />
               
               <Button className='login_button' type="submit" onClick={handlelogin} variant="contained" endIcon={<AiOutlineSend />}
                style={{ fontSize:'12px' , backgroundColor:'#c7b9b4', color:'black', width:'120px', height:'40px', marginTop:'10px', borderRadius:'10px', marginBottom:'10px'
                }}>
               Login
               </Button>
               {errorMessage && <p style={{ color: 'red', fontSize:'12px' }}>{errorMessage}</p>} {/* Display error message */}
               <p style={{fontSize:'12px'}}>Don't have an account? <a href="/register">Register</a></p>
            </form>
            </Box>
        </div>
    );
}

export default Login;
