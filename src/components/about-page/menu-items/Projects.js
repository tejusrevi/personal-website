import React, {useState} from 'react';
import FadeIn from 'react-fade-in';
import './Projects.css'

function Projects(props){
  const [projectsArr, setProjectsArr] = useState(props.data);
  const [tagsArr, setTagsArr] = useState([]);
  function handleTagClick(tag){
    var arr = []
    props.data.forEach(project => {
      if(project.tags.includes(tag.tag)) arr.push(project)
    });
    setProjectsArr(arr)
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
            return <div onClick= {()=>handleTagClick({tag})} className="tag" key={tag}>{tag}</div>
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
  return(
    <div id="projects-container">
      {projects}
    </div>
  )
}

export default Projects;