import React from 'react';
import "./CartItem.styles.scss";

const CartItem = ({ cartItems }) => {
    const { name, imageUrl, price, quantity, size, color } = cartItems;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />

            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>
                <div className='arrow'> &#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow'>&#10095;</div>
            </span>
            <span className='size'>{size}</span>
            <div className='color' style={{
                backgroundColor: `${color}`,
                borderRadius: `55px`
            }}>

            </div>
            <div className='remove-button'> &#10005;</div>
        </div>
    );
};

export default CartItem;