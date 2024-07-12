import React from 'react';
import "./DeliveryType.styles.scss"
const DeliveryType = ({heading, date, handleClick}) => {
    return (
        <div className='delivery-date' id={date} onClick={handleClick}>
            <h4 className='delivery-date-heading' id={date}>{heading}</h4>
            <p className='delivery-date-content' id={date}>{date}</p>
        </div>
    );
};

export default DeliveryType;