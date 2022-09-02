import React from 'react';
import './Card.styles.scss';
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartDrop.context';
import { RerenderContext } from '../../contexts/Rerenders.context';


const Card = ({ id, name, discount, price, images }) => {
    const navigate = useNavigate();
    const { addItemToCart } = useContext(CartContext)
    const { update, setUpdate } = useContext(RerenderContext);

    const viewItem = () => {
        navigate(`/Shop/Product/${name}/${id}`);
        setUpdate(!update)
        window.scrollTo(0, 0)
    }

    return (
        <div className={`card-body ${id}`} >
            <img src={images} onClick={viewItem} />
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

            <div className='btn-container'>
                <Button
                    buttonType={"primary"}
                    children={"view item"}
                    onClick={viewItem}
                />
            </div>
        </div>
    );
};

export default Card;