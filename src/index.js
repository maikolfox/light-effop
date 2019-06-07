import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


import TauxDactivite from './components/mainContent/TauxDactivite.jsx';
import Content2 from './components/Content2.jsx';



import { createBrowserHistory } from "history";
import indexRoutes from "./route/index.jsx";
import * as serviceWorker from './serviceWorker';

 const routing = (
 <Router>
     <div>
     <App/>
         <div className="col-md-3">
             <div className="list-group">
                 <a href="#" className="list-group-item active main-color-bg">
                     <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Menu Géneral
                 </a>
                 <a href="/TauxDactivite" className="list-group-item">Taux d'activité mensuel</a>
                 <a href="/contact" className="list-group-item">Charges et poids par emplois</a>
                 <a href="#" className="list-group-item">Charge et poids par processus</a>
                 <a href="#" className="list-group-item">Charge et poids par tache et par processus</a>
                 <a href="#" className="list-group-item">Charge et poids par tache et par processus</a>
             </div>
         </div>
         <Route path="/users" component={Content2} />
         <Route path="/TauxDactivite" component={TauxDactivite} />
     </div>
 </Router>)
 ReactDOM.render(routing, document.getElementById('root'));


