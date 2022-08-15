import React from 'react';
import Button from '../Button/Button.component';
import FormInput from '../forminput/FormInput.component';
import TextArea from '../TextArea/TextArea.component';

import "./AddItem.styles.scss"
const AddItem = () => {
    return (
        <div className='add-form'>
            <div className='name'>
                <FormInput
                    label={"product name"}
                    value={" "}
                    type="text"
                    name="product"
                    required={true}

                />
            </div>
            <div className='brand'>
                <FormInput
                    label={"brand name"}
                    value={" "}
                    type="text"
                    name="brand"
                    required={true}

                />
            </div>
            <div className='price'>
                <FormInput
                    label={"Price"}
                    value={" "}
                    type="number"
                    name="price"
                    required={true}

                />
            </div>
            <div className='disc'>
                <FormInput
                    label={"Discount"}
                    value={" "}
                    type="number"
                    name="discount"
                    required={true}

                />
            </div>
            <div className='col'>
                <FormInput
                    label={"Colour"}
                    value={" "}
                    type="text"
                    name="Colour"
                    required={true}

                />
            </div>
            <div className='quan'>
                <FormInput
                    label={"Quantity"}
                    value={" "}
                    type="text"
                    name="Quanity"
                    required={true}

                />
            </div>
            <div className='size'>
                <FormInput
                    label={"Size"}
                    value={" "}
                    type="number"
                    name="Size"
                    required={true}

                />
            </div>
            <div className='description'>
                <TextArea
                    label={"Description"}
                    value={" "}
                    name="Description"
                    required={true}
                />
            </div>
            <div className='add-item-btn'>
                <Button
                    buttonType={"primary"}
                    children={"Add item"} />

            </div>


        </div>
    );
};

export default AddItem;