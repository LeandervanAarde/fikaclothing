import React from 'react';
import "./Search.styles.scss"
const Search = ({handleSearch}) => {
    const onChange = (e) =>{
        handleSearch(e.target.value)
    }

    
    return (
        <input type={"text"} placeholder="Search item..." className='itemSearch' onChange={onChange} />
    );
};

export default Search;