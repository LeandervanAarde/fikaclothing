import React from 'react';
import Button from '../Button/Button.component';
import Review from '../Review/Review.component';
import "./ReviewContainer.styles.scss";
import CardContainer from '../CardContainer/CardContainer.component';
import { useState } from 'react';
import ReviewModal from '../ReviewModal/ReviewModal.component';
const ReviewContainer = ({children, loadMore, id}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className='review-container' id={id}>
                {children}
            </div>
            <div className='review-button'>
            <Button
                    buttonType={"primary"}
                    children={"Leave a review"}
                    onClick={() => {return setOpenModal(!openModal)}}
                />
                <br/>
                <Button
                    buttonType={"extra"}
                    children={"Load More"}
                    onClick = {loadMore}
                />
            </div>
            <CardContainer
                heading="other products"
            />
        {
            openModal && <ReviewModal id={id} setOpen={() => {return setOpenModal(!openModal)}}/>
        }
        </>
    );
};

export default ReviewContainer;