import React from 'react';
import './Art.css';
import data from '../../info-en'
function Art(props){
  var src;
  props.data.map((e)=>{
    if (e.name == window.location.pathname.split('/')[2]) src = e.src
  })
  return(
    <div id="art-container">
      <img id="art" src={src} alt="art"/>
      <div id="opinion-bar">
        <form id="opinion">
          <input name="opinion" type="text"/>
        </form>
      </div>
    </div>
  )
}
export default Art;