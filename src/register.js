import React from 'react';

function Register() {
    return (
        <form>
            <h2>Register</h2>
            <p>Please enter your personal information!</p>
            <div>
                Name: <input type="text" placeholder="Enter name"/>                
            </div>
            <div>
                Email: <input type="email" placeholder="Enter email"/>
            </div>
            <div>
                SID: <input type="text" placeholder="Enter SID"/>
            </div>
            <div>
                Year: <input type="number" placeholder="Enter Year"/>
            </div>
            <div>
                Major: <input type="text" placeholder="Enter Major"/>
            </div>
            <div>
                Password: <input type="password" placeholder="Enter password"/>
            </div>
            <div>
                Confirm password: <input type="password" placeholder="Confirm the password"/>
            </div>
            <button type="submit">Register</button>
            <p>Back to Login page?<a href="http://localhost:3000">Click here</a>
            </p>
        </form>
    );
}

export default Register;
