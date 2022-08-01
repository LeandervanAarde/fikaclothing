import React from 'react';
import SearchItem from '../SearchItem/SearchItem.component';
import "./SearchResults.styles.scss"
import MockStock from "../../MockImages/MockStock.json";
import { useState } from 'react';

const SearchResults = ({children, modal}) => {
    return (
        <div className='Search-results-container'>
            {children}
        </div>
    );
};

export default SearchResults;