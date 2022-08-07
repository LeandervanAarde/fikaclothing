import React from 'react';
import "./Checkout.styles.scss";
import Footer from "../../Components/Footer/Footer.component"
import CartItem from '../../Components/CartItem/CartItem.component';
import Button from '../../Components/Button/Button.component';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartDrop.context';
import { useContext } from 'react';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, total } = useContext(CartContext);

    const goToPayment = () => {
        navigate("/Payment")
    }

    console.log(total);


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
                    ))
                }
                <span className='total'>Total Price (ZAR): R {total ? total.price * total.quantity : total} </span>
                {
                    cartItems.length === 0 ? <p className='oops'>Oops! You forgot to add those sweet shoes! Add some and we'll get them to you! </p> : <Button
                        buttonType={'primary'}
                        children="Proceed to Checkout"
                        onClick={goToPayment}
                    />
                }
            </div>

            <Footer />
        </>
    );
};

export default Checkout;