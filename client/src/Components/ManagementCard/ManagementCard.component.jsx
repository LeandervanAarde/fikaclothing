import React, { useEffect } from 'react';
import './ManagementCard.styles.scss';
import shoe1 from "../../Assets/leon-skibitzki-mHUk4Se7peY-unsplash.jpg";
import Button from "../Button/Button.component";
import { useNavigate } from 'react-router';

const ManagementCard = ({name, img }) => {
    // const productName = "Nike Airforce 1 Jordan Edition"


    return (
        <div className='card-body' >
            <img src={img} />
            <h6 className='product-name'>{name}</h6>
            <hr />
            <p className='management-information'>Item Price: <span className='management-content'>R100</span></p>

            <p className='management-information'>Discount: <span className='management-content'>R500</span></p>

            <p className='management-information'>Total Stock: <span className='management-content'> 25</span></p>

            <div className='btn-container'>

                <Button
                    buttonType={"primary"}
                    children={"Edit item"}
                />
            </div>
        </div>
    );
};

export default ManagementCard;