import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import BackButton from '../../Components/BackButton/BackButton.component';
import Footer from '../../Components/Footer/Footer.component';
import "./OrderInformation.styles.scss"
import axios from 'axios';
import Button from '../../Components/Button/Button.component';
import { useNavigate } from 'react-router';
import { RerenderContext } from '../../contexts/Rerenders.context';
import DispatchCard from "../../Components/DispatchCard/DispatchCard.component"

let Arr = [];
let extra =[];

const OrderInformation = () => {
    const order = useParams();
    const [currOrder, setCurrOrder] = useState()
    const [user, setUser] = useState();
    const [isBusy, setIsBusy] = useState(true);
    const [products, setProducts] = useState();
    const [prodInfo, setProdInfo] = useState([]);
    const [finish, setFinish] = useState(false)
    const [cards,setCards] = useState()
    const {update, setUpdate} = useContext(RerenderContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5001/api/singleorder/${order.orderId}`)
            .then(res => {
                let data = res.data;
                let order = data.orderInformation[0].products;
                setProducts(order);
                setCurrOrder({
                    orderDate: data.orderInformation[0].orderDate,
                    deliveryDate: data.orderInformation[0].deliveryDate,
                    status: data.orderInformation[0].orderStatus
                })
                setFinish(true)
                let ex = data.orderInformation[0].products;



               let tester =  ex.map(i => ({color:i.color, size: i.size, quantity: i.quantity }))
                console.log(tester)
                console.log(ex)
                order.map(i => {

                    axios.get(`http://localhost:5001/api/individualproduct/${i.shoe}`)
                        .then(res => {

                            let data2 = res.data;
                            Arr.push(data2)
                            let shoes = Arr.map(shoe => (<DispatchCard key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={+shoe.price - +shoe.discount} images={shoe.images[0]} color ={tester.map((e) => (e.color))} qty={tester.map((e,index) => (e.quantity))} size={tester.map((e) => (e.size))} /> ))
                            // console.log(Arr)
                            setProdInfo(shoes)
                        })
                })
            })
            .catch(err => {
                console.log(err);
            });




        console.log(Arr)
        console.log(extra)
   
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

    const dispatchOrder =(e) =>{
        let id = e.target.id
        console.log(id)
        axios.delete(`http://localhost:5001/api/dispatchorder/${id}`)
        .then(res => {
            alert(`item has been dispatched`)
            setUpdate(prevState => !prevState)
            navigate('/Management')
        })
        .catch(err => {
            console.log(err);
        })
        console.log(id)
    }



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
                        <p className='client-information'><strong>Street: </strong>{user.shippingAd.house + ' ' + user.shippingAd.road} </p>
                        {
                            user.shippingAd.complex == null || '' ?
                                <></>
                                :
                                <p className='client-information'><strong>Complex: </strong> {user.shippingAd.complex}</p>
                        }
                        <p className='client-information'><strong>City: </strong> {user.shippingAd.city}</p>
                        <p className='client-information'><strong>Province: </strong> {user.shippingAd.province}</p>
                        <p className='client-information'><strong>Postal code: </strong> {user.shippingAd.postalCode}</p>
                        <p className='client-information'><strong>Country: </strong> {user.shippingAd.Country}</p>
                    </div>

                        {
                            finish ? 
                            <div className='information-container'>
                            <h4 className='Information-heading'>Order Information</h4>
                            <p className='client-information'><strong>Order Date</strong> {currOrder.orderDate}</p>
                            <p className='client-information'><strong>Expected Delivery Date</strong> {currOrder.deliveryDate}</p>
                            <p className='client-information'><strong>Status </strong> {currOrder.status}</p>
                        </div>
                        : 
                        <>
                        </>
                        }

                    <div className='order-cards-container'>
                            {
                                prodInfo
                            }
                    </div>

                    <div className='disp-button'>
                        <Button
                            buttonType={'primary'}
                            children={"Dispatch Order"}
                            onClick={dispatchOrder}
                            id={order.orderId}
                        />
                    </div>

                    <Footer />
                </div>
            </>
    );
};

export default OrderInformation;