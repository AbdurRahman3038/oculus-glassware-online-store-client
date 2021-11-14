import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import img from '../../../images/login.jpg';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (

        <div className="main-container">
            <div className="container">
                <form onSubmit={handleLoginSubmit}>

                    <h1>Login</h1>
                    <p>Please fill in this form to login your account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleOnChange} type="email" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onBlur={handleOnChange} type="password" placeholder="Enter Password" name="password" id="password" required />

                    <hr />
                    <button type="submit" className="registerbtn">Login</button>
                    <div className="container signin">
                        <p>Don't have an account? <Link to="/register"><Button>Register</Button></Link></p>
                    </div>

                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert>}
                </form>

            </div>

            <div className="img-container">
                <img className="register-img" src={img} alt="" />
            </div>

        </div>

    );
};

export default Login;