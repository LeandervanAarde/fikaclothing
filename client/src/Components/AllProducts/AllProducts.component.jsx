import React from 'react';
import "./AllProducts.styles.scss";
import DropDownFilter from '../DropDownFilter/DropDownFilter.component';
import Card from '../Card/Card.component';
import MockStock from "../../MockImages/MockStock.json";

const AllProducts = () => {
   const data = MockStock;

    return (
        <div className='all-products-container'>
            <div className='drop-container'>
                <DropDownFilter/>
            </div>

            <div className='products-container'>
                {data.map(shoe =>(<Card key={shoe._id} name={shoe.brand +' '+ shoe.name} discount={shoe.price} price={ + shoe.price - shoe.discount} img={shoe.images[0]}/>))
}
            </div>



        </div>
    );
};

export default AllProducts;