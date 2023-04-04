import React from 'react';

function Register() {
    return (
        <form>
            <h2>Register</h2>
            <p>Please enter your email and password!</p>
            <div>
                <input type="email" placeholder="Enter the email"/>
            </div>
            <div>
                <input type="password" placeholder="Enter the password"/>
            </div>
            <div>
                <input type="password" placeholder="Confirm the password"/>
            </div>
            <button type="submit">Register</button>
            <p>Back to main page?<a href="http://localhost:3000">Click here</a>
            </p>
        </form>
    );
}

export default Register;
