import React from 'react';
import './Homepage.css';
import Head from './head/Head'


function Homepage(){
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
        else if(ev.target.id === "facebook-image")
            document.getElementById("social").style.backgroundImage = 'linear-gradient(90deg, #16a4fa, #0262e2)';
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
                        <h1>Hey there! I'm Tejus</h1>
                        <h3>I build cool stuff with code</h3>
                        <h4>(Like this website!)</h4>
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
                
                        <a id="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tejx.r/">
                            <div id="instagram-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/> 
                        </a>
                        <a id="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Tejus.Revi/">
                            <div id="facebook-image" className="social-icon" onMouseOver={handleColorChange.bind(this)} onMouseOut={handleReset.bind(this)}/> 
                        </a>
            
                    </div>
                    <div id="menu">
                        <div className="menu-item">
                            <button className="menu-button" onClick={ ()=> window.open('/about',"_self") }>About</button>
                        </div>
                        <div className="menu-item">
                        <div id="projects" className="menu-image"/>
                            <button className="menu-button" onClick={ ()=> window.open('/projects',"_self") }>Projects</button>
                        </div>
                        <div className="menu-item">
                        <div id="contact" className="menu-image"/>
                            <button className="menu-button" onClick={ ()=> window.open('mailto:tejusrevi@gmail.com') }>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;