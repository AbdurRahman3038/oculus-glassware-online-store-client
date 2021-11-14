import React from 'react';
import './Feature.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img2.jpg';
import img2 from '../../../images/img4.jpg';
import img3 from '../../../images/img3.jpg';


const Feature = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore France</h3>
                        <p>Paris is historic place, observe the revolution infront of your eyes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Cox's Bazar Sea</h3>
                        <p>Explore the Worlds Biggest Sea Beach in the WORLD the way you want</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Khans Tea Resort</h3>
                        <p>Releax in your free time in the resort with your family to sepnd vacation </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Feature;