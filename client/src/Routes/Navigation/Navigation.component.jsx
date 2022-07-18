import React from 'react';
// import { Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { CartIcon } from '../../Components/button/cartIcon/CartIcon.component';
import "./navigation.styles.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to="/">
                    <div className='logo'>
                        <StoreLogo />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <input type={"text"} placeholder="Search item..." className='itemSearch' />
                    <Link to="/shop" className='nav-link'>
                        <p className='nav-item'>Home</p>
                    </Link>

                    <Link to="/featured" className='nav-link'>
                        <p className='nav-item'>Shop</p>
                    </Link>

                    <Link to="/discounted" className='nav-link'>
                        <p className='nav-item'> Discounted</p>
                    </Link>
                </div>

                <div className='customer-details'>
                    <div className='cart-container'>
                        <CartIcon />
                        <p className='nav-item'>Cart</p>
                    </div>
                    <Link className='form-link nav-link' to="/orders">
                        <p className='nav-item'>Orders</p>
                    </Link>

                    <Link className='form-link nav-link' to="/signIn">
                        <p className='nav-item'>Login/ Register</p>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;