import React from 'react';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Feature></Feature>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;