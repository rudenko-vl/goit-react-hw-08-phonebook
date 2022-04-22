import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import {ThemeProvider, createTheme } from '@mui/material/styles';
import App from "./components/App";
import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0000FF'
        },
        secondary: {
            main: '#FFFFFF'
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
    <Provider store={store}>
        <App />
    </Provider>
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
