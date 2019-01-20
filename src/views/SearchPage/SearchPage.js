import React from 'react';

import SearchPageHeader from './SearchPageHeader';
import SearchPageBody from './SearchPageBody';

function SearchPage() {
  return (
    <React.Fragment>
      <SearchPageHeader title="Qué querés escuchar hoy?" />
      <SearchPageBody />
    </React.Fragment>
  );
}

export default SearchPage;
