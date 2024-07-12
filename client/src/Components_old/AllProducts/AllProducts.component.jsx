import React from 'react';
import "./AllProducts.styles.scss";
import DropDownFilter from '../DropDownFilter/DropDownFilter.component';
import Card from '../../components/Card/Card.component';
// import MockStock from "../../MockImages/MockStock.json";
import { useState } from 'react';
import { useEffect } from 'react';
import Filter from '../Filter/Filter.component';
import axios from 'axios';

const AllProducts = () => {
    // const data = MockStock;
    const [data, setData] = useState()
    const [cards, setCards] = useState();
    const [brands, setBrands] = useState();
    const [brand, setBrand] = useState();
    const checkIfExists = Array.from(new Set(brand));
    useEffect(() => {
        axios.get('http://localhost:5001/api/allproducts')
            .then(res => {
                const data = res.data;
                console.log(res.data)
                setData(res.data)
                setCards(data.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.discount} price={shoe.price} images={shoe.images[0]} />)))
                setBrand(data.map(shoe => shoe.brand))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const [dat, setDat] = useState(data)
    const nameSort = (e) => {
        let val = e.currentTarget.value;
        if (val === "A-Z") {
            setDat(data.sort((a, b) => (a.name > b.name ? 1 : -1)))
            setCards(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={shoe.price - shoe.discount} images={shoe.images[0]} />)))
        } else if (val === "Z-A") {
            setDat(data.sort((a, b) => (a.name > b.name ? -1 : 1)))
            setCards(data.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} images={shoe.images[0]} />)))
        } else if (val === "high-low") {
            setDat(data.sort((a, b) => (+ a.price - a.discount > + b.price - b.discount ? -1 : 1)))
            setCards(data.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={shoe.price - shoe.discount} images={shoe.images[0]} />)))
        } else if (val === "low-high") {
            setDat(data.sort((a, b) => (+ a.price - a.discount > + b.price - b.discount ? 1 : -1)))
            setCards(data.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={shoe.price - shoe.discount} images={shoe.images[0]} />)))
        }
    }

    const handleChange = (e) => {
        setCards(data
            .filter(brand => brand.brand === e.target.value)
            .map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={shoe.price - shoe.discount} images={shoe.images[0]} />)))
    }

    return (
        <>
            <Filter
                brand={checkIfExists.map((i, index) => (<>
                    <input key={index} type={"radio"} name={`radio ${i}`} value={i} className="radio" checked={brand == i} onChange={handleChange} />
                    <label key={index + 1} htmlFor={i} > {i}</label>
                    <br />
                </>))}
            />
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