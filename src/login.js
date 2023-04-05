import React from 'react';

function Login() {
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
            <button type="submit"><a href="/profile">Login</a></button>
            <p>Don't have an account?<a href="/register">Click here</a>
            </p>
        </form>
    );
}

export default Login;
