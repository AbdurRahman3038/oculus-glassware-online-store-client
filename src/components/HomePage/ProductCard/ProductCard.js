import './ProductCard.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const { _id, name, price, description, imgUrl } = props.product;

    return (
        <div>
            <Card className="single-card">
                <Card.Img variant="top" className="package-img-style" src={imgUrl} />

                <Card.Body className="top-card-body">
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text className="text-center">{description}</Card.Text>
                    <Card.Text className="card-text-style">Price: $ {price}</Card.Text>
                </Card.Body>

                <Card.Footer className="card-footer">
                <Link to={`/order/${_id}`}><button className="buy-btn">Buy Now <i className="far fa-calendar-check"></i></button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductCard;