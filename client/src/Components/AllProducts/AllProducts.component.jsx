import React from 'react';
import "./AllProducts.styles.scss";
import DropDownFilter from '../DropDownFilter/DropDownFilter.component';
import Card from '../Card/Card.component';

const AllProducts = () => {
    return (
        <div className='all-products-container'>
            <div className='drop-container'>
                <DropDownFilter/>
            </div>

            <div className='products-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>



        </div>
    );
};

export default AllProducts;