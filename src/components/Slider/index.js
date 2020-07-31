import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
    width: 35px;
    background-color: #00000040;
    height: 100%;
  }
  .slick-next {
    right: 0;
    background-color: #00000040;
    width: 35px;
    height: 100%;
  }

  .slick-prev:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f053";
    font-size: 30px;
    font-weight: 900;
  }
  .slick-next:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f054";
    font-size: 30px;
    font-weight: 900;
  }
`;

export const SliderItem = styled.li`
  margin-right: 4px;
  img {
    margin: 16px;
    object-fit: cover;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
  slidesToShow: 6,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
}

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 