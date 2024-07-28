import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";
import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';
import img3 from '../imgs/img3.jpg';
import cap1 from '../imgs/cap1.png';
import cap2 from '../imgs/cap2.png';
import cap3 from '../imgs/cap3.png';
export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
//   const imagesMap = {
//     img1: img1,
//     img2: img2,
//     img3: img3,
//     cap1: cap1,
//     cap2: cap2,
//     cap3: cap3
//   };
//   const slides = data.map(slide => ({
//     ...slide,
//     src: imagesMap[slide.id]
//   }));
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {console.log(data)}
      {data.map((item, idx) => {
        return (
          <img
            src={item}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
