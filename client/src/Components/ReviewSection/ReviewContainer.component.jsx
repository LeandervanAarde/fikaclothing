import React from 'react';
import Button from '../Button/Button.component';
import Review from '../Review/Review.component';
import "./ReviewContainer.styles.scss";
import CardContainer from '../CardContainer/CardContainer.component';
const ReviewContainer = () => {
    return (
        <>
            <div className='review-container'>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
            <div className='review-button'>
                <Button
                    buttonType={"extra"}
                    children={"Load More"}
                />
            </div>
            <CardContainer
                heading="other products"
            />
        </>
    );
};

export default ReviewContainer;