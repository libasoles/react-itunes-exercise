import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import SearchPage from './views/SearchPage/SearchPage';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SearchPage />
    </MuiThemeProvider>
  );
}

export default App;
