import React from 'react';
import "./DispatchCard.styles.scss";

const DispatchCard = ({id, name, discount, price, images }) => {
    return (
        <div className={`card-body ${id}`} >
        <img src={images} />
        <h6 className='product-name'>{name}</h6>
        <hr />
        <h5 className='price'>R {+price - discount}</h5>
        {
            + discount === 0
                ?
                <></>
                :
                <h5 className='discount'>R{+price}</h5>
        }
    </div>
    );
};

export default DispatchCard;