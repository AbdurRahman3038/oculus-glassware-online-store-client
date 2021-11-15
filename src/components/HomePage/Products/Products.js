import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-peak-58852.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            })
    }, [setProducts])

    return (
        <div>
            <h1 className="top-sale">Our Top Sale </h1>
            <CardGroup className="card-container">
                {
                    products.map(product => <ProductCard key={product._id}
                        product={product}></ProductCard>)
                }
            </CardGroup>
            <div className="explore">
                <h2 className="text-center">View More Glasses </h2>
                <Link className="view-all" to="/all-products"> <Button className="view-all-btn">View All Glasses</Button></Link>
            </div>

        </div>
    );
};

export default Products;