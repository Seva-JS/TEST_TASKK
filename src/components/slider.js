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

      <ul class="dots">
        <button
          class="dots__item"
          onClick={(e) => {
            setCurrent(0);
          }}
        ></button>
        <button
          class="dots__item"
          onClick={(e) => {
            setCurrent(1);
          }}
        ></button>
        <button
          class="dots__item"
          onClick={(e) => {
            setCurrent(2);
          }}
        ></button>
        <button
          class="dots__item"
          onClick={(e) => {
            setCurrent(3);
          }}
        ></button>
        <button
          class="dots__item"
          onClick={(e) => {
            setCurrent(4);
          }}
        ></button>
      </ul>
    </div>
  );
};
export default Slider;
