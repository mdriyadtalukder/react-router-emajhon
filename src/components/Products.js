import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useProduct from './Hook';
import useCaart from './Hook2';
import Price from './Price';
import Product from './Product';
import './Product.css'
import { Getstr } from './Storage';

const Products = () => {
    const [pr, setp] = useProduct();
    const [cart, setcrt] = useCaart(pr)

    const ct = p => {
        let z = [];
        const j = cart.find(pl => pl.id === p.id)
        if (!j) {
            p.quantity = 1;
            z = [...cart, p]
        }
        else {
            const ex = cart.filter(pl => pl.id !== p.id);
            j.quantity = j.quantity + 1;
            z = [...ex, j]
        }
        setcrt(z);
        Getstr(p.id);
    }
    return (
        <div className='product pe-5 pt-5 pb-5'>
            <Row xs={1} md={3} className="g-4 w-75 mx-auto">
                {
                    pr.map(p => <Product p={p} key={p.id} fuc={ct}></Product>)
                }
            </Row>
            <div className='dv2 shadow-lg rounded'>
                <Price cart={cart}></Price>
            </div>
        </div>
    );
};

export default Products;