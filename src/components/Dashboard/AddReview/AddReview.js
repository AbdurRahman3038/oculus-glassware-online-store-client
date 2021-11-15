import React, { useState } from 'react';
import './AddReview.css';
import axios from 'axios';
import img from '../../../images/review.jpg';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth();
    const [data, setData] = useState({ name: '', feedback: '', rating: '' });

    const handleOnBlur = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);

    }
    // console.log(data);

    const handleReview = (e) => {
        e.preventDefault();

        axios.post('https://floating-peak-58852.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A new package added successfully');
                    document.getElementById('ratings').reset();
                }
            })

    }

    return (
        <div className="review-container">
            <div class="container-review">
                <form id="ratings" onSubmit={handleReview}>
                    <h4 className="text-center">Please write your feedback and rate us!</h4>
                    <hr />

                    <label for="name"><b>Name</b></label>
                    <input onBlur={handleOnBlur} type="text" defaultValue={user.displayName} placeholder="Your Name" name="name" id="name" required />

                    <label for="psw"><b>Your Review</b></label>
                    <textarea onBlur={handleOnBlur} type="text" placeholder="Write Your Feedback" name="feedback" id="feedback" required />

                    <label for="rating"><b>Rating</b></label>
                    <input onBlur={handleOnBlur} type="number" max='5' min='0' placeholder="Your Rating" name="rating" id="rating" required />
                    <hr />
                    <button type="submit" class="registerbtn">Submit</button>

                </form>
            </div>

            <div className="img-container">
                <img className="register-img" src={img} alt="" />
            </div>

        </div>
    );
};

export default AddReview;