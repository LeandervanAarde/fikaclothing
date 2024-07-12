import React from 'react';
import "./SearchItem.styles.scss";
import { useNavigate } from 'react-router';

const SearchItem = ({ id, image, name, price }) => {
    const navigate = useNavigate();

    const viewItem = () => {
        navigate(`/Shop/Product/${name}/${id}`)

    }

    return (
        <div className={`search-item ${id}`} onClick={viewItem}>
            <div className='image-con'>
                <img src={image} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    );
};

export default SearchItem;