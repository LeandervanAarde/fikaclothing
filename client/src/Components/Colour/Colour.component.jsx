import React from 'react';
import "./Colour.styles.scss";
const Colour = ({color}) => {
    return (
        <div className='color-circle' style={{backgroundColor: `${color}`}}>
            
        </div>
    );
};

export default Colour;