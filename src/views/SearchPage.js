import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';

function SearchPage() {
  return (
    <React.Fragment>
      <Header title="iTunes discovery" />
      <SearchBox />
    </React.Fragment>
  );
}

export default SearchPage;
