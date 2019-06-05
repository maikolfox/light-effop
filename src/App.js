import React, { Component } from 'react';
import SideBar from './components/SideBar.jsx';
import TauxDactivite from './components/mainContent/TauxDactivite.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import MainHeader from './components/MainHeader.jsx';
import MainNavBar from './components/MainNavbar.jsx';


import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'




class App extends Component {

  render() {
    return (
      <div>
        {/* <MainNavBar /> */}
        <MainHeader />
        {/* <Breadcrumb /> */}
        <section id="main">
          <div class="container">
            <div class="row">
              {/* <!--left menu bar--> */}
              {/* <SideBar /> */}
              {/* <!--main content--> */}
              {/* <Content panelTitle="Main title" /> */}
            
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;