import React, {useState, useEffect} from 'react';
import './Projects.css'

function Projects(props){
  console.log(props.data)
  return(
    <div id="projects-container">
      <div className="project"></div>
      <div className="project"></div>
    </div>
  )
}

export default Projects;