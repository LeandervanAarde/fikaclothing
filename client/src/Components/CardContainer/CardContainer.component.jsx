import React, {useState, useEffect} from 'react';
import "./CardContainer.styles.scss";
import Card from '../Card/Card.component';
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from 'axios'

const CardContainer = ({heading}) => {
    const [data, setData] = useState();
    const [cards, setCards] = useState();
    const [discount, setDiscount] = useState()

    useEffect(() =>{
        axios.get('http://localhost:5001/api/allproducts')
        .then(res =>{
            const data = res.data;
            setData(data)
            setDiscount(data.discount)
            setCards(data.slice(-10).map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={shoe.price - shoe.discount} images={shoe.images[0]} />)))
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

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
                    {cards}
                <div className='forward' onClick={scrollLeft}>
                    <BiRightArrow size={70}/>
                </div>
            </div>
        </>
    );
};

export default CardContainer;