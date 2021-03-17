import React, {useState} from 'react';
import './Homepage.css';
import Head from './head/Head'


function Homepage(props){
  console.log('%cTejus says hi :)', 'color: white;background: black;font-size: 3em;');
  const [homepage, setHomepage] = useState(props.data.homepage)
  window.onload = function() {
      if(document.getElementById("intro-container") === null) return;
      document.getElementById("intro-container").style.top = document.getElementById("canvas").style.height.replace("px","")/1.6 + "px";
  
      if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
        document.getElementById("social").style.width = "100%"
      }
  };
  
  window.onresize = function() {
      document.getElementById("intro-container").style.top = document.getElementById("canvas").style.height.replace("px","")/1.6 + "px";
  };

  function handleColorChange(ev){
      if(document.getElementById('social') === null) return;
      if(ev.target.id === "linkedin-image")
          document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #283e4b, #283e4b)';
      else if(ev.target.id === "github-image")
          document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #882792, #462574)';
      else if(ev.target.id === "instagram-image")
          document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #bc0097, #e7b53e)';
      else if(ev.target.id === "twitter-image")
          document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #1da1f2, #0262e2)';
      else if(ev.target.id === "kaggle-image")
          document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #346D9D, #F7CB43)';
  }
  
  function handleReset(ev){
      document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #324f6e, #324f6e)';
  }
  
  
  return(
      <div>
          <Head/>
          <div id="content">
              <div id="intro-container" className="initial">
                  <div id="intro" className="typewriter">
                      <h1>{homepage['heading']}</h1>
                      <h3>{homepage['subHeading1']}</h3>
                      <h4>{homepage['subHeading2']}</h4>
                  </div>
                  <div id="social" className="initial">
          
                      <a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tejusrevi/">
                          <div id="linkedin-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/>
                      </a>
              
                      <a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/tejusrevi">
                          <div id="github-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/>
                      </a>
              
                      <a id="kaggle" target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com/tejusrevi">
                          <div id="kaggle-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/>
                      </a>
              
                      <a id="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tejusrevi/">
                          <div id="instagram-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/> 
                      </a>
                      <a id="twitter" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tejusrevi/">
                          <div id="twitter-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/> 
                      </a>
          
                  </div>
                  <div id="more">
                      <button className="more-button" onClick={ ()=> window.open('/projects',"_self") }>More About Me</button>
                  </div>
                  <div id="credits">
                    <h3>{homepage['credit']}</h3>
                    <h3><a href={homepage['srcLink']}>{homepage['srcText']}</a></h3>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Homepage;