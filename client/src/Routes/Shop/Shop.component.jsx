import React, {useEffect} from 'react';
import Footer from '../../Components/Footer/Footer.component';
import "./Shop.styles.scss";
import AllProducts from '../../Components/AllProducts/AllProducts.component';


const Shop = () => {
    useEffect(() =>{
        document.title = "Shop"
     }, [])
    return (
        <div className='container'>
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Shop;