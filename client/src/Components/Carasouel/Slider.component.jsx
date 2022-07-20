import React, { useEffect, useState } from 'react';
import Sliderdots from '../CarasouelDots/Sliderdots.component';
import './Slider.styles.scss'
import sliderImages from '../../MockImages/mockimages';


const Slider = () => {
    const images = sliderImages;
    const [img, setImg] = useState(0);
    const shoes = images.map(i => (i.shoe));
    const heading= images.map(i => (i.title));
    const content = images.map(i => (i.content))
    const dots = images.map(i => (i.length));

    console.log(shoes.length - 1)

    useEffect(() => {
        const timer = setTimeout(() => {
            img == shoes.length - 1 ? setImg(0) : setImg(img + 1)
        }, 4500)
    }, [img])

    console.log(img)


    return (

        <div className='slider-container' style={{ backgroundImage: `url(${shoes[img]})` }}>
            <div className='overlay'>
                <h1 className='introduction'>{heading[img]}</h1>
                <p className='content'>{content[img]}</p>
            </div>
        </div>

    );
};

export default Slider;