import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const particlesOptions = {
  	particles: {
      number:{
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    color: {
      value: '#fff'
    },
    line_linked: {
      opacity: 1
    }
}

class App extends Component {
  render(){
    return (
      <div className="App">
      <Particles className="particles"
            params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {// <FaceRecognition />}
      }
      </div>
    );
  }
}

export default App;
