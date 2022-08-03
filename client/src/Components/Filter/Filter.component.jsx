import React from 'react';
import { useState } from 'react';
import "./Filter.styles.scss";
import RadioButton from '../FilterSection/RadioButtoncomponent';
import MockStock from "../../MockImages/MockStock.json";


const Filter = () => {
    const Range = [[0, " - ", 500], [500, " - ", 1000], [1500, " - ", 2000], [2000, " - ", 2500]]
    const rangeMap = Range.map((i, index)=> (<RadioButton key={index} item={i} />))
    const data = MockStock.map(brand => brand.brand);
    const checkIfExists = Array.from(new Set(data));
    const brands = checkIfExists.map((i, index)=> (<RadioButton key={index} item={i} />))


    console.log(checkIfExists)


    return (
        <div className='filter-container'>
            <h4 className='filter-heading'>Filter</h4>
            <h5 className='filterHeading'>Brands</h5>
                {brands}
            <h5 className='filterHeading'>Prices</h5>
            {rangeMap}
      
        </div>
    );
};

export default Filter;