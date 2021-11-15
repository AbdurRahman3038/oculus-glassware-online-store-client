import React from 'react';
import './Feature.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img2.jpg';
import img2 from '../../../images/img4.jpg';
import img3 from '../../../images/img3.jpg';


const Feature = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="carsousel-text">Your Eye Matters</h3>
                        <p className="carsousel-text">You must protect your eyes from harmful activities and chemicals</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carsousel-text">Do Your Fashion</h3>
                        <p className="carsousel-text">Explore the Fashion World with the glass. Its all about how you look!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carsousel-text">Reshape Your Personality</h3>
                        <p className="carsousel-text">Your glass defines your personality and it defines your choice and test! </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Feature;