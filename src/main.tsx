import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { theme } from './constants/theme';
import Router from './router';

import './styles/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CssVarsProvider>
  </React.StrictMode>
);
