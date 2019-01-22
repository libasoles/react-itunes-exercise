import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import AlbumsPage from './pages/AlbumsPage';
import SongsPage from './pages/SongsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="/artists/:id/albums" component={AlbumsPage} />
      <Route path="/albums/:id/songs" component={SongsPage} />
    </Switch>
  );
}

export default Routes;
