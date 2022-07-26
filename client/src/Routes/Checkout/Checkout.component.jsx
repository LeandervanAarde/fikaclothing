import React from 'react';
import "./Checkout.styles.scss";
import Footer from "../../Components/Footer/Footer.component"
const Checkout = () => {
    return (
        <>
            <h1 className='heading'>Checkout</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
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

            </div>

            <Footer/>
        </>
    );
};

export default Checkout;