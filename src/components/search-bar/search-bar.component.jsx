import React from "react";
import './search-bar.styles.css';

export const SearchBar = ({handleChange, placeholder}) =>
    (<input className="search"
        onChange = {handleChange} 
        type='search' placeholder={placeholder}
       />)