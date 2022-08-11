import React from 'react';
import "./Colour.styles.scss";
const Colour = ({color, handler}) => {
    return (
        <div className='color-circle' id={`${color}`} style={{backgroundColor: `${color}`}} onClick={handler}>
            
        </div>
    );
};

export default Colour;