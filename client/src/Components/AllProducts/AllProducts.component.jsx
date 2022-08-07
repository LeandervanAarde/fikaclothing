import React from 'react';
import "./AllProducts.styles.scss";
import DropDownFilter from '../DropDownFilter/DropDownFilter.component';
import Card from '../Card/Card.component';
import MockStock from "../../MockImages/MockStock.json";
import { useState } from 'react';
import { useEffect } from 'react';
import Filter from '../Filter/Filter.component';
import axios from 'axios';

const AllProducts = () => {
    const data = MockStock;
    const [dat, setDat] = useState(data)
    const [cards, setCards] = useState(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)));
    const [brand, setBrand] = useState();
    const [something, setSomething] = useState()
    const nameSort = (e) => {
        let val = e.currentTarget.value;
        if (val === "A-Z") {
            setDat(data.sort((a, b) => (a.name > b.name ? 1 : -1)))
            setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)))
        } else if (val === "Z-A") {
            setDat(data.sort((a, b) => (a.name > b.name ? -1 : 1)))
            setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)))
        } else if (val === "high-low") {
            setDat(data.sort((a, b) => (+ a.price - a.discount > + b.price - b.discount ? -1 : 1)))
            setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)))
        } else if (val === "low-high") {
            setDat(data.sort((a, b) => (+ a.price - a.discount > + b.price - b.discount ? 1 : -1)))
            setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)))
        }
    }

    const handleChange = (e) => {
        setBrand(e.target.value)
        setDat(data.filter(brand => brand.brand === e.target.value))
        setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)))
        console.log(e.target.value)
    }
    axios.get('http://localhost:5001/api/allproducts')
    .then(res =>{
        const data = res;
        console.log(res)
    })
    .catch(err =>{
        console.log(err);
    })

    // useEffect(() => {
    //     const url = "http://localhost:5001/api/allproducts";
    
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         console.log(json);
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //     };
    
    //     fetchData();
    // }, []);

    return (
        <>
            <Filter
            filterfunc={handleChange}
            brand={brand}/>
            <div className='all-products-container'>

                <div className='drop-container'>
                    <DropDownFilter nameSort={nameSort} />

                </div>
                <div className='products-container'>
                    {cards}
                </div>
            </div>
        </>

    );
};

export default AllProducts;