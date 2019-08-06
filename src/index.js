import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
require('../node_modules/bootstrap/dist/css/bootstrap.css');


ReactDOM.render(<Router>
        <div>
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
