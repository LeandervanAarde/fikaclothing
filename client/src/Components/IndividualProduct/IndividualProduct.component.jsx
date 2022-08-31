import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import "./IndividualProduct.styles.scss"
import BackButton from '../BackButton/BackButton.component';
import Footer from '../Footer/Footer.component';
import SubImages from '../SubImages/SubImages.component';
import AvailableSizes from '../AvailableSizes/AvailableSizes.component';
import Colour from '../Colour/Colour.component';
import Button from '../Button/Button.component';
import ReviewContainer from '../ReviewSection/ReviewContainer.component';
import Review from '../Review/Review.component';
import { CartContext } from '../../contexts/CartDrop.context';
import { RerenderContext } from '../../contexts/Rerenders.context';

const IndividualProduct = () => {
    const product = useParams();
    const [prod, setProd] = useState();
    const [totalStock, setTotalStock] = useState();
    const [isBusy, setIsBusy] = useState(true);
    const [colors, setColors] = useState();
    const [thisReview, setThisReview] = useState()
    const [img, setImg] = useState(0);
    const { addItemToCart, cartItems } = useContext(CartContext)
    const { update, setUpdate } = useContext(RerenderContext);
    const [orderInfo, setOrderInfo] = useState();

    useEffect(() => {
        document.title = "View Product";
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualproduct/${product.productId}`)
            .then(res => {
                const data = res.data;
                setProd(data)
                setIsBusy(false);
                setTotalStock(data.availableStock.map(i => i.totalStock).reduce((prev, curr, index) => prev + curr, 0))
                setColors(data.availableStock.map((color, index) => color.variations));
                setOrderInfo({ name: data.name, brand: data.brand, _id: data._id, price: data.price, discount: data.discount, images: data.images[0] })
                setThisReview(data.reviews.map((rev, index) => (<Review key={index} reviews={rev} />)));
            })
            .catch(err => {
                console.log(err)
            })
    }, [update]);

    const getShoeSize = (e) => {
        const size = prod.availableStock.map(i => (i)).filter(i => { return i.size === (+e.target.id) })
        setOrderInfo({ ...orderInfo, size: size[0].size })
    }

    const getShoeColour = (e) => {
        setOrderInfo({ ...orderInfo, color: e.target.id })
    }

    const addProduct = () => {
        addItemToCart(orderInfo)
    }
    return (
        isBusy ?
            (
                <div>
                </div>
            )
            :
            (
                <div className='individualProduct'>
                    <BackButton />
                    <div className='mainImage' style={{ backgroundImage: `url(${prod.images[img]})` }}> </div>
                    <div className='subImages-container'>
                        {
                            prod.images.map((image, index) => (<SubImages key={index} productImage={image} changeImage={() => (setImg(index))} />))
                        }
                    </div>
                    <div className='Product-information-container'>
                        <h2 className='product-name'>{prod.name}</h2>
                        {
                            totalStock > 0 ?
                                <p className='stock-text'>In Stock</p>
                                :
                                <p className='out-of-stock'>Out of Stock</p>
                        }
                        <p className='product-description'>{prod.description}</p>
                        {
                            prod.discount === 0 || null ?
                                <h4 className='price'>R {prod.price}</h4>
                                :
                                <>
                                    <h4 className='discount'>R {prod.price}</h4>
                                    <h4 className='price'>R {prod.price - prod.discount}</h4>
                                </>
                        }
                    </div>
                    <h4 className='sizeH'>Sizes</h4>
                    <div className='size-box-container'>
                        {
                            prod.availableStock.map((i, index) => (i.totalStock > 1 ? < AvailableSizes key={index} size={i.size} handler={getShoeSize} /> : <></>))
                        }
                    </div>
                    <div className='color-box-container'>
                        {
                            colors[0].map((c, index) => (<Colour key={index} color={c.color} handler={getShoeColour} />))
                        }
                    </div>

                    <div className='cart-button'>

                        {
                            totalStock > 0 ?
                                <Button
                                    buttonType={"primary"}
                                    children={"Add to cart"}
                                    onClick={addProduct}
                                />
                                :
                                <></>
                        }

                    </div>

                    <p className='not-sure'>Not sure? Try it on and return free of charge within 14 days</p>
                    <h3 className='rev-heading'>Reviews</h3>
                    <ReviewContainer
                        children={thisReview}
                        id={product.productId}
                    />
                    <Footer />
                </div>
            )
    );
};

export default IndividualProduct;