import React from 'react';
import "./CartItems.styles.scss";

const CartItems = ({cartItems}) => {
    const {name, images, quantity, price, discount} = cartItems;



    

    return (
        <div className='cart-item-container'>
            {/* <img src={images} alt={name}/> */}
            {
                Array.isArray(images) ?
                <div className='image-cont' style={{ backgroundImage: `url(${images[0]})`}}></div>
                :
                <div className='image-cont' style={{ backgroundImage: `url(${images})`}}></div>
            }
         
            <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span>Quantity: <strong>{quantity}</strong></span>
                    <span>ZAR: <strong>R {price -discount}</strong></span>
            </div>
        </div>
    );
};

export default CartItems;