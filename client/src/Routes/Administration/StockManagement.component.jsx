import React from 'react';
import MockStock from "../../MockImages/MockStock.json";
import Card from '../../Components/Card/Card.component';
import "./StockManagement.styles.scss";
import ManagementCard from '../../Components/ManagementCard/ManagementCard.component';
import Footer from '../../Components/Footer/Footer.component';

const StockManagement = () => {
    const data = MockStock;
    //    {data.map(shoe =>(<Card key={shoe._id} name={shoe.brand +' '+ shoe.name} discount={shoe.price} price={ + shoe.price - shoe.discount} img={shoe.images[0]}/>))
    return (
        <div className='stock-management-container'>
            <br />
            <h2>Fika Inventory  management</h2>
            <h3>All inventory</h3>
            <div className='inventory-container'>
                {data.map(shoe => (<ManagementCard key={shoe._id} name={shoe.brand + ' ' + shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} img={shoe.images[0]} />))}
            </div>
            <Footer />
        </div>
    );
};

export default StockManagement;