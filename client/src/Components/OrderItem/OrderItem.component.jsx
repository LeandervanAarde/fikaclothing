import React from 'react';
import Button from '../Button/Button.component';
import './OrderItem.styles.scss';
const OrderItem = ({ id, name, email, date, status, products }) => {
    id = "12j376LMp8"
    name = "Leander"
    email = "Leander.vaonline@gmail.com"
    date = "27 July 2022"
    status = "Dispatched"
    products = 20

    return (
        <div className='orderItem'>
            <div className='order-information'>
                <span className='id'>{id}</span>
                <span className='name'>{name}</span>
                <span className='mail'>{email}</span>
                <span className='date'>{date}</span>
                <span className='status'>{status}</span>
                <span className='products'>{products}</span>
                <div className='viewButton'>
                    <Button
                    buttonType={'secondary'}
                    children={'View'}/>
                </div>
                <div className='dispatchButton'>
                    <Button
                    buttonType={'primary'}
                    children={'Dispatch'}/>
                </div>
            </div>
          
        </div>
    );
};

export default OrderItem;