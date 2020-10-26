import React from 'react';
import { Carousel } from 'react-bootstrap';
function CarouselItem(props) {
  return (
    <Carousel.Item >
    <img
      className="d-block w-100"
      src={props.link}
      alt={props.alt}
    />
    <Carousel.Caption>
      <p className="portfolioLabel" >{props.text}</p>
    </Carousel.Caption>
  </Carousel.Item>
  );
}
export default CarouselItem;