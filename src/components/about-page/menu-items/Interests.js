import React from 'react';
import FadeIn from 'react-fade-in';
import './Interests.css'

function Interests(props){
  const interests = props.data.map(element => {
    return(
      <FadeIn>
        <li className="interest" key={element.interest}>
          {element.interest}
          {element.hasOwnProperty('link')?
          <span className="external-link" onClick={()=>{window.open(element.link)}}>
          </span>
          :
          ''}
        </li>
        </FadeIn>
    )
  })
  return(
    <div id="interests-container">
      <ul>
      {interests}
      </ul>
    </div>
  )
}

export default Interests;