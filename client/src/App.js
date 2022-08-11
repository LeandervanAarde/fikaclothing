import React from 'react';
import './App.scss';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Navigation from './Routes/Navigation/Navigation.component';
import Home from './Routes/Home/Home.component';
import Login from './Routes/Login/Login.component';
import Register from './Routes/Register/Register.component';
import Checkout from './Routes/Checkout/Checkout.component';
import Shop from './Routes/Shop/Shop.component';
import IndividualProduct from './Components/IndividualProduct/IndividualProduct.component';
import Payment from './Routes/Payment/Payment.component';
import StockManagement from './Routes/Administration/StockManagement.component';
import OrderInformation from './Routes/OrderInformation/OrderInformation.component';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/signIn" element={<Login/>} />
              <Route path="/Register" element={<Register/>}/>
              <Route path='/Shop/*' element={<Shop/>}></Route>
              <Route path={`Shop/Product/:productName/:productId`}element={<IndividualProduct/>}/>
              <Route path='/Checkout/*' element={<Checkout/>}/>
              <Route path='/Payment' element={<Payment/>}></Route>
              <Route path='/Management' element={<StockManagement/>}/>
              <Route path='/Management/Order/:orderId/:customerId' element={<OrderInformation/>}/>
        </Route>
    </Routes>
  );
};

export default App;