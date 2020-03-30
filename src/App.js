import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux';
import { ToastContainer } from "react-toastify";

import Routes from './routes';
import GlobalStyles from './styles/global';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} hideProgressBar />
            </PersistGate>
        </Provider>
    );
}