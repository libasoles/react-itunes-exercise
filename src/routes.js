import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './views/SearchPage';
import AlbumsPage from './views/AlbumsPage';
import SongsPage from './views/SongsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="/artist/:id/album" component={AlbumsPage} />
      <Route path="/album/:id/songs" component={SongsPage} />
    </Switch>
  );
}

export default Routes;
