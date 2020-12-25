import React, {useState} from 'react';
import './Education.css'
import FadeIn from 'react-fade-in'
import Modal from 'react-modal';
import { render } from '@testing-library/react';
 



function Education(props){
  const [courses,setCourses] = useState([]);
  //----------------------------
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  Modal.setAppElement('#root');
  function Courses(props){
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
    }
    function closeModal(){
      setIsOpen(false);
    }
      return (
        <div>
          <button className="show-courses" onClick={openModal}>Year {props.year}</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Course"
          >
            <div className="modal-header">
              <h2>Courses</h2>
              <button className="close-button" onClick={closeModal}>X</button>
            </div>
            <div id="course-container">
              {props.courses.map(e=>{
                return(
                  <div key={e}>{e}</div>
                )
              })}
            </div>
          </Modal>
        </div>
      );
  }
  //------------------------------------
  const schools = props.data.map(e =>
    <div key={e.name}>
    <FadeIn className="educations">
      <div className="education-icon" style={{backgroundImage:`url(${e['icon']})`}}></div>
      <div className="education-details">
        <div className="education-name">{e.name}</div>
        <div className="education-type">{e.type}</div>
        <div className="education-date">{e.date}</div>
        <div className="course-buttons">
          {e.years.map((year)=>{
            return(
            <Courses year={year.year} courses={year.courses} key={e.name+"-"+year.year}/>
            )
          })}
        </div>
      </div>
    </FadeIn>
    </div>
  );    
  return(
    <div id="education-container">
      <div id="ren"></div>
      {schools}
    </div>
  )
}

export default Education;