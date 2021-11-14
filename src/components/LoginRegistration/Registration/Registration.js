import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import './Registration.css';
import { Link, useHistory } from 'react-router-dom';
import img from '../../../images/registration.jpg';
import useAuth from './../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const Registration = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="main-container">

            <div className="container">

                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <h2>Register</h2>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="name"><b>Name</b></label>
                    <input onBlur={handleOnChange} type="text" placeholder="Enter Name" name="name" id="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleOnChange} type="email" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input onBlur={handleOnChange} type="password" placeholder="Enter Password" name="password" id="password" required />

                    <hr />
                    <button type="submit" className="registerbtn">Register</button>
                    <div className="signin">
                        <p className="m-0">Already have an account? <Link to="/login"><Button>Login</Button></Link></p>
                    </div>
                </form>
                }
                {isLoading && <Spinner animation="border" />}
                {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                {authError && <Alert variant="danger">{authError}</Alert>}
            </div>

            <div className="img-container">
                <img className="register-img" src={img} alt="" />
            </div>

        </div>
    );
};

export default Registration;