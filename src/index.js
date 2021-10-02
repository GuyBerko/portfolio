import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import App from './components/pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
