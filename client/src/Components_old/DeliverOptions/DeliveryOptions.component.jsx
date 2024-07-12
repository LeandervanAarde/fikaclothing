import React from 'react';
import "./DeliveryOptions.styles.scss";

const DeliveryOptions = ({icon, option,content,handleClick}) => {
    return (
        <div className='delivery-option' onClick={handleClick}>
            {icon}
            <h3 className='delivery-option-heading'>{option}</h3>
            <p className='delivery-content'>{content}</p>
        </div>
    );
};

export default DeliveryOptions;