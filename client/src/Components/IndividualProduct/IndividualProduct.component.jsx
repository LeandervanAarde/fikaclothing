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
import MockStock from "../../MockImages/MockStock.json";
import Review from '../Review/Review.component';
import { CartContext } from '../../contexts/CartDrop.context';
import { useLayoutEffect } from 'react';


const IndividualProduct = () => {
    const product = useParams();
    const [prod, setProd] = useState();
    const[totalStock, setTotalStock] = useState();
    const [isBusy, setIsBusy] = useState(true);
    const[colors, setColors] = useState();
    const [thisReview, setThisReview] = useState()
    const [img, setImg] = useState(0);
    const [sizeActive, setSizeActive] = useState(false)
    // const [images, setimages] = useState();
    const {addItemToCart, cartItems} = useContext(CartContext)
    const [orderInfo, setOrderInfo] = useState();
    const [totalOrder, setTotalOrder] = useState([]);

    useEffect(() => {
        document.title = "View Product";
        window.scrollTo(0, 0)
    }, []);
    

    useEffect(() =>{
        axios.get(`http://localhost:5001/api/individualproduct/${product.productId}`)
        .then(res =>{
            const data = res.data;
            setProd(data)
            setIsBusy(false);
            setTotalStock(data.availableStock.map(i => i.totalStock).reduce((prev, curr, index) => prev + curr, 0))
            setColors(data.availableStock.map((color, index) => color.variations))
            setThisReview(data.reviews.map((rev) => (<Review reviews={rev}/>)))
            // setimages(data.images[0]);
            // console.log(data.images[0]);
        })
        .catch(err =>{
          
        })
    },[]);

    const getShoeSize = (e) =>{
        console.log(e.target.id);
        const size = prod.availableStock.map(i => (i)).filter(i =>
          { return i.size === (+e.target.id) })
        // console.log(prod)
        // console.log(size)
        // setOrderInfo({...orderInfo, size: e.target.id}) 
        setProd({...prod, availableStock : size})
    }
    console.log(prod)


    
    const getShoeColour = (e) =>{
        console.log(e.target.id);
        setOrderInfo({...orderInfo, color: e.target.id})
    }

    const addProduct = () => {
        // const price = prod.price - prod.discount
        const {name, images, id} = prod
            addItemToCart(prod)
            
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
               prod.availableStock.map((i, index) => (<AvailableSizes active={sizeActive? 'sizeActive' : 'size-container'} key={index} size={i.size} handler={ getShoeSize } />))
           }
       </div>
       <div className='color-box-container'>
           {
               colors[0].map((c, index) => (<Colour key={index} color={c.color} handler={getShoeColour} />))
           }
       </div>

       <div className='cart-button'>
           <Button
               buttonType={"primary"}
               children={"Add to cart"}
               onClick = {addProduct}
           />
       </div>

       <p className='not-sure'>Not sure? Try it on and return free of charge within 14 days</p>
       <h3 className='rev-heading'>Reviews</h3>
       <ReviewContainer 
           children = {thisReview}
         
       />
       <Footer />
   </div>
       )
    );
};

export default IndividualProduct;