import React from 'react';
import "./DeliveryType.styles.scss"
const DeliveryType = ({heading, date}) => {
    return (
        <div className='delivery-date'>
            <h4 className='delivery-date-heading'>{heading}</h4>
            <p className='delivery-date-content'>{date}</p>
        </div>
    );
};

export default DeliveryType;