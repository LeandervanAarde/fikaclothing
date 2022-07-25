import React from 'react';

const FooterInformation = ({ heading, children }) => {

    return (
        <div className='footer-information'>
            <h5>{heading}</h5>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default FooterInformation;