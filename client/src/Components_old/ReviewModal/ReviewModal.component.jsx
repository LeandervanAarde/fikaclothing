import axios from 'axios';
import React, { useState, useContext } from 'react';
import Button from '../Button/Button.component';
import FormInput from '../forminput/FormInput.component';
import TextArea from '../TextArea/TextArea.component';
import "./ReviewModal.styles.scss"
import { RerenderContext } from '../../contexts/Rerenders.context';

const defaultFormVals = {
    name: '',
    review: '',
    rating: 0,
}
const ReviewModal = ({ setOpen, id }) => {
    const [formValues, setFormValues] = useState(defaultFormVals);
    const { name, review, rating } = formValues;
    const { update, setUpdate } = useContext(RerenderContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const addReview = () => {
        axios.post('http://localhost:5001/api/addreview/' + id, formValues)
            .then(res => {
                setOpen(!setOpen)
                setUpdate(!update)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='backdrop'>
            <div className={'modal'} >
                <h3 className='modalHeader'>Leave a Review</h3>
                <div className='name-container'>
                    <FormInput
                        label={"name"}
                        value={name}
                        type="text"
                        name="name"
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <div className='star-wrapper'>
                    <input
                        className='rating'
                        label={"rating"}
                        value={rating}
                        max={5}
                        type="number"
                        name="rating"
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <div className='review-container'>
                    <TextArea
                        label={"Review"}
                        value={review}
                        name="review"
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className='buttons'>
                    <div className='review-btn'>
                        <Button
                            buttonType={"secondary"}
                            children={"Cancel"}
                            onClick={() => { return setOpen(!setOpen) }}
                        />
                    </div>

                    <div className='review-btn'>
                        <Button
                            buttonType={"primary"}
                            children={"Submit Review"}
                            onClick={addReview}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;