import React, { useContext } from 'react';
import { useState } from 'react';
import Button from '../Button/Button.component';
import FormInput from '../forminput/FormInput.component';
import TextArea from '../TextArea/TextArea.component';
import "./AddItem.styles.scss";
import AWS from "aws-sdk";
import { RerenderContext } from '../../contexts/Rerenders.context';
import axios from 'axios';


const defaultFormVals = {
    name: '',
    brand: '',
    price: '',
    discount: '',
    color: '',
    quantity: '',
    size: '',
    description: '',
}
const BucketName = "fikaclothing";
const region = "us-east-1";
AWS.config.update({
    accessKeyId: "AKIAWDMDUWDEHUXLLQOB",
    secretAccessKey: "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"
});
const bucket = new AWS.S3({
    params: { Bucket: BucketName },
    region: region
})
const AddItem = () => {
    const [values, setValues] = useState(defaultFormVals)
    const { name, brand, price, discount, color, quantity, size, description } = values;
    const [fileList, setFileList] = useState();
    const { update, setUpdate } = useContext(RerenderContext);

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const [images, setImages] = useState([]);
    const getImages = async (e) => {
        let imageFile = e.target.files
        let val = e.target.value
        const newVal = []
        for (let i = 0; i < imageFile.length; i++) {
            newVal.push(imageFile.item(i).name)
        }
        setImages(newVal)
        setFileList(imageFile)
        // console.log(newVal);
    }
    const noWhitespace = values.name.replace(/\s/g, '');
    console.log(noWhitespace)
    console.log(images)
    // console.log(imagesArr)

    const handleClick = async (e) => {
        let newFileNames = []
        for (let i = 0; i < fileList.length; i++) {
            let temp = noWhitespace + i + fileList[i].name.substring(fileList[i].name.indexOf("."))
            const params = {
                ACL: "public-read",
                Body: fileList[i],
                Bucket: BucketName,
                Key: temp
            }
            newFileNames.push(`https://fikaclothing.s3.amazonaws.com/${temp}`)
            bucket.putObject(params).send(err => console.log(err))
        }

        const payloadData = new FormData();
        const payload = {
            name: values.name,
            brand: values.brand,
            price: +values.price,
            discount: +values.discount,
            description: values.description,
            images: newFileNames,
            availableStock: [
                {
                    size: +values.size,
                    totalStock: +values.quantity,
                    variations: [
                        {
                            color: values.color,
                            stock: values.quantity.toString()
                        }
                    ]
                }
            ]
        }
        payloadData.append("information", JSON.stringify(payload));
        axios.post('http://localhost:5001/api/addproduct', payload)
            .then(res => {
                console.log("item has been added")
                console.log()
                setUpdate(prevState => !prevState)
                // add the update function here
            })
            .catch(err => {
                // console.log(err)
                console.log(payload)
            })
    }

    return (
        <div className='add-form'>
            <div className='name'>
                <FormInput
                    label={"product name"}
                    value={name}
                    type="text"
                    name="name"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='brand'>
                <FormInput
                    label={"brand name"}
                    value={brand}
                    type="text"
                    name="brand"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='price'>
                <FormInput
                    label={"Price"}
                    value={price}
                    type="number"
                    name="price"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='disc'>
                <FormInput
                    label={"Discount"}
                    value={discount}
                    type="number"
                    name="discount"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='col'>
                <FormInput
                    label={"Colour"}
                    value={color}
                    type="text"
                    name="color"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='quan'>
                <FormInput
                    label={"Quantity"}
                    value={quantity}
                    type="text"
                    name="quantity"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='size'>
                <FormInput
                    label={"Size"}
                    value={size}
                    type="number"
                    name="size"
                    required={true}
                    onChange={handleChange}
                />
            </div>

            <div className='description'>
                <TextArea
                    label={"Description"}
                    value={description}
                    name="description"
                    required={true}
                    onChange={handleChange}
                />
            </div>
            <div className='filebtn'>
                <Button
                    buttonType={'secondary'}>
                    <input type="file"
                        multiple
                        onChange={getImages}
                    />
                </Button>
            </div>
            <div className='add-item-btn'>
                <Button
                    buttonType={"primary"}
                    children={"Add item"}
                    onClick={handleClick} />
            </div>
        </div>
    );
};

export default AddItem;