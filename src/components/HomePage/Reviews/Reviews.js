import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css';

const Reviews = () => {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('https://floating-peak-58852.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            })
    }, [setReviewData])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="banner-bg pt-4 pb-5 text-center">
            <h3 className="text-white pb-3 font-weight-bold">Clients Testimonial</h3>
            <Slider {...settings}>
                {reviewData.map(function (data) {
                    return (
                        <div key={data._id} className="d-flex justify-content-center col">
                            <div className="card review-card">
                                <div className="review-card-body">
                                    <p>{data.name}</p>
                                    <p>{data.rating}</p>
                                    <div>
                                        {
                                            (data.rating === '1' ? <i class="fas fa-star"></i> : '')

                                        }
                                        {
                                            (data.rating === '2' ? <div><i class="fas fa-star"></i> <i class="fas fa-star"></i></div> : '')

                                        }
                                        {
                                            (data.rating === '3' ? <div><i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i></div> : '')

                                        }
                                        {
                                            (data.rating === '4' ? <div><i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div> : '')

                                        }
                                        {
                                            (data.rating === '5' ? <div><i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div> : '')
                                        }
                                    </div>
                                    <p>{data.feedback}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );

};

export default Reviews;