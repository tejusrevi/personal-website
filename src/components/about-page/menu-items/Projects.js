import React from 'react';
import FadeIn from 'react-fade-in';
import './Projects.css'

function Projects(props){
  const projects = props.data.map(element => {
    return(
      <div className="project" id={element.id} key={element.id}>
        <FadeIn delay={0}>
        {element.media.type === 'video' ? (
        <video className="project-video" src={element.media.src} autoPlay='autoplay' loop='loop' muted='muted'/>
      ) : (
        <img className="project-image" src={element.media.src}/>
      )}
      <div className="project-details">
        <div className="project-title">{element.name}</div>
        <div className="project-description">{element.description}</div>
        <div className="tags">
          {element.tags.map(tag=>{
            return <div className="tag" key={tag}>{tag}</div>
          })}
        </div>
        <div>Links</div>
        <div className="links">
          {element.links.map(link=>{
            return <div className="link" key={link.name}><div className={link.name+"-image"}/><a href={link.href} target="_blank">{link.name}</a></div>
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