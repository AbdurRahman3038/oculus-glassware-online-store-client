import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './MakeAdmin.css';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://floating-peak-58852.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div className="review-container">
            <div className="container">
                <h2 className="mb-4 text-center">Make An Admin</h2>
                <form onSubmit={handleAdminSubmit}>

                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleOnBlur} type="email" placeholder="Enter Email" name="email" id="email" required />

                    <button type="submit" className="registerbtn">Make Admin</button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
            <div>

            </div>
        </div>

    );
};

export default MakeAdmin;