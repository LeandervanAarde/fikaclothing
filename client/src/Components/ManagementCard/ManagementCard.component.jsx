import React, { useEffect, useState } from 'react';
import './ManagementCard.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';
import EditStock from '../EditStock/EditStock.component';

const ManagementCard = ({name, images, price, discount, stock, id, open }) => {
    // const productName = "Nike Airforce 1 Jordan Edition"
 
    return (
        <div className='card-body' >
            <img src={images} />
            <h6 className='product-name'>{name}</h6>
            <hr />
            <p className='management-information'>Item Price: <span className='management-content'>{price}</span></p>

            <p className='management-information'>Discount: <span className='management-content'>{discount}</span></p>

            <p className='management-information'>Total Stock: <span className='management-content'>{stock}</span></p>

            <div className='btn-container'>

                <Button
                    buttonType={"primary"}
                    children={"Edit item"}
                    id={id}
                    onClick={open}
                />

            </div>
        </div>
    );
};

export default ManagementCard;