import React, { Component } from 'react';
import SideBar from './components/SideBar.jsx';
import Content from './components/Content.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import MainHeader from './components/MainHeader.jsx';
import MainNavBar from './components/MainNavbar.jsx';


class App extends Component {

  render() {
    return (
      <div>
        <MainNavBar />
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