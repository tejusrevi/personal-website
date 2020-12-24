import React from 'react';
import './Education.css'
import FadeIn from 'react-fade-in'
function Education(props){
  return(
    <div id="education-container">
      <h3 className="about-sub">Education</h3>
      {props.data.map(e =>
        <div key={e.name}>
        <FadeIn className="educations">
          <div className="education-icon" style={{backgroundImage:`url(${e['icon']})`}}></div>
          <div className="education-details">
            <div className="education-name">{e.name}</div>
            <div className="education-type">{e.type}</div>
            <div className="education-date">{e.date}</div>
          </div>
        </FadeIn>
        </div>
      )}
    </div>
  )
}

export default Education;