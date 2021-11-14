import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TopBanner.css';
import img from '../../../images/banner-glass.png';


const TopBanner = () => {

    const history = useHistory();

    const handleAboutUs = () => {
        history.push('/about-us');
    }

    return (
        <div className="feature-container">
        <div className="feature-description">
            <h1 className="feature-text">
                Prepare Yourself.
            </h1>
            <p className="text-desc">
                Make yourself stronger. There Is difficult Way <br />
                in front of you.
            </p>
            <Button onClick={handleAboutUs} className="about-btn">About Us</Button>
        </div>
        <div className="feature-img">
            <img src={img} alt="" />
        </div>
    </div>
    );
};

export default TopBanner;