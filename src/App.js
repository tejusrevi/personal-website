import React from "react";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import Homepage from "./components/home-page/Homepage";
import About from "./components/about-page/About";
import data from './info-en.js'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={()=><Homepage data={data}/>} exact />
        <Route path="/about" component={()=><About data={data}/>} />
        <Route component={()=><Homepage data={data}/>} />
      </Switch>
    </div>
  );
}

export default App;
