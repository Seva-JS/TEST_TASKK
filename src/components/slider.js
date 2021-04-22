import React, { useState } from "react";
import { sliderComponents } from "./sliderComponents";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import "../styles/app.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const stylee = () => {debugger
    if (current == 0) {
      const elem= document.getElementById("bt1")
      elem.style.backgroundColor='red';
    } else if (current == 1) {
      return "red";
    } else if (current == 2) {
      return "red";
    } else if (current == 3) {
      return "red";
    } else if (current == 4) {
      return "red";
    }
  };

  return (
    <div>
    {stylee()}
      <div className="sliderr">
        <HiArrowNarrowLeft className="left-arrow" onClick={prevSlide} />
        <HiArrowNarrowRight className="right-arrow" onClick={nextSlide} />
        {sliderComponents.map((slide, index) => {
          return (
            <div
              id="mySwipe"
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </div>
      <div className="buttons-selector">
        <button
          className="buttons"
          id="bt1"
          style={{ backgroundColor:''}}
          onClick={(e) => {
            setCurrent(0);
          }}
        >
          1
        </button>
        <button
          className="buttons"
          id="bt2"
          style={{ backgroundColor:'' }}
          onClick={(e) => {
            setCurrent(1);
          }}
        >
          2
        </button>
        <button
          className="buttons"
          id="bt3"
          style={{ backgroundColor: ''}}
          onClick={(e) => {
            setCurrent(2);
          }}
        >
          3
        </button>
        <button
          className="buttons"
          id="bt4"
          style={{ backgroundColor:''}}
          onClick={(e) => {
            setCurrent(3);
          }}
        >
          4
        </button>
        <button
          className="buttons"
          id="bt5"
          style={{ backgroundColor:'' }}
          onClick={(e) => {
            setCurrent(4);
          }}
        >
          5
        </button>
      </div>
    </div>
  );
};
export default Slider;
