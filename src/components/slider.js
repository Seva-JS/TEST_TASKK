import React, {useState} from "react";
import {sliderComponents} from "./sliderComponents";
import {HiArrowNarrowLeft, HiArrowNarrowRight} from "react-icons/hi";
import "../styles/app.css";

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1);

    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return (

        <section className="sliderr">
            <HiArrowNarrowLeft className="left-arrow" onClick={prevSlide}/>
            <HiArrowNarrowRight className="right-arrow" onClick={nextSlide}/>
            {sliderComponents.map((slide, index) => {
                return (
                    <div
                        key={index}>
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image'/>
                        )}
                    </div>
                );
            })}
        </section>
    );
};
export default Slider;
