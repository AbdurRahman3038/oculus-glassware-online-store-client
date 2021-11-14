// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0,3));
            })
    }, [setProducts])

    return (
        <div>
            <h1 className="top-training">Our Top Training </h1>
            <CardGroup className="card-container">
                {
                    products.map(product => <ProductCard key={product._id}
                        product={product}></ProductCard>)
                }
            </CardGroup>
            <div className="explore">
                <h2 className="all-course">View More Glasses </h2>
                {/* <Link to="/training"> <Button className="view-all">View All Course</Button></Link> */}
            </div>

        </div>
    );
};

export default Products;