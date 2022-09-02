import React from 'react';
import Button from '../Button/Button.component';
import './OrderItem.styles.scss';
import { useNavigate } from 'react-router';
const OrderItem = ({_id,orderDate, orderStatus, products, customerId}) => {
    const navigate = useNavigate();
    const viewOrder = () =>{
        navigate(`/Management/Order/${_id}/${customerId}`);
        window.scrollTo(0, 0)
    }
    return (
        <div className='orderItem'>
            <div className='order-information'>
                <span className='id'>{_id}</span>
                <span className='date'>{orderDate}</span>
                <span className='status'>{orderStatus}</span>
                <span className='products'>{products}</span>
                <div className='viewButton'>
                    <Button
                    buttonType={'secondary'}
                    children={'View'}
                    onClick={viewOrder}/>
                    
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