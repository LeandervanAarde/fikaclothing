import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router/router';

// import { Link, Route, Routes, Switch } from "react-router-dom";
// import Navigation from './Routes/Navigation/Navigation.component';
// import Home from './Routes/Home/Home.component';
// import Login from './Routes/Login/Login.component';
// import Register from './Routes/Register/Register.component';
// import Checkout from './Routes/Checkout/Checkout.component';
// import Shop from './Routes/Shop/Shop.component';
// import IndividualProduct from './Components/IndividualProduct/IndividualProduct.component';
// import Payment from './Routes/Payment/Payment.component';
// import StockManagement from './Routes/Administration/StockManagement.component';
// import OrderInformation from './Routes/OrderInformation/OrderInformation.component';
// import AdminShoe from './Routes/AdminShoe/AdminShoe.component';

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

// Routes, 

// sign in -> To Dialog
// Register -> Route
// Shop
// Shop -> Product
// Checkout
// Confirmation of details

// ADmin pages
// orders, manage products, manage specials etc.
