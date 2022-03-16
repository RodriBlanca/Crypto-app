import React from 'react';
import ReactDOM from 'react-dom';
import CryptoApp from './CryptoApp';
// React-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <CryptoApp />
  </Router>,
  document.getElementById('root')
);
