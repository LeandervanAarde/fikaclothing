import React, {useContext} from 'react';
import Button from '../Button/Button.component';
import "./CartDropDown.styles.scss"; 
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
const CartDropDown = () => {

    const navigate = useNavigate();
    const goToCheckout = () =>{
        navigate("/Checkout")
    }
    const cartItems = useContext(CartContext);


    return (
        <div className='cart-dropdown-container'>
            <h2>CART</h2>
            <div className='cart-items'>

            </div>
            <Button
                buttonType={"secondary"}
                children = {"Go to checkout"}
                onClick={goToCheckout}
            />
        </div>
    );
};

export default CartDropDown;