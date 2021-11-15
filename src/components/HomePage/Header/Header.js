import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/oculus-logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="header-conatainer">
            <div className="">
                <Link to="/"> <img src={img} className="header-img" alt="" /></Link>
            </div>
            <div className="navbar-container">
                <Link to="/" className="nav">Home</Link>
                <Link to="/all-products" className="nav">Products</Link>

                {
                    user.email ?
                        <><Link to="/dashboard" className="nav">Dashboard</Link>
                            <Navbar className="name"> {user.displayName} </Navbar>
                            <button className="logout" onClick={logout}>Log Out</button></> :
                        <Link to="/login" className="nav login">Login</Link>
                }

            </div>

        </div>
    );
};

export default Header;