import React, {useEffect} from 'react';
import './Card.styles.scss';
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartDrop.context';


const Card = ({id,name, discount, price, images}) => {
    // const productName = "Nike Airforce 1 Jordan Edition"

    const navigate = useNavigate();
    const {addItemToCart} = useContext(CartContext)
    // const addProduct = () => addItemToCart({id,name, discount, price, images})
    const viewItem = () =>{
        navigate(`/Shop/Product/${name}/${id}`);
        window.scrollTo(0, 0)
    }



    return (
        <div className={`card-body ${id}`} >
            <img src={images} onClick={viewItem}/>
            <h6 className='product-name'>{name}</h6>
            <hr />
            <h5 className='price'>R {price}</h5>
            <h5 className='discount'>R {discount}</h5>
            <div className='btn-container'>
                <Button
                    buttonType={"primary"}
                    children={"Add to cart"}
                    // onClick={addProduct}
                />
            </div>
        </div>
    );
};

export default Card;