import React from 'react';
import './Button.styles.scss';

const buttonClasses = {
    google: 'google-btn',
    primary: 'primary',
    secondary: 'secondary',
    extra : 'extra'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <div className={`button-con ${buttonClasses[buttonType]}`}  {...otherProps}>
                {children}
        </div>
    );
};

export default Button;