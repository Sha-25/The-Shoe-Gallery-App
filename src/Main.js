import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
 
        class Main extends Component {
            render() {
              return (
                <BrowserRouter>
                  <div>
                    <h1>The Shoe Gallery </h1>
                    <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Inspired Creations</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>  
                    </ul>
                    <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/> 
                    </div>
                  </div>
                </BrowserRouter>
              );
            }
          }
 

 
export default Main;