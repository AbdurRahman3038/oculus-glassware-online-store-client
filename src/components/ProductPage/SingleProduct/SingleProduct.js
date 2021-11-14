import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = (props) => {

    const { _id, name, price, description, imgUrl } = props.product;

    return (
        <div>
            <Card>
                <Card.Img variant="top" className="card-img" src={imgUrl} />
                <Card.Body className="top-card-body">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Text className="card-text-style">Price: $ {price}</Card.Text>
                </Card.Body>

                <Card.Footer className="top-card-footer">
                    <Link to={`/order/${_id}`}><button className="buy-btn">Buy Now <i className="far fa-calendar-check"></i></button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleProduct;