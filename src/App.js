import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from  './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class  App extends Component {
  return (
    <div className="App">
     <Particles className='particles'
          params={particlesOptions}
        />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
