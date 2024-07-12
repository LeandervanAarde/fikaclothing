import React from 'react';
import "./AvailableSizes.styles.scss";

const AvailableSizes = ({size, handler, active}) => {
    return (
        <div className={`size-container ${active}`} id={`${size}`} onClick={handler}>
            <h4 className={`Size`} id={`${size}`}>{size}</h4>
        </div>
    );
};

export default AvailableSizes;