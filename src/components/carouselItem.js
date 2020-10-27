import React from 'react';
import { Carousel } from 'react-bootstrap';
function CarouselItem(props) { 
  return (
    
    <Carousel>
     { props.carArr.map((item, i) => 
      <Carousel.Item  key={"item-" + i} >
        <img
          className="d-block w-100"
          src={item.link}
          alt={item.alt}
        />
        <Carousel.Caption>
          <p className="portfolioLabel" >{item.text}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
    
  );
}
export default CarouselItem;