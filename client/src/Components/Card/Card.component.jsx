import React from 'react';
import './Card.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component"
const Card = () => {
    return (
        <div className='card-body'>
            <img src={shoe1} />
            <h6 className='product-name'>Nike Airforce 1 Jordan Edition</h6>
            <hr />
            <h5 className='price'>R1000</h5>
            <h5 className='discount'>R1400</h5>
            <div className='btn-container'>
                <Button
                    buttonType={"primary"}
                    type={"submit"}
                    children={"Add to cart"}
                />
            </div>
        </div>
    );
};

export default Card;