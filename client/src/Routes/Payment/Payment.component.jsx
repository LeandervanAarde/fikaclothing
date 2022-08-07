import React from 'react';
// import DeliveryOptions from '../../Components/DeliverOptions/DeliveryOptions.component';
import Footer from '../../Components/Footer/Footer.component';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.component';
import "./Payment.styles.scss";
// import { MdOutlineInventory2, MdOutlineTimeToLeave } from "react-icons/md";
import DeliveryType from '../../Components/DeliveryTypes/DeliveryType.component';
import Button from '../../Components/Button/Button.component';
// import { useState } from 'react';
// const initialValues ={
//     deliveryOptions : '',
//     deliveryDates: ''
// }
const Payment = () => {
    // const [deliveryValues, setDeliveryValues] = useState(initialValues);
    // const {deliveryOptions, deliveryDates} = deliveryValues;
    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const current_datetime = new Date()
    const sameDay = current_datetime.getDate() + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const nextDay = current_datetime.getDate()+1 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const twoDay = current_datetime.getDate()+2 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const standard = current_datetime.getDate()+4 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const hour = current_datetime.getHours();
    console.log(hour)
 
    // const handleClick = (e) =>{
    //     // const {className, innerHTML} = e.target
    //     // if(e.target.children[1].innerHTML == '') 
    // }

    return (
        <div>
            <h2>Shipping and payment</h2>
            <div className='left'>
                <PaymentForm />
                {/* <DeliveryOptions
                    icon={<MdOutlineTimeToLeave size={70} />}
                    option={"Delivery"}
                    content={"Have goods delivered to your door"}
                    handleClick={handleClick}
                />
                <DeliveryOptions
                    icon={<MdOutlineInventory2 size={70} />}
                    option={"Collection"}
                    content={"Collect goods at pick up point"}
                    onClick={handleClick}
                /> */}
            </div>
            <div className='right'>
                <DeliveryType
                    heading={"Same Day Delivery"}
                    date={hour >= 12 ? nextDay : sameDay}
                />
                <DeliveryType
                    heading={"2 Day"}
                    date={twoDay}
                />
                <DeliveryType
                    heading={"Standard Delivery"}
                    date={standard}
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