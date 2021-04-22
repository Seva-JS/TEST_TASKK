import React from 'react';
import './styles/App.css';
import Slider from "./components/slider"
import {sliderComponents} from "./components/sliderComponents";



class App extends React.Component {

  render() {
    return (
      <div>
        <Slider slides={sliderComponents}/>
        <Slider slides={sliderComponents}/>
        </div>
    );
  }
}

export default App;