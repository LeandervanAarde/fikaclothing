import React, {useEffect} from 'react';
import './Card.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';

const Card = () => {
    const productName = "Nike Airforce 1 Jordan Edition"
    const navigate = useNavigate();
    
    const viewItem = () =>{
        navigate(`/Product/${productName}`)
    }

    return (
        <div className='card-body' onClick={viewItem}>
            <img src={shoe1} />
            <h6 className='product-name'>{productName}</h6>
            <hr />
            <h5 className='price'>R1000</h5>
            <h5 className='discount'>R1400</h5>
            <div className='btn-container'>
                <Button
                    buttonType={"primary"}
                    children={"Add to cart"}
                />
            </div>
        </div>
    );
};

export default Card;