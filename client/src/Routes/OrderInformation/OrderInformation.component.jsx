import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BackButton from '../../Components/BackButton/BackButton.component';
import Footer from '../../Components/Footer/Footer.component';
import "./OrderInformation.styles.scss"
import axios from 'axios';
import Button from '../../Components/Button/Button.component';

const OrderInformation = () => {
    const order = useParams();
    const [currOrder, setCurrOrder] = useState()
    const [user, setUser] = useState();
    const [isBusy, setIsBusy] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/singleorder/${order.orderId}`)
            .then(res => {
                let data = res.data;
                console.log(data);

            })
            .catch(err => {
                console.log(err);
            });

        axios.get(`http://localhost:5001/api/getcustomer/${order.customerId}`)
            .then(res => {
                let data = res.data;
                console.log(data);
                setUser(data)
                setIsBusy(false)
            })


            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        isBusy ?
            <></>
            :
            <>
                <div className='orderInformation'>
                    <div className='header-image'>
                        <h1>Order information</h1>
                    </div>
                    <BackButton />
                    <h3>Order: {order.orderId} </h3>
                    {/* // insert pending order here */}
                    <div className='information-container'>
                        <h4 className='Information-heading'>Customer Information</h4>
                        <p className='client-information'><strong>Name:</strong> {user.name}</p>
                        <p className='client-information'><strong>Cellphone:</strong> {user.contact.cellphone}</p>
                        <p className='client-information'><strong>Email:</strong> {user.contact.email}</p>
                        <p className='client-information'><strong>Birthday:</strong> {user.birthday}</p>
                    </div>

                    <div className='information-container'>
                        <h4 className='Information-heading'>Shipping Address</h4>
                        <p className='client-information'><strong>Street: </strong>{user.shippingAd.house +' '+user.shippingAd.road} </p>
                        {
                            user.shippingAd.complex == null|| '' ? 
                            <></>
                            : 
                            <p className='client-information'><strong>Complex: </strong> {user.shippingAd.complex}</p>
                        }
                        <p className='client-information'><strong>City: </strong> {user.shippingAd.city}</p>
                        <p className='client-information'><strong>Province: </strong> {user.shippingAd.province}</p>
                        <p className='client-information'><strong>Postal code: </strong> {user.shippingAd.postalCode}</p>
                        <p className='client-information'><strong>Country: </strong> {user.shippingAd.Country}</p>
                    </div>

                    <div className='information-container'>
                        <h4 className='Information-heading'>Order Information</h4>
                        <p className='client-information'><strong>Order Date</strong> Name</p>
                        <p className='client-information'><strong>Expected Delivery Date</strong> Name</p>
                        <p className='client-information'><strong>Status</strong> Name</p>
                    </div>

                    <div className='information-container'>
                        <h4 className='Information-heading'>Product Information</h4>
                        <p className='client-information'><strong>Name:</strong> Name</p>
                        <p className='client-information'><strong>Cellphone:</strong> Name</p>
                        <p className='client-information'><strong>Email:</strong> Name</p>
                        <p className='client-information'><strong>Birthday:</strong> Name</p>
                    </div>
                    <div className='disp-button'>
                        <Button
                            buttonType={'primary'}
                            children={"Dispatch Order"}
                        />
                    </div>

                    <Footer />
                </div>
            </>
    );
};

export default OrderInformation;