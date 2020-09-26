import React from 'react';

import './AllConversations.scss';
import SearchBar from './search-bar/SearchBar';

const AllConversations = () => {
  return (
    <div className='all-conversations box'>
      <SearchBar></SearchBar>
    </div>
  );
};

export default AllConversations;
