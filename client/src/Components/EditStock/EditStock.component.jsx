import React, { useState } from 'react';
import Button from '../Button/Button.component';
import FormInput from '../forminput/FormInput.component';
import TextArea from '../TextArea/TextArea.component';
import "./EditStock.styles.scss";

const EditStock = ({ setOpen, id, brand, name, img, discount, price, desc }) => {
    const initialValues = {
        disc: discount,
        prc: price,
        description: desc,
        name: name,
    }
    const [formValues, setFormValues] = useState(initialValues)
    const {disc, prc, description,nm} = formValues
    
    const closeModal = () => {
        setOpen(!setOpen)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const updateProduct = () =>{

    }

    return (
        <div className='backdrop'>
            <div className={'modal'} >
                <div className='prod-image' style={{backgroundImage: `url(${img})`}}></div>
                <img className='prod-image' src={img} />
                <h3 className='header-text-stock'> Edit {brand + " " + name}</h3>
                <div className='form-container'>
                    <div className='left-container prodNm'>
                        <FormInput
                            label={"name"}
                            value={nm}
                            type="text"
                            name="name"
                            required={true}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='center-container price'>
                        <FormInput
                            label={"item price"}
                            value={price}
                            type="number"
                            name="price"
                            required={true}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='right-container prodDisc'>
                        <FormInput
                            label={"item discount"}
                            value={discount}
                            type="number"
                            name="discount"
                            required={true}
                         onChange={handleChange}
                        />
                    </div>
                    <br />
                </div>
                <div className='description-container'>
                    <TextArea
                        label={"item discount"}
                        value={desc}
                        type="number"
                        name="discount"
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <div className='buttons-con'>
                    <div>
                        <Button
                            buttonType={'primary'}
                            children={'Update product'}
                        />
                    </div>
                    <Button
                        buttonType={'secondary'}
                        children={'Add variations'}
                    />
                    <Button
                        buttonType={'extra'}
                        children={'Cancel update'}
                        onClick={closeModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditStock;