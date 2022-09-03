import React, { useEffect, useContext } from 'react';
import "./AdminShoe.styles.scss"
import Slider from '../../Components/Carasouel/Slider.component';
import sliderImages from '../../MockImages/mockimages';
import { useParams } from 'react-router';
import axios from 'axios'
import { RerenderContext } from '../../contexts/Rerenders.context';
import { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton.component';

const AdminShoe = () => {
    const product = useParams();
    const { update, setUpdate } = useContext(RerenderContext);
    const [image, setImage] = useState([])
    const [data, setData] = useState()
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualproduct/${product.productId}`)
            .then(res => {
                const data = res.data;
                setImage(data.images[1])
                setData(data)
                setBusy(false)

            })
            .catch(err => {
                console.log(err)
            })
    }, [update]);

    return (
        busy ?
        <></>
        : 
        <>
        <div className='overlay'></div>
        <div className='bg-container-Ad' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='prod-image' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='header-container'>
        <BackButton/>
        <h2>{data.brand +" "+data.name}</h2>
        </div>
        <div className='sectionOne'></div>
        <div className='sectionTwo'></div>
        <div className='sectionThree'></div>

    </>
    );
};

export default AdminShoe;