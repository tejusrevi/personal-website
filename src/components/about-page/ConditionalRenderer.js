import React, {useState} from 'react';
import Projects from './menu-items/Projects'

import './ConditionalRenderer.css'
function ConditionalRenderer(props) {
  const [projectsData, setProjectsData] = useState(props.data.projects)
  const [tagsData, setTagsData] = useState(props.data.tags)
  if(props.menuItem === "projects"){
    return (
      <div>
        <div id="menu-heading">
          { props.menuItem }.
        </div>
        <Projects data = {projectsData} tags={tagsData}/>
      </div>
    );
  }
}

export default ConditionalRenderer;