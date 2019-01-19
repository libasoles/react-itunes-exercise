import React, { Component } from 'react';
import SearchPage from './views/SearchPage';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <SearchPage />
      </React.Fragment>
    );
  }
}

export default App;
