import React from 'react';
import './Card.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
const Card = () => {
    return (
        <div className='card-body'>
            <img src={shoe1}/>

        </div>
    );
};

export default Card;