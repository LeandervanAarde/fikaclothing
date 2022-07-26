import React from 'react';
import "./RadioButton.styles.scss";

const RadioButton = ({ item }) => {
    return (
        <>
            <input type={"radio"} name={`radio ${item}`} value={item} className="radio" />
            <label for={item} > {item}</label>
            <br/>
        </>
    );
};

export default RadioButton;