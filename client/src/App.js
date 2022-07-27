import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router';
import Navigation from './Routes/Navigation/Navigation.component';
import Home from './Routes/Home/Home.component';
import Login from './Routes/Login/Login.component';
import Register from './Routes/Register/Register.component';
import Checkout from './Routes/Checkout/Checkout.component';
import Shop from './Routes/Shop/Shop.component';
import IndividualProduct from './Components/IndividualProduct/IndividualProduct.component';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/signIn" element={<Login/>} />
              <Route path="/Register" element={<Register/>}/>
              <Route path='/Shop/*' element={<Shop/>}/>
              <Route path={`Product/*`}element={<IndividualProduct/>}/>
              <Route path='/Checkout' element={<Checkout/>}/>
        </Route>
    </Routes>
  );
};

export default App;