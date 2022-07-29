import React from 'react';
import Footer from '../../Components/Footer/Footer.component';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.component';
import "./Payment.styles.scss";

const Payment = () => {
    return (
        <div>
            <h2>Shipping and payment</h2>
            <div className='left'>
                <PaymentForm/>
            </div>
            <div className='right'></div>

            <Footer/>
        </div>
    );
};

export default Payment;