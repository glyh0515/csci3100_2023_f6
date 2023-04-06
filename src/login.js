import React from 'react';
import './CSS/Login_SignUp.css';
import { useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handlelogin = () => {
        //perform login logic here

        navigate('/profile');
    }

    return (
        <div style={{backgroundColor:'#C7B9B4', textAlign:'left'}}>                    
            <form>
            <h2>Login</h2>
            <p>Please enter your email and password!</p>
                <div>
                    Email: <input type="email" placeholder="Enter your email"/>
                </div>
                <div>
                    Password: <input type="password" placeholder="Enter your password"/>
                </div>
                <button type="submit" onClick={handlelogin}>Login</button>
                <p>Don't have an account?<a href="/register">Click here</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
