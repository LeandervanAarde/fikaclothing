import React, { useEffect, useState } from 'react';
import BackButton from '../BackButton/BackButton.component';
import Footer from '../Footer/Footer.component';
import SubImages from '../SubImages/SubImages.component';
import "./IndividualProduct.styles.scss"
import { productImageArr } from '../../MockImages/individual'
import MockStock from "../../MockImages/MockStock.json"
import AvailableSizes from '../AvailableSizes/AvailableSizes.component';
import Colour from '../Colour/Colour.component';
import Button from '../Button/Button.component';

const IndividualProduct = () => {
    const data = MockStock[0];
    const images = data.images;
    const itemStockIndex = data.availableStock.map(i => i.totalStock);
    const totalStock = itemStockIndex.reduce((prev, curr, index) => prev + curr, 0);
    const descript = data.description;
    const [img, setImg] = useState(0);
    const price = data.price - data.discount;
    const originalPrice = data.price;
    const productInformation = data.availableStock.map((i, index) => i);
    const colorInformation = productInformation.map((color, index) => color.variations)
    const availableColors = colorInformation[0].map((c, index) => (c.color))
    console.log(availableColors);



    useEffect(() => {
        document.title = "View Product"
    }, []);


    return (
        <div className='individualProduct'>
            <BackButton />
            <div className='mainImage' style={{ backgroundImage: `url(${images[img]})` }}> </div>
            <div className='subImages-container'>
                {
                    images.map((image, index) => (<SubImages key={index} productImage={image} changeImage={() => (setImg(index))} />))
                }
            </div>
            <div className='Product-information-container'>
                <h2 className='product-name'>{MockStock[0].name}</h2>
                {
                    totalStock > 0 ?
                        <p className='stock-text'>In Stock</p>
                        :
                        <p className='out-of-stock'>Out of Stock</p>
                }
                <p className='product-description'>{descript}</p>
                <h4 className='discount'>R {originalPrice}</h4>
                <h4 className='price'>R {price}</h4>
            </div>
                <h4 className='sizeH'>Sizes</h4>
            <div className='size-box-container'>
                
                {
                    data.availableStock.map((i, index) => (<AvailableSizes key={index} size={i.size} />))
                }
            </div>
            <div className='color-box-container'>
                {
                    colorInformation[0].map((c, index) => (<Colour color={c.color} />))
                }
            </div>

            <div className='cart-button'>
                <Button
                    buttonType={"primary"}
                    children={"Add to cart"}
                />
            </div>

            <p className='not-sure'>Not sure? Try it on and return free of charge within 14 days</p>

            <Footer />
        </div>
    );
};

export default IndividualProduct;