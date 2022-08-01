import React, { useContext, useState } from 'react';
// import { Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { CartIcon } from '../../Components/cartIcon/CartIcon.component';
import CartDropDown from '../../Components/CartDropDown/CartDropDown.component';
import { CartContext } from '../../contexts/CartDrop.context';
import "./navigation.styles.scss";
import MockStock from "../../MockImages/MockStock.json";
import Search from '../../Components/SearchBar/Search.component';
import SearchItem from '../../Components/SearchItem/SearchItem.component';
import SearchResults from '../../Components/SearchResults/SearchResults.component';

const Navigation = () => {
    const { showCart, setShowCart } = useContext(CartContext);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchItems, setSearchItems] = useState();

    const handleSearch = (newSearchQuery) => {
        setShowSearch(!showSearch);
        setSearchQuery(newSearchQuery);
        const filtered = MockStock.filter(item => item.name.includes(newSearchQuery) || item.brand.includes(newSearchQuery))
            .map(filteredItem => (<SearchItem key={filteredItem._id} id={filteredItem._id} name={filteredItem.name} price={`R ${filteredItem.price}`} image={filteredItem.images[0] }/>));
        console.log(filtered)
        setSearchItems(filtered);
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
                        setShowSearch && <SearchResults
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
                    <Link className='form-link nav-link' to="/orders">
                        <p className='nav-item'>Orders</p>
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