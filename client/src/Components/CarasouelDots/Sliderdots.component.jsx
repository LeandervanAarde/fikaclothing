import React from 'react';
import "./SliderDots.styles.scss"
const Sliderdots = ({setImg, dotClass}) => {
    return (
        <div className={dotClass} onClick={setImg}></div>
    );
};

export default Sliderdots;