import React from 'react';
import "./AvailableSizes.styles.scss";

const AvailableSizes = ({size}) => {
    return (
        <div className='size-container'>
            <h4 className='Size'>{size}</h4>
        </div>
    );
};

export default AvailableSizes;