import React from 'react';
import "./CardContainer.styles.scss";
import Card from '../Card/Card.component';
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import MockStock from "../../MockImages/MockStock.json";

const CardContainer = ({heading}) => {
    const data = MockStock;

    const test = data.slice(-10);
  

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
                    {
                        data
                        .slice(-10)
                        .map(shoe =>(<Card id={shoe._id}  key={shoe._id} name={shoe.brand +' '+ shoe.name} discount={shoe.price} price={ + shoe.price - shoe.discount} img={shoe.images[0]}/>))
                    }
                <div className='forward' onClick={scrollLeft}>
                    <BiRightArrow size={70}/>
                </div>
            </div>
        </>
    );
};

export default CardContainer;