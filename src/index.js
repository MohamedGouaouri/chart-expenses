import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import {AppProvider} from "./services/context/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider >
        <App />
    </AppProvider>
);
