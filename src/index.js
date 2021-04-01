import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* TO-DO
- Refactoring
- Animations (framer.io)
- Alert log in and log out
- Alert error log in or sign in
- Render right notes on fretboard when connect with firestore
*/
