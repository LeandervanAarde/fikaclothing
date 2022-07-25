import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.styles.scss";
import { ReactComponent as StoreLogo } from '../../Assets/Logo.svg';
import FooterInformation from '../FooterInformation/FooterInformation.component';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Link to="/" className='logo-container'>
                <div className='logo'>
                    <StoreLogo />
                </div>
            </Link>
            <FooterInformation
                heading="Client Assistance"
                children={<>
                    <li>Help Centre</li>
                    <li>FAQ</li>
                    <li>Delivery Options</li>
                    <li>Payment Options</li>
                </>}
            />

            <FooterInformation
                heading="Find us on"
                children={<>
                    <li>@Fiika_shoes</li>
                    <li>@Fiika shoes</li>
                    <li>@Fiika_shoes_official</li>
                </>}
            />
        </div>
    );
};

export default Footer;