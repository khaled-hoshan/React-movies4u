import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    white: {
      main: '#FFFFFF'
    }
  }
})
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
