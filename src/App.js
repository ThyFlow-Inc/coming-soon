import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import logo from './assets/big_logo.png'; // Tell webpack this JS file uses this image

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
   
        <div className="content">
          <div className="title-holder">
          <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
          </div>
            <h1>Need a haircut?</h1>
            <p>ThyFlow connects you to the best licensed barbers in your area. Download the app, pick a barber, and they'll arrive to your home in no time!</p>
          </div>
          <input className="cta1" type="text" placeholder="Notify me First" />
          <a href="mailto:support@thyflow.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        
      </div>
    );
  }
}

export default App;