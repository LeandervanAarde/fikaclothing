import React, {useEffect, useState} from 'react';
import Sliderdots from '../CarasouelDots/Sliderdots.component';
import './Slider.styles.scss'
import sliderImages from '../../MockImages/mockimages';

const Slider = () => {
    const images = sliderImages;
    const [img, setImg] = useState(0);
    const shoes = images.map(i =>(i.shoe))

    useEffect(() =>{
        let counter = 0;     
        const timer = setTimeout(() =>{
            img == shoes.length -1 ? setImg(0) : setImg(img +1)
        }, 3000)
    },[img])

    console.log(img)

   
    return (
        <div className='slider-container'>
            <div className='overlay'>
          
            </div>
            <img src={shoes[img]}/>
        </div>
    );
};

export default Slider;