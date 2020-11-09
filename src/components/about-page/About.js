import React, {useState} from 'react';
import './About.css';

function About(props) {
  const [context, setContext] = useState({})
  props.promise.then((data)=>setContext(data['about']))
  return (
    <div id="container">
      <div id="profile-container">
        <div id="profile-info">
          <div id="profile-image"/>
          <div id="content">
            <h3>തേജസ് രവി</h3>
            <h3>Tejus Revi</h3>
            <hr/>
            <h4>{context['jobTitle']}</h4>
            <h5>{context['location']}</h5>
            <div id="about-social">

            <a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tejusrevi/">
              <div id="linkedin-image" className="social-icon-about"/>
            </a>
    
            <a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/tejusrevi">
                <div id="github-image" className="social-icon-about"/>
            </a>

            <a id="gmail" target="_blank" rel="noopener noreferrer" href="mailto:tejusrevi@gmail.com">
                <div id="gmail-image" className="social-icon-about"/>
            </a>

          </div>
          </div>
        </div>
      </div>
      <div id="details">
        <div id="menu">
          <button className="menu-items">Education</button>
          <button className="menu-items">Projects</button>
          <button className="menu-items">Artworks</button>
          <button className="menu-items">Interests</button>
        </div>
        <div id="render-area">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna. Quis auctor elit sed vulputate mi. Aenean et tortor at risus. Non nisi est sit amet facilisis magna etiam tempor orci. Eget velit aliquet sagittis id consectetur purus ut. Malesuada fames ac turpis egestas maecenas pharetra convallis. Nunc vel risus commodo viverra maecenas. Vel eros donec ac odio tempor orci. Ultricies mi eget mauris pharetra et. Facilisis leo vel fringilla est. Feugiat nibh sed pulvinar proin. Enim tortor at auctor urna nunc. Id aliquet risus feugiat in ante metus dictum. Sed elementum tempus egestas sed sed. Massa placerat duis ultricies lacus sed turpis tincidunt id.

Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Volutpat ac tincidunt vitae semper quis lectus nulla. Egestas dui id ornare arcu odio. Aliquet bibendum enim facilisis gravida neque convallis. Vitae nunc sed velit dignissim sodales ut eu. Ante metus dictum at tempor commodo ullamcorper a. Imperdiet proin fermentum leo vel orci porta non pulvinar. Eu consequat ac felis donec et odio pellentesque diam volutpat. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Et tortor at risus viverra adipiscing at.

Urna condimentum mattis pellentesque id nibh tortor. Nunc congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat odio facilisis. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus. Id nibh tortor id aliquet lectus proin nibh nisl. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Eget duis at tellus at urna condimentum mattis pellentesque id. Posuere ac ut consequat semper viverra nam libero justo. Malesuada fames ac turpis egestas maecenas pharetra convallis. Pharetra vel turpis nunc eget lorem. Arcu bibendum at varius vel pharetra vel turpis. Neque convallis a cras semper auctor neque vitae tempus quam. Habitant morbi tristique senectus et netus et malesuada. Tincidunt ornare massa eget egestas purus viverra accumsan in. Ut consequat semper viverra nam libero justo laoreet. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. A iaculis at erat pellentesque adipiscing commodo elit.

Lectus urna duis convallis convallis tellus id interdum. Amet cursus sit amet dictum sit. Eu lobortis elementum nibh tellus molestie. Iaculis eu non diam phasellus vestibulum lorem sed risus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Bibendum neque egestas congue quisque egestas. Leo vel fringilla est ullamcorper eget nulla facilisi. Congue quisque egestas diam in arcu. Commodo odio aenean sed adipiscing diam donec adipiscing. Feugiat nibh sed pulvinar proin gravida hendrerit. Sapien faucibus et molestie ac feugiat. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam.

Aliquam sem fringilla ut morbi tincidunt. Vestibulum mattis ullamcorper velit sed ullamcorper. Vitae congue mauris rhoncus aenean vel elit. Id cursus metus aliquam eleifend mi in. A condimentum vitae sapien pellentesque habitant morbi tristique. Amet risus nullam eget felis. In dictum non consectetur a erat. Odio pellentesque diam volutpat commodo. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Duis ultricies lacus sed turpis tincidunt id. Vitae justo eget magna fermentum. Faucibus a pellentesque sit amet porttitor. Ipsum a arcu cursus vitae congue. Sed turpis tincidunt id aliquet risus feugiat in. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.

Ultrices in iaculis nunc sed augue lacus. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Eu volutpat odio facilisis mauris sit amet massa. Cras ornare arcu dui vivamus arcu. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Quis imperdiet massa tincidunt nunc. Imperdiet dui accumsan sit amet nulla. Fringilla est ullamcorper eget nulla facilisi etiam. Suscipit tellus mauris a diam. Adipiscing enim eu turpis egestas pretium aenean. Porttitor lacus luctus accumsan tortor. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Vel pharetra vel turpis nunc eget lorem dolor sed.

Velit aliquet sagittis id consectetur purus. Volutpat odio facilisis mauris sit. Consectetur purus ut faucibus pulvinar elementum integer. Egestas purus viverra accumsan in nisl nisi scelerisque. Convallis posuere morbi leo urna molestie at elementum. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Bibendum at varius vel pharetra vel turpis nunc eget. Vitae et leo duis ut diam quam. Feugiat in ante metus dictum at tempor commodo ullamcorper. Lacus sed viverra tellus in hac habitasse.

Proin nibh nisl condimentum id venenatis a condimentum vitae. Erat imperdiet sed euismod nisi porta lorem. Et malesuada fames ac turpis egestas sed tempus urna. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Neque aliquam vestibulum morbi blandit cursus risus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Id porta nibh venenatis cras sed felis. Molestie at elementum eu facilisis sed. Velit dignissim sodales ut eu. Pellentesque adipiscing commodo elit at. Lacus sed turpis tincidunt id. Felis donec et odio pellentesque diam volutpat. Ut eu sem integer vitae justo eget magna fermentum. Sed pulvinar proin gravida hendrerit. Duis ultricies lacus sed turpis tincidunt.

Vulputate odio ut enim blandit volutpat maecenas. Feugiat vivamus at augue eget arcu dictum varius duis at. Cursus turpis massa tincidunt dui ut ornare. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Lacus vestibulum sed arcu non odio. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Massa tempor nec feugiat nisl pretium fusce. Consectetur lorem donec massa sapien faucibus et. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Posuere sollicitudin aliquam ultrices sagittis. Mauris ultrices eros in cursus turpis massa tincidunt dui. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Pulvinar etiam non quam lacus suspendisse faucibus.
        </div>
      </div>
    </div>
  );
  
}

export default About;