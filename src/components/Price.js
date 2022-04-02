import React from 'react';

const Price = ({ cart }) => {

    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const p of cart) {
        quantity = quantity + p.quantity;
        price = price + p.price * p.quantity;
        shipping = shipping + p.shipping;
    }
    const tax = parseFloat((price * 10) / 100).toFixed(2);
    const grand = parseFloat(tax + price + shipping).toFixed(2);
    return (
        <div>
            <h3 className='text-center fw-bold pt-2'>Selected items: {quantity}</h3>
            <h5 className='ps-3 pt-4'>Total Price: ${price}</h5>
            <h5 className='ps-3'>Total Shipping: ${shipping}</h5>
            <h5 className='ps-3'>Tax: ${tax}</h5>
            <h4 className='text-center pt-3'>Grand Price: ${grand}</h4>
        </div>
    );
};

export default Price;