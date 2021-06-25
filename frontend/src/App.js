import React, { Component } from "react";

import {  BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navigation from "./component/mainNavigation/navigation"

import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  render(){
  return (
     <BrowserRouter>

     <>
     <Navigation />
     <Switch>
      
      <Redirect  from ="/" to="/login/" exact />
      <Route  path="/login" component={Login} />
      <Route  path="/signup" component={Signup} />
      </Switch>
    </>
     </BrowserRouter>
  
  );
}}

export default App;
