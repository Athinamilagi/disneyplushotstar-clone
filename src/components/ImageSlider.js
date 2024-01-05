import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    speed: 400,
  };
  return (
    <Container {...settings}>
      <Slides>
        <img src="/images/slider-badag.jpg" alt="slider-images" />
      </Slides>
      <Slides>
        <img src="/images/slider-badging.jpg" alt="slider-images" />
      </Slides>
      <Slides>
        <img src="/images/slider-scale.jpg" alt="slider-images" />
      </Slides>
      <Slides>
        <img src="/images/slider-scales.jpg" alt="slider-images" />
      </Slides>
    </Container>
  );
}

export default ImageSlider;

const Container = styled(Slider)`
  margin-top: 20px;

  .slick-dots li.slick-active button:before {
    color: white;
  }

  button {
    z-index : 1;
  }

  .slick-list{
    overflow:visible;
  }
`;

const Slides = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px-10px,
    rgb(0 0 0 / 73%) 0px 16px 10px-10px;
    transition-duration : 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
