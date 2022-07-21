import React, { useEffect, useState } from 'react';
import Sliderdots from '../CarasouelDots/Sliderdots.component';
import './Slider.styles.scss'
import sliderImages from '../../MockImages/mockimages';


const Slider = () => {
    const images = sliderImages;
    const [img, setImg] = useState(0);
    const [cImg, setCImg] = useState(0);
    const shoes = images.map(i => (i.shoe));
    const heading = images.map(i => (i.title));
    const content = images.map(i => (i.content))
    const numbers = shoes.map((i, index) => (index))
    const indexSet = (number) => {
        setImg(number);
        console.log(number)
    }

    const sliderD = images.map((dot, index) => <Sliderdots key={index} setImg ={() => {indexSet(index)}} />);


    useEffect(() => {
        const timer = setTimeout(() => {
            img == shoes.length - 1 ? setImg(0) : setImg(img + 1)
        }, 4500)
    }, [img]);

    return (
        <div className='slider-container' style={{ backgroundImage: `url(${shoes[img]})` }}>
            <div className='overlay'>
                <h1 className='introduction'>{heading[img]}</h1>
                <p className='content'>{content[img]}</p>
                <div className='dot-container'>
                    {sliderD}
                </div>
            </div>
        </div>
    );
};

export default Slider;