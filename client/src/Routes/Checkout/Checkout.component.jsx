import React from 'react';
import "./Checkout.styles.scss";
import Footer from "../../Components/Footer/Footer.component"
import CartItem from '../../Components/CartItem/CartItem.component';
import Button from '../../Components/Button/Button.component';
import { useNavigate } from 'react-router';
const Checkout = () => {
    const navigate = useNavigate();

    const goToPayment = () => {
        navigate("/Payment")
    }

    const cartItems = [
        {
            image: 'https://i.ibb.co/ZYW3VTp/brown-brim.png,',
            name: "Brim hat",
            price: 200,
            quantity: 2,
            size: "M",
            color: "Brown"
        },
        {
            image: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
            name: "Brim hat",
            price: 900,
            quantity: 1,
            size: "L",
            color: "wheat"
        },
        {
            image: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            name: "Tree Cap",
            price: 1400,
            quantity: 4,
            size: "S",
            color: "lightblue"
        },

    ]

    const total = cartItems.map((total) => total.price * total.quantity);

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
                <span className='total'>Total Price (ZAR): R {total.reduce((addition, total) => addition + total, 0)} </span>
                <Button
                    buttonType={'primary'}
                    children="Proceed to Checkout"
                    onClick = {goToPayment}
                />
            </div>

            <Footer />
        </>
    );
};

export default Checkout;