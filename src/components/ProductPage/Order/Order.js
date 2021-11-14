import './Order.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Order = () => {

    const { user } = useAuth();
    const { packageId } = useParams();
    const [details, setDetails] = useState([]);
    const { register, handleSubmit, reset, } = useForm();
    console.log(packageId);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {

                const matchedDetail = data.find((details) => details._id === packageId);
                console.log(matchedDetail);
                if (matchedDetail) {
                    setDetails(matchedDetail);
                }
            });

    }, [packageId])

    const onSubmit = data => {
        const newData = { status: 'pending' };
        Object.assign(data, newData);

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Booking is submitted successfully');
                    reset();
                }
            })
    }

    return (
        <div className="booking-container">
            <div>
                <h3 className="text-center my-4 top-title">Service details of "{details.name}" </h3>
                <Card className="details-card">
                    <Card.Img variant="top" className="img-style" src={details.imgUrl} />
                    <Card.Body>
                        <Card.Title>{details.name}</Card.Title>
                        <Card.Text>
                            {details.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6>Submit the form to book this Package</h6>
                    </Card.Footer>
                </Card>
            </div>
            <div>
                <h3 className="text-center my-4 top-title">Submit Your Booking Details of {details.title}</h3>

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control mb-3" required defaultValue={user.displayName} {...register("name")} />

                    <input className="form-control mb-3" required defaultValue={user.email} {...register("email")} />
                    <input className="form-control mb-3" required placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input className="form-control mb-3" required placeholder="Address" defaultValue="" {...register("address")} />

                    <input className="form-control mb-3" required placeholder="Your Special Requiremts" defaultValue="" {...register("requirements")} />

                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default Order;