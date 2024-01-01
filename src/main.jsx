import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.jsx';
import './main.css';
const Theme = createTheme({
  palette:{
    button: {
      primary: '#53D5BB',
      secondary: '#F5C36D',
      tertiary: '#394460',
      inactive: '#FF8383',
    }
  },
  typography: {
    fontFamily: [
      '"glacial indifference"'
    ].join( ',' ),
    header: {
      fontSize: 24
    }
  }
})
const theme = createTheme( Theme,{
  palette:{
    'custom-primary': Theme.palette.augmentColor({
      color: {
        main: '#53D5BB',
      },
      name: 'custom-primary',
    })
  }
})

ReactDOM.createRoot(
  document.getElementById( 'root' )
)
  .render(
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline children={ <App/> } />
      </ThemeProvider>
    </React.StrictMode>,
  )
