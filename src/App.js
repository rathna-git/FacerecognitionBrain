import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import  Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '70e6015e25e34b4e899e05dcd2e32ad2'
});

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
  constructor(){
    super();
    this.state ={
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState = {input: event.target.value};
  }

  onButtonSubmit = () => {
    console.log('Click');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg")
      .then(
      function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render(){
    return (
      <div className="App">
      <Particles className="particles"
            params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
           onInputChange={this.onInputChange}
           onButtonSubmit={this.onButtonSubmit}/>
        {// <FaceRecognition />}
      }
      </div>
    );
  }
}

export default App;
