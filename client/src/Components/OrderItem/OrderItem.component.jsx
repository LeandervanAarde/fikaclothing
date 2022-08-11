import React from 'react';
import Button from '../Button/Button.component';
import './OrderItem.styles.scss';
import { useNavigate } from 'react-router';
const OrderItem = ({_id,orderDate, orderStatus, products, customerId}) => {
    const navigate = useNavigate();
    // _id = "12j376LMp8"
    // // name = "Leander"
    // // email = "Leander.vaonline@gmail.com"
    // orderDate = "27 July 2022"
    // orderStatus = "Dispatched"
    // products = 20

    // const addProduct = () => addItemToCart({id,name, discount, price, images})
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