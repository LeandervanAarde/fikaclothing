import React from 'react';
import "./SubImages.styles.scss";

const SubImages = ({productImage, changeImage}) => {
    return (
        <div className='image' style={{backgroundImage:`url(${productImage})`}} onClick={changeImage}>
            
        </div>
    );
};

export default SubImages;