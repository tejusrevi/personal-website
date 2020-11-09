import React, {useState} from 'react';
import ConditionalRenderer from './ConditionalRenderer'
import './About.css';

function About(props) {
  const [context, setContext] = useState({})
  const [menu, setMenu] = useState("education")
  props.promise.then((data)=>setContext(data['about']))
  
  window.onload= ( )=>document.getElementById('education').style.backgroundColor = '#b2b2b2';
  function handleButtonClick(value){
    var arrOfMenus = document.getElementsByClassName('menu-items')
    Array.prototype.forEach.call(arrOfMenus, function(el) {
      if (el.id === value){
        el.style.backgroundColor = '#b2b2b2'
      }else{
        el.style.backgroundColor = '#f5f5f5'
      }
  });
    setMenu(value)
  }
  return (
    <div id="container">
      <div id="profile-container">
        <div id="profile-info">
          <div id="profile-image"/>
          <div id="content">
          <h3>Tejus Revi</h3>
            <h4>തേജസ് രവി</h4>
            <hr/>
            <h4>{context['jobTitle']}</h4>
            <h5>{context['location']}</h5>
            <div id="about-social">

            <a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tejusrevi/">
              <div id="linkedin-image" className="social-icon-about"/>
            </a>
    
            <a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/tejusrevi">
                <div id="github-image" className="social-icon-about"/>
            </a>

            <a id="gmail" target="_blank" rel="noopener noreferrer" href="mailto:tejusrevi@gmail.com">
                <div id="gmail-image" className="social-icon-about"/>
            </a>

          </div>
          </div>
        </div>
      </div>
      <div id="details">
        <div id="menu">
          <button id="education" className="menu-items" onClick={()=>handleButtonClick("education")}>Education</button>
          <button id="projects" className="menu-items" onClick={()=>handleButtonClick("projects")}>Projects</button>
          <button id="artworks" className="menu-items" onClick={()=>handleButtonClick("artworks")}>Artworks</button>
          <button id="interests" className="menu-items" onClick={()=>handleButtonClick("interests")}>Interests</button>
        </div>
        <div id="render-area">
          <ConditionalRenderer menuItem = {menu}/>
        </div>
      </div>
    </div>
  );
  
}

export default About;