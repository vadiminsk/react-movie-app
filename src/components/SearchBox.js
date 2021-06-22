import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      <input
        placeholder='Type to search...'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
