import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Button from '../Button/Button.component';
import FormInput from '../forminput/FormInput.component';
import TextArea from '../TextArea/TextArea.component';
import "./EditStock.styles.scss";
import { RerenderContext } from '../../contexts/Rerenders.context';


const EditStock = ({ setOpen, id, img, brand, name, discount, price, description }) => {
    const [formValues, setFormValues] = useState();
    const [busy, setBusy] = useState(true)
    const { update, setUpdate } = useContext(RerenderContext)

    useEffect(() => {
        setFormValues({
            discount,
            price,
            description,
            name
        })
        setBusy(false)
    }, [name, discount, price, description])


    const closeModal = () => {
        setOpen(prevState => !prevState)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const updateProduct = () => {
        const payload = {
            name: formValues.name,
            price: + formValues.price,
            discount: + formValues.discount,
            description: formValues.description
        }
        const identifier = id
        console.log(identifier)
        axios.patch('http://localhost:5001/api/editproduct/' + id, payload)
            .then(res => {
                setOpen(prevState => !prevState)
                setUpdate(!update)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        busy ?
            <></>
            :
            <div className='backdrop'>
                <div className={'modal'} >
                    <div className='prod-image' style={{ backgroundImage: `url(${img})` }}></div>
                    <img className='prod-image' src={img} />
                    <h3 className='header-text-stock'> Edit {brand + " " + name}</h3>
                    <div className='form-container'>
                        <div className='left-container prodNm'>
                            <FormInput
                                label={"name"}
                                value={formValues.name}
                                type="text"
                                name="name"
                                required={true}
                                onChange={handleChange}
                                onKeyPress={(event) => { event.key === "Enter" && updateProduct()}}
                            />
                        </div>
                        <div className='center-container price'>
                            <FormInput
                                label={"item price"}
                                value={formValues.price}
                                type="number"
                                name="price"
                                required={true}
                                onChange={handleChange}
                                onKeyPress={(event) => { event.key === "Enter" && updateProduct()}}
                            />
                        </div>
                        <div className='right-container prodDisc'>
                            <FormInput
                                label={"item discount"}
                                value={formValues.discount}
                                type="number"
                                name="discount"
                                required={true}
                                onChange={handleChange}
                                onKeyPress={(event) => { event.key === "Enter" && updateProduct()}}
                            />
                        </div>
                        <br />
                    </div>
                    <div className='description-container'>
                        <TextArea
                            label={"item description"}
                            value={formValues.description}
                            type="number"
                            name="description"
                            required={true}
                            onChange={handleChange}
                            onKeyPress={(event) => { event.key === "Enter" && updateProduct()}}
                        />
                    </div>
                    <div className='buttons-con'>
                        <div>
                            <Button
                                buttonType={'primary'}
                                children={'Update product'}
                                onClick={updateProduct}
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