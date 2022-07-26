import React from 'react';
import "./DropDownFilter.styles.scss";
const DropDownFilter = () => {
    const values = ["Leander", "Etienne", "Reinhardt", "Vian", "Alright"];
    const numbers = [1,6,3,7,12,76, 12]
  
    const nameSort =  (e) =>{
        let val = e.currentTarget.value;
        if(val === "A-Z"){
            values.sort((a,b) => (a > b ? 1 : -1));
            console.log(values);
        } else if(val === "Z-A"){
            values.sort((a,b) => (a > b ? -1 : 1));
            console.log(values);
        } else if(val === "high-low"){
            numbers.sort((a,b) => (a > b ? -1 : 1));
            console.log(numbers);
        } else if(val === "low-high"){
            numbers.sort((a,b) => (a > b ? 1 : -1));
            console.log(numbers);
        }
    }

    return (
        <select name='dropselect' onChange={nameSort}>
            <option disabled={true} selected>Select sorting </option>
            <option value={"A-Z"} onChange={nameSort}>Sort A-Z</option>
            <option value={"Z-A"}>Sort Z-A</option>
            <option value={"high-low"}>Sort High to Low</option>
            <option value={"low-high"}>Sort Low to High</option>
        </select>
    );
};

export default DropDownFilter;