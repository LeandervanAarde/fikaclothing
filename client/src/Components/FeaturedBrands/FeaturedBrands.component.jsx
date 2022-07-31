import React from 'react';
import Card from '../Card/Card.component';
import "./FeaturedBrands.styles.scss";
import MockStock from "../../MockImages/MockStock.json";

const FeaturedBrands = ({ heading, brandName }) => {
    const data = MockStock;

    return (
        <>
        <h2>{heading}</h2>
        <h3>{brandName}</h3>
        <div className='products-container'>
            {
              data
              .filter(shoe => { return shoe.brand == brandName})
              .map(shoe =>(<Card key={shoe._id} name={shoe.brand +' '+ shoe.name} discount={shoe.price} price={ + shoe.price - shoe.discount} img={shoe.images[0]} button={"Add to cart"}/>))
            }
        </div>
        </>
    );
};

export default FeaturedBrands;