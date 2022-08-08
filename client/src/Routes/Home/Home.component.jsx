import React, {useEffect} from 'react';
import Slider from '../../Components/Carasouel/Slider.component';
import './Home.styles.scss';
import CardContainer from '../../Components/CardContainer/CardContainer.component';
import Footer from '../../Components/Footer/Footer.component';
import FeaturedBrands from "../../Components/FeaturedBrands/FeaturedBrands.component"
import SearchResults from '../../Components/SearchResults/SearchResults.component';
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    useEffect(() =>{
        document.title = "Home"
     }, [])

    return (
        <div>
            <Slider />
            <CardContainer
                heading="LATEST PRODUCTS"
            />
            <FeaturedBrands
                heading="Featured Brands"
                brandName={"Nike"}
            />
            <FeaturedBrands
                heading={""}
                brandName={"Adidas"}
            />
            <Footer />
        </div>
    );
};

export default Home;