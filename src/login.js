import React from 'react';
import background from './image/login_background.jpg';

function Login() {
    return (
        <section className="vh-100" style={{ backgroundImage: `url(${background})` }}>
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '2rem' }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" className="form-control form-control-lg" />
                                        <label className="form-label">Email</label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" className="form-control form-control-lg" />
                                        <label className="form-label">Password</label>
                                    </div>
                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                </div>
                                <div>
                                    <p className="mb-0">Don't have an account? <a className="text-white-50 fw-bold" href="http://localhost:3000/register">Register</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
