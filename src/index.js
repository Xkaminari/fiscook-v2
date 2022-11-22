import React, { Component } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter>
    <App/>
</BrowserRouter>
);
