import React from 'react';
import DeliveryOptions from '../../Components/DeliverOptions/DeliveryOptions.component';
import Footer from '../../Components/Footer/Footer.component';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.component';
import "./Payment.styles.scss";
import { MdOutlineInventory2, MdOutlineTimeToLeave } from "react-icons/md";
import DeliveryType from '../../Components/DeliveryTypes/DeliveryType.component';
import Button from '../../Components/Button/Button.component';
const Payment = () => {

    return (
        <div>
            <h2>Shipping and payment</h2>
            <div className='left'>
                <PaymentForm />
                <DeliveryOptions
                    icon={<MdOutlineTimeToLeave size={100} />}
                    option={"Delivery"}
                    content={"Have goods delivered to your door"}
                />
                <DeliveryOptions
                    icon={<MdOutlineInventory2 size={100} />}
                    option={"Collection"}
                    content={"Collect goods at pick up point"}
                />
            </div>
            <div className='right'>
                <DeliveryType
                    heading={"Same Day Delivery"}
                    date={"29 July 2022"}
                />
                <DeliveryType
                    heading={"2 Day"}
                    date={"31 July 2022"}
                />
                <DeliveryType
                    heading={"Standard Delivery"}
                    date={"02 August 2022"}
                />

                <div className='finalChekout'>
                    <Button
                        buttonType={"primary"}
                        children={"Place Order"} />
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default Payment;