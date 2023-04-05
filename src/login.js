import React from 'react';
import { useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handlelogin = () => {
        //perform login logic here

        navigate('/profile');
    }

    return (
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
    );
}

export default Login;
