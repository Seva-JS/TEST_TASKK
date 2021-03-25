import React from "react";
import { sliderComponents } from "./sliderComponents";
import { HiArrowNarrowLeft,HiArrowNarrowRight } from "react-icons/hi";
import '../styles/app.css';

export default class Slider extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className='sliderr'>
      <HiArrowNarrowLeft className='left-arrow'/>
      <HiArrowNarrowRight className='right-arrow'/>
        {sliderComponents.map((slide)  => {
          return <img src={slide.image} className='slider-image' alt="Some pick." />;
        })}
      </section>
    );
  }
}
