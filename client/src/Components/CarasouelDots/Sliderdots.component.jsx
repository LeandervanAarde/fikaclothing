import React from 'react';
import "./SliderDots.styles.scss"
const Sliderdots = ({setImg}) => {
    return (
        <div className='dot' onClick={setImg}></div>
    );
};

export default Sliderdots;