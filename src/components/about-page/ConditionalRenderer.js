import React from 'react';
import Education from './menu-items/Education'
import Projects from './menu-items/Projects'
import Artworks from './menu-items/Artworks'
import Interests from './menu-items/Interests'
import './ConditionalRenderer.css'
function ConditionalRenderer(props) {
  if (props.menuItem === "education"){
    return (
      <div id="menu-heading">
        { props.menuItem }.
      </div>
    );
  }else if(props.menuItem === "projects"){
    return (
      <div id="menu-heading">
        { props.menuItem }.
      </div>
    );
  }else if(props.menuItem === "artworks"){
    return (
      <div id="menu-heading">
        { props.menuItem }.
      </div>
    );
  }else if(props.menuItem === "interests"){
    return (
      <div id="menu-heading">
        { props.menuItem }.
      </div>
    );
  }
  
}

export default ConditionalRenderer;