import React from 'react';

const SearchBar= props=> {
 return(
<form onSubmit={props.searchFind}>
        <input placeholder='Search'></input>
</form>
 )
}


export default SearchBar;