import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "redux/store";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import './index.css';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#0000FF'
//         },
//         secondary: {
//             main: '#FFFFFF'
//         }
//     }
// });

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
    <Provider store={store}>
        <App />
    </Provider>
      </BrowserRouter>
      </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
