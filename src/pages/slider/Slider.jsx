import React from "react";
import { useState } from "react";
import styles from "./Slider.module.css";
const slideStyles = {
  width: "100%",
  margin: "100px",
  marginTop: "90px",
  height: "100vh",
  borderRadius: "10px",
  backgroundSize: "cover",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div>
      <div>
        <div className={styles.leftArrowStyles} onClick={goToNext}>
          ❰
        </div>
        <div className={styles.rightArrowStyles} onClick={goToNext}>
          ❱
        </div>
      </div>
      <div style={slideBackground}>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              className={styles.dotStyle}
              // style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
