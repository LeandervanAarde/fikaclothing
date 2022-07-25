import React, {useContext} from 'react';
import Button from '../Button/Button.component';
import "./CartDropDown.styles.scss"; 
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
const CartDropDown = () => {

    const navigate = useNavigate();
    const goToCheckout = () =>{
        navigate("/checkout")
    }
    const cartItems = useContext(CartContext);


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button
                buttonType={"secondary"}
                children = {"Go to checkout"}
            />
        </div>
    );
};

export default CartDropDown;