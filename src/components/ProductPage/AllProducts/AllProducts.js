import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [setAllProducts])

    return (
        <div>
            <h1 className="top-training">All Glasses </h1>
            <CardGroup className="card-container">
                {
                    allProducts.map(product => <SingleProduct key={product._id}
                        product={product}></SingleProduct>)
                }
            </CardGroup>

        </div>
    );
};

export default AllProducts;