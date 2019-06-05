import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Users from './components/users.jsx';
import Contact from './components/contact.jsx';
import Content from './components/Content.jsx';
import Content2 from './components/Content2.jsx';


//import Routing from './route/Route.jsx';

import * as serviceWorker from './serviceWorker';
const routing = (
<Router>
    <div>
    <App/>

        <div class="col-md-3">
            <div class="list-group">
                <a href="#" class="list-group-item active main-color-bg">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
                </a>
                <a href="/users" class="list-group-item">Content2</a>
                <a href="/contact" class="list-group-item">Morbi leo risus</a>
                <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item">Vestibulum at eros</a>
            </div>
        </div>
        <Route path="/users" component={Content2} />
        <Route path="/contact" component={Content} />
    </div>
</Router>)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
