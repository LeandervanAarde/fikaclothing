import React, { useContext, useState, useEffect } from 'react';
// import { Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { CartIcon } from '../../Components/cartIcon/CartIcon.component';
import CartDropDown from '../../Components/CartDropDown/CartDropDown.component';
import { CartContext } from '../../contexts/CartDrop.context';
import "./navigation.styles.scss";
import axios from 'axios';
import Search from '../../Components/SearchBar/Search.component';
import SearchItem from '../../Components/SearchItem/SearchItem.component';
import SearchResults from '../../Components/SearchResults/SearchResults.component';

const Navigation = () => {
    const { showCart, setShowCart } = useContext(CartContext);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchItems, setSearchItems] = useState();
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('http://localhost:5001/api/allproducts')
            .then(res => {
                const data = res.data;
                // console.log(res.data)
                setData(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleSearch = (newSearchQuery) => {
        if (newSearchQuery !== "") {
            setShowSearch(true);
            setSearchQuery(newSearchQuery);
            const filtered = data.filter(item => item.name.toLowerCase().includes(newSearchQuery.toLowerCase()) || item.name.includes(newSearchQuery.toLowerCase()) || item.brand.toLowerCase().includes(newSearchQuery.toLowerCase()) || item.brand.includes(newSearchQuery.toLowerCase()))
                .map(filteredItem => (<SearchItem key={filteredItem._id} id={filteredItem._id} name={filteredItem.name} price={`R ${filteredItem.price}`} image={filteredItem.images[0]} />));
            setSearchItems(filtered);
        } else {
            setShowSearch(false)
        }
    }
    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to="/">
                    <div className='logo'>
                        <StoreLogo />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Search handleSearch={handleSearch} />
                    {
                        showSearch && <SearchResults
                            children={searchItems}
                        />
                    }
                    <Link to="/" className='nav-link'>
                        <p className='nav-item'>Home</p>
                    </Link>

                    <Link to="/Shop" className='nav-link'>
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
                    <Link className='form-link nav-link' to="/Management">
                        <p className='nav-item'>Admin</p>
                    </Link>

                    <Link className='form-link nav-link' to="/signIn">
                        <p className='nav-item'>Login/ Register</p>
                    </Link>
                    {
                        showCart && <CartDropDown />
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
};
export default Navigation;