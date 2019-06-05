import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import Users from '../components/users.jsx';
import Contact from '../components/contact.jsx';
import Content from './components/Content.jsx';

const routing = (<Router>
    <div>
        <div class="col-md-3">
            <div class="list-group">
                <a href="#" class="list-group-item active main-color-bg">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
                </a>
                <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item">Morbi leo risus</a>
                <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item">Vestibulum at eros</a>
            </div>
        </div>
<Route path="/users" component={<Content/>} />
        <Route path="/contact" component={Contact} />
    </div>
</Router>
)
export default routing;
