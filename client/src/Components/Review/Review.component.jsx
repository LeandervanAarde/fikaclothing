import React from 'react';
import "./Review.styles.scss";
import { MdStarRate } from "react-icons/md";
//MdStarRate

const Review = ({ reviews }) => {
    const { name, rating, review } = reviews;
    return (
        <>
            <div className='review'>
                <h5 className='head'><span className='name'>{name}</span></h5>
                <div className='rating'>
                    <MdStarRate color={"black"} />
                    <p className='rating-text'>{rating} stars</p>
                </div>
                <p className='content'>{review}</p>
            </div>
        </>
    );
};

export default Review;