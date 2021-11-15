import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TopBanner.css';
import img from '../../../images/banner-glass.png';


const TopBanner = () => {

    const history = useHistory();

    const handleAboutUs = () => {
        history.push('/all-products');
    }

    return (
        <div className="feature-container">
            <div className="feature-description">
                <h1 className="feature-text">
                    Protect Your Eye.
                </h1>
                <p className="text-desc">
                    Make your eye safe. Your eyes define how do<br />
                    you feel and how is your day!
                </p>
                <Button onClick={handleAboutUs} className="explore-btn">Explore All</Button>
            </div>
            <div className="feature-img">
                <img className="feature-image" src={img} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;