import React, { useContext, useEffect, useState } from 'react';
import OrderItem from '../OrderItem/OrderItem.component';
import "./Orders.styles.scss";
import { RerenderContext } from '../../contexts/Rerenders.context';
import axios from 'axios';


const Orders = () => {
    const [productData, setProductData] = useState();
    const [busy, setBusy] = useState(true)
    const {update, setUpdate} = useContext(RerenderContext)



    useEffect(() => {
        axios.get('http://localhost:5001/api/allorders')
            .then(res => {
                let data = res.data;
                setProductData(res.data.map(i => <OrderItem key={i._id} _id={i._id} orderDate={i.orderInformation[0].orderDate.split("T").splice(0, 1)} orderStatus={i.orderInformation[0].orderStatus} products={i.orderInformation[0].products.length} customerId={i.customerDetails[0]}/>));
                // console.log(data);
                setBusy(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [update])

 
    return (
        busy ?
            <></>
            :
            <>
                <h2 className='checkoutheading'>ORDERS</h2>
                <div className='orders-container'>
                    <div className='orders-header'>
                        <div className='header-block'>
                            <span>Id</span>
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
                    {productData}
                </div>
            </>
    );
};

export default Orders;