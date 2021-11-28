import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/app.scss"
import { AppRouter } from './routes/AppRouter';

const myRoot = document.querySelector("#root");

ReactDOM.render(<AppRouter />, myRoot)
