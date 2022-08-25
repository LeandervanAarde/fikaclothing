import React, { useState, useEffect } from 'react';
import MockStock from "../../MockImages/MockStock.json";
import Card from '../../Components/Card/Card.component';
import "./StockManagement.styles.scss";
import ManagementCard from '../../Components/ManagementCard/ManagementCard.component';
import Footer from '../../Components/Footer/Footer.component';
import AddItem from '../../Components/AddItem/AddItem.component';
import Orders from '../../Components/Orders/Orders.component';
import axios from 'axios'
import EditStock from '../../Components/EditStock/EditStock.component';

const StockManagement = () => {
    // const data = MockStock;
    const [dat, setDat] = useState()
    const [cards, setCards] = useState();
    const [busy, setIsBusy] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [editInfo, setEditInfo] = useState();
    const [img, setImg] = useState()

    const getProductInformation = (e) => {
        let id = e.target.id
        console.log(id)
        setOpenModal(!openModal);
        axios.get(`http://localhost:5001/api/individualproduct/${id}`)
        .then(res => {
            const data = res.data;
            setIsBusy(false)
            console.log(data.name)
            setEditInfo(data)
            setImg(data.images[0])
        

        })
        .catch(err => {
            console.log(err)
        })
    } 


    useEffect(() => {
        axios.get('http://localhost:5001/api/allproducts')
            .then(res => {
                const data = res.data;
                setDat(res.data);
                setCards(data.map(shoe => (<ManagementCard key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.discount} price={shoe.price} images={shoe.images[0]} stock={shoe.availableStock.map(size => size.totalStock).reduce((prev, curr, index) => { return prev + curr }, 0)} open={getProductInformation} />)))
                setIsBusy(false)
                setEditInfo(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);






    return (
        busy
            ?
            <></>
            :
            <div className='stock-management-container'>
                <br />
                <h2>Fika Inventory  management</h2>
                <h3>All inventory</h3>
                <div className='inventory-container'>
                    {cards}
                </div>
                <div className='add-item-container'>
                    <h3 className='prodAdd'>Add product</h3>
                    <AddItem />
                    <Orders />
                </div>
                <Footer />

                {
                    openModal && <EditStock setOpen={() => {return setOpenModal(!openModal)}} brand={editInfo.brand} name={editInfo.name} img={img} price={editInfo.price} discount={editInfo.discount} desc={editInfo.description}/>
                }
            </div>
    );
};

export default StockManagement; 