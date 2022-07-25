import React from 'react';
import "./CardContainer.styles.scss";
import Card from '../Card/Card.component';
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


const CardContainer = ({heading}) => {

    const scrollRight = (e) =>{
        let scrollBtn = e.currentTarget.parentNode;
        let currPos = scrollBtn.scrollLeft;
        scrollBtn.scroll({
            left: currPos -= 1400,
            top: 0,
            behaviour: 'smooth'
        })
    }

    const scrollLeft = (e) =>{
        let scrollBtn = e.currentTarget.parentNode;
        let currPos = scrollBtn.scrollLeft;
        scrollBtn.scroll({
            left: currPos += 1400,
            top: 0,
            behaviour: 'smooth'
        })
    }

    return (
        <>
            <h2 className='mainHeading'>{heading}</h2>
            <div className='card-container' >
                <div className='back' onClick={scrollRight}>
                <BiLeftArrow size={70}/>
                </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <div className='forward' onClick={scrollLeft}>
                    <BiRightArrow size={70}/>
                </div>
            </div>
        </>
    );
};

export default CardContainer;