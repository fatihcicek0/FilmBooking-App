import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import rootReducer from './store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer, applyMiddleware(thunk));


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>  
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

