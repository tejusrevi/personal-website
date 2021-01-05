import React from "react";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import Homepage from "./components/home-page/Homepage";
import About from "./components/about-page/About";
import Projects from "./components/about-page/menu-items/Projects";
import Art from './components/single-art-page/Art'
import data from './info-en.js'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={()=><Homepage data={data}/>} exact />
        <Route path="/artworks/:slug" component={()=><Art data={data.artworks}/>} />
        <Route path="/about" component={()=><About data={data} menu="projects"/>} />
        <Route path="/projects" component={()=><About data={data} menu="projects"/>} />
        <Route path="/education" component={()=><About data={data} menu="education"/>} />
        <Route path="/drawings" component={()=><About data={data} menu="drawings"/>} />
        <Route component={()=><Homepage data={data}/>} />
      </Switch>
    </div>
  );
}

export default App;
