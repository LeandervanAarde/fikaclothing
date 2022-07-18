import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";

import './CartIcon.styles.scss';

export const CartIcon = () => {
    const cartCount = 0;
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};