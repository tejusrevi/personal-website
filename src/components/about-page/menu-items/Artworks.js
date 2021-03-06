import React from 'react';
import './Artworks.css';
import FadeIn from 'react-fade-in';
import Masonry from 'react-masonry-css'

function Artworks(props){
  const childElements = props.data.map(function(element){
    return (
      <div className='image-element-container' key={element.name}>
        <FadeIn delay={500}>
          <img className="image-element" src={element.src}  alt="art" onClick={()=>window.open( `/artworks/${element.name}`)}/>
        </FadeIn>
      </div>
     );
 });

  return(
    <div id="artworks-container">
      <Masonry 
      breakpointCols={window.innerWidth>1000? 3:2}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
                {childElements}
            </Masonry>
    </div>
  )
}

export default Artworks;