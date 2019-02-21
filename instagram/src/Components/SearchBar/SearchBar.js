import React from 'react';

const SearchBar= props=> {
 return(
<form>
        <input onChange={props.searchHandler} placeholder='Search' value={props.searchInput}></input>
</form>
 )
}


export default SearchBar;