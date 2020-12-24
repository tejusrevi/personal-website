import React, {useState} from 'react';
import Education from './menu-items/Education'
import Projects from './menu-items/Projects'
import Artworks from './menu-items/Artworks'
import Interests from './menu-items/Interests'
import './ConditionalRenderer.css'
function ConditionalRenderer(props) {
  const [educationData, setEducationData] = useState(props.data.education)
  const [projectsData, setProjectsData] = useState(props.data.projects)
  const [tagsData, setTagsData] = useState(props.data.tags)
  const [artworksData, setArtworksData] = useState(props.data.artworks)
  const [interestsData, setInterestsData] = useState(props.data.interests)
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
  }else if(props.menuItem === "artworks"){
    return (
      <div>
        <div id="menu-heading">
          { props.menuItem }.
        </div>
        <Artworks data = {artworksData}/>
      </div>
    );
  }else if(props.menuItem === "interests"){
    return (
      <div>
        <div id="menu-heading">
          { props.menuItem }.
        </div>
        <Interests data = {interestsData}/>
      </div>
    );
  }
  
}

export default ConditionalRenderer;