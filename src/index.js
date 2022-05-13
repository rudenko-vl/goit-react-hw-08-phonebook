import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import './index.css';

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
