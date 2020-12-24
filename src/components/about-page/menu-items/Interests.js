import React from 'react';
import FadeIn from 'react-fade-in';
import './Interests.css'

function Interests(props){
  const interests = props.data.map(element => {
    return(
      <FadeIn>
        <li className="interest" key={element.interest}>
          {element.hasOwnProperty('link')?
          <a className="external-link" href={element.link}>{element.interest}<span className="external-link-image"/></a>
          :
          <span>{element.interest}</span>}
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