import React, {useState} from 'react';
import './Art.css';
function Art(props){
  var src;
  var art;
  props.data.map((e)=>{
    if (e.name == window.location.pathname.split('/')[2]) src = e.src
  })
  if (src != null) art = <img id="art" src={src} alt="art"/>
  else art = <div>Not Found</div>
  return(
    <div id="art-container">
      {art}
    </div>
  )
}
export default Art;