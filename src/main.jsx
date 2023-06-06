import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Components } from 'formiojs';
import CustomComponent from './CustomComponent';

Components.addComponent('custom', CustomComponent);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
