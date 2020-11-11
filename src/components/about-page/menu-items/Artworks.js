import React from 'react';
import './Artworks.css';
import FadeIn from 'react-fade-in';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

function Artworks(props){
  const childElements = props.data.map(function(element){
    return (
      <FadeIn>
             <img className='image-element-class' src={element.src} />
      </FadeIn>
     );
 });

  return(
    <div id="artworks-container">
      <Masonry
                className={'artworks-gallery'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
    </div>
  )
}

export default Artworks;