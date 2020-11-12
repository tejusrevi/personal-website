import React from "react";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import Homepage from "./components/home-page/Homepage";
import About from "./components/about-page/About";
import Art from './components/single-art-page/Art'
import data from './info-en.js'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={()=><Homepage data={data}/>} exact />
        <Route path="/about" component={()=><About data={data}/>} />
        <Route path="/art/:slug" component={()=><Art data={data.artworks}/>} />
        <Route component={()=><Homepage data={data}/>} />
      </Switch>
    </div>
  );
}

export default App;
