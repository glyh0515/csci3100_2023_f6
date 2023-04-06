import React from 'react';
import './CSS/Login_SignUp.css';

function Login() {
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
                <button type="submit">Login</button>
                <p>Don't have an account?<a href="http://localhost:3000/register">Click here</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
