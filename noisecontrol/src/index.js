import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import groupReducer from './reducers';
import logger from 'redux-logger';
import {addclassReducer} from './reducers/addclassReducer';

import './index.css';

const store = createStore(addclassReducer, applyMiddleware(thunk, logger))
console.log('hello', store.getState())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));



