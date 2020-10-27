import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './2.0/App';
import * as serviceWorker from './serviceWorker';
import ResponsiveDrawer from "./components/DrawerTest";
import { HashRouter as Router } from 'react-router-dom';
import {CssBaseline} from "@material-ui/core";



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <CssBaseline></CssBaseline>
          <App></App>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
