import React from 'react';
import Card from '../Card/Card.component';
import "./FeaturedBrands.styles.scss";

const FeaturedBrands = ({ heading, brandName }) => {
    return (
        <>
        <h2>{heading}</h2>
        <h3>{brandName}</h3>
        <div className='products-container'>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </>
    );
};

export default FeaturedBrands;