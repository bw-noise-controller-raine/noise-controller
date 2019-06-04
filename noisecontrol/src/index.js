import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowseRouter as Router } from 'react-render-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));


