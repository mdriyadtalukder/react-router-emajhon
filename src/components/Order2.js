import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Order2 = ({ p,fu }) => {
    return (
        <Col>
            <Card className='shadow-lg rounded'>
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                    <Card.Title className='fs-6'>Name: {p.name.slice(0, 15)}</Card.Title>
                    <Card.Text>
                        <p>Price: ${p.price}</p>
                        <p>Shipping: ${p.shipping}</p>
                        <p>Seller: {p.seller}</p>
                        <h5>Quantity: {p.quantity}</h5>
                    </Card.Text>
                </Card.Body>
                <Button onClick={()=> fu(p.id)} variant="danger">Delete to cart</Button>{' '}
            </Card>
        </Col>
    );
};

export default Order2;