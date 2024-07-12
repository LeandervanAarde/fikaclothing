import React from 'react';
import "./DropDownFilter.styles.scss";
const DropDownFilter = ({nameSort}) => {
  
    return (
        <select name='dropselect' onChange={nameSort}>
            <option disabled={true} selected={true}>Select sorting</option>
            <option value={"A-Z"}>Sort A-Z</option>
            <option value={"Z-A"}>Sort Z-A</option>
            <option value={"high-low"}>Sort High to Low</option>
            <option value={"low-high"}>Sort Low to High</option>
        </select>
    );
};

export default DropDownFilter;