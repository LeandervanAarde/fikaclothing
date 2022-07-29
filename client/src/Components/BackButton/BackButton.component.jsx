import React from 'react';
import "./BackButton.styles.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router';

const BackButton = () => {
    const navigate = useNavigate();

    const goToPreviousPage = () =>{
        navigate(-1)
    }

    return (
        <div className='back-button' onClick={goToPreviousPage}>
        <MdOutlineArrowBackIosNew size={20}/>
        <h4 className='back'>Back</h4>
        </div>
    );
};

export default BackButton;