import React from 'react';
import "./Checkout.styles.scss";
import Footer from "../../components/Footer/Footer.component"
import CartItem from '../../Components_old/CartItem/CartItem.component';
import Button from '../../Components_old/Button/Button.component';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
import { useContext } from 'react';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, total, addItemToCart, removeEntireItem } = useContext(CartContext);
    const isLoggedIn = sessionStorage.getItem('loggedIn')

    const handleClick = () => {
        isLoggedIn ? navigate("/Payment") : navigate("/signIn")
    }

    const newCart = cartItems.map(i => ({price:i.price, quantity: i.quantity, final:i.price * i.quantity }));
        console.log()
    return (
        <>
            <h1 className='heading'>Checkout</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Image</span>
                    </div>

                    <div className='header-block'>
                        <span>Item</span>
                    </div>

                    <div className='header-block'>
                        <span>Price</span>
                    </div>

                    <div className='header-block'>
                        <span>Qty</span>
                    </div>

                    <div className='header-block'>
                        <span>size</span>
                    </div>

                    <div className='header-block'>
                        <span>color</span>
                    </div>

                    <div className='header-block'>
                        <span>remove</span>
                    </div>
                </div>
                {
                    cartItems.map((cartItem, index) => (
                        <CartItem key={index} cartItems={cartItem} />
                    )
                    )
                }
                <span className='total'>Total Price (ZAR): R {cartItems.length > 0 ? newCart.map(i => i.final).reduce((prev,curr,index)=>{return prev+curr },0) : cartItems.price * cartItems.quantity} </span>
                {
                    cartItems.length === 0
                        ?
                        <p className='oops'>Oops! You forgot to add those sweet shoes! Add some and we'll get them to you! </p>
                        :
                        <Button
                            buttonType={'primary'}
                            children="Proceed to Checkout"
                            onClick = {handleClick}
                        />
                }
            </div>

            <Footer />
        </>
    );
};

export default Checkout;

