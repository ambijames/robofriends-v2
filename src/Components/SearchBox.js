import React from 'react';



const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pv3 pb3 tc'>
      <input
        className='pa3 ba b--blue bg-light purple' 
        type ='search' 
        placeholder='search robots'
        onChange={searchChange} 
      />
    </div> 
  );

}


export default SearchBox;