import React from 'react';

function Login() {
    return (
        <form>
           <h2>Login</h2>
           <p>Please enter your email and password!</p>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account?<a href="http://localhost:3000/register">Click here</a>
            </p>
        </form>
    );
}

export default Login;
