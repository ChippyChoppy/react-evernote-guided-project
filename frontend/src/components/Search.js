import React from 'react';

const Search = (props) => {
  console.log("props in search", props)
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={props.searchValue}
        onChange={props.searchChangeHandler}
      />
    </div>
  );
}

export default Search;
