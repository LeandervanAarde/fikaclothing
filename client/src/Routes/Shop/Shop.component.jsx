import React from 'react';
import Filter from '../../Components/Filter/Filter.component';
import Footer from '../../Components/Footer/Footer.component';
import DropDownFilter from '../../Components/DropDownFilter/DropDownFilter.component';
import "./Shop.styles.scss";
import AllProducts from '../../Components/AllProducts/AllProducts.component';

const Shop = () => {
    return (
        <div className='container'>
            <Filter />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Shop;