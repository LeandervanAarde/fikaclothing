import React from 'react';
import { useState } from 'react';
import "./Filter.styles.scss";
import RadioButton from '../FilterSection/RadioButtoncomponent';

const Filter = () => {
    const Range = [[0, " - ", 500], [500, " - ", 1000], [1500, " - ", 2000], [2000, " - ", 2500]]
    const rangeMap = Range.map(i => (<RadioButton item={i} />))

    return (
        <div className='filter-container'>
            <h4 className='filter-heading'>Filter</h4>
            <h5 className='filterHeading'>Prices</h5>
            {rangeMap}
      
        </div>
    );
};

export default Filter;