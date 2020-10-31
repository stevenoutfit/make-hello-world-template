import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-ibm-plex-sans';

ReactDOM.render(
  <React.StrictMode>
  <Fragment>
    <App {...window.templateProps} />
    <App {...window.templateProps} />
    <App {...window.templateProps} />
  </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
