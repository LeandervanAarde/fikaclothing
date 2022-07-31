import React from 'react';
import "./CartItems.styles.scss";

const CartItems = ({cartItems}) => {
    const {name, imageUrl, quantity, price} = cartItems;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span>Quantity: <strong>{quantity}</strong></span>
                    <span>ZAR: <strong>R {price}</strong></span>
            </div>
        </div>
    );
};

export default CartItems;