import React, { useEffect, useContext } from 'react';
import "./AdminShoe.styles.scss"
import Slider from '../../Components/Carasouel/Slider.component';
import sliderImages from '../../MockImages/mockimages';
import { useParams } from 'react-router';
import axios from 'axios'
import { RerenderContext } from '../../contexts/Rerenders.context';
import { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton.component';
import FormInput from '../../Components/forminput/FormInput.component';
import Button from '../../Components/Button/Button.component';

const AdminShoe = () => {
    const product = useParams();
    const { update, setUpdate } = useContext(RerenderContext);
    const [image, setImage] = useState([])
    const [data, setData] = useState()
    const [busy, setBusy] = useState(true)
    const [items, setItems] = useState();
    const [formValues, setFormValues] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualproduct/${product.productId}`)
            .then(res => {
                const data = res.data;
                setImage(data.images[1])
                setData(data)
                setBusy(false)
                // const stock = data.availableStock.map((i) => i.variations.map((e) => i))
                const stock = data.availableStock.map((item) => (
                    <div className='section'>
                        <h4>{item.size}</h4>
                        <ul>
                            {
                                item.variations.map((vari) => (
                                    <>
                                        <li id={vari.color}>{vari.color}</li>
                                        <input name={` ${vari.color} stock`} min={0} className={"stock"} type={"number"} defaultValue={+vari.stock} />
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                ));

                setItems(stock)
                console.log(stock)
                console.log(data.availableStock)
                console.log(data)
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
                    <BackButton />
                    <h2>{data.brand + " " + data.name}</h2>
                </div>
                <div className='itemsContainer'>{items}

                </div>
                <br />
                <br />
                <br />
                <div className='edsbutton'>
                    <Button
                        buttonType={'primary'}
                        children={"Save new variation"} />
                </div>

            </>
    );
};

export default AdminShoe;