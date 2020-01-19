import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      image_url: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({image_url: this.state.input})
    app.models
     .predict(
       Clarifai.FACE_DETECT_MODEL,
       this.state.input)
      .then(
      function(response) {
      // do something with response
      console.log('inside response');
      console.log(response);
      console.log(response.ouputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imageUrl={this.state.image_url}/>
      </div>
    );
  }
}

export default App;
