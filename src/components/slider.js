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
  const changeColor = () => {
    if (current === 0) {debugger
      var bt = document.getElementById("bt1");
      bt.style.backgroundColor = "red";
      var otherBt =document.querySelectorAll('button')
      otherBt.style.backgroundColor = "white";
    } else if (current === 1) {
      var bt = document.getElementById("bt2");
      bt.style.backgroundColor = "red";
    } else if (current === 2) {
      var bt = document.getElementById("bt3");
      bt.style.backgroundColor = "red";
    } else if (current === 3) {
      var bt = document.getElementById("bt4");
      bt.style.backgroundColor = "red";
    } else if (current === 4) {
      var bt = document.getElementById("bt5");
      bt.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <div className="sliderr" onTouchMove={console.log("касание")}>
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

      <ul className="dots">
        <button
          className="dots__item"
          id="bt1"
          style={{ backgroundColor: "white" }}
          onMouseDown={(e) => {
            setCurrent(0);
          }}
          onMouseUp={
            (e) => {changeColor();}
          }
        ></button>
        <button
          className="dots__item"
          id="bt2"
          style={{ backgroundColor: "white" }}
          onMouseDown={(e) => {
            setCurrent(1);
          }}
          onMouseUp={
            (e) => {changeColor();}
          }
        ></button>
        <button
          className="dots__item"
          id="bt3"
          style={{ backgroundColor: "white" }}
          onMouseDown={(e) => {
            setCurrent(2);
          }}
          onMouseUp={
            (e) => {changeColor();}
          }
        ></button>
        <button
          className="dots__item"
          id="bt4"
          style={{ backgroundColor: "white" }}
          onMouseDown={(e) => {
            setCurrent(3);
          }}
          onMouseUp={
            (e) => {changeColor();}
          }
        ></button>
        <button
          className="dots__item"
          style={{ backgroundColor: "white" }}
          id="bt5"
          onMouseDown={(e) => {
            setCurrent(4);
          }}
          onMouseUp={
            (e) => {changeColor();}
          }
        ></button>
      </ul>
    </div>
  );
};
export default Slider;
