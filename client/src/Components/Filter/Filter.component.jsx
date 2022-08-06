import React from 'react';
import { useState } from 'react';
import "./Filter.styles.scss";
import RadioButton from '../FilterSection/RadioButtoncomponent';
import MockStock from "../../MockImages/MockStock.json";



const Filter = () => {
    const Range = [[0, " - ", 500], [500, " - ", 1000], [1500, " - ", 2000], [2000, " - ", 2500]];
    const [brand, setBrand] = useState();
    const [filter, setFilter] = useState();
    const [range, setRange] = useState();
    const data = MockStock.map(brand =>  brand.brand);
    const checkIfExists = Array.from(new Set(data));

    const handleChange = (e) => {
        setBrand(e.target.value)
        console.log(e.target.value)
       const val = MockStock.filter(brand => brand.brand === e.target.value)
    //    setFilter(val)
    }

    const handlePriceChange = (e) => {
        setRange(e.target.value)
        console.log(e.target.value)
    }

    const brands = checkIfExists.map((i, index) => (<>
        <input key={index} type={"radio"} name={`radio ${i}`} value={i} className="radio" checked={brand === i} onChange={handleChange} />
        <label key={index+1} htmlFor={i} > {i}</label>
        <br />
    </>))

    const rangeMap = Range.map((i, index) => (<>
        <input key={index} type={"radio"} name={`radio ${i}`} value={i} className="radio" checked={range == i} onChange={handlePriceChange} />
        <label key={index +1} htmlFor={i} > {i}</label>
        <br />
    </>))


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