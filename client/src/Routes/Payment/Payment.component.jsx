import React, { useContext, useState, useEffect } from 'react';
// import DeliveryOptions from '../../Components/DeliverOptions/DeliveryOptions.component';
import Footer from '../../Components/Footer/Footer.component';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.component';
import "./Payment.styles.scss";
// import { MdOutlineInventory2, MdOutlineTimeToLeave } from "react-icons/md";
import DeliveryType from '../../Components/DeliveryTypes/DeliveryType.component';
import Button from '../../Components/Button/Button.component';
import { CartContext } from '../../contexts/CartDrop.context';
import axios from 'axios'
import { useNavigate } from 'react-router';
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
    const nextDay = current_datetime.getDate() + 1 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const twoDay = current_datetime.getDate() + 2 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const standard = current_datetime.getDate() + 4 + " " + mL[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    const hour = current_datetime.getHours();
    const { cartItems, clear } = useContext(CartContext)
    const [finalItems, setFinalItems] = useState()
    const [deliveryDate, setDeliveryDate] = useState()
    const [dataSend, setDataSend] = useState()
    const customer = sessionStorage.getItem('user')
    const navigate = useNavigate()
    const [ordered, setOrdered] = useState(false)


    useEffect(() => {
   
        const items = cartItems.map((i) => (
            {
                shoe: i._id,
                color: i.color,
                size: i.size,
                quantity: i.quantity
            }
        ))
        setFinalItems(items)
    }, [])
    console.log(hour)

    const handleClick = (e) => {
        let val = e.target.id
        console.log(val)
        setDeliveryDate(val)
        let payload = {
            customerDetails: customer,
            orderInformation: [
                {
                    products: finalItems
                }
            ]
        }
        setOrdered(true)

        setDataSend(payload)
        let test = payload.orderInformation[0].products.map((i) => i)
    }

    console.log(dataSend)
    const placeOrder = async (e) => {
        try {
            const response = await axios.post('http://localhost:5001/api/addorder', dataSend);
        } catch (e) {
            console.log(e);
        }

        try {
            const products = dataSend.orderInformation[0].products;

            // Promise.all(products).then(product => )
            const requests = [];
            const payload = [];
            for (const product of products) {
                requests.push(product.shoe);
                payload.push(product);
                // const res = await axios.patch(`http://localhost:5001/api/editquantity/${product.shoe}`, product);
            }

            await Promise.all(requests.map(async (request, i) => {
                console.log(payload)
                const response = await axios.patch(`http://localhost:5001/api/editquantity/${request}`, payload[i]);
                clear(cartItems)
               
                

            }))
    
        } catch (e) {
            console.log(e)
        }
      
    }

    const goBack = (e) =>{
        navigate("/")
    }



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
                    handleClick={handleClick}
                />
                <DeliveryType
                    heading={"2 Day"}
                    date={twoDay}
                    handleClick={handleClick}
                />
                <DeliveryType
                    heading={"Standard Delivery"}
                    date={standard}
                    handleClick={handleClick}
                />

                <div className='finalChekout'>
                    {
                        ordered ?
                        <Button
                        buttonType={"primary"}
                        children={"Place Order"}
                        onClick={placeOrder} />
                        :
                        <Button
                        buttonType={"extra"}
                        children={"Browse more"}
                        onClick={goBack} />
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Payment;