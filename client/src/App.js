import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router';
import Navigation from './Routes/Navigation/Navigation.component';
import Home from './Routes/Home/Home.component';
import Login from './Routes/Login/Login.component';
import Register from './Routes/Register/Register.component';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path="/signIn" element={<Login/>} />
              <Route path="/Register" element={<Register/>}/>
        </Route>
    </Routes>
  );
};

export default App;