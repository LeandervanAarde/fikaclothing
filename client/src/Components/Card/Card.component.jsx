import React, {useEffect} from 'react';
import './Card.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';

const Card = ({id,name, discount, price, img}) => {
    // const productName = "Nike Airforce 1 Jordan Edition"
    const navigate = useNavigate();
    
    const viewItem = () =>{
        navigate(`/Shop/Product/${name}/${id}`)
    }

    return (
        <div className={`card-body ${id}`} onClick={viewItem} >
            <img src={img} />
            <h6 className='product-name'>{name}</h6>
            <hr />
            <h5 className='price'>R {price}</h5>
            <h5 className='discount'>R {discount}</h5>
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