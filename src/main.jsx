import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { Home } from './pages/Home';
import { Plate } from './pages/Plate';
import { NewPlate } from './pages/NewPlate';
import { EditPlate } from './pages/EditPlate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditPlate />
    </ThemeProvider>
  </React.StrictMode>,
)
