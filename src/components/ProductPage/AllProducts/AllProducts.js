import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-peak-58852.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [setAllProducts])

    return (
        <div>

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