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
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    async function handlelogin(e) {
        e.preventDefault();
    // Check if email and password are valid
        setEmailError("");    
        setPasswordError("");

        if (!email) {
          setEmailError("Email is required");
        } else if (!/^1155\d{6}@link\.cuhk\.edu\.hk$/.test(email)) { 
          setEmailError("Must be SID@link.cuhk.edu.hk");
        }
        if (!password) {
          setPasswordError("Password is required");
        }
        if (!email || !password || !/^1155\d{6}@link\.cuhk\.edu\.hk$/.test(email)) {
          return;
        }
      else{
          try{
            const response = await fetch('http://localhost:8080/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email, password})
            });
            
            console.log(response);

            if (response.status === 400) {
              setIsValid(false);
              setErrorMessage("Invalid email or password");
            } else if (response.status === 200) {
              const token = response.headers.get('x-auth-token');
              setIsValid(true);
              navigate('/profile');
            } else {
              throw new Error('Something went wrong');
            }
          } catch (error) {
            console.error(error);
            setIsValid(false);
            setErrorMessage("An error occurred");
          }
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
                        width: '100%',
                        color:'#34241D'}}>
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
            <form className="center" onSubmit={handlelogin}>
                           
               <TextField 
                    size='small' color='warning'
                    id="email" name="email" label="Email" type='email' variant="outlined" placeholder='SID@link.cuhk.edu.hk' value={email}
                    pattern="1155[\d]{6}@link.cuhk.edu.hk" margin="dense" onChange={handleEmailChange} error={!!emailError} helperText={emailError} />
               <TextField size='small'  color='warning'
                            id="password" name="password" label="Password" type='password' value={password} 
                            variant="outlined" margin="dense" onChange={handlePasswordChange}  error={!!passwordError} helperText={passwordError} />
                {errorMessage && <p style={{ color: 'red', fontSize:'12px', marginTop: '10px' }}>{errorMessage}</p>}
              
               <Button className='login_button' type="submit" variant="contained" endIcon={<AiOutlineSend />}
                style={{ fontSize:'12px' , backgroundColor:'#c7b9b4', color:'black', width:'120px', height:'40px', marginTop:'10px', borderRadius:'10px', marginBottom:'10px'
                }}>
               Login
               </Button>
               <p style={{fontSize:'12px'}}>Don't have an account? <a href="/register">Register</a></p>
            </form>
            </Box>
        </div>
    );
}

export default Login;
