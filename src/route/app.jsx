import Users from './components/users.jsx';
import Contact from './components/contact.jsx';
import Content from './components/Content.jsx';
import Content2 from './components/Content2.jsx';
import SideBar from './components/SideBar.jsx';
import React, {Component} from "react";

let appRoutes;



  appRoutes = [
    {
      path: "/Contact",
      sidebar: ()=><SideBar/>,
      main:()=><Content/>
    }
    
  ];


export default appRoutes;
