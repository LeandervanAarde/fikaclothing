import React, {useState, useEffect} from 'react';
import MockStock from "../../MockImages/MockStock.json";
import Card from '../../Components/Card/Card.component';
import "./StockManagement.styles.scss";
import ManagementCard from '../../Components/ManagementCard/ManagementCard.component';
import Footer from '../../Components/Footer/Footer.component';
import AddItem from '../../Components/AddItem/AddItem.component';
import Orders from '../../Components/Orders/Orders.component';
import axios from 'axios'

const StockManagement = () => {
    // const data = MockStock;
    const [data, setData] = useState()
    const [cards, setCards] = useState();

    useEffect(() =>{
        axios.get('http://localhost:5001/api/allproducts')
        .then(res =>{
            const data = res.data;
            console.log(res.data);
            setData(res.data);
            setCards(data.
                map(shoe =>(<ManagementCard key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.discount} price={shoe.price} images={shoe.images[0]} stock={shoe.availableStock.totalStock.reduce((prev, curr, index) => {return prev + curr},0)} />)))    
        })
        .catch(err =>{
            console.log(err); 
         
        })
    },[]);

    return (
        <div className='stock-management-container'>
            <br />
            <h2>Fika Inventory  management</h2>
            <h3>All inventory</h3>
            <div className='inventory-container'>
                {cards}
            </div>
            <div className='add-item-container'>
                <h3 className='prodAdd'>Add product</h3>
                <AddItem/>
                <Orders/>
            </div>
            <Footer />
        </div>
    );
};

export default StockManagement;