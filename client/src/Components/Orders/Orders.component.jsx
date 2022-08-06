import React from 'react';
import OrderItem from '../OrderItem/OrderItem.component';
import "./Orders.styles.scss"

const Orders = () => {
    return (
        <>
            <h2 className='checkoutheading'>ORDERS</h2>
            <div className='orders-container'>
                <div className='orders-header'>
                    <div className='header-block'>
                        <span>Id</span>
                    </div>

                    <div className='header-block'>
                        <span>Name</span>
                    </div>

                    <div className='emailer'>
                        <span>Email</span>
                    </div>

                    <div className='header-block'>
                        <span>Order date</span>
                    </div>

                    <div className='header-block'>
                        <span>Status</span>
                    </div>

                    <div className='header-block'>
                        <span>products</span>
                    </div>

                </div>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </div>
        </>
    );
};

export default Orders;