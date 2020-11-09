import React from "react";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import Homepage from "./components/home-page/Homepage";
import About from "./components/about-page/About";
import Projects from "./components/projects-page/Projects";
import databasePromise from './secret'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={()=><Homepage promise={databasePromise}/>} exact />
        <Route path="/about" component={()=><About promise={databasePromise}/>} />
        <Route component={()=><Homepage promise={databasePromise}/>} />
      </Switch>
    </div>
  );
}

export default App;
