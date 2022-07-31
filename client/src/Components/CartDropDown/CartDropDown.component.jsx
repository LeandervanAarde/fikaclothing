import React, {useContext} from 'react';
import Button from '../Button/Button.component';
import "./CartDropDown.styles.scss"; 
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
import CartItems from '../CartItems/CartItems.component';
const CartDropDown = () => {
    const {showCart, setShowCart} = useContext(CartContext);

    const cartPlaceHolder = [
        {
            imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
            name: "Airforce one",
            quantity: 2,
            price: 1300
        },

        {
            imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
            name: "Airforce one",
            quantity: 2,
            price: 1300
        },
        {
            imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
            name: "Airforce one",
            quantity: 2,
            price: 1300
        },
        {
            imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
            name: "Airforce one",
            quantity: 2,
            price: 1300
        },
        {
            imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
            name: "Airforce one",
            quantity: 2,
            price: 1300
        }
    ]

    const navigate = useNavigate();
    const goToCheckout = () =>{
        navigate("/Checkout")
        setShowCart(!showCart)
    }
    const cartItems = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <h2>CART</h2>
            <div className='cart-items'>
                {
                    cartPlaceHolder.map((item) => (<CartItems key={item.id} cartItems={item}/>))
                }
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