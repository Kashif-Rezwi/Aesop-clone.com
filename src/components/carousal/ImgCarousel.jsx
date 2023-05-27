import { useState } from "react";
import Slider from "react-slick";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { CustomDots } from "./CustomDots";

export const ImgCarousel = ({ Images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: setCurrentSlide,
  };
  return (
    <div>
      <Slider
        {...settings}
        prevArrow={<PrevButton />}
        nextArrow={<NextButton />}
      >
        {Images.map((image, key) => (
          <img
            key={key}
            width={"100%"}
            src={image.imgSrc}
            alt="carousalImage"
          />
        ))}
      </Slider>
      <CustomDots
        totalDots={Images}
        dotLength={"100%"}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};
