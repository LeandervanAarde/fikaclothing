import React, {useContext} from 'react';
import Button from '../Button/Button.component';
import "./CartDropDown.styles.scss"; 
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
import CartItems from '../CartItems/CartItems.component';
const CartDropDown = () => {
    const {showCart, setShowCart, cartItems} = useContext(CartContext);
  
    const navigate = useNavigate();
    const goToCheckout = () =>{
        navigate("/Checkout")
        setShowCart(!showCart)
    }

    return (
        <div className='cart-dropdown-container'>
            <h2>CART</h2>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItems key={item.id} cartItems={item}/>))}
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