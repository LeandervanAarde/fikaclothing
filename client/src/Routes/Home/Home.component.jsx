import React from 'react';
import Slider from '../../Components/Carasouel/Slider.component';
import './Home.styles.scss';
import CardContainer from '../../Components/CardContainer/CardContainer.component';
import Footer from '../../Components/Footer/Footer.component';

const Home = () => {
    return (
        <div>
            <Slider/>
            <CardContainer
            heading="LATEST PRODUCTS"
            />
            <Footer/>
        </div>
    );
};

export default Home;