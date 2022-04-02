import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from './Hook';
import useCaart from './Hook2';
import Order2 from './Order2';
import Price from './Price';
import './Product.css'
import { Remov } from './Storage';

const Order = () => {
    const [pr, setp] = useProduct();
    const [cart, setcrt] = useCaart(pr)

    const de=id=>{
        const an=cart.filter(p=>p.id!==id);
        setcrt(an);
        Remov(id);
    }
    return (
        <div  className='product pe-5 pt-5 pb-5'>
             <Row xs={1} md={3} className="g-4 w-75 mx-auto">
                {
                    cart.map(p => <Order2 p={p} key={p.id} fu={de}></Order2>)
                }
            </Row>
          <div  className='dv2 shadow-lg rounded'>
          <Price cart={cart}></Price>
          </div>
        </div>
    );
};

export default Order;