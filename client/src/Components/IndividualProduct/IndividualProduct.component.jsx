import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./IndividualProduct.styles.scss"
import BackButton from '../BackButton/BackButton.component';
import Footer from '../Footer/Footer.component';
import SubImages from '../SubImages/SubImages.component';
import AvailableSizes from '../AvailableSizes/AvailableSizes.component';
import Colour from '../Colour/Colour.component';
import Button from '../Button/Button.component';
import ReviewContainer from '../ReviewSection/ReviewContainer.component';
import MockStock from "../../MockImages/MockStock.json"


const IndividualProduct = () => {
    const product = useParams();
    const thisProd = MockStock.find(prod => prod._id == product.productId);
    const itemStockIndex = thisProd.availableStock.map(i => i.totalStock);
    const totalStock = itemStockIndex.reduce((prev, curr, index) => prev + curr, 0);
    const [img, setImg] = useState(0);
    const price = thisProd.price - thisProd.discount;
    const productInformation = thisProd.availableStock.map((i, index) => i);
    const colorInformation = productInformation.map((color, index) => color.variations)
    console.log(totalStock)
    useEffect(() => {
        document.title = "View Product"
    }, []);

    return (
        <div className='individualProduct'>
            <BackButton />
            <div className='mainImage' style={{ backgroundImage: `url(${thisProd.images[img]})` }}> </div>
            <div className='subImages-container'>
                {
                    thisProd.images.map((image, index) => (<SubImages key={index} productImage={image} changeImage={() => (setImg(index))} />))
                }
            </div>
            <div className='Product-information-container'>
                <h2 className='product-name'>{thisProd.name}</h2>
                {
                    totalStock > 0 ?
                        <p className='stock-text'>In Stock</p>
                        :
                        <p className='out-of-stock'>Out of Stock</p>
                }
                <p className='product-description'>{thisProd.description}</p>
                {
                    thisProd.discount === 0 || null ?
                        <h4 className='price'>R {price}</h4>
                        :
                        <>
                            <h4 className='discount'>R {thisProd.price}</h4>
                            <h4 className='price'>R {price}</h4>
                        </>
                }
            </div>
            <h4 className='sizeH'>Sizes</h4>
            <div className='size-box-container'>
                {
                    thisProd.availableStock.map((i, index) => (<AvailableSizes key={index} size={i.size} />))
                }
            </div>
            <div className='color-box-container'>
                {
                    colorInformation[0].map((c, index) => (<Colour key={index} color={c.color} />))
                }
            </div>

            <div className='cart-button'>
                <Button
                    buttonType={"primary"}
                    children={"Add to cart"}
                />
            </div>

            <p className='not-sure'>Not sure? Try it on and return free of charge within 14 days</p>
            <h3 className='rev-heading'>Reviews</h3>
            <ReviewContainer />
            <Footer />
        </div>
    );
};

export default IndividualProduct;