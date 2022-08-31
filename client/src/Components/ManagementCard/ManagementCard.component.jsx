import React, { useEffect, useState } from 'react';
import './ManagementCard.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';
import EditStock from '../EditStock/EditStock.component';
import { MdOutlineDeleteForever } from "react-icons/md";

const ManagementCard = ({name, images, price, discount, stock, id, open, remove }) => {
    
    return (
        <div className='card-body' >
            <MdOutlineDeleteForever color={"red"} size={30} onClick={remove} id={id}/>
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