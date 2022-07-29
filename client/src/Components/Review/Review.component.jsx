import React from 'react';
import "./Review.styles.scss";
import { MdStarRate } from "react-icons/md";
//MdStarRate

const Review = ({review}) => {
    // const {name, rating, content} = review;
    return (
<>
<div className='review'>
                <h5 className='head'><span className='name'>Leander van Aarde</span></h5>
                <div className='rating'>
                     <MdStarRate color={"black"}/>
                     <p className='rating-text'>5 stars</p>
                </div>
                <p className='content'>These are really nice and I really enjoy wearing them on my feet. They are super comfortable and I think that they are very nice to wear on all occasions, they are comfort, they are speed and as Reinhardt always says, shrek is love, shrek is life and I am not complete without shrek</p>
        </div>
</>
    );
};

export default Review;