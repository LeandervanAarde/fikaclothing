import React, {useEffect} from 'react';
import Footer from '../Footer/Footer.component';

const IndividualProduct = () => {
    useEffect(() =>{
        document.title = "View Product"
     }, [])
    return (
        <div className='individualProduct'>
                I am the IndividualComponent
            <Footer/>
        </div>
    );
};

export default IndividualProduct;