import React from 'react';
import './SearchBar.css'

const SearchBar= props=> {
 return(
<form>
        <input className="search" onChange={props.searchHandler} placeholder='Search' value={props.searchInput}></input>
</form>
 )
}


export default SearchBar;