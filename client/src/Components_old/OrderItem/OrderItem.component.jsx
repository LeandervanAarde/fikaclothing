import React, {useContext} from 'react';
import Button from '../Button/Button.component';
import './OrderItem.styles.scss';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { RerenderContext } from '../../contexts/Rerenders.context';
const OrderItem = ({_id,orderDate, orderStatus, products, customerId}) => {
    const navigate = useNavigate();
    const viewOrder = () =>{
        navigate(`/Management/Order/${_id}/${customerId}`);
        window.scrollTo(0, 0)
    }
    const {update, setUpdate} = useContext(RerenderContext)

    const dispatchOrder =(e) =>{
        let id = e.target.id
        console.log(id)
        axios.delete(`http://localhost:5001/api/dispatchorder/${id}`)
        .then(res => {
            alert(`item has been dispatched`)
            setUpdate(prevState => !prevState)
        })
        .catch(err => {
            console.log(err);
        })
        console.log(id)
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
                    children={'Dispatch'}
                    id={_id}
                    onClick={dispatchOrder}/>
                </div>
            </div>
          
        </div>
    );
};

export default OrderItem;