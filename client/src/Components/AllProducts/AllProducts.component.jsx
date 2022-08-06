import React from 'react';
import "./AllProducts.styles.scss";
import DropDownFilter from '../DropDownFilter/DropDownFilter.component';
import Card from '../Card/Card.component';
import MockStock from "../../MockImages/MockStock.json";
import { useState } from 'react';
import { useEffect } from 'react';

const AllProducts = () => {
    const data = MockStock;
    const [dat, setDat] = useState(data)
    const [cards, setCards] = useState(dat.map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={shoe.price} price={+ shoe.price - shoe.discount} imageUrl={shoe.images[0]} />)));

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

    return (
        <div className='all-products-container'>
            <div className='drop-container'>
                <DropDownFilter nameSort={nameSort} />
            </div>
            <div className='products-container'>
                {cards}
            </div>
        </div>
    );
};

export default AllProducts;