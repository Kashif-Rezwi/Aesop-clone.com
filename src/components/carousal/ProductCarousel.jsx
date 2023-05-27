import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import carouselStyles from "./productCarousel.module.css";
import { Products } from "./Products";
import { useState } from "react";
import { CustomDots } from "./CustomDots";
import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";

export const ProductCarousel = ({ products, showPreProd = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className={carouselStyles.carousel}>
      <Slider
        {...settings}
        prevArrow={<PrevButton />}
        nextArrow={<NextButton />}
      >
        {products?.map((item, key) => (
          <Products key={key} props={item} />
        ))}
      </Slider>
      <CustomDots
        totalDots={products}
        dotLength={"90%"}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </Box>
  );
};
