import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.component';
import "./FeaturedBrands.styles.scss";
import axios from 'axios'

const FeaturedBrands = ({ heading, brandName }) => {
    const [data, setData] = useState();
    const [cards, setCards] = useState();

    useEffect(() =>{
        axios.get(`http://localhost:5001/api/getproducts/${brandName}`)
        .then(res =>{
            const data = res.data;
            console.log(data)
            setData(data)
            setCards(data.slice(-10).map(shoe => (<Card key={shoe._id} id={shoe._id} name={shoe.name} discount={+ shoe.discount} price={+ shoe.price } images={shoe.images[0]} />)))
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

    return (
        <>
        <h2>{heading}</h2>
        <h3>{brandName}</h3>
        <div className='products-container'>
                {cards}
        </div>
        </> 
    );
};

export default FeaturedBrands;