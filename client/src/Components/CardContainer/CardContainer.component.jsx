import React from 'react';
import "./CardContainer.styles.scss";
import Card from '../Card/Card.component';

const CardContainer = ({heading}) => {

    return (
        <>
            <h2 className='mainHeading'>{heading}</h2>
            <div className='card-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    );
};

export default CardContainer;