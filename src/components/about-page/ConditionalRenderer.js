import React, {useState} from 'react';
import Education from './menu-items/Education'
import Projects from './menu-items/Projects'
import Artworks from './menu-items/Artworks'

import './ConditionalRenderer.css'
function ConditionalRenderer(props) {
  const [educationData, setEducationData] = useState(props.data.education)
  const [projectsData, setProjectsData] = useState(props.data.projects)
  const [tagsData, setTagsData] = useState(props.data.tags)
  const [artworksData, setArtworksData] = useState(props.data.drawings)
  if (props.menuItem === "education"){
    return (
      <div>
      <div id="menu-heading">
        { props.menuItem }.
      </div>
        <Education data = {educationData}/>
      </div>
    );
  }else if(props.menuItem === "projects"){
    return (
      <div>
        <div id="menu-heading">
          { props.menuItem }.
        </div>
        <Projects data = {projectsData} tags={tagsData}/>
      </div>
    );
  }else if(props.menuItem === "drawings"){
    return (
      <div>
        <div id="menu-heading">
          { props.menuItem }.
        </div>
        <Artworks data = {artworksData}/>
      </div>
    );
  }  
}

export default ConditionalRenderer;