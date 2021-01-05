import React, {useState} from 'react';
import FadeIn from 'react-fade-in';
import './Projects.css'

function Projects(props){
  const [projectsArr, setProjectsArr] = useState(props.data);
  const [tagsArr, setTagsArr] = useState(props.tags);

  const tagColors = {
    "topic": "#e2e2df",
    "language": "#C6DEF1",
    "framework": "#F7D9C4",
    "platform": "#C9E4DE",
    "library": "#E2CFC4",
    "database": "#DBCDF0",
    "format": "#FAEDCB",
  }

  function handleTagClick(tag){
    if(tag === "all") setProjectsArr(props.data);
    else{
      var arr = []
      props.data.forEach(project => {
        if(project.tags.includes(tag)) arr.push(project)
      });
      setProjectsArr(arr)
    }
  }
  function handleShowTags(){
    if(document.getElementById("tag-options").style.height == "0px"){
      document.getElementById("tag-options").style.height = "100%";
      document.getElementById("show-tags").innerHTML = "Hide Filters ";
    }
    else {
      document.getElementById("tag-options").style.height = "0px"
      document.getElementById("show-tags").innerHTML = "Filter Projects"
    }
  }
  
  const projects = projectsArr.map(element => {
    return(
      <div className="project" id={element.id} key={element.id}>
        <FadeIn delay={0}>
        {element.media.type === 'video' ? (
        <video className="project-video" src={element.media.src} autoPlay='autoplay' loop='loop' muted='muted'/>
      ) : (
        <img className="project-image" src={element.media.src} alt="project"/>
      )}
      <div className="project-details">
        <div className="project-title">{element.name}</div>
        <div className="project-description">{element.description}</div>
        <div className="tags">
          {element.tags.map(tag=>{
            return <div onClick= {()=>handleTagClick(tag)} className="tag" key={tag}>{tag}</div>
          })}
        </div>
        <span>Links</span>
        <div className="links">
          {element.links.map(link=>{
            return <div className="link" key={link.name}><div className={link.name+"-image"}/><a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a></div>
          })}
        </div>
      </div>
      </FadeIn>
      </div>
    )
  });

  const tags = tagsArr.map(element=>{
    return(
      <button className="tag-option" 
      onClick={()=>handleTagClick(element.name)} 
      key={element.name} 
      style={{backgroundColor:tagColors[element.type]}}>
        {element.name}
      </button>      
    )
  })
  return(
    <div>
      <div id="tag-options" style={{height:"0px"}}>
        {tags}
        <button className="tag-option" onClick={()=>handleTagClick("all")}>All</button>
      </div>
      <div id="show-tags-container">
        <button id="show-tags" onClick={handleShowTags}>Filter Projects <div id="down-arrow"/></button>
      </div>
      <div id="projects-container">
        {projects}
      </div>
    </div>
  )
}

export default Projects;